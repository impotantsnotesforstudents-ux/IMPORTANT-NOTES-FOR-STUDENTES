import { db } from "../firebase.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const notesContainer = document.getElementById("notesContainer");

async function loadNotes() {

    notesContainer.innerHTML = "";

    const snapshot = await getDocs(collection(db, "notes"));

    snapshot.forEach((doc) => {

        const note = doc.data();

        notesContainer.innerHTML += `
            <div class="note-card">

                <h2>${note.chapter}</h2>

                <p>Class ${note.class}</p>

                <p>${note.subject}</p>

                <a href="../${note.pdf}" target="_blank" class="btn">

                    ${note.premium ? "🔒 Premium" : "📄 Open PDF"}

                </a>

            </div>
        `;

    });

}

loadNotes();
