// ============================================================
// Custom Next.js server for Hostinger Node.js hosting (Passenger).
// Hostinger launches this file as the app's startup file. It must
// start an HTTP server on the port provided by the environment.
//
// Local production test:  npm run build && node server.js
// ============================================================
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const port = parseInt(process.env.PORT || "3000", 10);
const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, () => {
    console.log(`> Invidious Entertainment ready on port ${port}`);
  });
});
