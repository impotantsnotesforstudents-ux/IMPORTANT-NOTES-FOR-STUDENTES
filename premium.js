import { auth, db, onAuthStateChanged } from "./firebase.js";

import {
    doc,
    getDoc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

onAuthStateChanged(auth, async (user) => {

    if (!user) {
        alert("Please login first.");
        window.location.href = "pages/login.html";
        return;
    }

    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        alert("User record not found.");
        return;
    }

    const data = docSnap.data();

    if (data.premium === true) {

        console.log("Premium User");

    } else {

        alert("🔒 This is Premium Content.\n\nUpgrade to Premium to continue.");

        window.location.href = "pages/premium.html";

    }

});

document.getElementById("buyPremium").addEventListener("click", () => {

    const options = {

        key: "rzp_live_T9RlJwMJS8w8eO",

        amount: 24900,

        currency: "INR",

        name: "ATR Important Notes",

        description: "ATR Premium Membership",

        handler: async function (response) {

            alert("Payment Successful!");

            const user = auth.currentUser;

            if (user) {

                await updateDoc(doc(db, "users", user.uid), {
                    premium: true
                });

                alert("🎉 You are now a Premium Member!");

                window.location.href = "profile.html";

            }

        }

    };

    const rzp = new Razorpay(options);

    rzp.open();

});
