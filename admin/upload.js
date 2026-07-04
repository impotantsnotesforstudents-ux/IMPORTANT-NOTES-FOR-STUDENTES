import { db } from "../firebase.js";

import {
    collection,
    addDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const uploadForm = document.getElementById("uploadForm");

uploadForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const chapter = document.getElementById("chapter").value;
    const subject = document.getElementById("subject").value;
    const className = document.getElementById("class").value;
    const pdf = document.getElementById("pdf").value;
    const premium = document.getElementById("premium").checked;

    try {

        await addDoc(collection(db, "notes"), {

            chapter: chapter,
            subject: subject,
            class: className,
            pdf: pdf,
            premium: premium

        });

        alert("✅ Note Uploaded Successfully!");

        uploadForm.reset();

    } catch (error) {

        console.error(error);

        alert("❌ Upload Failed");

    }

});
