document.getElementById('CreateProject').addEventListener('click', () => {
    window.location.href = 'CreateProject.html';
});

document.getElementById('contact').addEventListener('click', () => {
    window.location.href = 'contactMe.html';
});

document.getElementById('CV-btn').addEventListener('click', () => {
    window.open('https://drive.google.com/file/d/1S50sNSR_PkVSbaKshbNVzVn9MlsEbb5K/view?usp=sharing', '_blank');
});

document.getElementById('project-visit1').addEventListener('click', () => {
    window.open('https://abo-shaheen.github.io/Link-Hub/', '_blank');
});

document.getElementById('project-visit2').addEventListener('click', () => {
    window.open('https://abo-shaheen.github.io/calculator/', '_blank');
});

document.querySelector('.footer-links2').addEventListener('click', () => {
    window.open('https://github.com/Abo-Shaheen', '_blank');
});

document.querySelector('.footer-links3').addEventListener('click', () => {
    window.open('https://youtube.com/@aboshaheen.developer?si=wWX4rwLmP6jGPytY', '_blank');
});

document.querySelector('.footer-links4').addEventListener('click', () => {
    window.open('https://www.tiktok.com/@aboshaheen_dev', '_blank');
});

document.querySelector('.fixed1').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('start-project').addEventListener('click', () => {
    window.location.href = 'CreateProject.html';
});

document.querySelector(".img2b").addEventListener("click", () => {
    window.open(
        "https://discord.gg/k2aDwDsHP",
        "_blank"
    );
});
//______________________________________________________________________________

const elements = document.querySelectorAll(
    '.project1, .project2, .project3, .service1, .service2, .other-services, .project-visit'
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.15
});

elements.forEach(el => observer.observe(el));

//______________________________________________________________________________

const lenis = new Lenis({
    duration: 1.8,
    smoothWheel: true,
    wheelMultiplier: 2,
    touchMultiplier: 2,
    infinite: false,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

//______________________________________________________________________________

document.addEventListener("DOMContentLoaded", () => {

    //================== Dark Mode ==================
const themeBtn = document.querySelector(".fixed2");

if (themeBtn) {

    const themeImg = themeBtn.querySelector("img");

    const lightIcon = "img/light.png";
    const darkIcon = "img/dark.png";

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        themeImg.src = darkIcon;
    } else {
        themeImg.src = lightIcon;
    }

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            themeImg.src = darkIcon;
        } else {
            localStorage.setItem("theme", "light");
            themeImg.src = lightIcon;
        }

    });

}
    //================== Shadow ==================

const shadowBtn = document.querySelector(".fixed3");
const sections = document.querySelectorAll(".about-section, .skills-section");

if (shadowBtn && sections.length > 0) {

    let shadowEnabled = localStorage.getItem("shadow") !== "off";

    function updateShadow() {
        sections.forEach(section => {
            section.style.boxShadow = shadowEnabled
                ? "0px 100px 1000000px rgb(1, 90, 255)"
                : "none";
        });

        shadowBtn.textContent = shadowEnabled
            ? "إيقاف التأثيرات"
            : "تشغيل التأثيرات";
    }

    updateShadow();

    shadowBtn.addEventListener("click", () => {

        shadowEnabled = !shadowEnabled;

        localStorage.setItem(
            "shadow",
            shadowEnabled ? "on" : "off"
        );

        updateShadow();

    });

}

});