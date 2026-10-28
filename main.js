const navToggle = document.getElementById("nav-toggle");
const nav = document.getElementById("nav");

navToggle?.addEventListener("click", () => {
  nav?.classList.toggle("open");
});

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const result = document.getElementById("result");

    if (name && email && message) {
      result.textContent = "Демо: поля проверены. Сообщение не отправлено.";
      result.className = "alert success";
      contactForm.reset();
    } else {
      result.textContent = "Пожалуйста, заполните все поля.";
      result.className = "alert error";
    }
  });
}
