let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }    
  slides[slideIndex - 1].style.display = "block";  
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// Next/previous controls
function plusSlides(n) {
  showManualSlides(slideIndex += n);
}

// Show slides manually
function showManualSlides(n) {
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex - 1].style.display = "block";  
}