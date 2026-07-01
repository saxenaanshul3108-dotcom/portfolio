/*==================================================
            PORTFOLIO V4 - PREMIUM SCRIPT
            Author : Anshul Saxena
==================================================*/

/*==============================
        PRELOADER
==============================*/

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    preloader.style.opacity = "0";

    setTimeout(() => {

        preloader.style.display = "none";

    }, 500);

});

/*==============================
        CUSTOM CURSOR
==============================*/

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});

/*==============================
      SCROLL PROGRESS BAR
==============================*/

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / height) * 100;

    progressBar.style.width = progress + "%";

});

/*==============================
        STICKY HEADER
==============================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(5,8,22,.85)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";
        header.style.backdropFilter = "blur(20px)";

    } else {

        header.style.background = "rgba(8,10,25,.45)";
        header.style.boxShadow = "none";

    }

});

/*==============================
        ACTIVE NAV LINK
==============================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

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

/*==============================
      SMOOTH SCROLL
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({

                behavior: "smooth"

            });

    });

});

/*==============================
        SCROLL TO TOP
==============================*/

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollBtn.style.opacity = "1";
        scrollBtn.style.pointerEvents = "auto";

    } else {

        scrollBtn.style.opacity = "0";
        scrollBtn.style.pointerEvents = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

/*==============================
      MOBILE MENU
==============================*/

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("show");

    if (nav.classList.contains("show")) {

        menuBtn.innerHTML = '<i class="ri-close-line"></i>';

    } else {

        menuBtn.innerHTML = '<i class="ri-menu-4-line"></i>';

    }

});

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("show");

        menuBtn.innerHTML = '<i class="ri-menu-4-line"></i>';

    });

});

/*==============================
      PARALLAX LAMP EFFECT
==============================*/

const lamp = document.querySelector(".lamp");

document.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;

    lamp.style.transform =
        `translate(calc(-50% + ${-x}px), ${-y}px)`;

});

/*==============================
      TILT PROJECT CARDS
==============================*/

const cards = document.querySelectorAll(".project-card");
/*=========================================
        PORTFOLIO V4 - SCRIPT.JS
=========================================*/

/*==========================
        PRELOADER
==========================*/

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    if(preloader){

        preloader.style.opacity = "0";

        preloader.style.visibility = "hidden";

        setTimeout(() => {

            preloader.remove();

        },600);

    }

});

/*==========================
        AOS INIT
==========================*/

AOS.init({

    duration:1000,

    once:true,

    easing:"ease-in-out"

});

/*==========================
        CUSTOM CURSOR
==========================*/

const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

    if(!cursor) return;

    cursor.style.left=e.clientX+"px";

    cursor.style.top=e.clientY+"px";

});

/*==========================
      CURSOR SCALE
==========================*/

const hoverElements=document.querySelectorAll(

"a,.btn,.project-card,.skill-card,.certificate-card,.info-card"

);

hoverElements.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        cursor.style.transform="translate(-50%,-50%) scale(1.8)";

    });

    item.addEventListener("mouseleave",()=>{

        cursor.style.transform="translate(-50%,-50%) scale(1)";

    });

});

/*==========================
      SCROLL PROGRESS
==========================*/

const progressBar=document.getElementById("progressBar");

window.addEventListener("scroll",()=>{

    const totalHeight=

    document.documentElement.scrollHeight-

    document.documentElement.clientHeight;

    const progress=

    (window.pageYOffset/totalHeight)*100;

    progressBar.style.width=progress+"%";

});

/*==========================
        HEADER
==========================*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>60){

        header.classList.add("sticky");

    }

    else{

        header.classList.remove("sticky");

    }

});

/*==========================
      ACTIVE NAVIGATION
==========================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=

        section.offsetTop-150;

        const sectionHeight=

        section.clientHeight;

        if(window.pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

/*=========================================
        MOBILE MENU
=========================================*/

const menuBtn = document.querySelector(".menu-btn");

const nav = document.querySelector("nav");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        nav.classList.toggle("show");

        if(nav.classList.contains("show")){

            menuBtn.innerHTML='<i class="ri-close-line"></i>';

        }

        else{

            menuBtn.innerHTML='<i class="ri-menu-4-line"></i>';

        }

    });

}

document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",()=>{

        nav.classList.remove("show");

        if(menuBtn){

            menuBtn.innerHTML='<i class="ri-menu-4-line"></i>';

        }

    });

});

/*=========================================
        SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        }

    });

});

/*=========================================
        SCROLL TO TOP
=========================================*/

const scrollBtn=document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

    if(!scrollBtn) return;

    if(window.scrollY>500){

        scrollBtn.style.opacity="1";

        scrollBtn.style.pointerEvents="auto";

    }

    else{

        scrollBtn.style.opacity="0";

        scrollBtn.style.pointerEvents="none";

    }

});

