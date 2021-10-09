const request = require("request")
const cheerio = require("cheerio");
const getAllMatches = require("./allmatches");

request("https://www.espncricinfo.com/series/ipl-2020-21-1210595",cb);

function cb(error,response,data){
    parsedata(data);
}

function parsedata(html){
    let ch = cheerio.load(html);
    let aTag = ch('.widget-items.cta-link a');
    let link = aTag.attr("href"); //ase bhi link mil jata
    // let link = atag['0']["attribs"]["href"];
    let completeLink = "https://www.espncricinfo.com"+link;
    // console.log(completelink);
    getAllMatches(completeLink);
}


