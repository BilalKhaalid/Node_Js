// ! Built In http module
const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  //   res.writeHead(200, { "Content-Type": "text/plain" });
  //   res.end("Hello World!");
  //   // ! Sending JSON as response
  //   const obj = {
  //     firstName: "Bilal",
  //     lastName: "Khalid",
  //   };
  //   res.writeHead(200, { "Content-Type": "application/json" });
  //   res.end(JSON.stringify(obj));

  // ! Sending HTML as response
  res.writeHead(200, { "Content-Type": "text/html" });
  const html = fs.readFileSync(__dirname + "/index.html", "utf-8");
  res.end(html);
});
const port = 5000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
