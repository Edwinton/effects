/**
 * 3D Tilt & Parallax Effect
 * Usage: Add .tilt-card to container, .tilt-inner to elements that should pop out.
 */
document.addEventListener("DOMContentLoaded", function() {
  const tiltCards = document.querySelectorAll(".tilt-card");
  
  tiltCards.forEach(card => {
    card.style.transformStyle = "preserve-3d";
    const innerElements = card.querySelectorAll(".tilt-inner");

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((centerY - y) / centerY) * 6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      
      // Update CSS variables for the glow (even if glow.css isn't loaded)
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);

      innerElements.forEach(el => {
        el.style.transform = "translateZ(30px)";
      });
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
      card.style.setProperty("--mouse-x", "-500px");
      card.style.setProperty("--mouse-y", "-500px");
      innerElements.forEach(el => {
        el.style.transform = "translateZ(0px)";
      });
    });
  });
});