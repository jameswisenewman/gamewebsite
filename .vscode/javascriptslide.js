function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const slideWidth = document.querySelector('.slide').offsetWidth;
    const currentSlide = parseInt(slides.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
    const newSlidePosition = currentSlide + direction * slideWidth;
    slides.style.transform = `translateX(${newSlidePosition}px)`;
}