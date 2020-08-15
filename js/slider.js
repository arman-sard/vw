var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("carousel-slider-img");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        //   slides[i].classList.remove('slider-visible');
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // slides[slideIndex-1].classList.add('slider-visible');
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    //console.log(slideIndex);
}

function scrollOff() {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', scrollOff);
}

function scrollOn(){
    window.removeEventListener('scroll', scrollOff);
}
