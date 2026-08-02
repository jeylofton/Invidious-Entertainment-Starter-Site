// ============================================================
// Custom Next.js server for Hostinger Node.js hosting (Passenger).
// Hostinger launches this file as the app's startup file. It must
// start an HTTP server on the port provided by the environment.
//
// Local production test:  npm run build && node server.js
// ============================================================
const { createServer } = require("http");
const next = require("next");

const port = parseInt(process.env.PORT || "3000", 10);
const app = next({ dev: false });
const handle = app.getRequestHandler();

async function start() {
  await app.prepare();

  createServer((req, res) => {
    handle(req, res);
  }).listen(port, () => {
    console.log(`> Invidious Entertainment ready on port ${port}`);
  });
}

start().catch((error) => {
  console.error("Failed to start Invidious Entertainment:", error);
  process.exit(1);
});
