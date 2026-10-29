"""Tạo file âm thanh cho mọi câu/từ trong app, theo từng giọng.
  - nanami : giọng thần kinh Microsoft (cần Internet):  pip install edge-tts
  - zunko, sayo, tsurugi, metan, rito, saeha : giọng VOICEVOX (miễn phí). Cần cài app VOICEVOX
    (https://voicevox.hiroshiba.jp), MỞ app lên rồi mới chạy lệnh. Nên cài thêm ffmpeg để file nhẹ (mp3).
Vai B trong Hội thoại tự chọn giọng nam nếu có (saeha, rito, keita); nên tạo ít nhất nanami + saeha.
Chạy:  npm run audio        Chỉ vài giọng:  VOICES=nanami,zunko npm run audio
(Windows PowerShell: $env:VOICES="nanami,zunko"; npm run audio)"""
import asyncio, hashlib, json, os, shutil, subprocess, sys, urllib.parse, urllib.request
try:
    import edge_tts
except ImportError:
    edge_tts = None
PROFILES = {
    "nanami":   ("edge", "ja-JP-NanamiNeural", "-5%", "+0Hz"),
    "zunko":    ("vv", "東北ずん子"),
    "sayo":     ("vv", "小夜/SAYO"),
    "tsurugi":  ("vv", "中部つるぎ"),
    "metan":    ("vv", "四国めたん"),
    "rito":     ("vv", "離途"),
    "saeha":    ("vv", "黒沢冴白"),
    "keita":    ("edge", "ja-JP-KeitaNeural", "-5%", "+0Hz"),   # giọng nam Microsoft, mặc định KHÔNG tạo (thêm vào VOICES nếu muốn)
}
OPTIONAL = {"keita"}
VV = os.environ.get("VOICEVOX_URL", "http://127.0.0.1:50021"); FF = shutil.which("ffmpeg")
SEL = [v for v in os.environ.get("VOICES", ",".join(p for p in PROFILES if p not in OPTIONAL)).split(",") if v in PROFILES]
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JS = '''import {T} from "./src/data.js";import {V,V2} from "./src/vocab.js";import {GR} from "./src/grammar.js";import {ALLK} from "./src/kana.js";import {DL} from "./src/dialogues.js";import {PH_TEXTS} from "./src/phonetics.js";import {PS} from "./src/passages.js";import {RD} from "./src/reading.js";
const a=[];T.forEach(t=>t[1].split("\\n").forEach(l=>a.push(l.split("/")[0])));
[...V,...V2].forEach(t=>t[1].split("\\n").forEach(l=>{const p=l.split("|");a.push(p[1]);if(p[3])a.push(p[3])}));
GR.forEach(l=>l[1].forEach(p=>p[3].forEach(e=>a.push(e[0]))));ALLK.forEach(c=>a.push(c));DL.forEach(d=>d[1].forEach(x=>a.push(x[1])));PH_TEXTS.forEach(t=>a.push(t));PS.forEach(p=>p[2].forEach(e=>a.push(e[0])));RD.forEach(p=>p[3].forEach(e=>a.push(e[0])));
import {segment} from "./src/gloss.js";
const PU=/^[、。！？・「」,.!? ]+$/;
[...new Set(a)].forEach(t=>{try{segment(t).forEach(c=>{if(!c.sp&&c.s&&!PU.test(c.s))a.push(c.s)})}catch(e){}});
console.log(JSON.stringify([...new Set(a)]))'''

def http(path, data=None, js=False):
    req = urllib.request.Request(VV + path, data=data, method="POST" if data is not None else "GET")
    if js: req.add_header("Content-Type", "application/json")
    return urllib.request.urlopen(req, timeout=60).read()

def vv_ids():
    sp = json.loads(http("/speakers")); ids = {}
    for p in SEL:
        if PROFILES[p][0] != "vv": continue
        for s in sp:
            if s["name"] == PROFILES[p][1]:
                w = PROFILES[p][2] if len(PROFILES[p]) > 2 else "ノーマル"
                st = [x for x in s["styles"] if x["name"] == w] or s["styles"]
                ids[p] = st[0]["id"]
    return ids

