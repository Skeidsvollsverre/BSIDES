let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active', 'exit');
        if (i === index) {
            slide.classList.add('active');
        } else if (i === currentIndex) {
            slide.classList.add('exit');
        }
    });
    currentIndex = index;
}

function nextSlide() {
    const nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
}

setInterval(nextSlide, 3000);
