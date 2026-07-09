import { auth, db } from "./firebase.js";

import {
    doc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".buyBtn");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const amount = Number(button.dataset.amount);

            let title = "";

            if (amount === 19) {
                title = "Single Chapter";
            } else if (amount === 149) {
                title = "One Subject";
            } else {
                title = "ATR Premium";
            }

            const options = {

                key: "rzp_live_T9RlJwMJS8w8eO",

                amount: amount * 100,

                currency: "INR",

                name: "ATR Important Notes",

                description: title,

                handler: async function () {

                    const user = auth.currentUser;

                    if (!user) {

                        alert("Please login first.");

                        window.location.href = "/pages/login.html";

                        return;

                    }

                    await updateDoc(doc(db, "users", user.uid), {

                        premium: true,

                        plan: title,

                        amount: amount

                    });

                    alert("🎉 Payment Successful!");

                    window.location.href = "/index.html";

                },

                theme: {

                    color: "#2563EB"

                }

            };

            const rzp = new Razorpay(options);

            rzp.open();

        });

    });

});