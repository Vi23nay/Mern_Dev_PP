const fs = require("fs");
const cheerio = require("cheerio");

let htmlkadata = fs.readFileSync("./index.html");

let ch = cheerio.load(htmlkadata);

// console.log(ch);
// let pTags = ch("p");
let pkadata = ch("td").text();
console.log(pkadata);
//<p class="main">I am a p tag in body !!!</p> => object form

