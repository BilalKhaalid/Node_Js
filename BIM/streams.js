// ! Streams In Node JS
// ! Analogy: Streaming Music

//     Simple Explanation:
//         Imagine you're listening to music on your favorite streaming service. The song doesn't load all at once; it plays as the data (the song) streams to your device. You hear the beginning while the rest is still loading.

//     Relating to Node.js:
//         In Node.js, a "stream" is like this continuous flow of data. Instead of waiting for the entire data to load, it's processed in chunks, allowing you to start using the data as soon as it's available.
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
  console.log(`Received a chunk of data: ${chunk}`);
  writeableStream.write(chunk);
});

//! Event handler for when the stream ends
readableStream.on("end", () => {
  console.log("Finished reading the file.");
});

// const file = fs.readFileSync("./file2.txt", "utf-8");
// console.log(file);
