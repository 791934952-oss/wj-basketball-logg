document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    if (link.dataset.page === page) {
      link.classList.add("active");
    }
  });

  const counters = document.querySelectorAll("[data-target]");
  counters.forEach((el) => {
    const target = Number(el.dataset.target || 0);
    if (!target) {
      return;
    }
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 35));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = String(current);
    }, 28);
  });

  const revealItems = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.12 }
  );
  revealItems.forEach((item) => io.observe(item));

  const form = document.querySelector("#messageForm");
  const feedback = document.querySelector("#formFeedback");
  if (form && feedback) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      feedback.textContent = "留言已发送成功，感谢你的关注！";
      form.reset();
    });
  }
});
