// ! Built In http module
const http = require("node:http");

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Hello World!");
});
const port = 5000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
