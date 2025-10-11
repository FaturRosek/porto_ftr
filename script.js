const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Form Contact Handler (sederhana: validasi + alert)
const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = this.querySelector('input[type="text"]').value;
  const email = this.querySelector('input[type="email"]').value;
  const message = this.querySelector("textarea").value;

  if (name && email && message) {
    alert(
      `Terima kasih, ${name}! Pesan Anda telah dikirim. Saya akan balas via ${email} segera.`
    );
    this.reset(); // Reset form
  } else {
    alert("Mohon isi semua field!");
  }
  // TODO: Integrasikan dengan backend (EmailJS, Formspree, atau Netlify Forms)
});

// Fungsi untuk Switch Sub-Section di Portfolio (3 Button)
function showSubSection(sectionId) {
  // Hide all sub-sections
  const subSections = document.querySelectorAll(".sub-section");
  subSections.forEach((sec) => sec.classList.remove("active"));

  // Remove active class from all sub-buttons
  const subBtns = document.querySelectorAll(".sub-btn");
  subBtns.forEach((btn) => btn.classList.remove("active"));

  // Show selected sub-section
  document.getElementById(sectionId).classList.add("active");

  // Add active class to clicked button
  event.target.classList.add("active");
}

// Initial Load: Show Projects sub-section by default
document.addEventListener("DOMContentLoaded", function () {
  showSubSection("projects-sub");
});
