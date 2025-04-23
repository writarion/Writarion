
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyBdfLAUtAp_614fIz7Uzfru6HHFx058ZNs",
  authDomain: "writarion-f3c46.firebaseapp.com",
  projectId: "writarion-f3c46",
  storageBucket: "writarion-f3c46.firebasestorage.app",
  messagingSenderId: "745092449271",
  appId: "1:745092449271:web:7b3289a92fa844243364f2"
};

const app = initializeApp(firebaseConfig);

// Location Access
navigator.geolocation.getCurrentPosition((position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  document.getElementById("greeting").innerText = `Hello from (${lat.toFixed(4)}, ${lon.toFixed(4)})`;
}, () => {
  document.getElementById("greeting").innerText = "Location access denied!";
});

// Camera Access
const video = document.getElementById("video");
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(error => {
    console.error("Camera/Mic access denied:", error);
  });
