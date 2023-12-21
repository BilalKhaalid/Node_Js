// ! Built In Path Module
const path = require("node:path");

// ! Basename gives the last portion of a file means with which file ends
console.log(path.basename(__dirname));
console.log(path.basename(__filename));

// ! Extname gives the extension name of file
console.log(path.extname(__filename));

// ! Join join the two given paths
console.log(path.join("folder1", "folder2", "java.js"));

// ! isAbsolute gives true or false based on if the given path is an absolute path or not
console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute("./index.js"));

// ! Resolve works like join but gives the absolute path and joins the given string in the absolute path
console.log(path.resolve(__filename));
console.log(path.resolve("folder", "index"));
// * if you use forward slash in the path it continues from there assuming it is the absolute path ignoring the previous path
console.log(path.resolve("/folder", "index"));
