// @ts-nocheck
import { render } from "../dist/public/entry-server.js";

export default function handler(req, res) {
  // Extract the original URL from the query or headers
  // On Vercel, the original path is usually in req.url after /api/ssr
  // e.g., /api/ssr/about -> /about

  let url = req.url || "/";
  // Remove the /api/ssr prefix
  url = url.replace(/^\/api\/ssr/, "") || "/";
  console.log("SSR rendering for URL:", url);
  const { html, head } = render(url);

  res.setHeader("Content-Type", "text/html");
  res.status(200).end(`
    <!DOCTYPE html>
    <html>
      <head>
        ${head}
      </head>
      <body>
        <div id="root">${html}</div>
      </body>
    </html>
  `);
}