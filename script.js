// ==============================
// ATR IMPORTANT NOTES V2
// script.js
// ==============================

// ---------- Mobile Menu ----------

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", () => {

        navbar.classList.toggle("active");

    });

}

// ---------- Dark / Light Mode ----------

const darkBtn = document.getElementById("darkMode");

if (darkBtn) {

    if (localStorage.getItem("theme") === "light") {

        document.body.classList.add("light-mode");

        darkBtn.innerHTML = '<i class="fas fa-sun"></i>';

    }

    darkBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            localStorage.setItem("theme", "light");

            darkBtn.innerHTML = '<i class="fas fa-sun"></i>';

        } else {

            localStorage.setItem("theme", "dark");

            darkBtn.innerHTML = '<i class="fas fa-moon"></i>';

        }

    });

}

// ---------- Search ----------

const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");

function performSearch() {

    if (!searchInput) return;

    const value = searchInput.value.toLowerCase().trim();

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

        case "maths":
        case "mathematics":
            window.location.href = "maths10.html";
            break;

        case "science":
            window.location.href = "science10.html";
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

if (searchBtn) {

    searchBtn.addEventListener("click", performSearch);

}

if (searchInput) {

    searchInput.addEventListener("keydown", function(e){

        if(e.key === "Enter"){

            performSearch();

        }

    });

}

// ---------- Scroll To Top ----------

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.right = "20px";
topBtn.style.bottom = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#2563EB";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "20px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 10px 25px rgba(0,0,0,.3)";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
