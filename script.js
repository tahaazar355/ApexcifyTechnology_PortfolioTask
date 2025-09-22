document.addEventListener("DOMContentLoaded", () => {
   
    const fadeIns = document.querySelectorAll(".fade-in");
    fadeIns.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.2}s`;
    });
  
   
    const slider = document.getElementById('slider');
    const slides = slider.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let currentIndex = 0;
  

    window.moveSlide = function(direction) {
      currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    };
    
  });
  