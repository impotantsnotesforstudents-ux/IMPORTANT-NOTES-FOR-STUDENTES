import { db } from "../firebase.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const usersCount = document.getElementById("usersCount");
const premiumCount = document.getElementById("premiumCount");

async function loadDashboard() {

    try {

        const snapshot = await getDocs(collection(db, "users"));

        let totalUsers = 0;
        let premiumUsers = 0;

        snapshot.forEach((doc) => {

            totalUsers++;

            if (doc.data().premium === true) {
                premiumUsers++;
            }

        });

        usersCount.textContent = totalUsers;
        premiumCount.textContent = premiumUsers;

    } catch (error) {

        console.error(error);
        alert("Error loading dashboard");

    }

}

loadDashboard();
