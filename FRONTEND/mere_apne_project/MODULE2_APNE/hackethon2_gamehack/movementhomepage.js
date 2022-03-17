let loginB = document.querySelector('.login');
let contactbtn = document.querySelector('.contact');
let aboutusbtn = document.querySelector('.blogs');
let homebtn = document.querySelector('.home');
let searchbtn = document.querySelector('.games');
let f = false;

loginB.addEventListener("click",function(e){
    // console.log(e);
    if(f == false){
    let modal = document.createElement(`div`);
    modal.classList.add("usermodal");
    modal.innerHTML = `
    <div class="crossclass">
            <i class="far fa-window-close"></i>
        </div>
        <div class="userphoto">
            <img src="https://th.bing.com/th/id/R39b3136ad394db40c020b9af8213db37?rik=8pqCtICFkdKNfg&riu=http%3a%2f%2fsintesistv.com.mx%2fwp-content%2fuploads%2f2018%2f07%2fthe-rock.jpg&ehk=9lGuq1jwZQMXNus3K930MqKKhmcu5x1U8HOBa5wniMc%3d&risl=&pid=ImgRaw" alt="IMAGE NOT FOUND" style="height:30vh;width:20vw;">
            
        </div>
        <div class="detailsofuser">
            <div class="usernamelogin">
            dwayne johnson
            </div>
            <div class="usertype">
                PREMIUM
            </div>
            <button id="logoutb">LOGOUT</button>
        </div>

<style>

.usermodal {
    position: absolute;
    top: 73px;
    left: 967px;
    background: whitesmoke;
    height: 60vh;
    width: 30vw;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.detailsofuser {
    background: whitesmoke;
    height: 40%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    font-size: medium;
    font-weight: bolder;
}

.userphoto {
    height: 60%;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.usernamelogin {
    height: 20%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: xx-large;
}

.usertype {
    height: 25%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#logoutb {
    font-size: medium;
    cursor: pointer;
}
.far{
background: whitesmoke;
font-size: xx-large;
}
.far:hover{
    background-color: red;
}
.crossclass{
    
    background: whitesmoke;
        
    height: 7%;
        
    width: 100%;
        
    display: flex;
        
    justify-content: flex-end;
        
    align-items: flex-start;
        
    padding: 5px;
    }

</style>`;
e.target.append(modal);

let logoutclick = document.querySelector('#logoutb');
    logoutclick.addEventListener("click" , function(){
        window.location.assign("./index.html");
    });

    f=true;
    }
    else{
        let modalbtn = document.querySelector('.usermodal');
        modalbtn.remove();
        f = false;
    }
});

contactbtn.addEventListener("click" , function(){
    window.location.assign("./contactus.html");
});

aboutusbtn.addEventListener("click" , function(){
    window.location.assign("./aboutus.html");
});

homebtn.addEventListener("click" , function(){
    window.location.assign("./homepage.html");
});

searchbtn.addEventListener("click" , function(){
    window.location.assign("./search.html");
});