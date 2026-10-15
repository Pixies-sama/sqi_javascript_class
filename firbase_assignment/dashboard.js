
import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";

import {
    getAuth,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyARnmqtej61LLW2Cuz8RbMzWLuPDlnkBYs",
    authDomain: "authentication-2b3ab.firebaseapp.com",
    projectId: "authentication-2b3ab",
    storageBucket: "authentication-2b3ab.firebasestorage.app",
    messagingSenderId: "77468347822",
    appId: "1:77468347822:web:42b80889caf0a76dbfac3f"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const logoutBtn = document.getElementById("logoutBtn");
const userEmail = document.getElementById("userEmail");

// Check whether a user is signed in
onAuthStateChanged(auth, (user) => {
    if (user) {
        userEmail.textContent = user.email || "No email available";
    } else {
        window.location.replace("index.html");
    }
});

// Log the user out
logoutBtn.addEventListener("click", async () => {
    try {
        await signOut(auth);
        window.location.replace("index.html");
    } catch (error) {
        console.error("Logout failed:", error);
        alert("Unable to log out. Please try again.");
    }
});