const puppeteer = require("puppeteer");
const challenges = require("./challenges");
const id = "soyadis531@astarmax.com";
const pw = "12345687";


(async function(){
    let browser = await puppeteer.launch({
        headless:false,
        defaultViewport : null,
        args: ["--start-maximized"]
    });

    let allpages = await browser.pages();
    let tab = allpages[0]; // one page
    await tab.goto("https://www.hackerrank.com/auth/login");
    await tab.type("#input-1",id);
    await tab.type("#input-2",pw);
    await tab.click('.ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled');

    await tab.waitForSelector('div[data-analytics="NavBarProfileDropDown"]',{visible:true});
    await tab.click('div[data-analytics="NavBarProfileDropDown"]');
    await tab.click("a[data-analytics=NavBarProfileDropDownAdministration]");

    await tab.waitForSelector(".nav-tabs.nav.admin-tabbed-nav a",{visible:true});
    let bothatags = await tab.$$(".nav-tabs.nav.admin-tabbed-nav a");
    let managechalangeeatag = bothatags[1];
    await managechalangeeatag.click();

    await tab.waitForSelector('.btn.btn-green.backbone.pull-right' , {visible:true});
    let createChallengeBtn = await tab.$('.btn.btn-green.backbone.pull-right');
    // console.log(createChallengeBtn);
    let createChallengeLink = await tab.evaluate( function(elem){ return elem.getAttribute("href");  }  ,  createChallengeBtn);
    createChallengeLink = 'https://www.hackerrank.com'+ createChallengeLink;
    // console.log(createChallengeLink);
    console.log("manage chalanges button opened");

    // simultaenously open tabs for all the challenges
    // for(let i=0;i<challenges.length;i++){
    //     addChallenge(challenges[i],browser,createChallengeLink);
    // }

    //  add challenges one by one
    // for(let i=0 ; i<challenges.length ; i++){
    //     // add a single challenge
    //     await addChallenge(challenges[i] , browser , createChallengeLink );
    //     console.log("tab opened",i);
    // }
    addChallenge(challenges[0],browser,createChallengeLink);
})();

async function addChallenge(challenge,browser,createchalangeLink){
    // "Challenge Name": "Pep_Java_1GettingStarted_1IsPrime",
    //   "Description": "Question 1",
    //   "Problem Statement": "Take as input a number n. Determine whether it is prime or not. If it is prime, print 'Prime' otherwise print 'Not Prime.",
    //   "Input Format": "Integer",
    //   "Constraints": "n <= 10 ^ 9",
    //   "Output Format": "String",
    //   "Tags": "Basics",

    let challengeName = challenge["Challenge Name"];
    let description = challenge["Description"];
    let problemStatement = challenge["Problem Statement"];
    let inputformat = challenge["Input Format"];
    let constraints = challenge["Constraints"];
    let outputformat = challenge["Output Format"];
    let tags = challenge["Tags"];

    let newTab = await browser.newPage();
    await newTab.goto(createchalangeLink);
    await newTab.waitForSelector("#name",{visible:true});
    await newTab.type("#name",challengeName);
    await newTab.type("#preview",description);
    await newTab.waitForSelector("#problem_statement-container .CodeMirror textarea");
    await newTab.type("#problem_statement-container .CodeMirror textarea",problemStatement);
    await newTab.type('#input_format-container .CodeMirror textarea' , inputformat);
    await newTab.type('#constraints-container .CodeMirror textarea' , constraints);
    await newTab.type('#output_format-container .CodeMirror textarea' , outputformat);
    await newTab.type('#tags_tag' , tags);
    await newTab.keyboard.press("Enter");
    await newTab.click('.save-challenge.btn.btn-green');
    console.log("challenge Added");
    await newTab.close();
}



