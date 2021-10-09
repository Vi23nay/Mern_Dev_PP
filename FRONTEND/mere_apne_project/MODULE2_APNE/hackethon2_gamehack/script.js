let carosoul = document.querySelectorAll('.carousel-item');

for(let i=0;i<carosoul.length;i++){
carosoul[i].addEventListener("click", function(){
        if(carosoul[i].classList == "carousel-item active"){
            openpage(i);
        }
});
}

function openpage(idx){
    if(idx == 0){
        window.location.assign("./product0.html");
    }
    else if(idx == 1){
        window.location.assign("./product1.html");
    }
    else{
        window.location.assign("./product2.html");
        console.log(idx);
    }
}

