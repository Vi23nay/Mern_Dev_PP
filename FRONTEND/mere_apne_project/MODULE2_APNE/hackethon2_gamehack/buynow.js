let btnsub = document.querySelector('.btn');
let conform = document.querySelector('.contentsform');

let flagform = false;

btnsub.addEventListener("click" , function(e){
    if(flagform == false){
    e.preventDefault();
    let modal = document.createElement('div');
    modal.classList.add('modalsub');
    modal.innerHTML = `
    <div class="pin">
        <form>
            <label for="pin"> ENTER CARD PIN </label>
            <input type="password">
            <button id="subpin">SUBMIT</button>
        </form>
    </div>
    `;

    conform.append(modal);
    flagform=true;

    let submodal = document.querySelector('#subpin');
    submodal.addEventListener("click" ,function(){
        modal.innerHTML = `
        <img src="https://static.vecteezy.com/system/resources/previews/000/182/450/original/thank-you-typography-vector.jpg" alt="IMAGE NOT FOUND" style="height: 66vh;width: 80vw;">
        <style>
        .modalsub{
            position: absolute;
            height: 90vh;
            background: darkcyan;
            top: 75px;
            z-index: 1;
            width: 100vw;
            display: flex;
            justify-content: center;
            align-items: center;
            left: 0;
        }
        </style>
        
        `;
        
    localStorage.setItem("f0" , "false");
    localStorage.setItem("f1" , "false");
    localStorage.setItem("f2" , "false");
    });
    
    }
    else{
        return;
    }
});

