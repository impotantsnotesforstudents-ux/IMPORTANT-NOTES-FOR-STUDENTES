// ===============================
// ATR IMPORTANT NOTES V2
// script.js
// ===============================

// 🌙 Dark Mode

const darkBtn = document.getElementById("darkMode");

if (darkBtn) {

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        darkBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }

    darkBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");
            darkBtn.innerHTML = '<i class="fas fa-sun"></i>';

        } else {

            localStorage.setItem("theme", "light");
            darkBtn.innerHTML = '<i class="fas fa-moon"></i>';

        }

    });

}

// 🔍 Search

const search = document.getElementById("search");

if (search) {

    search.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        document.querySelectorAll(".class-card").forEach(card => {

            const text = card.innerText.toLowerCase();

            if (text.includes(value)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });

}

// ⬆ Scroll To Top

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "25px";
topBtn.style.right = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#FFFFFF";
topBtn.style.color = "#111827";
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
/* ===== Light / Dark Mode ===== */

body{
    background:#0F1117;
    color:white;
    transition:0.4s;
}

body.dark{
    background:#ffffff;
    color:#111827;
}

body.dark header{
    background:rgba(255,255,255,0.9);
    border-bottom:1px solid #ddd;
}

body.dark nav a{
    color:#111827;
}

body.dark .hero,
body.dark .classes,
body.dark .featured,
body.dark .premium{
    background:#ffffff;
}

body.dark .tag,
body.dark .search-box,
body.dark .class-card,
body.dark .stat-card,
body.dark .feature-card{
    background:#f3f4f6;
    border-color:#d1d5db;
    color:#111827;
}

body.dark .hero h1,
body.dark h2,
body.dark h3{
    color:#111827;
}

body.dark .hero-text,
body.dark p{
    color:#4b5563;
}

body.dark .btn.secondary{
    background:#111827;
    color:white;
}
