// Menu Toggle
document.querySelector(".menu-button").addEventListener("click", function () {
    let menu = document.querySelector(".menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}); 

// Typing Effect
const textArray = ["Bangladeshi Musician", "Writer", "Web Developer", "SEO Expert"];
let textIndex = 0;
let charIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 50;
const typingElement = document.getElementById("typing-effect"); 

function type() {
    if (charIndex < textArray[textIndex].length) {
        typingElement.innerHTML += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, 1500);
    }
} 

function erase() {
    if (charIndex > 0) {
        typingElement.innerHTML = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(type, 500);
    }
} 

document.addEventListener("DOMContentLoaded", () => setTimeout(type, 1000)); 

// Background Color Changer
const colors = ["#ff5733", "#33ff57", "#3357ff", "#ff33f6", "#f3ff33", "#33fff3", "#ffffff", "#000000", "#555555", "#8a2be2"];
document.querySelector(".color-selector").addEventListener("click", function () {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}); 

// Smooth Page Load Animation
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");
    document.querySelectorAll(".animate-box").forEach(box => {
        box.style.opacity = "1";
        box.style.transform = "translateY(0)";
    });
}); 

// 3D Box Hover Effect
document.querySelectorAll(".service-box, .education-box, .book-box, .contact-box").forEach(box => {
    box.addEventListener("mousemove", (e) => {
        let { offsetX: x, offsetY: y } = e;
        let { clientWidth: width, clientHeight: height } = box;
        let moveX = (x - width / 2) / 25;
        let moveY = (y - height / 2) / 25;
        box.style.transform = `rotateY(${moveX}deg) rotateX(${moveY}deg)`;
    }); 

    box.addEventListener("mouseleave", () => {
        box.style.transform = "rotateY(0) rotateX(0)";
    });
});
