import { auth } from "./firebase.js";

import {
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// Email Login

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {

        await signInWithEmailAndPassword(auth, email, password);

        alert("Login Successful!");

        window.location.href = "../index.html";

    } catch (error) {

        alert(error.message);

    }

});

// Google Login

const googleBtn = document.getElementById("googleLogin");

const provider = new GoogleAuthProvider();

googleBtn.addEventListener("click", async () => {

    try {

        await signInWithPopup(auth, provider);

        alert("Google Login Successful!");

        window.location.href = "../index.html";

    } catch (error) {

        alert(error.message);

    }

});
