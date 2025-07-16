import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { log } from "console";

export function render(url: string) {
 const helmetContext: any = {};
const appHtml = renderToString(
  <HelmetProvider context={helmetContext}>
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  </HelmetProvider>
);
const { helmet } = helmetContext;
console.log("Helmet output:", helmetContext);
console.log("Rendered HTML:", appHtml);
console.log("Helmet title:", helmet.title.toString());

return {
  html: appHtml,
  head: `
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
  `
};

}
