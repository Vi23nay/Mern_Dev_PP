const request = require("request");
const cheerio = require("cheerio");

// let url = 
request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary" , cb);

// request(url,cb); ase bhi kar satke hai request

function cb(error ,response, data){
    parseBody(data);
}

function parseBody(html){
     // i will get html here of cricinfo ipl home page !!
     ch = cheerio.load(html);
     let allCommentries = ch('div[itemprop="articleBody"] p');
     let commentary = ch(allCommentries['0']).text();
     console.log(commentary);
}