def vv_synth(text, sid, fp):
    q = json.loads(http("/audio_query?text=" + urllib.parse.quote(text) + "&speaker=" + str(sid), b""))
    q["outputStereo"] = False; q["speedScale"] = 0.95
    if not FF: q["outputSamplingRate"] = 16000
    wav = http("/synthesis?speaker=" + str(sid), json.dumps(q).encode(), True)
    if FF:
        tmp = fp + ".wav"; open(tmp, "wb").write(wav)
        subprocess.run([FF, "-y", "-loglevel", "error", "-i", tmp, "-b:a", "48k", fp], check=True); os.remove(tmp)
    else:
        open(fp, "wb").write(wav)

async def main():
    sel, ids = list(SEL), {}
    if any(PROFILES[p][0] == "vv" for p in sel):
        try: ids = vv_ids()
        except Exception as e:
            print("Không kết nối được VOICEVOX (đã mở app chưa?):", e, "\n-> bỏ qua các giọng VOICEVOX."); sel = [p for p in sel if PROFILES[p][0] != "vv"]
        for p in [p for p in sel if PROFILES[p][0] == "vv" and p not in ids]:
            print("VOICEVOX không có nhân vật", PROFILES[p][1]); sel.remove(p)
    if "nanami" in sel and not edge_tts:
        print("Thiếu edge-tts (pip install edge-tts) -> bỏ qua giọng nanami."); sel.remove("nanami")
    texts = json.loads(subprocess.check_output(["node", "--input-type=module", "-e", JS], cwd=ROOT))
    out = os.path.join(ROOT, "public", "audio"); os.makedirs(out, exist_ok=True)
    ip = os.path.join(out, "index.json")
    idx = {}
    for fn in os.listdir(out):  # đọc lại chỉ mục từng giọng đã có (index-<giọng>.json)
        if fn.startswith("index-") and fn.endswith(".json"):
            try: idx[fn[6:-5]] = json.load(open(os.path.join(out, fn), encoding="utf-8"))
            except Exception: pass
    if not idx and os.path.exists(ip):  # định dạng cũ: một file index.json chứa mọi giọng
        try:
            old = json.load(open(ip, encoding="utf-8"))
            if all(isinstance(v, dict) for v in old.values()) and "voices" not in old: idx = old
        except Exception: pass
    jobs = [(p, t) for p in sel for t in texts]
    es, vs = asyncio.Semaphore(4), asyncio.Semaphore(2); done = 0; fail = 0
    async def one(p, t):
        nonlocal done, fail
        kind = PROFILES[p][0]; ext = ".mp3" if (kind == "edge" or FF) else ".wav"
        f = hashlib.sha1((p + t).encode()).hexdigest()[:12] + ext; fp = os.path.join(out, f)
        try:
            if not os.path.exists(fp):
                if kind == "edge":
                    async with es: await edge_tts.Communicate(t, PROFILES[p][1], rate=PROFILES[p][2], pitch=PROFILES[p][3]).save(fp)
                else:
                    async with vs: await asyncio.to_thread(vv_synth, t, ids[p], fp)
            idx.setdefault(p, {})[t] = f
        except Exception as e:
            fail += 1; print("Lỗi:", p, t, e)
        done += 1
        if done % 50 == 0: print(f"{done}/{len(jobs)}")
    await asyncio.gather(*(one(p, t) for p, t in jobs))
    for p, m in idx.items():  # mỗi giọng một file; web chỉ tải giọng đang dùng
        json.dump(m, open(os.path.join(out, f"index-{p}.json"), "w", encoding="utf-8"), ensure_ascii=False, separators=(",", ":"))
    json.dump({"voices": {p: len(m) for p, m in idx.items()}}, open(ip, "w", encoding="utf-8"), ensure_ascii=False)  # danh sách giọng, rất nhẹ
    print(f"Xong: {len(jobs)-fail}/{len(jobs)} file ({', '.join(sel) or 'không có giọng nào'}). Lỗi: {fail} (chạy lại để thử tiếp).")

asyncio.run(main())
