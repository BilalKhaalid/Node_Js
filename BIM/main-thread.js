// ! Worker_threads module
const { Worker } = require("node:worker_threads");
const http = require("node:http");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Home Page");
      break; // Don't forget to add break here

    case "/page":
      const worker = new Worker("./worker-thread.js");
      worker.on("message", (lun) => {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`Home Page ${lun}`);
      });
      break; // Don't forget to add break here

    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
  }
});

const port = 8002;
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
