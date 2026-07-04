import { auth, db } from "./firebase.js";

import {
    doc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const buyButton = document.getElementById("buyPremium");

if (buyButton) {

    buyButton.addEventListener("click", () => {

        const options = {

            key: "YOUR_RAZORPAY_KEY_ID",

            amount: 24900,

            currency: "INR",

            name: "ATR Important Notes",

            description: "ATR Premium Membership",

            handler: async function () {

                const user = auth.currentUser;

                if (!user) {

                    alert("Please login first.");

                    return;

                }

                await updateDoc(doc(db, "users", user.uid), {
                    premium: true
                });

                alert("🎉 Congratulations! You are now a Premium Member.");

                window.location.href = "profile.html";

            }

        };

        const rzp = new Razorpay(options);

        rzp.open();

    });

}
