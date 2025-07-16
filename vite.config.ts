// // vite.config.ts
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
// import path, { dirname } from "path";
// import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
// import { fileURLToPath } from "url";
// import { createHtmlPlugin } from "vite-plugin-html";

// import Pages from "vite-plugin-pages"; // Optional if you want file-based routing

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// export default defineConfig({
//   root: path.resolve(__dirname, "client"),
//   plugins: [
//     react(),
//     runtimeErrorOverlay(),
//     themePlugin(),
//     Pages({
//          dirs: 'client/src/pages', // <--- point to your current pages directory
//          extensions: ['tsx'],
//        }),
   
//     createHtmlPlugin({
//       minify: true,
//       inject: {
//         data: {
//           title: "MobiHeal - Mobile Device Management & Security",
//           description: "Enterprise-grade MDM for secure, scalable mobile device control."
//         }
//       }
//     }),
//     ...(process.env.NODE_ENV !== "production" &&
//     process.env.REPL_ID !== undefined
//       ? [
//           await import("@replit/vite-plugin-cartographer").then((m) =>
//             m.cartographer()
//           )
//         ]
//       : [])
//   ],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "client", "src"),
//       "@shared": path.resolve(__dirname, "shared"),
//       "@assets": path.resolve(__dirname, "attached_assets")
//     }
//   },
//   build: {
//     outDir: path.resolve(__dirname, "dist/public"),
//     emptyOutDir: true,
//     rollupOptions: {
//       output: {
//         manualChunks: {
//           react: ["react", "react-dom"]
//         }
//       }
//     }
//   },
//   server: {
//     host: "0.0.0.0",
//     port: 5000
//   }
// });


// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import themePlugin from '@replit/vite-plugin-shadcn-theme-json';
import runtimeErrorOverlay from '@replit/vite-plugin-runtime-error-modal';
import { createHtmlPlugin } from 'vite-plugin-html';
import Pages from 'vite-plugin-pages';

export default defineConfig({
  root: path.resolve(__dirname, 'client'),
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
    Pages({
      dirs: 'client/src/pages',
      extensions: ['tsx'],
    }),
    createHtmlPlugin({
      inject: {
        data: {
          title: 'MobiHeal - Mobile Device Management & Security',
          description: 'Enterprise-grade MDM for secure, scalable mobile device control.',
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client', 'src'),
      '@shared': path.resolve(__dirname, 'shared'),
      '@assets': path.resolve(__dirname, 'attached_assets'),
    },
  },
  build: {
    outDir: path.resolve(__dirname, 'dist/public'),
    emptyOutDir: true,
    ssr: true, // or wherever your SSR entry file is


  },
  server: {
    host: '0.0.0.0',
    port: 5000,
  },
});
