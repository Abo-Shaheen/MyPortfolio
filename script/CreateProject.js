emailjs.init({ publicKey: "400Mwt6Hu41P5rSHr" });

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const overlay = document.getElementById("loading-overlay");
  overlay.classList.add("active");

  const templateParams = {
    from_name: document.getElementById("name").value.trim(),
    from_email: document.getElementById("email").value.trim(),
    message: document.getElementById("textarea").value.trim(),
  };

  emailjs.send("service_9hgecs9", "template_6dx92nj", templateParams)
    .then(function () {
      overlay.classList.remove("active");
      document.querySelector("h3").style.display = "block";
      document.querySelector("form").reset();
    }, function (error) {
      overlay.classList.remove("active");
      console.error("EmailJS Error:", error);
      alert("حدث خطأ أثناء الإرسال، يرجى المحاولة مرة أخرى.");
    });
});

// ?______________________________________________________________________

const shadowBtn = document.querySelector(".fixed1");
const form = document.querySelector("form");

let shadowOn = localStorage.getItem("shadow") !== "off";

// تحميل الحالة
if (shadowOn) {
  form.style.boxShadow = "0px 100px 1000000px rgb(1, 90, 255)";
  shadowBtn.textContent = "إيقاف التأثيرات";
} else {
  form.style.boxShadow = "none";
  shadowBtn.textContent = "تشغيل التأثيرات";
}

shadowBtn.addEventListener("click", () => {
  shadowOn = !shadowOn;

  if (shadowOn) {
    form.style.boxShadow = "0px 100px 1000000px rgb(1, 90, 255)";
    shadowBtn.textContent = "إيقاف التأثيرات";
    localStorage.setItem("shadow", "on");
  } else {
    form.style.boxShadow = "none";
    shadowBtn.textContent = "تشغيل التأثيرات";
    localStorage.setItem("shadow", "off");
  }
});

//?____________________________________________________________________

document.getElementById("home-btn").addEventListener("click", () => {
  window.location.href = "index.html" ;
});

document.getElementById("contact").addEventListener("click", () => {
  window.location.href = "contactMe.html" ;
});

document.getElementById('CV-btn').addEventListener('click', () => {
    window.open('https://drive.google.com/file/d/1S50sNSR_PkVSbaKshbNVzVn9MlsEbb5K/view?usp=sharing', '_blank');
});



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