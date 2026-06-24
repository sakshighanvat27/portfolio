// =========================
// LOADER
// =========================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 800);
});

// =========================
// DARK MODE
// =========================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.innerHTML = "☀️";
    }
    else{
        themeBtn.innerHTML = "🌙";
    }

});

// =========================
// TYPING EFFECT
// =========================

const typingElement = document.getElementById("typing");

const roles = [
    "Java Developer",
    "Web Developer",
    "Computer Engineering Student",
    "Problem Solver",
    "Tech Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const currentRole = roles[roleIndex];

    if(!deleting){

        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if(charIndex === currentRole.length){

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }
    }
    else{

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if(charIndex === 0){

            deleting = false;

            roleIndex++;

            if(roleIndex >= roles.length){
                roleIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();

// =========================
// SCROLL TO TOP BUTTON
// =========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }
    else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// =========================
// COUNTER ANIMATION
// =========================

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function startCounters(){

    counters.forEach(counter => {

        const target =
            +counter.getAttribute("data-target");

        let count = 0;

        const increment =
            Math.ceil(target / 100);

        const updateCounter = () => {

            count += increment;

            if(count >= target){

                counter.innerText = target;
            }
            else{

                counter.innerText = count;

                requestAnimationFrame(updateCounter);
            }
        };

        updateCounter();

    });
}

window.addEventListener("scroll", () => {

    const statsSection =
        document.getElementById("stats");

    const sectionTop =
        statsSection.offsetTop - 300;

    if(
        window.scrollY > sectionTop &&
        !counterStarted
    ){

        startCounters();

        counterStarted = true;
    }

});

// =========================
// CONTACT FORM
// =========================

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    alert(
        "Thank you for contacting me! I will get back to you soon."
    );

    contactForm.reset();

});

// =========================
// NAVBAR ACTIVE LINK
// =========================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if(
            pageYOffset >= sectionTop &&
            pageYOffset < sectionTop + sectionHeight
        ){

            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href") ===
            "#" + current
        ){

            link.classList.add("active");
        }
    });

});

// =========================
// PROJECT CARD HOVER EFFECT
// =========================

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-10px) scale(1.02)";
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0px) scale(1)";
    });

});

// =========================
// REVEAL ANIMATION
// =========================

const revealElements =
    document.querySelectorAll(
        ".project-card, .certificate-card, .timeline-item"
    );

function revealOnScroll(){

    revealElements.forEach(element => {

        const windowHeight =
            window.innerHeight;

        const revealTop =
            element.getBoundingClientRect().top;

        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){

            element.style.opacity = "1";
            element.style.transform =
                "translateY(0)";
        }
    });
}

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform =
        "translateY(50px)";
    element.style.transition =
        "all 0.8s ease";
});

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

// =========================
// CURRENT YEAR IN FOOTER
// =========================

const footer =
    document.querySelector("footer p");

const year =
    new Date().getFullYear();

footer.innerHTML =
    `© ${year} Sakshi Ghanvat | All Rights Reserved`;