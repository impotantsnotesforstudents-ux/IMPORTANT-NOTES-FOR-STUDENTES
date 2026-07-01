import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD1oZLve-1dvpCG0D3abdxmA9gkFD0j8xE",
  authDomain: "atr-important-notes.firebaseapp.com",
  projectId: "atr-important-notes",
  storageBucket: "atr-important-notes.firebasestorage.app",
  messagingSenderId: "734933089010",
  appId: "1:734933089010:web:ecdec7b622f4ea38cdae6b"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export {
    auth,
    db,
    provider,
    onAuthStateChanged,
    signOut
};
