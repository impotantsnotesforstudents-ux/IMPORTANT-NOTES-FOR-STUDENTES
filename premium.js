import { auth, db, onAuthStateChanged } from "./firebase.js";

import {
    doc,
    getDoc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

onAuthStateChanged(auth, async (user) => {

    if (!user) {
        alert("Please login first.");
        window.location.href = "../pages/login.html";
        return;
    }

    try {

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

            // Already on premium page, so no redirect needed.
            // Uncomment the next line only if another page uses this script.
            // window.location.href = "premium.html";

        }

    } catch (error) {

        console.error(error);
        alert(error.message);

    }

});

const buyBtn = document.getElementById("buyPremium");

if (buyBtn) {

    buyBtn.addEventListener("click", () => {

        const options = {

            key: "rzp_live_T9RlJwMJS8w8eO",

            amount: 249,

            currency: "INR",

            name: "ATR Important Notes",

            description: "ATR Premium Membership",

            handler: async function () {

                try {

                    alert("Payment Successful!");

                    const user = auth.currentUser;

                    if (user) {

                        await updateDoc(doc(db, "users", user.uid), {
                            premium: true
                        });

                        alert("🎉 You are now a Premium Member!");

                        window.location.href = "../index.html";

                    }

                } catch (error) {

                    console.error(error);
                    alert(error.message);

                }

            }

        };

        const rzp = new Razorpay(options);

        rzp.open();

    });

}