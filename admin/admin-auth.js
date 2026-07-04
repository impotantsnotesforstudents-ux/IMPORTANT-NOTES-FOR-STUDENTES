import { auth, db, onAuthStateChanged } from "../firebase.js";
import {
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

onAuthStateChanged(auth, async (user) => {

    if (!user) {

        window.location.href = "../pages/login.html";
        return;

    }

    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {

        window.location.href = "../index.html";
        return;

    }

    const data = userSnap.data();

    if (data.admin !== true) {

        alert("Access Denied!");
        window.location.href = "../index.html";

    }

});
