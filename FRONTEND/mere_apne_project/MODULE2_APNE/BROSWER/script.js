let ntab = document.querySelector('.newtab');
let plusbtn = document.querySelector('.plusbtn');
let tab = document.querySelector('.tab');

plusbtn.addEventListener("click" , function(e){
    // console.log(e);
    let ntabdiv = document.createElement("div");
    ntabdiv.innerHTML = `newtab`;
    ntab.append(ntabdiv);
})