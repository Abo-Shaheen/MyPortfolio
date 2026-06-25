document.getElementById("home-btn").addEventListener("click", () => {
    window.location.href = "index.html";
});

document.getElementById("CreateProject").addEventListener("click", () => {
    window.location.href = "CreateProject.html";
});

document.getElementById("CV-btn").addEventListener("click", () => {
    window.open(
        "https://drive.google.com/file/d/1S50sNSR_PkVSbaKshbNVzVn9MlsEbb5K/view?usp=sharing",
        "_blank"
    );
});

document.querySelector(".img2b").addEventListener("click", () => {
    window.open(
        "https://discord.gg/k2aDwDsHP",
        "_blank"
    );
});

// document.querySelector(".img3b").addEventListener("click", () => {
//     window.location.href = "support.html";
// });


//_____________________________________________________________________________________________________________

const shadowBtn = document.querySelector(".fixed1");
const sections = document.querySelectorAll(".section");

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

//_____________________________________________________________________________________________________________

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