// Mobile menu toggle
const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", function() {
  navMenu.classList.toggle("is-open");
});

// Close mobile menu after clicking a menu item
navMenu.querySelectorAll("a").forEach(function(link) {
  link.addEventListener("click", function() {
    navMenu.classList.remove("is-open");
  });
});

// Hero canvas animation
const canvas = document.getElementById("heroCanvas");
const ctx = canvas.getContext("2d");
let dots = [];

function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  dots = [];

  for (let i = 0; i < 42; i++) {
    dots.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 4 + 2,
      speedX: Math.random() * 0.6 - 0.3,
      speedY: Math.random() * 0.6 - 0.3
    });
  }
}

function drawDots() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  dots.forEach(function(dot) {
    dot.x += dot.speedX;
    dot.y += dot.speedY;

    if (dot.x < 0 || dot.x > canvas.width) {
      dot.speedX *= -1;
    }

    if (dot.y < 0 || dot.y > canvas.height) {
      dot.speedY *= -1;
    }

    ctx.beginPath();
    ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(15, 118, 110, 0.22)";
    ctx.fill();
  });

  requestAnimationFrame(drawDots);
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
drawDots();
