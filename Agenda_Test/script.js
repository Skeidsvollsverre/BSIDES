// Function to show details of the selected session
function showDetails(sessionId) {
    // Save the session choice to localStorage
    localStorage.setItem('selectedSession', sessionId);
  
    // Hide all sessions
    const sessions = document.querySelectorAll('.session-details');
    sessions.forEach(session => {
      session.style.display = 'none';
      session.style.opacity = '0';
    });
  
    // Show the clicked session
    const selectedSession = document.getElementById(sessionId);
    selectedSession.style.display = 'block';
    setTimeout(() => {
      selectedSession.style.opacity = '1';
    }, 10);
  
    // Close the dropdown
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = 'none';
  }
  
  // Show the dropdown when hovering over the button
  document.querySelector('.dropbtn').addEventListener('click', function (event) {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    // Stop the event from propagating to the document
    event.stopPropagation();
  });
  
  // Close the dropdown if clicked outside of the dropdown or button
  document.addEventListener('click', function (event) {
    const dropdownContent = document.querySelector('.dropdown-content');
    const dropdownButton = document.querySelector('.dropbtn');
    
    if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
      dropdownContent.style.display = 'none';
    }
  });
  
  // Function to load the saved session choice from localStorage
  function loadSelectedSession() {
    const savedSession = localStorage.getItem('selectedSession');
  
    if (savedSession) {
      // Show the selected session based on the saved session ID
      const selectedSession = document.getElementById(savedSession);
      if (selectedSession) {
        selectedSession.style.display = 'block';
        setTimeout(() => {
          selectedSession.style.opacity = '1';
        }, 10);
  
        // Close the dropdown
        const dropdownContent = document.querySelector('.dropdown-content');
        dropdownContent.style.display = 'none';
      }
    }
  }
  
  // Load the selected session when the page is loaded
  window.onload = loadSelectedSession;
  

  