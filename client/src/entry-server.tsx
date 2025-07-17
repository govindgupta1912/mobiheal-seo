import React from "react";
import './index.css';
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { ThemeProvider } from "./components/ui/theme-provider";

export function render(url: string) {
 const helmetContext: any = {};
const appHtml = renderToString(
  <HelmetProvider context={helmetContext}>
    <StaticRouter location={url}>
      <ThemeProvider defaultTheme="light" storageKey="securemdm-ui-theme">
        <App />
      </ThemeProvider>
    </StaticRouter>
  </HelmetProvider>
);

return {
  html: appHtml,
  head: `
    ${helmetContext.helmet.title.toString()}
    ${helmetContext.helmet.meta.toString()}
    ${helmetContext.helmet.link.toString()}
  `
};

}
