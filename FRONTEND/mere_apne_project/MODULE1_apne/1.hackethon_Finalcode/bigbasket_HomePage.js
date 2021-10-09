/*
TOPIC NAME : AUTOMATED SHOPPING

DESCRIPTION OF PROJECT:
In this project I created a automated shopping software.This software helps people to buy daily items
like soap,shampoo etc from bigbasket wihout actually going to bigbasket website and clicking add to cart every item.

For example : If I have a list of 4 items which I used to buy from bigbasket every month same 4 items.
Now with this software the task of buying items really become simple with just typing 3 words in console the software will buy 
4 items of my choice by itself. As well as it create folders of items I had in my list.

FOLDER NAMES AND DESCRIPTION:
1.bigbasket_homepage.js : This file contains logic for going on to website and opening 10 new tabs and writting 
product name on search bar of bigbasket and adding product to basket.
2. fsimplementation.js : This file contains logic for files creation of shopping items buyied on bigbasket.
3. shopping_items_list.js : This file contains shopping list of items or products that are to be buyied by software.
4. selectors.js : This file contains selectors of 10 shopping items.
*/

//PROJECT CODE
const puppeteer = require("puppeteer");
let fskakaam = require("./fsimplementation");

let shopping_items_list = require("./shopping_items_list");
let selectors = require("./selectors");

(async function(){
    let browser = await puppeteer.launch({
        headless:false,
        defaultViewport:null,
        args:["--start-maximized"]
    });

    let allpages = await browser.pages();
    let tab = allpages[0]; 
    // goto BIG BASKET
    await tab.goto("https://www.bigbasket.com");
    console.log("BIG BASKET WEBSITE OPENED");

    let link = "https://www.bigbasket.com";
    // tab.waitForTimeout(2000);
    
    for(let i=0;i<shopping_items_list.length;i++){
        // ONE BY ONE PRODUCT ADDED TO BASKET  
    await itempurshase(shopping_items_list[i],browser,link,selectors[i]);
    }
    await console.log("4 ITEMS ADDDED TO BASKET");
    await basketdisplay(browser,link);
})();


async function itempurshase(iteminformation,browser,link,selectors){
    let itemnamereal = iteminformation["itemname"];//FETCHING PRODUCT NAME FROM SHOPPING LIST
    let select = selectors["s"];// FETCHING SELCTORS FROM SHOPPING LIST
    let tab = await browser.newPage();//OPENING NEW TABS
    await tab.goto(link);

    //TYPING PRODUCT NAME ON SEARCH BAR
    await tab.waitForSelector("#input",{visible:true});
    await tab.click("#input");
    await tab.type("#input",itemnamereal);

    await tab.waitForTimeout(2000);

    //CLICK ON SEARCH ICON
    await tab.click(".btn.btn-default.bb-search");
    
    await tab.waitForTimeout(1000);

    // GOING TO DIFFRENT PRODUCTS PAGE AND SELECTING DESIRED PRODUCT 
    await tab.waitForSelector(select,{visible:true});
    await tab.click(select);

    //CLICKING ON ADD TO BASKET OPTION ON SITE
    await tab.waitForSelector(".Cs6YO.rippleEffect");
    await tab.waitForTimeout(3000);
    await tab.click(".Cs6YO.rippleEffect");

    //PRINTING ON CONSOLE PRODUCT ADDED TO BASKET 
    console.log(itemnamereal + " ADDED TO CART ");

    //FS IMPLEMENTATION
    fskakaam(itemnamereal);

    await tab.waitForTimeout(3000);

    //CLOSING TAB
    await tab.close();
} 

//FUNCTION FOR DISPLAYING CONTENTS AND PRICE OF PRICE OF BASKET 
async function basketdisplay(browser,link){
    let tab = await browser.newPage();//OPENING NEW TABS
    await tab.goto(link);

    await tab.waitForTimeout(3000);

    await tab.waitForSelector('.btn.btn-default.basket-btn-drop.hidden-xs.hidden-sm');
    await tab.click('.btn.btn-default.basket-btn-drop.hidden-xs.hidden-sm');
    await console.log("BASKET OPENED");

    await tab.waitForTimeout(1000);
    await tab.waitForSelector('.row.sub-cost.ng-scope p');
    let text = await tab.$('.row.sub-cost.ng-scope p');
    let price = await tab.evaluate(function(elem){
        return elem.textContent;
    },text);
    await console.log(price);
    
}
