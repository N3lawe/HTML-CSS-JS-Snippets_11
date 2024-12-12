// Header background change on scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (header && window.scrollY > 50) {
      header.classList.add('scrolled');
    } else if (header) {
      header.classList.remove('scrolled');
    }
  });
  
  // Close links on toggle
  const navToggle = document.querySelector(".nav-toggle");
  const linksContainer = document.querySelector(".links-container");
  const links = document.querySelector(".links");
  
  if (navToggle && linksContainer && links) {
    navToggle.addEventListener("click", function () {
      const linksHeight = links.getBoundingClientRect().height;
      const containerHeight = linksContainer.getBoundingClientRect().height;
      linksContainer.style.height = containerHeight === 0 ? `${linksHeight}px` : 0;
    });
  }
  
  // Close links when clicking outside the menu
  document.addEventListener("click", function (e) {
    if (linksContainer && navToggle && !linksContainer.contains(e.target) && !navToggle.contains(e.target)) {
      linksContainer.style.height = 0;
    }
  });
  
  // Fixed navbar and back to top link
  const navbar = document.getElementById("nav");
  const topLink = document.querySelector(".top-link");
  
  if (navbar && topLink) {
    window.addEventListener("scroll", function () {
      const scrollHeight = window.pageYOffset;
      const navHeight = navbar.getBoundingClientRect().height;
  
      // Toggle fixed navbar
      if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
      } else {
        navbar.classList.remove("fixed-nav");
      }
  
      // Setup back to top link
      if (scrollHeight > 500) {
        topLink.classList.add("show-link");
      } else {
        topLink.classList.remove("show-link");
      }
    });
  }
  
  // Footer Year
  const displayYearElement = document.getElementById("displayYear");
  if (displayYearElement) {
    displayYearElement.textContent = new Date().getFullYear();
  }
  

  //Clock section
  setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()