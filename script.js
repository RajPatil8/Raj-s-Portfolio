const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuBtn.textContent = nav.classList.contains("open") ? "×" : "☰";
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  ".about, .stats, .experience-item, .feature, .project-card, .skills-list > div, .education, .contact"
).forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});

function downloadResume(event) {
  event.preventDefault();
  alert("Add your resume PDF as 'Raj-Patil-Resume.pdf' in this folder, then change this link in index.html to href=\"Raj-Patil-Resume.pdf\".");
}
