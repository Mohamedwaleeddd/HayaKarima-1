//Slider

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//Munu Bar

function show(){
  document.querySelector('.menu').style.top = "0";
}
function remove(){
  document.querySelector('.menu').style.top = "-100%";
}

//Arrow Up Button

const arrowUp = document.getElementById("arrow-up");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
    arrowUp.style.display = "block";
  } else {
    arrowUp.style.display = "none";
  }
});
arrowUp.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
