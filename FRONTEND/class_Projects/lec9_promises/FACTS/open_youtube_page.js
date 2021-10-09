const puppeteer = require("puppeteer");
// const id = ""; // id
// const p = ""; //password

// let tab;
// all functions of puppeteer promisifed => gives you a pending promise initially

// opens a new browser instance
let browserOpenProsime = puppeteer.launch({headless : false});

//Browser ka page jo .launch se return kiya hai
browserOpenProsime.then(function(Browserkapage){
    console.log("browser opened");
    // let newtabkapromise = Browserkapage.newPage();
    let allpagesPromise = Browserkapage.pages();// pages function
    return allpagesPromise;
})
.then(function(pages){
    // console.log("New TAB opened");
    // console.log(pages);
    let tab = pages[0];
    let pageOpenpromise = tab.goto("https://www.youtube.com");
    return pageOpenpromise;
})
//es vale function ke parameter mai bhi kuch mila hoga par hume jarorat nhi hai esliye use nhi kiya
.then(function(){
    console.log("youtube home page opened");
})
