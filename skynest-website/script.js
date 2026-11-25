document.addEventListener("DOMContentLoaded", () => {
 
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("open");
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }));
  }

 
  document.querySelectorAll("[data-image]").forEach(el => {
    const key = el.getAttribute("data-image");
    if (window.SKY_IMAGES && window.SKY_IMAGES[key]) {
      if (el.tagName === "IMG") el.src = window.SKY_IMAGES[key];
      else el.style.setProperty("--hero-image", `url("${window.SKY_IMAGES[key]}")`);
    }
  });

   const form = document.querySelector("#enquiry-form");
  const message = document.querySelector("#form-message");
  if (form && message) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      message.classList.remove("error");
      message.style.display = "block";
      message.textContent = "Thank you. Your enquiry has been prepared successfully. This demonstration form does not send or store information; connect it to an email or form service before publishing.";
      form.reset();
      message.scrollIntoView({behavior:"smooth", block:"nearest"});
    });
  }

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
});
