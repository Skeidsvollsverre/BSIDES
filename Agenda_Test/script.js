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
  
  

  