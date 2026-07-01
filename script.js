/*==========================================================
PORTFOLIO V6
Author : Anshul Saxena
==========================================================*/

//=============================
// Typing Animation
//=============================

const typingElement = document.getElementById("typing");

const words = [
    "B.Tech CSE (AI & ML)",
    "Frontend Developer",
    "Python Programmer",
    "AI Enthusiast",
    "Web Designer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(
        typingEffect,
        deleting ? 50 : 100
    );

}

typingEffect();


//=============================
// Scroll Progress Bar
//=============================

const progressBar =
document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / height) * 100;

    progressBar.style.width =
        progress + "%";

});


//=============================
// Custom Cursor
//=============================

const cursor =
document.querySelector(".cursor");

const cursor2 =
document.querySelector(".cursor2");

document.addEventListener("mousemove", e => {

    cursor.style.left =
        e.clientX + "px";

    cursor.style.top =
        e.clientY + "px";

    cursor2.style.left =
        e.clientX + "px";

    cursor2.style.top =
        e.clientY + "px";

});


//=============================
// Cursor Grow
//=============================

const hoverItems =
document.querySelectorAll(
"a,.btn,.skill,.project-card,.chain"
);

hoverItems.forEach(item => {

    item.addEventListener("mouseenter", () => {

        cursor2.style.width = "70px";
        cursor2.style.height = "70px";

    });

    item.addEventListener("mouseleave", () => {

        cursor2.style.width = "42px";
        cursor2.style.height = "42px";

    });

});

/*==========================================================
HANGING LAMP
==========================================================*/

const chain = document.getElementById("chain");

let lightOn = true;

chain.addEventListener("click", () => {

    lightOn = !lightOn;

    document.body.classList.toggle("light-off");

    chain.animate(
        [
            { transform: "translateY(0px)" },
            { transform: "translateY(25px)" },
            { transform: "translateY(0px)" }
        ],
        {
            duration: 300,
            easing: "ease-out"
        }
    );

});

/*==========================================================
SCROLL REVEAL
==========================================================*/

const reveals = document.querySelectorAll(".reveal");

function revealElements() {

    const trigger =
        window.innerHeight * 0.85;

    reveals.forEach(item => {

        const top =
            item.getBoundingClientRect().top;

        if (top < trigger) {

            item.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revealElements
);

revealElements();

/*==========================================================
ACTIVE NAVIGATION
==========================================================*/

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top =
            section.offsetTop - 150;

        const height =
            section.offsetHeight;

        if (
            window.scrollY >= top &&
            window.scrollY < top + height
        ) {
            current = section.id;
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {
            link.classList.add("active");
        }

    });

});

/*==========================================================
SMOOTH SCROLL (Fallback)
==========================================================*/

navLinks.forEach(link => {

    link.addEventListener("click", e => {

        e.preventDefault();

        const target =
            document.querySelector(
                link.getAttribute("href")
            );

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

/*==========================================================
PARALLAX HERO
==========================================================*/

const heroImage =
document.querySelector(".hero-image img");

window.addEventListener("mousemove", e => {

    const x =
        (window.innerWidth / 2 - e.clientX) / 45;

    const y =
        (window.innerHeight / 2 - e.clientY) / 45;

    heroImage.style.transform =
        `translate(${x}px, ${y}px)`;

});

/*==========================================================
SKILL CARD GLOW
==========================================================*/

document
.querySelectorAll(".skill")
.forEach(skill => {

    skill.addEventListener("mousemove", e => {

        const rect =
            skill.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        skill.style.background =
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(102,217,255,.20),
        rgba(255,255,255,.06))`;

    });

    skill.addEventListener("mouseleave", () => {

        skill.style.background =
        "rgba(255,255,255,.08)";

    });

});

/*==========================================================
PROJECT CARD TILT
==========================================================*/

document
.querySelectorAll(".project-card")
.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const rotateY =
            ((x / rect.width) - 0.5) * 10;

        const rotateX =
            ((rect.height / 2 - y) / rect.height) * 10;

        card.style.transform =
        `perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "perspective(900px) rotateX(0) rotateY(0)";

    });

});

/*==========================================================
CURRENT YEAR
==========================================================*/

const yearElement =
document.querySelector(".copyright");

if (yearElement) {

    yearElement.innerHTML =
        `© ${new Date().getFullYear()} Anshul Saxena. All Rights Reserved.`;

}

/*==========================================================
PAGE LOADER
==========================================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/*==========================================================
END OF FILE
==========================================================*/