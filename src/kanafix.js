// Sửa hiển thị âm ghép: font tiếng Nhật vẽ ゃゅょ・ぁぃぅぇぉ nhỏ nhưng chừa cả một ô chữ, nên 「びゃく」 hiện thành 「び ゃ く」.
// Bọc chữ kana nhỏ trong <span class="sk"> (CSS thu hẹp khoảng trống hai bên). Không đổi textContent nên các chức năng khác không bị ảnh hưởng.
const SMALL = /[ゃゅょゎぁぃぅぇぉャュョヮァィゥェォ]/;
const SPLIT = /([ゃゅょゎぁぃぅぇぉャュョヮァィゥェォ])/;
const SKIP = new Set(['SCRIPT', 'STYLE', 'TEXTAREA', 'INPUT', 'OPTION', 'SELECT', 'TITLE', 'CODE', 'PRE']);

function wrap(root) {
  if (!root || !SMALL.test(root.textContent || '')) return;
  const todo = [], w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: n => {
      const p = n.parentElement;
      return SMALL.test(n.nodeValue) && p && !SKIP.has(p.tagName) && !p.closest('.sk,[contenteditable]') ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });
  while (w.nextNode()) todo.push(w.currentNode);
  for (const n of todo) {
    const f = document.createDocumentFragment();
    for (const part of n.nodeValue.split(SPLIT)) {
      if (!part) continue;
      if (part.length == 1 && SMALL.test(part)) { const s = document.createElement('span'); s.className = 'sk'; s.textContent = part; f.appendChild(s); }
      else f.appendChild(document.createTextNode(part));
    }
    n.replaceWith(f);
  }
}

export function startKanaFix() {
  wrap(document.body);
  new MutationObserver(ms => {
    for (const m of ms) for (const n of m.addedNodes) {
      if (n.nodeType == 1) wrap(n);
      else if (n.nodeType == 3 && n.parentElement && SMALL.test(n.nodeValue)) wrap(n.parentElement);
    }
  }).observe(document.body, { childList: true, subtree: true });
}
