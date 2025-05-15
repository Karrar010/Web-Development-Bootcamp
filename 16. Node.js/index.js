console.log("Hello World")

// REPL - Read Evaluate Print Loop (built-in directly into node.js)
// Allows code to get executed in byte sizes(line by line)
// this is use full for quick testing and debugging
// -> We can access this node using a node command in terminal
// We can write code and execute it just like in browser console
// e.g console.log("HI GUYS");
// Can get out of REPL using a .exit command or ctrl + c (twice)


const a = 2;  // const variable values donot change and are useful in containers
const pi = 3.1416
// a = 3;
console.log(a)
console.log(pi)

// File system module allows you to work with the file system on our computer.
// To include the File System module, use the require() method.
// Common use for the File System module:
// 1. Read files
// 2. Create files
// 3. Update files
// 4. Delete files
// 5. Rename files
const fs = require("fs");

// Creating a File
// fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created
// fs.appendFile("file1.txt","Content file1: Hello World!",function(err){
//     if (err) throw err; 
//     console.log("Saved.. New file created");
// })

// Copy a file to new destination
fs.copyFileSync("file1.txt","copyFile1.txt"); // Note that in terminali it should be like
//  Web Development\My Web Dev by Angela Yu\16. Node.js>


// Previously through 'fs' we got access to native Javacript modules but now we'll learn to use external modules build by anybody
// using NPM Package manager and to install external Node Modules
// NPM => Node Package Manager (has reusable code init)