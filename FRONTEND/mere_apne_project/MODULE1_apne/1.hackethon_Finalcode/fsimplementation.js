//CREATING FOLDERS OF ITEM NAMES
let fs = require("fs");


function fskakaam(foldername,price){
    let folderpath = `./${foldername}`;
    if(!fs.existsSync(`./${folderpath}`)){
        fs.mkdirSync(`./${folderpath}`);
    }
}
module.exports = fskakaam;