// ==============================
// HERO IMAGE SLIDER
// ==============================

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;

// Show Slide
function showSlide(index){

    slides.forEach((slide)=>{
        slide.classList.remove("active");
    });

    dots.forEach((dot)=>{
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");

}

// Next Slide
function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

}

// Previous Slide
function previousSlide(){

    currentSlide--;

    if(currentSlide < 0){

        currentSlide = slides.length - 1;

    }

    showSlide(currentSlide);

}

// Button Events
nextBtn.addEventListener("click", nextSlide);

prevBtn.addEventListener("click", previousSlide);

// Dot Events
dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        currentSlide = index;

        showSlide(currentSlide);

    });

});

// Auto Slide
setInterval(nextSlide,5000);