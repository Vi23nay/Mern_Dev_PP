let con = document.querySelector('.contents');
let clearcartbtn = document.querySelector('#clearcart');
let buynowbtn = document.querySelector('#buynowb');

let fal0 = localStorage.getItem("f0");
let fal1 = localStorage.getItem("f1");
let fal2 = localStorage.getItem("f2");

if(fal0 == "true"){
let product0div = document.createElement('div');
product0div.classList.add("p0");

product0div.innerHTML = `<div class="imagediv">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Official_Tekken_7_Logo.jpg/250px-Official_Tekken_7_Logo.jpg" alt="IMAGE NOT FOUND" style="height:100%; width:100%;">
        </div>
        <div class="details">
        <div class="namedetails"> 
            <div class="nametext">
                NAME OF GAME
            </div> 
            taken 7
        </div>
        <div class="pricediv">
            <div class="pricetext">
                PRICE OF GAME
            </div>
            100000
            
        </div>
    </div>
    </div>
`;
con.append(product0div);


clearcartbtn.addEventListener("click" , function(){
    con.remove(product0div);
    localStorage.setItem("f0" , "false");
    window.location.assign("./addtocart.html");
});
}

if(fal1 == "true"){
    let product0div = document.createElement('div');
product0div.classList.add("p0");

product0div.innerHTML = `<div class="imagediv">
            <img src="https://th.bing.com/th/id/OIP.Gfo7FVNomlN3NQmASpzqEgHaHa?pid=ImgDet&rs=1" alt="IMAGE NOT FOUND" style="height:100%; width:100%;">
        </div>
        <div class="details">
        <div class="namedetails"> 
            <div class="nametext">
                NAME OF GAME
            </div> 
            The Division 2
        </div>
        <div class="pricediv">
            <div class="pricetext">
                PRICE OF GAME
            </div>
            ₹10,499
        </div>
    </div>
    </div>
`;
con.append(product0div);


clearcartbtn.addEventListener("click" , function(){
    con.remove(product0div);
    localStorage.setItem("f1" , "false");
    window.location.assign("./addtocart.html");
});
}

if(fal2 == "true"){
    let product0div = document.createElement('div');
product0div.classList.add("p0");

product0div.innerHTML = `<div class="imagediv">
            <img src="https://th.bing.com/th/id/R01d511273c932bf867fc152d197fdc49?rik=MmW4gZKBlHjEwg&riu=http%3a%2f%2fwallpapers9.org%2fwp-content%2fuploads%2f2014%2f12%2fGta-5-Wallpaper-1.jpg&ehk=sUD%2fDVqOveyMPmd4YmXlTbUtxTJZMQnPZcQx5gAGuZs%3d&risl=1&pid=ImgRaw" alt="IMAGE NOT FOUND" style="height:100%; width:100%;">
        </div>
        <div class="details">
        <div class="namedetails"> 
            <div class="nametext">
                NAME OF GAME
            </div> 
            Grand Theft Auto V 
        </div>
        <div class="pricediv">
            <div class="pricetext">
                PRICE OF GAME
            </div>
            ₹19,999
        </div>
    </div>
    </div>
`;
con.append(product0div);


clearcartbtn.addEventListener("click" , function(){
    con.remove(product0div);
    localStorage.setItem("f2" , "false");
    window.location.assign("./addtocart.html");
});
}


buynowbtn.addEventListener("click" , function(){
    if((fal0 == "true") || (fal1=="true") || (fal2 == "true"))
{
    window.location.assign("./buynow.html");
}
else{
    alert("CART IS EMPTY");
}
});

