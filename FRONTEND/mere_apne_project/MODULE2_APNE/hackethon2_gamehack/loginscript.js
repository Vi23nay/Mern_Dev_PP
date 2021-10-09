let usrname = document.querySelector('#username-field');
let pass = document.querySelector('#password-field');
let loginBtn = document.querySelector('#login-form-submit');

loginBtn.addEventListener("click" , function(e){
    e.preventDefault();
    if(usrname.value == "u" && pass.value == "p"){
    window.location.assign("homepage.html");
    }
    else{
    alert("INVALID CREDENTIALS");
    }
});