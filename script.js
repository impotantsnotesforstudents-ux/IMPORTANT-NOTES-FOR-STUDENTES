// ========================================
// ATR IMPORTANT NOTES V4
// script.js
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // Mobile Menu
    // =========================

    const menuBtn = document.getElementById("menuBtn");
    const navbar = document.getElementById("navbar");

    if(menuBtn && navbar){

        menuBtn.addEventListener("click",()=>{

            navbar.classList.toggle("active");

            const icon = menuBtn.querySelector("i");

            if(navbar.classList.contains("active")){

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            }else{

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

        document.addEventListener("click",(e)=>{

            if(
                !navbar.contains(e.target) &&
                !menuBtn.contains(e.target)
            ){

                navbar.classList.remove("active");

                const icon = menuBtn.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

    }

    // =========================
    // Dark Mode
    // =========================

    const darkBtn = document.getElementById("darkMode");

    if(darkBtn){

        if(localStorage.getItem("theme")==="dark"){

            document.body.classList.add("dark");

            darkBtn.innerHTML='<i class="fas fa-sun"></i>';

        }

        darkBtn.addEventListener("click",()=>{

            document.body.classList.toggle("dark");

            if(document.body.classList.contains("dark")){

                localStorage.setItem("theme","dark");

                darkBtn.innerHTML='<i class="fas fa-sun"></i>';

            }else{

                localStorage.setItem("theme","light");

                darkBtn.innerHTML='<i class="fas fa-moon"></i>';

            }

        });

    }

    // =========================
    // Sticky Header
    // =========================

    const header=document.querySelector("header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>30){

            header.classList.add("scrolled");

        }else{

            header.classList.remove("scrolled");

        }

    });

    // =========================
    // Search
    // =========================

    const search=document.getElementById("search");
    const searchBtn=document.getElementById("searchBtn");

    function doSearch(){

        if(!search) return;

        let value=search.value.toLowerCase().trim();

        if(value.includes("10")){

            location.href="class10.html";

        }

        else if(value.includes("11")){

            location.href="class11.html";

        }

        else if(value.includes("12")){

            location.href="class12.html";

        }

        else if(value.includes("premium")){

            location.href="pages/premium.html";

        }

        else if(value.includes("login")){

            location.href="pages/login.html";

        }

        else{

            alert("No matching notes found.");

        }

    }

    if(searchBtn){

        searchBtn.addEventListener("click",doSearch);

    }

    if(search){

        search.addEventListener("keypress",(e)=>{

            if(e.key==="Enter"){

                doSearch();

            }

        });

    }

    // =========================
    // Scroll To Top
    // =========================

    const topBtn=document.createElement("button");

    topBtn.innerHTML='<i class="fas fa-arrow-up"></i>';

    topBtn.style.position="fixed";
    topBtn.style.right="20px";
    topBtn.style.bottom="20px";
    topBtn.style.width="50px";
    topBtn.style.height="50px";
    topBtn.style.borderRadius="50%";
    topBtn.style.border="none";
    topBtn.style.background="#2563eb";
    topBtn.style.color="#fff";
    topBtn.style.cursor="pointer";
    topBtn.style.display="none";
    topBtn.style.boxShadow="0 10px 25px rgba(0,0,0,.2)";
    topBtn.style.zIndex="999";

    document.body.appendChild(topBtn);

    window.addEventListener("scroll",()=>{

        if(window.scrollY>400){

            topBtn.style.display="block";

        }else{

            topBtn.style.display="none";

        }

    });

    topBtn.onclick=()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    };

    // =========================
    // Fade Animation
    // =========================

    const cards=document.querySelectorAll(

        ".stat-card,.class-card,.feature-card,.plan-card"

    );

    cards.forEach(card=>{

        card.classList.add("fade");

    });

});
