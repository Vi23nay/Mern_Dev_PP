const puppeteer = require("puppeteer");
const id = "soyadis531@astarmax.com";
const pw = "12345687";
let tab;
let idx;
let gcode;
// all functions of puppeteer promisifed => gives you a pending promise initially

// opens a new browser instance

let browseropenpromise = puppeteer.launch({
    headless : false,
    defaultViewport : null,
    args: ["--start-maximized"]
    // slowMo : 100
});

//Promise pending
browseropenpromise.then(function(browser){
    console.log("browser opened");
    let allpagespromise = browser.pages();
    return allpagespromise;
})
.then(function(pages){
    tab = pages[0];
    let pageopenpromise = tab.goto("https://www.hackerrank.com/auth/login");
    return pageopenpromise;
})
.then(function(){
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
    let waitAndClickPromise = waitAndClick("#base-card-1-link");//interview preparation kit->button(continue practice)
    return waitAndClickPromise; //Promise<Pending>
})
.then(function(){
    let waitAndClickPromise = waitAndClick('a[data-attr1="warmup"]');//warm up chalanges -> button(see chalanges)
    console.log("warmp up chalenges reached");
    return waitAndClickPromise; //Promise<Pending>
})
.then(function(){
    let waitPromise = tab.waitForSelector(".js-track-click.challenge-list-item",{ visible : true});
    return waitPromise;
})
.then(function(){
    let allQuestionsaTagsPromise = tab.$$(".js-track-click.challenge-list-item");
    // DOME PE => Document.querySelectorAll(""); vali cheeze ipmlement ki hai $$
    return allQuestionsaTagsPromise;
})
.then(function(allQuesAtags){
     //[ {} , {} , {} , {} ]  =>[ <a href="laksnfkjasf"/> , <a href="akjsbfua" /> , <a href="alshifia" /> , <a href="akjjsbfa" /> ];
    // pendingPromise = tab.Akjsfnakjbsf(aTag)  => aTag.getAttribute("href"); => value
    let allLinkPromise = [];

    for(let i=0;i<allQuesAtags.length;i++){
        let aTag = allQuesAtags[i];
        let linkPromise = tab.evaluate(function(elem){
            return elem.getAttribute("href");
        },aTag);
        allLinkPromise.push(linkPromise);
    }
    // allLinksPromise = [ Promise<link> , Promise<link> , Promise<link> , Promise<link> ];
    let sbkaPromise = Promise.all(allLinkPromise);
    return sbkaPromise;
})
.then(function(allLinks){
    // [ link , link , link , link]
    let completeLinks = allLinks.map(function(link){
        return "https://www.hackerrank.com" + link;
    });
    // console.log(completeLinks);
    let oneQuesSolvePromise = solveQuestion(completeLinks[0]);
    for(let i=1; i<completeLinks.length ; i++){
        oneQuesSolvePromise = oneQuesSolvePromise.then( function(){
          let nextQuesSolvePromise = solveQuestion(completeLinks[i]);
          return nextQuesSolvePromise;
        })
      }
      // 10k
    return oneQuesSolvePromise;
})
.then(function(){
    console.log("All questions solved");
})
.catch(function(error){
    console.log(error);
})

function waitAndClick(selector){
    return new Promise(function(resolve,reject){
        let waitPromise = tab.waitForSelector(selector,{ visible:true });
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
        });
    });
}

