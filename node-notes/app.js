const validator = require('validator');
const fs = require('fs');
const getNotes = require('./notes.js');

const notes = getNotes();

console.log(notes);

// creating a text file notes
/* fs.writeFileSync('./node-notes/notes.txt', 'This file was created by Node.js'); */

// adding to the file
/* fs.appendFileSync('./node-notes/notes.txt', '\nAdding to the node file'); */

console.log(validator.isEmail('robert@wagargmail.com')); // true
console.log(validator.isEmail('robert.com')); // false
