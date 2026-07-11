import { db } from "../firebase.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const notesContainer = document.getElementById("notesContainer");
const classFilter = document.getElementById("classFilter");
const subjectFilter = document.getElementById("subjectFilter");
const searchBox = document.getElementById("searchBox");

async function loadNotes() {

    notesContainer.innerHTML = "";

    const snapshot = await getDocs(collection(db, "notes"));

    snapshot.forEach((doc) => {

        const note = doc.data();

        if (
            classFilter.value !== "all" &&
            note.class != classFilter.value
        ) return;

        if (
            subjectFilter.value !== "all" &&
            note.subject.toLowerCase() !== subjectFilter.value.toLowerCase()
        ) return;

        if (
            !note.chapter.toLowerCase().includes(searchBox.value.toLowerCase())
        ) return;

        notesContainer.innerHTML += `
<div class="note-card">

<div class="note-top">

<span class="class-badge">
Class ${note.class}
</span>

<span class="premium-badge">
👑 Premium
</span>

</div>

<h2>${note.chapter}</h2>

<p>📚 ${note.subject}</p>

<a href="../${note.pdf}" target="_blank" class="btn">
🔒 Buy Now
</a>

</div>
`;
    });

}

classFilter.addEventListener("change", loadNotes);
subjectFilter.addEventListener("change", loadNotes);
searchBox.addEventListener("input", loadNotes);

loadNotes();
