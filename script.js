// =======================================
// ATR IMPORTANT NOTES - script.js
// =======================================

// ---------- DARK MODE ----------

const darkBtn = document.getElementById("darkMode");

if (darkBtn) {

    // Load saved theme
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
        darkBtn.innerHTML = "🌙";
    } else {
        darkBtn.innerHTML = "☀️";
    }

    // Toggle theme
    darkBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
            darkBtn.innerHTML = "🌙";
        } else {
            localStorage.setItem("theme", "dark");
            darkBtn.innerHTML = "☀️";
        }

    });

}


// ---------- SEARCH ----------

const search = document.getElementById("search");

if (search) {

    search.addEventListener("keydown", function (e) {

        if (e.key === "Enter") {

            let value = this.value.toLowerCase().trim();

            if (
                value === "class 10" ||
                value === "10" ||
                value === "tenth"
            ) {
                window.location.href = "class10.html";
            }

            else if (
                value === "class 11" ||
                value === "11"
            ) {
                window.location.href = "class11.html";
            }

            else if (
                value === "class 12" ||
                value === "12"
            ) {
                window.location.href = "class12.html";
            }

            else if (
                value === "premium"
            ) {
                window.location.href = "pages/premium.html";
            }

            else if (
                value === "login"
            ) {
                window.location.href = "pages/login.html";
            }

            else if (
                value === "home"
            ) {
                window.location.href = "index.html";
            }

            else {
                alert("No results found!");
            }

        }

    });

}


// ---------- SCROLL TO TOP ----------

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#ffffff";
topBtn.style.color = "#111827";
topBtn.style.fontSize = "20px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 10px 25px rgba(0,0,0,.3)";
topBtn.style.zIndex = "999";

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
