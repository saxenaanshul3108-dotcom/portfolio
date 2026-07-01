/* ==========================================
   PORTFOLIO V5
========================================== */

/* ===========================
   Typing Animation
=========================== */

const words = [
    "B.Tech CSE (AI & ML) Student",
    "Python Developer",
    "Frontend Developer",
    "AI Enthusiast",
    "Cybersecurity Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {
            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typing.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 40 : 90);

}

typeEffect();


/* ===========================
   Mobile Menu
=========================== */

function toggleMenu(){

document.getElementById("menu").classList.toggle("active");

}

/* ==========================================
   LAMP ON / OFF
========================================== */

let lampOn = true;

function toggleLamp() {

    const cone = document.querySelector(".light-cone");
    const bulb = document.querySelector(".lamp-bulb");
    const string = document.querySelector(".pull-string");

    if (!cone || !bulb || !string) return;

    string.style.transform = "translateY(12px)";

    setTimeout(() => {
        string.style.transform = "translateY(0)";
    }, 180);

    lampOn = !lampOn;

    if (lampOn) {

        cone.style.opacity = "0.95";

        bulb.style.background = "#fff4b8";

        bulb.style.boxShadow = `
        0 0 15px white,
        0 0 30px #ffd95c,
        0 0 70px rgba(255,210,80,.9)
        `;

    } else {

        cone.style.opacity = "0";

        bulb.style.background = "#777";

        bulb.style.boxShadow = "none";

    }

}

/* ==========================================
   SMOOTH ACTIVE NAV LINK
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (pageYOffset >= top) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

/* ==========================================
   SCROLL TO TOP ON RELOAD
========================================== */

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll(
".glass-card, .skill-card, .project-card, .certificate-card"
);

function revealOnScroll(){

const trigger = window.innerHeight * 0.85;

revealElements.forEach(el=>{

const top = el.getBoundingClientRect().top;

if(top < trigger){

el.style.opacity="1";
el.style.transform="translateY(0)";
el.style.transition="all .8s ease";

}

});

}

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();


/* ==========================================
   PROFILE PARALLAX
========================================== */

const profile = document.querySelector(".profile");

document.addEventListener("mousemove",(e)=>{

if(!profile) return;

const x=(window.innerWidth/2-e.clientX)/40;

const y=(window.innerHeight/2-e.clientY)/40;

profile.style.transform=
`translate(${-x}px,${-y}px)`;

});


/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */

document.querySelectorAll(".btn,.btn2").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transition=".35s";

});

});


/* ==========================================
   NAVBAR SHADOW
========================================== */

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>30){

nav.style.boxShadow="0 10px 30px rgba(0,0,0,.25)";

}else{

nav.style.boxShadow="none";

}

});


/* ==========================================
   PRELOADER (Optional)
========================================== */

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});


console.log("Portfolio Loaded Successfully");