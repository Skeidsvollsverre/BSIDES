document.addEventListener("DOMContentLoaded", () => {
    const dropdownContent = document.querySelector(".dropdown-content");
    const dropbtn = document.querySelector(".dropbtn");
  
    function showDetails(sessionId) {
      localStorage.setItem("selectedSession", sessionId);
  
      document.querySelectorAll(".session-details").forEach(session => {
        session.style.display = "none";
        session.style.opacity = "0";
      });
  
      const selectedSession = document.getElementById(sessionId);
      selectedSession.style.display = "block";
      setTimeout(() => (selectedSession.style.opacity = "1"), 10);
  
      dropdownContent.style.display = "none";
    }
  
    dropbtn.addEventListener("click", event => {
      dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
      event.stopPropagation();
    });
  
    document.addEventListener("click", event => {
      if (!dropbtn.contains(event.target) && !dropdownContent.contains(event.target)) {
        dropdownContent.style.display = "none";
      }
    });
  
    const savedSession = localStorage.getItem("selectedSession");
    if (savedSession && document.getElementById(savedSession)) showDetails(savedSession);
  
    window.showDetails = showDetails;
  });


  
  
  
  HEAD
  let slideIndex = 0;
  showSlides();
  
  // Show slides automatically every 3 seconds
  function showSlides() {
      let i;
      let slides = document.getElementsByClassName("slide");
      let dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 3000); // Change image every 3 seconds
  }
  
  // Manual controls
  function plusSlides(n) {
      showManualSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
      showManualSlides(slideIndex = n);
  }
  
  function showManualSlides(n) {
      let i;
      let slides = document.getElementsByClassName("slide");
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

  