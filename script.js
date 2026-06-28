// ===================================
// ATR IMPORTANT NOTES
// script.js
// ===================================

// 🌙 Dark Mode

const darkBtn = document.getElementById("darkMode");

function updateTheme() {
    if (document.body.classList.contains("dark")) {
        darkBtn.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem("theme", "dark");
    } else {
        darkBtn.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem("theme", "light");
    }
}

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

updateTheme();

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    updateTheme();
});


// 🔍 Search

const search = document.getElementById("search");

if (search) {
    search.addEventListener("keyup", function () {

        let value = this.value.toLowerCase();

        let cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            let text = card.innerText.toLowerCase();

            if (text.includes(value)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });
}


// ⬆ Scroll To Top Button

const topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.borderRadius = "50%";
topButton.style.border = "none";
topButton.style.background = "#0066cc";
topButton.style.color = "white";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.fontSize = "20px";
topButton.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";
topButton.style.transition = ".3s";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
