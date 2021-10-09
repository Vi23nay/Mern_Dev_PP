const puppeteer = require("puppeteer");
const id = "soyadis531@astarmax.com";
const pw = "12345687";
let tab;
let idx;
let gcode;

let browseropenpromise = puppeteer.launch({
    headless:false,
    defaultViewport : null,
    args: ["--start-maximized"]
});
browseropenpromise.then(function(browser){
    let allpagespromise = browser.pages();
    return allpagespromise;
})
.then(function(pages){
    tab = pages[0];
    let pageopenpromise = tab.goto("https://www.hackerrank.com/auth/login");
    return pageopenpromise;
})
.then(function(){
    console.log("home page opened");
    let idtypepromise = tab.type("#input-1",id);
    return idtypepromise;
})
.then(function(){
    let pwtypepromise = tab.type("#input-2",pw);
    return pwtypepromise;
})
.then(function(){
    let loginpromise = tab.click('.ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled');
    return loginpromise;
})
.then(function(){
    let continuepracticepromise = waitAndClick("#base-card-2-link");
    return continuepracticepromise;
})
.then(function(){
    let waitPromise = tab.waitForSelector('.js-track-click.challenge-list-item');
    return waitPromise;
})
.then(function(){
    let allQuestionsaTagsPromise = tab.$$(".js-track-click.challenge-list-item");
    return allQuestionsaTagsPromise;
})
.then(function(allQuesAtags){
    let allques_href_array = [];

    for(let i=0;i<allQuesAtags.length;i++){
        let aTag = allQuesAtags[i];
        let linkPromise = tab.evaluate(function(elem){
            return elem.getAttribute("href");
        },aTag);
        allques_href_array.push(linkPromise);
    }
    let sbkaPromise = Promise.all(allques_href_array);
    return sbkaPromise;
})
.then(function(allLinks){
    let completeLinks = allLinks.map(function(link){
        return "https://www.hackerrank.com" +  link;
    });
    // console.log(completeLinks);
    let onequestionsolvepromise = solveQuestion(completeLinks[6]);
    for(let i=7;i<completeLinks.length;i++){
        onequestionsolvepromise = onequestionsolvepromise.then(function(){
            let nextquestionsolvepromise = solveQuestion(completeLinks[i]);
            return nextquestionsolvepromise;
        })
    }
    return onequestionsolvepromise;
})
.then(function(){
    console.log("All questions Solved");
})
.catch(function(error){
    console.log(error);
})

function waitAndClick(selector){
    return new Promise(function(resolve,reject){
        let waitPromise = tab.waitForSelector(selector,{ visible : true});
        waitPromise.then(function(){
            let clickPromise = tab.click(selector);
            return clickPromise;
        })
        .then(function(){
            // wait and click succesfully done
            resolve();
        })
        .catch(function(error){
            reject(error);
        })
    });
}

function getCode(){
    return new Promise(function(resolve,reject){
        let cplusplus_headingtag = tab.waitForSelector(".hackdown-content h3");
        cplusplus_headingtag.then(function(){
            let allcplusatagpromise = tab.$$(".hackdown-content h3");
            return allcplusatagpromise;
        })
        .then(function(allatags){
            let allnamearray = [];
            for(let i=0;i<allatags.length;i++){
                let oneatag = allatags[i];

                let codeNamePromise = tab.evaluate(function(elem){
                    return elem.textContent;
                },oneatag);
                allnamearray.push(codeNamePromise);
            }
            let sbkaPromise = Promise.all(allnamearray);
            return sbkaPromise;
        })
        .then(function(codeNames){
            for(let i=0;i<codeNames.length;i++){
                if(codeNames[i] == "C++"){
                    idx = i;
                    break;
                }
            }
            let allCodeDivPromise = tab.$$(".hackdown-content .highlight");
            return allCodeDivPromise;//Promise<Pending>
        })
        .then(function(codes){
            let codediv = codes[idx];

            let codemilegaPromise = tab.evaluate(function(elem){
                return elem.textContent;
            },codediv);

            return codemilegaPromise;
        })
        .then(function(code){
            gcode = code;
            resolve();
        })
        .catch(function(error){
            reject(error);
        })
    });
}

function pasteCode(){
    return new Promise(function(resolve,reject){
        let openproblempromise = tab.click("#tab-1-item-0");
        openproblempromise.then(function(){
            let customboxopenpromise = waitAndClick(".custom-checkbox.inline");
            return customboxopenpromise;
        })
        .then(function(){
            let clickcustomboxpromise = tab.click(".custominput");
            return clickcustomboxpromise;
        })
        .then(function(){
            let typingcodepromise = tab.type(".custominput",gcode);
            return typingcodepromise; 
        })
        .then(function(){
            let controlkeydownpromise = tab.keyboard.down("Control");
            return controlkeydownpromise;
        })
        .then(function(){
            let pressakeypromise = tab.keyboard.press("A");
            return pressakeypromise;
        })
        .then(function(){
            let pressxkeypromise = tab.keyboard.press("X");
            return pressxkeypromise;
        })
        .then(function(){
            let clickedOnCodeBoxPromise = tab.click(".view-lines");
            return clickedOnCodeBoxPromise;
        })
        .then(function(){
            let pressakeypromise = tab.keyboard.press("A");
            return pressakeypromise;
        })
        .then(function(){
            let pressvkeypromise = tab.keyboard.press("V");
            return pressvkeypromise;
        })
        .then(function(){
            let controlKeyUpPromise = tab.keyboard.up("Control");
            return controlKeyUpPromise;
        })
        .then(function(){
            let runcodepromise = tab.click(".pull-right.btn.msR.hr-monaco-compile");
            return runcodepromise;
        })
        .then(function(){
            resolve();
        })
        .catch(function(error){
            reject(error);
        })
    });
}

function handleLockBtn(){
    return new Promise(function(resolve,reject){
        let waitPromise = tab.waitForSelector('.ui-btn.ui-btn-normal.ui-btn-primary.ui-btn-styled' , {visible:true , timeout:5000});
      waitPromise.then(function(){
        let lockBtnPromise = tab.$('.ui-btn.ui-btn-normal.ui-btn-primary.ui-btn-styled');
        return lockBtnPromise;
      })
      .then(function(lockBtn){
        // console.log(lockBtn);
        let lockBtnClickPromise = lockBtn.click();
        return lockBtnClickPromise;
      })
      .then(function(){
        // clicked on lock btn
        // lock btn found
        console.log("lock btn found !!!");
        resolve();
      })
      .catch(function(error){
        // lock btn not found
        console.log("lock btn not found !!!");
        resolve();
      })
    });
}


function solveQuestion(qlink){
    return new Promise(function(resolve,reject){
        let openquestionpromise = tab.goto(qlink);
        openquestionpromise.then(function(){
            let editorailopenpromise = waitAndClick("#tab-1-item-4");
            return editorailopenpromise;
        })
        .then(function(){
            let lockBtnPromise = handleLockBtn();
            return lockBtnPromise;
        })
        .then(function(){
            let gettingcodepromise = getCode();
            return gettingcodepromise;
        })
        .then(function(){
            let pastecodepromise = pasteCode();
            return pastecodepromise;
        })
        // .then(function(){
        //     let waitforruncode = tab.waitForSelector(".ui-icon-label.tab-item-label");
        //     return waitforruncode;
        // }) 
        .then(function(){
            let clickonsubmitbutton = tab.click(".pull-right.btn.btn-primary.hr-monaco-submit");
            return clickonsubmitbutton;
        })
        .then(function(){
            resolve();
        })
        .catch(function(error){
            reject(error);
        })
    });
}