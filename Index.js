const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < navToggler.length; i++) {
  navToggler[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  });
}



/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/**Horizontal animation scroll */

document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector('.scroll-container');
  const projectList = document.querySelector('.project-list');
  const items = Array.from(projectList.children);

  items.forEach(item => {
    const clone = item.cloneNode(true);
    projectList.appendChild(clone);
  });

  let scrollAmount = 0;

  function autoScroll() {
    if (scrollAmount >= container.scrollWidth / 2) {
      container.scrollLeft = 0;
      scrollAmount = 0;
    } else {
      container.scrollLeft += 1;
      scrollAmount += 1;
    }
    requestAnimationFrame(autoScroll);
  }

  autoScroll();
});
document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector('.scroll-container');
  const projectList = document.querySelector('.project-list');
  const items = Array.from(projectList.children);
  const images = document.querySelectorAll('.project-item img');

  // Clone items to create a seamless loop
  items.forEach(item => {
    const clone = item.cloneNode(true);
    projectList.appendChild(clone);
  });

  let scrollAmount = 0;
  let isPaused = false;

  function autoScroll() {
    if (!isPaused) {
      if (scrollAmount >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
        scrollAmount = 0;
      } else {
        container.scrollLeft += 1;
        scrollAmount += 1;
      }
    }
    requestAnimationFrame(autoScroll);
  }

  autoScroll();

  // Add event listeners to all images to stop the animation on click
  images.forEach(image => {
    image.addEventListener('click', function() {
      isPaused = true;
      projectList.classList.add('paused');

      // Optionally, resume scrolling after a certain time
      setTimeout(() => {
        isPaused = false;
        projectList.classList.remove('paused');
      }, 100000); // Adjust the time as needed (e.g., 5000ms = 5 seconds)
    });
  });
});


