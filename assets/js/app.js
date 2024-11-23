const form = document.querySelector(".form");
const inputs = document.getElementsByTagName("input");
const faqs = document.querySelectorAll(".faq");
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('navLinks');
const hamburgerIcon = hamburgerMenu.querySelector('i');
const navItems = document.querySelectorAll('.navLink');

// Form submission handling
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Clear input fields after submission
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type == "text" || inputs[i].type == "email") {
      inputs[i].value = "";
    }
  }
  // alert(`Thanks For Subscribing ${inputs[i].type == "text"}`)
});

// Setting up accordion layout
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

// Toggle hamburger menu visibility and icon
hamburgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  if (navLinks.classList.contains('active')) {
    hamburgerIcon.classList.remove('fa-bars');
    hamburgerIcon.classList.add('fa-times');
    document.body.classList.add('body-no-scroll'); // Disable scrolling
  } else {
    hamburgerIcon.classList.remove('fa-times');
    hamburgerIcon.classList.add('fa-bars');
    document.body.classList.remove('body-no-scroll'); // Enable scrolling
  }
});

// Close the menu when any link is clicked
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburgerIcon.classList.remove('fa-times');
    hamburgerIcon.classList.add('fa-bars');
    document.body.classList.remove('body-no-scroll'); // Enable scrolling
  });
});

// Close the menu if clicking anywhere inside the menu, but not on a link
navLinks.addEventListener('click', (e) => {
  // If clicked outside of links (inside the menu), close the menu
  if (!e.target.classList.contains('navLink')) {
    navLinks.classList.remove('active');
    hamburgerIcon.classList.remove('fa-times');
    hamburgerIcon.classList.add('fa-bars');
    document.body.classList.remove('body-no-scroll'); // Enable scrolling
  }
});

// Smooth scrolling with navbar offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const offset = document.querySelector('.navbar').offsetHeight;

    window.scrollTo({
      top: target.offsetTop - offset, // Adjust for navbar height
      behavior: 'smooth',
    });
  });
});
