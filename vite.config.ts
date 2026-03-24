import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

function copyPublicDir(src: string, dest: string) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  let entries: string[] = [];
  try {
    entries = fs.readdirSync(src);
  } catch {
    return;
  }
  for (const entry of entries) {
    if (entry.includes(' ')) continue;
    const srcPath = path.join(src, entry);
    const destPath = path.join(dest, entry);
    let stat: fs.Stats | null = null;
    try {
      stat = fs.statSync(srcPath);
    } catch {
      continue;
    }
    if (stat.isDirectory()) {
      copyPublicDir(srcPath, destPath);
    } else {
      try {
        fs.copyFileSync(srcPath, destPath);
      } catch {
        // skip unreadable files
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'safe-copy-public',
      apply: 'build',
      configResolved(config) {
        const origCopyPublicDir = (config.build as Record<string, unknown>).copyPublicDir;
        if (origCopyPublicDir !== false) {
          (config.build as Record<string, unknown>).copyPublicDir = false;
        }
      },
      writeBundle() {
        const publicDir = path.resolve(__dirname, 'public');
        const outDir = path.resolve(__dirname, 'dist');
        copyPublicDir(publicDir, outDir);
      }
    }
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react']
        }
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['react', 'react-dom']
  },
  server: {
    hmr: {
      overlay: false
    }
  }
});
