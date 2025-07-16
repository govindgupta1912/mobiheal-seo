// @ts-nocheck
import { render } from "../dist/public/entry-server.js";

export default function handler(req, res) {
  const url = req.url;
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