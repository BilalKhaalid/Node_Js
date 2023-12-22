// ! Pipe In NodeJS
// !  It's a mechanism to move data from one place to another. Instead of water, it's often used to move data between different streams.

// Require the 'fs' (file system) module
const fs = require("fs");

// Create a readable stream from the source file
const readableStream = fs.createReadStream("./file.txt");

// Create a writable stream to the destination file
const writableStream = fs.createWriteStream("./file2.txt");

// Pipe the data from the readable stream to the writable stream
readableStream.pipe(writableStream);

// Add an event listener to know when the process is finished
writableStream.on("finish", () => {
  console.log("Data has been copied successfully!");
});

// Explanation of the Code:

//     Create Readable Stream (readableStream):
//         fs.createReadStream('source.txt') creates a readable stream from the source file (source.txt). Think of it as a pipe that reads data from the source.

//     Create Writable Stream (writableStream):
//         fs.createWriteStream('destination.txt') creates a writable stream to the destination file (destination.txt). Think of it as a pipe that writes data to the destination.

//     Pipe Data:
//         readableStream.pipe(writableStream) connects the two pipes. It says, "Hey, take the data from the readable stream and send it to the writable stream." It's like connecting the water pipes in your house.

//     Finish Event:
//         writableStream.on('finish', ...) listens for the 'finish' event, which tells us when the data has been successfully copied. It's like saying, "Let me know when the water has reached its destination."
