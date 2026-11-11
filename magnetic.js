document.addEventListener("DOMContentLoaded", function() {
  const magneticButtons = document.querySelectorAll(".magnetic-btn");
  magneticButtons.forEach(btn => {
    btn.style.transition = "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      btn.style.transition = "none";
      btn.style.transform = `translate3d(${distanceX * 0.3}px, ${distanceY * 0.3}px, 0)`;
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transition = "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
      btn.style.transform = "translate3d(0px, 0px, 0px)";
    });
    btn.addEventListener("mouseenter", () => { btn.style.transition = "none"; });
  });
});