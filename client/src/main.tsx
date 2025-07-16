import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="light" storageKey="securemdm-ui-theme">
    <App />
  </ThemeProvider>
);

// import { ViteSSG } from 'vite-ssg-react';
// import App from './App';
// import { blogs } from './data/blogs';

// export const createApp = ViteSSG(
//   App,
//   { routes: [] },
//   (ctx) => {
//     blogs.forEach(blog => {
//       ctx.routes.push(`/blog/${blog.slug}`);
//     });
//   }
// );
