// ! Streams In Node JS
const fs = require("node:fs");

const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  // ! This option allows us to control the bits in stream
  highWaterMark: 2,
});

const writeableStream = fs.createWriteStream("./file2.txt", {
  encoding: "utf-8",
});

readableStream.on("data", (chunk) => {
  console.log(chunk);
  writeableStream.write(chunk);
});

const file = fs.readFileSync("./file2.txt", "utf-8");
console.log(file);
