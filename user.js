import {
    auth,
    onAuthStateChanged,
    signOut
} from "./firebase.js";

const userArea = document.getElementById("userArea");

onAuthStateChanged(auth, (user) => {

    if (user) {

        const name = user.displayName || user.email;
        const photo = user.photoURL || "images/LOGO.jpeg";

        userArea.innerHTML = `
            <div class="user-profile">
                <img src="${photo}" class="profile-pic">
                <span>${name}</span>
                <button id="logoutBtn">Logout</button>
            </div>
        `;

        document.getElementById("logoutBtn").addEventListener("click", async () => {

            await signOut(auth);

            window.location.reload();

        });

    } else {

        userArea.innerHTML = `
            <a href="pages/login.html" id="loginLink">Login</a>
        `;

    }

});
