function signup(){
let u=document.getElementById("username").value;
let p=document.getElementById("password").value;
localStorage.setItem(u,p);
alert("Signup Successful");
}

function login(){
let u=document.getElementById("username").value;
let p=document.getElementById("password").value;
let stored=localStorage.getItem(u);
if(stored==p){
alert("Login Successful");
}else{
alert("Wrong Details");
}
}

function detectSkin(){
let result=document.getElementById("skinResult");
result.innerHTML="Suggested Colors: Pastel Pink, Navy Blue, Beige";
}

function addProduct(){
alert("Product Added for Rent/Sell");
}

function resell(){
alert("Your worn cloth is listed for selling");
}
