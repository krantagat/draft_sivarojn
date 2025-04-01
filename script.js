const slider = document.getElementById('slider');
const dotContainer = document.querySelector('section .flex.space-x-2');
const totalGroups = slider.children.length;
let currentIndex = 0;

// Create dots
for (let i = 0; i < totalGroups; i++) {
  const dot = document.createElement('div');
  dot.className = 'dot w-3 h-3 bg-white rounded-full cursor-pointer opacity-50';
  dot.addEventListener('click', () => moveToSlide(i));
  dotContainer.appendChild(dot);
}

const updateDots = () => {
  dotContainer.querySelectorAll('.dot').forEach((dot, idx) => {
    dot.classList.toggle('opacity-100', idx === currentIndex);
    dot.classList.toggle('opacity-50', idx !== currentIndex);
  });
};

const moveToSlide = (index) => {
  currentIndex = index;
  slider.style.transform = `translateX(-${index * 100}%)`;
  updateDots();
};

const autoSlide = () => {
  currentIndex = (currentIndex + 1) % totalGroups;
  moveToSlide(currentIndex);
};

// Auto-slide every 6 seconds
setInterval(autoSlide, 6000);
updateDots();


function copyEmail() {
    const email = "contact@sivarojn.com";
    navigator.clipboard.writeText(email).then(() => {
      alert("📋 Email copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy email:", err);
    });
  }