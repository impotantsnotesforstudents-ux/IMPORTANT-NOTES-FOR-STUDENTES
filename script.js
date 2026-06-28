const btn = document.getElementById("darkMode");

btn.onclick = function () {
    document.body.style.background = "white";
    document.body.style.color = "black";
    alert("Dark mode button works!");
};
