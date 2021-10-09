const fs  = require("fs");
const path = require("path");
let extensions = require("./util");
let folderpath = "./Downloads";
let extfolderpath;


function checkfolder(extension){
    //chexk if extension is matching with any folder
    //.jpg
    let extfolderpath = folderpath; // existing folder path
    for(let key in extensions){
        // es loop se key check kari hai jese "images" "audio"
        if(extension[key].include(extension)){
            extfolderpath = `${folderpath}/${key}`;
    // matalab pehli ke key mai apni key jode do"./downloads/images"
            break;
        }
    }
    // ye true false return karega ki agar folder
    //exists karta hai toh true varna false
    return fs.existsSync(extfolderpath);
}


function createfolder(){
    fs.mkdirSync(extfolderpath);
}

function sortfolder(folderpath){
    let content = fs.readdirSync(folderpath);
    //get extension of each file
    for(let i=0;i<content.length;i++){
        let extensionname = path.extname(content[i]);
        // console.log(extensionname);

        //  es function se hum extension match karenge ki us 
        // extension ka folder hai ya nhi pehle se
        let extensionfolderexist = checkfolder(extensionname);
        if(extensionfolderexist){
            //movefile();
        }
        else{
            createfolder();
            //movefile();
        }
    }
}


sortfolder(folderpath);