import { defineConfig } from 'vite';

// public/audio có thể chứa hàng chục nghìn file mp3: không cho Vite theo dõi thư mục này
// (giúp `npm run dev` khởi động nhanh và đỡ tốn RAM). File vẫn được phục vụ bình thường.
export default defineConfig({
  server: { watch: { ignored: ['**/public/audio/**'] } },
});
