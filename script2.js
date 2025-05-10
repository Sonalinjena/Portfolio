function toggleDarkMode() {
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const header = document.querySelector('.header');
    const skills = document.querySelector('.skills');
    const experience = document.querySelector('.experience');
  
    // Toggle dark mode for all relevant elements
    body.classList.toggle('dark-mode');
    navbar.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    if (skills) skills.classList.toggle('dark-mode');
    if (experience) experience.classList.toggle('dark-mode');
  
    // Change the icon
    const icon = document.getElementById('icon');
    icon.src = body.classList.contains('dark-mode') ? 'sun.png' : 'moon.png';
  }
  