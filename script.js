function login(){
alert("Login Successful!");
}

function addProduct(){
let name=document.getElementById("product").value;
let price=document.getElementById("price").value;
alert("Product Uploaded: "+name+" ₹"+price);
}

function showBoard(){
alert("SmoothBoard Activated!");
}

function detectSkinTone(){

let gender=document.getElementById("gender").value;
let occasion=document.getElementById("occasion").value;

if(gender==="" || occasion===""){
alert("Select Gender & Occasion");
return;
}

let options="";

if(gender==="male"){

if(occasion==="wedding"){
options="Sherwani\nKurta Pajama\nSuit";
}

else if(occasion==="party"){
options="Blazer + Jeans\nSlim Shirt\nJacket";
}

else if(occasion==="office"){
options="Formal Shirt\nTie + Trousers";
}

else{
options="Tshirt + Jeans\nHoodie";
}
}

else{

if(occasion==="wedding"){
options="Saree\nLehenga\nGown";
}

else if(occasion==="party"){
options="Cocktail Dress\nSkirt Top";
}

else if(occasion==="office"){
options="Formal Kurti\nBlazer";
}

else{
options="Top + Jeans\nFloral Dress";
}
}

document.getElementById("result").innerText=
"Recommended Outfits:\n\n"+options;

}
