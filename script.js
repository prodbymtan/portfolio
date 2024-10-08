function toggleMenu() {
  const menu = document.querySelector(".nav-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  document.querySelector("#target-section").scrollIntoView({ behavior: "smooth" });
}

const container = document.getElementById("star-container");

function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");

  // Random position within the container
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  star.style.left = `${x}px`;
  star.style.top = `${y}px`;

  // Set random lifetime for the star (optional)
  const lifetime = Math.random() * 4 + 1; // Between 2 and 7 seconds
  star.style.animationDuration = `${lifetime}s`;

  container.appendChild(star);
}

// Create new stars every second
setInterval(createStar, 0.125); // Every 1/4 second