function getCode(){
    return new Promise(function(resolve,reject){
        let waitPromise = tab.waitForSelector(".hackdown-content h3");
        waitPromise.then(function(){
            let allCodeNamesElementsPromise = tab.$$(".hackdown-content h3");
            return allCodeNamesElementsPromise;
        })
        .then(function(allCodeNamesElements){
             //allCodeNamesElements = [ <h3>C++</h3> , <h3>Python</h3> , <h3>Java</h3>  ]
             let allCodeNamePromise = [];

             for(let i=0;i<allCodeNamesElements.length;i++){
                 let codeNamePromise = tab.evaluate(function(elem){
                     return elem.textContent;
                 },allCodeNamesElements[i]);
                 allCodeNamePromise.push(codeNamePromise);
             }
              // allCodeNamesPromise = [  Promise<Pending> , Promise<Pending> , Promise<Pending> ];
              let sbkaPromise = Promise.all(allCodeNamePromise);
              return sbkaPromise;//Prmose<Pending> => Promise<["C++" , "Python" , "Java"]>

        })
        .then(function(codeNames){
            //["C++" , "Python" , "Java"];
            for(let i=0;i<codeNames.length;i++){
                if(codeNames[i] == "C++"){
                    idx = i;
                    break;
                }
            }
            //code ko select kiya hai Document.querySelctorAll(".hackdown-content .highlight");
            let allCodeDivPromise = tab.$$(".hackdown-content .highlight");
            return allCodeDivPromise;//Promise<Pending>
        })
        .then(function(allCodeDivs){
            //[ <div></div> , <div></div> , <div></div> ];
            let codeDiv = allCodeDivs[idx];
            let codePromise = tab.evaluate(function(elem){
                return elem.textContent;
            },codeDiv);
            return codePromise;
        })
        .then(function(code){
            gcode = code;
            // console.log(code);
            resolve();
        })
        .catch(function(error){
            reject(error);
        })
    });
}

function pasteCode(){
    return new Promise(function(resolve,reject){
        // question ke page pe ab editorial se problem vale tab mai ja rahe hai

        let problemTabClickPromise = tab.click('div[data-attr2="Problem"]');
        problemTabClickPromise.then(function(){
            //jab tak custom input vale box pe click na ho jaye tab tak wait karo
            let waitAndClickPromise = waitAndClick(".custom-input-checkbox");
            return waitAndClickPromise;
        })
        .then(function(){
            //jab tak us custom input vale box mai click na ho jaye tab tak wait karo
            let waitForTextBoxPromise = tab.waitForSelector(".custominput");
            return waitForTextBoxPromise;
        })
        .then(function(){
            // type() func se code type ho jayega custombox mai 
            let codeTypePromise = tab.type(".custominput", gcode);
            return codeTypePromise;
        })
        .then(function(){
            // control key press hogi
            let controlKeyDownPromise = tab.keyboard.down("Control");
            return controlKeyDownPromise;
        })
        .then(function(){
            let aKeyPressPromise = tab.keyboard.press("A");
            return aKeyPressPromise;
        })
        .then(function(){
            let xKeyPressPromise = tab.keyboard.press("X");
            return xKeyPressPromise;
        })
        .then(function(){
            let clickedOnCodeBoxPromise = tab.click('.monaco-editor.no-user-select.vs');
            return clickedOnCodeBoxPromise;
          })
          .then(function(){
            let aKeyPressPromise = tab.keyboard.press("A");
            return aKeyPressPromise;
          })
          .then(function () {
            let vKeyPressPromise = tab.keyboard.press("V");
            return vKeyPressPromise;
          })
          .then(function () {
            let controlKeyUpPromise = tab.keyboard.up("Control");
            return controlKeyUpPromise;
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
    return new Promise( function(resolve , reject){
      let waitPromise = tab.waitForSelector('.ui-btn.ui-btn-normal.ui-btn-primary.ui-btn-styled' , {visible:true , timeout:2000});
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
  
    })
  }

function solveQuestion(qlLink){
    return new Promise(function(resolve,reject){
        let gotoPromise = tab.goto(qlLink);
        gotoPromise.then(function(){
            let waitAndClickPromise = waitAndClick('div[data-attr2="Editorial"]');
            return waitAndClickPromise;
        })
        .then(function(){
            let lockBtnPromise = handleLockBtn();
            return lockBtnPromise;
          })
        .then(function(){
            let codePromise = getCode();
            return codePromise;
        })
        .then(function(){
            let pastePromise = pasteCode();
            return pastePromise;
        })
        .then(function(){
            let submitPromise = tab.click('.pull-right.btn.btn-primary.hr-monaco-submit');
            return submitPromise;
        })
        .then(function(){
            resolve();
        })
        .catch(function(){
            reject(error)
        })
    });
}


