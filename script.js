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
// ================= SEARCH =================

const search = document.getElementById("search");

if (search) {

    search.addEventListener("keypress", function (e) {

        if (e.key === "Enter") {

            const value = this.value.toLowerCase().trim();

            switch (value) {

                case "class 10":
                case "10":
                    window.location.href = "class10.html";
                    break;

                case "class 11":
                case "11":
                    window.location.href = "class11.html";
                    break;

                case "class 12":
                case "12":
                    window.location.href = "class12.html";
                    break;

                case "premium":
                    window.location.href = "pages/premium.html";
                    break;

                case "login":
                    window.location.href = "pages/login.html";
                    break;

                default:
                    alert("No results found.");
            }

        }

    });

}
