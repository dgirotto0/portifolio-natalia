let currentLanguage = 'pt-BR';

const navigation = document.querySelector("#navigation");
const backToTopButton = document.querySelector("#backToTopButton");
const toggle = document.querySelector("#sw-checkbox");
const about = document.querySelector("#about");
const projects = document.querySelector("#projects");
const knowledge = document.querySelector("#knowledge");
const contact = document.querySelector("#contact");

window.addEventListener("scroll", onScroll);
onScroll();

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.textContent = this.txt;

  var that = this;
  var delta = 150 - Math.random() * 100;
  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt.length === 0) {
    //this.el.textContent = "";
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var element = document.querySelector('.typewrite');
  var textElement = document.querySelector('.typing-text')
  var toRotate = element.getAttribute('data-type');
  var period = element.getAttribute('data-period');
  if (toRotate) {
    new TxtType(textElement, JSON.parse(toRotate), period);
  }
  
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #000}";
  document.body.appendChild(css);
};

function onScroll() {
  const languageButton = document.querySelector('.language-button.active');
  if (languageButton) {
    if (window.scrollY > 0) {
      languageButton.classList.add('scroll');
    } else {
      languageButton.classList.remove('scroll');
    }
  }
  
  showNavOnScroll();
  showBackToTopButtonOnScroll();
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(projects);
  activateMenuAtCurrentSection(knowledge);
  activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;
  const sectionEndsAt = sectionTop + sectionHeight;
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;
  const sectionId = section.getAttribute("id");
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);
  menuElement.classList.remove("active");
  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

openMenu();
function openMenu() {
  const openBtns = document.querySelectorAll(".open");
  openBtns.forEach((e) => {
    e.addEventListener("click", () => {
      document.body.classList.add("menu-expanded");
    });
  });
}

closeMenu();
function closeMenu() {
  const closeBtns = document.querySelectorAll(".close");
  closeBtns.forEach((e) => {
    e.addEventListener("click", () => {
      document.body.classList.remove("menu-expanded");
    });
  });
}

ScrollReveal({
  origin: "bottom",
  distance: "50px",
  duration: 1000,
}).reveal(
  `#home, 
  #home img, 
  #about, 
  #about header, 
  #about p,
  #about img,
  #projects,
  #projects header,
  #projects .work, 
  #knowledge,
  #knowledge header,
  #knowledge .card,
  #contact,
  #contact header`
);

toggle.addEventListener("change", () => {
  document.body.classList.toggle("light-mode");
});

let currentImages = [];
let currentImageIndex = 0;
let startX = 0; // Variável para armazenar a posição inicial do toque

document.addEventListener('DOMContentLoaded', () => {
  const projects = document.querySelectorAll('.project');

  projects.forEach(project => {
    const images = project.querySelectorAll('.abrirModal');
    
    images.forEach((image, index) => {
      image.addEventListener('click', () => {
        const projectImages = Array.from(images);
        openModal(projectImages, index);
      });
    });
  });

  document.querySelector('.prev-modal').addEventListener('click', prevImage);
  document.querySelector('.next-modal').addEventListener('click', nextImage);
  document.addEventListener('keydown', handleKeyDown);
  document.getElementById('imageModal').addEventListener('click', closeModal);
  
  const modalImage = document.getElementById('modalImage');
  modalImage.addEventListener('touchstart', handleTouchStart);
  modalImage.addEventListener('touchmove', handleTouchMove);
  
  setActiveLanguageButton();

  document.querySelectorAll('.language-button').forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();

      document.querySelectorAll('.language-button').forEach(btn => {
        btn.classList.remove('active');
      });

      button.classList.add('active');

      if (window.scrollY > 0) {
        button.classList.add('scroll');
      } else {
        button.classList.remove('scroll');
      }

      const selectedLanguage = button.getAttribute('data-lang');
      localStorage.setItem('selectedLanguage', selectedLanguage);

      const languageURL = button.getAttribute('href');
      window.location.href = languageURL;
    });
  });
});

function handleKeyDown(event) {
  if (event.key === 'ArrowLeft') {
    prevImage();
  } else if (event.key === 'ArrowRight') {
    nextImage();
  }
}

function handleTouchStart(event) {
  startX = event.touches[0].clientX;
}

function handleTouchMove(event) {
  if (!startX) return;

  const currentX = event.touches[0].clientX;
  const diffX = startX - currentX;

  if (diffX > 0) {
    nextImage();
  } else {
    prevImage();
  }

  startX = 0;
}

function openModal(images, index) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  modal.style.display = "flex";
  modalImage.src = images[index].querySelector('img').src;
  currentImageIndex = index;
  currentImages = images;
  document.body.style.overflow = "hidden";
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
  const prevModalBtn = document.querySelector(".prev-modal");
  const nextModalBtn = document.querySelector(".next-modal");
  if (currentImages.length <= 1) {
    prevModalBtn.style.display = "none";
    nextModalBtn.style.display = "none";
  } else {
    prevModalBtn.style.display = "block";
    nextModalBtn.style.display = "block";
  }
}

function closeModal(event) {
  if (event.target === event.currentTarget) {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
    currentImages = [];
    currentImageIndex = 0;
    document.body.style.overflow = "auto";
    document.body.style.backgroundColor = "";
  }
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % currentImages.length;
  const modalImage = document.getElementById("modalImage");
  modalImage.src = currentImages[currentImageIndex].querySelector('img').src;
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
  const modalImage = document.getElementById("modalImage");
  modalImage.src = currentImages[currentImageIndex].querySelector('img').src;
}

function setActiveLanguageButton() {
  const defaultLanguage = 'pt-BR';
  const savedLanguage = localStorage.getItem('selectedLanguage') || defaultLanguage;
  const languageButtons = document.querySelectorAll('.language-button');

  languageButtons.forEach(button => {
    button.classList.remove('active');

    if (button.getAttribute('data-lang') === savedLanguage) {
      button.classList.add('active');
    }
  });

  if (savedLanguage) {
    currentLanguage = savedLanguage;
  }
}
