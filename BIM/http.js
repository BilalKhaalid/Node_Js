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
  //   res.writeHead(200, { "Content-Type": "text/html" });
  //   const html = fs.readFileSync(__dirname + "/index.html", "utf-8");
  //   res.end(html);
  // ! Or we can use pipe to do the job
  //   fs.createReadStream("./index.html").pipe(res);

  // ! changing html template in response
  //   let name = "Bilal";
  //   let html = fs.readFileSync(__dirname + "/index.html", "utf-8");
  //   html = html.replace("{{name}}", name);
  //   res.end(html);

  // ! Setting routes in http module
  res.writeHead(200, { "Content-Type": "text/plain" });
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.end("About Page");
  } else if (req.url === "/api") {
    res.end(
      JSON.stringify({
        firstName: "Bilal",
        lastName: "Khalid",
      })
    );
  } else {
    res.end("Page not found");
  }
});
const port = 5000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
