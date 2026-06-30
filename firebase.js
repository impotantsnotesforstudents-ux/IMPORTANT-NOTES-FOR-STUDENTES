// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "atr-important-notes.firebaseapp.com",
  projectId: "atr-important-notes",
  storageBucket: "atr-important-notes.firebasestorage.app",
  messagingSenderId: "734933089010",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log("Firebase Connected Successfully!");
