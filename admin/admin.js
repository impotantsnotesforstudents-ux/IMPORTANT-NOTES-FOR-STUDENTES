import { auth } from "../firebase.js";

import {
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const form = document.getElementById("adminLogin");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {

        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        // 🔒 Change this to your own admin email
        if (userCredential.user.email !== "YOUR_EMAIL@gmail.com") {

            alert("Access Denied!");

            return;

        }

        window.location.href = "dashboard.html";

    } catch (error) {

        alert(error.message);

    }

});
