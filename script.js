// ==============================
// ATR IMPORTANT NOTES
// script.js
// ==============================

// 🌙 Dark Mode

const darkBtn = document.getElementById("darkMode");

darkBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        darkBtn.innerHTML="☀️";

    }else{

        darkBtn.innerHTML="🌙";

    }

});

// 🔍 Search

const search=document.getElementById("search");

search.addEventListener("keyup",function(){

let value=this.value.toLowerCase();

let cards=document.querySelectorAll(".card");

cards.forEach(card=>{

let text=card.innerText.toLowerCase();

if(text.indexOf(value)>-1){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

// ⬆ Scroll To Top Button

const topButton=document.createElement("button");

topButton.innerHTML="⬆";

topButton.id="topBtn";

document.body.appendChild(topButton);

topButton.style.position="fixed";
topButton.style.bottom="20px";
topButton.style.right="20px";
topButton.style.padding="15px";
topButton.style.borderRadius="50%";
topButton.style.border="none";
topButton.style.background="#0066cc";
topButton.style.color="white";
topButton.style.cursor="pointer";
topButton.style.display="none";
topButton.style.fontSize="18px";

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

};

topButton.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};
