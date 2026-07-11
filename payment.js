import { auth, db } from "./firebase.js";
import { doc, updateDoc } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".buyBtn");

    buttons.forEach(button => {

        button.addEventListener("click", async () => {

            const amount = Number(button.dataset.amount);

            let title = "";

            if (amount === 19) {
                title = "Single Chapter";
            } else if (amount === 149) {
                title = "One Subject";
            } else {
                title = "ATR Premium";
            }

            // Create order from Render server
            const response = await fetch("https://important-notes-for-studentes.onrender.com/create-order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    amount: amount * 100
                })
            });

            const order = await response.json();

            const options = {

                key: "rzp_live_T9RlJwMJS8w8eO",

                amount: order.amount,

                currency: order.currency,

                name: "ATR Important Notes",

                description: title,

                order_id: order.id,

                handler: async function (response) {

                    // Verify payment
                    const verify = await fetch("https://important-notes-for-studentes.onrender.com/verify-payment", {

                        method: "POST",

                        headers: {
                            "Content-Type": "application/json"
                        },

                        body: JSON.stringify(response)

                    });

                    const result = await verify.json();

                    if (!result.success) {
                        alert("Payment verification failed.");
                        return;
                    }

                    const user = auth.currentUser;

                    if (!user) {
                        alert("Please login first.");
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
