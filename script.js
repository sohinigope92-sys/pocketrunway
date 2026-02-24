function recommend(){

let gender=document.getElementById("gender").value;
let event=document.getElementById("event").value;
let mood=document.getElementById("mood").value;

let suggestion="";

if(gender=="Female"){
    if(event=="Wedding"){
        suggestion="Pastel Lehenga + Pearl Jewellery + Soft Glam Makeup";
    }
    else if(event=="Party"){
        suggestion="Black Bodycon + Minimal Accessories";
    }
    else{
        suggestion="Indo Western Outfit + Light Makeup";
    }
}
else{
    if(event=="Wedding"){
        suggestion="Sherwani + Mojari + Classic Watch";
    }
    else if(event=="Party"){
        suggestion="Blazer + Slim Fit Trousers";
    }
    else{
        suggestion="Casual Kurta + Sneakers";
    }
}

document.getElementById("result").innerHTML=
"Recommended Style: "+suggestion+
"<br>Aesthetic Preference: "+mood;
}
