document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = slider.querySelectorAll('img');
    const sliderNavLinks = document.querySelectorAll('.slider-nav a');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    
    let currentSlide = 0;
    
    // Function to update the active slide and navigation links
    function updateSlider() {
        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.style.scrollSnapAlign = 'start';
                sliderNavLinks[index].classList.add('active');
            } else {
                slide.style.scrollSnapAlign = 'none';
                sliderNavLinks[index].classList.remove('active');
            }
        });
    }
    
    // Function to go to the next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    }
    
    // Function to go to the previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlider();
    }
    
    // Event listeners for "Prev" and "Next" buttons
    btnPrev.addEventListener('click', prevSlide);
    btnNext.addEventListener('click', nextSlide);
    
    // Initialize the slider
    updateSlider();
    
    // Automatic slideshow - uncomment if needed
    // setInterval(nextSlide, 5000); // Change slide every 5 seconds
});