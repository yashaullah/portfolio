// ================= NAVBAR / HAMBURGER =================
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.style.display =
    mobileMenu.style.display === "block" ? "none" : "block";
});

// smooth scroll + close menu on click
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      mobileMenu.style.display = "none";
    }
  });
});


// ================= CONTACT FORM =================
const form = document.getElementById("contactForm");

// 🔴 YAHAN APNA DEPLOYED GOOGLE SCRIPT URL
const scriptURL =
  "https://script.google.com/macros/s/AKfycbyIJNCH-IiLuqQJ8DH08JV9iflSpuWZlwAImxcYja4AvSwHLv65Um_Z7UumIX3jiaXC/exec";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  fetch(scriptURL, {
    method: "POST",
    body: new FormData(form)
  })
    .then(res => res.text())
    .then(data => {
      alert("Message sent successfully!");
      form.reset();
    })
    .catch(err => {
      alert("Error! Try again later");
      console.error("Error:", err);
    });
});
