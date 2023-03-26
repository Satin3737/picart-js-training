const sliders = (slider, autoplay, prev, next) => {
    let slideIndex = 1;
    let paused = false;
    const slides = document.querySelectorAll(slider);
    
    showSlides(slideIndex);
    
    try {
        const prevBtn = document.querySelector(prev);
        const nextBtn = document.querySelector(next);
        
        prevBtn.addEventListener('click', () => {
            changeSlide(-1);
        });
        
        nextBtn.addEventListener('click', () => {
            changeSlide(1);
        });
    } catch (e) {}
    
    slides[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });
    slides[0].parentNode.addEventListener('mouseleave', () => {
        activateAutoplay();
    });
    
    activateAutoplay();
    
    
    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        
        slides.forEach(slide => {
            slide.classList.add('animated', 'fadeIn');
            slide.style.display = 'none';
        });
        
        slides[slideIndex - 1].style.display = 'block';
        
    }
    
    function changeSlide(n) {
        showSlides(slideIndex += n);
    }
    
    function activateAutoplay() {
        if (autoplay) {
            paused = setInterval(() => {
                changeSlide(1);
            }, 3000);
        }
    }
    
};

export default sliders;