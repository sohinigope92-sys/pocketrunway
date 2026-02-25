let cart=[];

function login(){
alert("Login Successful");
}

function moodboard(){
let o=document.getElementById("occasion").value;
document.getElementById("result").innerHTML=
"MoodBoard Suggestion for "+o;
}

function bookSalon(){
alert("Salon / Makeup Artist Booked!");
}

function rentDress(){
alert("Dress Rental Booked!");
}

function addProduct(){

let name=document.getElementById("pname").value;
let price=document.getElementById("price").value;
let img=document.getElementById("pimage").files[0];

let reader=new FileReader();

reader.onload=function(e){

let div=document.createElement("div");
div.className="card";

div.innerHTML=
"<img src='"+e.target.result+"'><br>"+
name+" ₹"+price+
"<br><button onclick='addToCart("+price+")'>Add</button>";

document.getElementById("products").appendChild(div);

}

reader.readAsDataURL(img);
}

function addToCart(price){
cart.push(price);
document.getElementById("cart").innerHTML="Items: "+cart.length;
}

function sellUsed(){
alert("Used Cloth Listed!");
}

function payNow(){
let d=document.getElementById("delivery").value;
alert("Payment Successful via "+d);
}