if(scrollBtn){

    scrollBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

/*=========================================
        PARALLAX LAMP
=========================================*/

const lamp=document.querySelector(".lamp");

document.addEventListener("mousemove",(e)=>{

    if(!lamp) return;

    const x=(window.innerWidth/2-e.clientX)/35;

    const y=(window.innerHeight/2-e.clientY)/35;

    lamp.style.transform=

    `translate(calc(-50% + ${-x}px), ${-y}px)`;

});

/*=========================================
        PROJECT CARD TILT
=========================================*/

const cards=document.querySelectorAll(".project-card");

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        const rotateX=((rect.height/2)-y)/18;

        const rotateY=(x-(rect.width/2))/18;

        card.style.transform=

        `perspective(1000px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         translateY(-10px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform=

        "perspective(1000px) rotateX(0deg) rotateY(0deg)";

    });

});

/*=========================================
        BUTTON RIPPLE EFFECT
=========================================*/

document.querySelectorAll(".btn").forEach(button=>{

    button.addEventListener("click",function(e){

        const circle=document.createElement("span");

        const diameter=Math.max(this.clientWidth,this.clientHeight);

        const radius=diameter/2;

        circle.style.width=

        circle.style.height=

        `${diameter}px`;

        circle.style.left=

        `${e.clientX-this.getBoundingClientRect().left-radius}px`;

        circle.style.top=

        `${e.clientY-this.getBoundingClientRect().top-radius}px`;

        circle.classList.add("ripple");

        const ripple=this.getElementsByClassName("ripple")[0];

        if(ripple){

            ripple.remove();

        }

        this.appendChild(circle);

    });

});

/*=========================================
        TYPING TEXT EFFECT
=========================================*/

const typingElement = document.querySelector(".typing");

if (typingElement) {

    const words = [
        "AI Developer",
        "Frontend Developer",
        "Python Programmer",
        "Machine Learning Enthusiast"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            typingElement.textContent =
                currentWord.substring(0, charIndex++);

            if (charIndex > currentWord.length) {

                deleting = true;

                setTimeout(typeEffect, 1200);

                return;

            }

        } else {

            typingElement.textContent =
                currentWord.substring(0, charIndex--);

            if (charIndex < 0) {

                deleting = false;

                wordIndex = (wordIndex + 1) % words.length;

            }

        }

        setTimeout(typeEffect, deleting ? 60 : 120);

    }

    typeEffect();

}

/*=========================================
        REVEAL ON SCROLL
=========================================*/

const revealElements = document.querySelectorAll(

    ".about-card, .skill-card, .project-card, .certificate-card, .timeline-content, .info-card"

);

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {

        threshold: 0.15

    }

);

revealElements.forEach(el => revealObserver.observe(el));

/*=========================================
        RANDOM FLOATING ANIMATION
=========================================*/

document.querySelectorAll(

    ".project-card, .skill-card"

).forEach((card, index) => {

    card.style.animation =

        `floating ${4 + (index % 3)}s ease-in-out infinite`;

});

/*=========================================
        WINDOW RESIZE
=========================================*/

window.addEventListener("resize", () => {

    if (window.innerWidth > 768) {

        nav.classList.remove("show");

        if (menuBtn) {

            menuBtn.innerHTML =
                '<i class="ri-menu-4-line"></i>';

        }

    }

});

/*=========================================
        DISABLE IMAGE DRAG
=========================================*/

document.querySelectorAll("img").forEach(img => {

    img.setAttribute("draggable", "false");

});

/*=========================================
        DISABLE RIGHT CLICK
        (OPTIONAL)
=========================================*/

// Uncomment if you want to disable right click

/*
document.addEventListener("contextmenu",(e)=>{

    e.preventDefault();

});
*/

/*=========================================
        KEYBOARD SHORTCUT
=========================================*/

document.addEventListener("keydown", (e) => {

    if (e.key === "Home") {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }

});

/*=========================================
        PAGE VISIBILITY
=========================================*/

document.addEventListener("visibilitychange", () => {

    if (document.hidden) {

        document.title = "👋 Come Back | Anshul Saxena";

    } else {

        document.title = "Anshul Saxena | Portfolio";

    }

});

/*=========================================
        CONSOLE MESSAGE
=========================================*/

console.clear();

console.log(

    "%c🚀 Welcome to Anshul Saxena's Portfolio",

    "font-size:20px;color:#7c5cff;font-weight:bold;"

);

console.log(

    "%cDesigned with HTML, CSS & JavaScript",

    "font-size:14px;color:#4fd1ff;"

);

/*=========================================
        INITIALIZATION
=========================================*/

window.addEventListener("load", () => {

    console.log("Portfolio Loaded Successfully ✅");

});