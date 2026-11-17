document.body.classList.add("loading");
window.addEventListener("load", () => {
  const loader = document.querySelector(".page-loader");
  setTimeout(() => {
    loader.classList.add("done");
    document.body.classList.remove("loading");
    document.querySelectorAll(".hero .reveal").forEach((el, i) => setTimeout(() => el.classList.add("visible"), 100 + i * 130));
  }, 950);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.13, rootMargin: "0px 0px -35px 0px" });
document.querySelectorAll(".reveal:not(.hero .reveal)").forEach(el => observer.observe(el));

const glow = document.querySelector(".cursor-glow");
if (glow && matchMedia("(pointer:fine)").matches) {
  window.addEventListener("pointermove", e => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  }, { passive: true });
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    }
  });
});

// Keep the demo contact action local until a real Telegram link is supplied.
document.querySelector(".contact-button").addEventListener("click", e => {
  if (e.currentTarget.getAttribute("href") === "mailto:hello@example.com") {
    e.preventDefault();
    alert("Демонстрационная версия: здесь будет ссылка на Telegram для связи.");
  }
});
