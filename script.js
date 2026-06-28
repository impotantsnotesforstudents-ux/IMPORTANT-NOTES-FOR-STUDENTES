const darkBtn = document.getElementById("darkMode");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        darkBtn.innerHTML = "🌙";
        localStorage.setItem("theme","light");
    }else{
        darkBtn.innerHTML = "☀️";
        localStorage.setItem("theme","dark");
    }

});

window.onload = () => {

    if(localStorage.getItem("theme")=="light"){
        document.body.classList.add("light-mode");
        darkBtn.innerHTML="🌙";
    }else{
        darkBtn.innerHTML="☀️";
    }

};

// Dark mode code
...
window.onload = () => {

    if(localStorage.getItem("theme")=="light"){
        document.body.classList.add("light-mode");
        darkBtn.innerHTML="🌙";
    }else{
        darkBtn.innerHTML="☀️";
    }

};

// ⬇️ PASTE THE SEARCH CODE HERE
