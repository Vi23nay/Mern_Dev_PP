let addSheetBtn = document.querySelector(".add-sheet");
let sheetsList = document.querySelector(".sheets-list");

let sheetId = 0 ;

addSheetBtn.addEventListener("click" , function(e){
    sheetId++;
    // it will remove activesheet class from current active sheet
  document.querySelector(".active-sheet").classList.remove("active-sheet");

  //sheet ka div banyana hai jo niche ati hai plus pe click karne se
  let sheetDiv = document.createElement("div");
  sheetDiv.classList.add("sheet");
  sheetDiv.classList.add("active-sheet");
  sheetDiv.setAttribute("sheetid",sheetId);
  sheetDiv.innerHTML = `Sheet ${sheetId + 1}`;

  // <div class="sheet" sheetid="1">Sheet 2</div>
  sheetsList.append(sheetDiv);

  //UI should be new
  initUI();

  // new sheet db 
  // sheetsdb.push(new sheet db)
  // db = new sheet db
  initDB();//function call in file init.js

});

//konsi sheet active hai kounsi nhi
sheetsList.addEventListener("click" , function(e){
    let selectedsheet = e.target;

    //active sheet
    if(selectedsheet.classList.contains("active-sheet")){
        return;
    }
    //non active sheet
    // it will remove activesheet class from current active sheet
    document.querySelector(".active-sheet").classList.remove("active-sheet");
    selectedsheet.classList.add("active-sheet");

    initUI();

    //set current db to active sheet db
    let sheetId = selectedsheet.getAttribute("sheetid");

    //set db and visited cells
    db = sheetsDB[sheetId].db;
    visitedCells = sheetsDB[sheetId].visitedCells;

    // set UI according to that db
    setUI();
});

function setUI(){
    // for(let i=0 ; i<100 ; i++){
    //     for(let j=0 ; j<26 ; j++){
    //         let cellObject = db[i][j];
    //         document.querySelector(`div[rowid="${i}"][colid="${j}"]`).textContent = cellObject.value; 
    //     }
    // }
    for(let i=0 ; i<visitedCells.length ; i++){
      let {rowId , colId} = visitedCells[i];
      let cellObject = db[rowId][colId];
      document.querySelector(`div[rowid="${rowId}"][colid="${colId}"]`).innerHTML = cellObject.value;
    }
}

function initUI(){
    // for(let i=0;i<100;i++){
    //     for(let j=0;j<26;j++){
    //         document.querySelector(`div[rowId="${i}"][colId="${j}"]`).innerHTML = "";
    //     }
    // }

    for(let i=0;i<visitedCells.length;i++){
        let {rowId ,colId} = visitedCells[i];
        let cell = document.querySelector(`div[rowid="${rowId}"][colid="${colId}"]`);
        cell.innerHTML = "";
        cell.style = "";
    }
}
