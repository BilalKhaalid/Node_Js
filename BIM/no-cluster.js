// ! Running the code with pm2
// ? to install : npm i pm2 -g
// ? pm2 is a package that is used for optimum cluster usage and package can decide which code and how many workers to work with by looking at the cpus cores

const http = require("http");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Home Page");

    case "/page":
      // ! Simulating heavy cpu load
      for (let i = 0; i < 6000000000; i++) {}
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Slow Page");
  }
});
const port = 8000;
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// ? To start :  pm2 start fileName -i 0
// ? to stop : pm2 stop fileName
