// THEME TOGGLE
function toggleTheme() {
  const body = document.getElementById("body");
  const btn = document.querySelector("header button");

  if (body.classList.contains("dark-mode")) {
    body.classList.replace("dark-mode", "light-mode");
    btn.textContent = "☀️";
  } else {
    body.classList.replace("light-mode", "dark-mode");
    btn.textContent = "🌙";
  }
}

// TYPEWRITER
const words = ["Frontend Web Developer", "UI/UX Enthusiast", "React Developer"];
let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
  const el = document.getElementById("typing");
  if (!el) return;

  current = words[i];

  if (isDeleting) {
    el.textContent = current.substring(0, j--);
  } else {
    el.textContent = current.substring(0, j++);
  }

  if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, isDeleting ? 60 : 100);
}

type();

// SCROLL REVEAL
function reveal() {
  const elements = document.querySelectorAll(".reveal");

  elements.forEach((el) => {
    const top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// ACTIVE NAV
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    if (scrollY >= section.offsetTop - 150) {
      current = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-green-400");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("text-green-400");
    }
  });
});

// OPEN PROJECT
function openProject() {
  window.open("https://github.com/your-username/jokes-app", "_blank");
}

// FORM
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    status.textContent = "Please fill all fields";
    status.style.color = "red";
    return;
  }

  status.textContent = "Message sent successfully!";
  status.style.color = "lightgreen";

  form.reset();
});


// =====================
// GITHUB STATS IMAGE (FIXED)
// =====================

window.addEventListener("DOMContentLoaded", () => {
  const img = document.getElementById("github");

  if (img) {
    img.src =
      "https://github-readme-stats.vercel.app/api?username=timmyofnysc-svg&show_icons=true&theme=tokyonight";
  }
});