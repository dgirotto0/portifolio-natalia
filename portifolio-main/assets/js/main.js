document.addEventListener("DOMContentLoaded", function () {
  const texts = {
    'pt-BR': {
      aboutNav: 'Sobre mim',
      projectsNav: 'Projetos',
      knowledgeNav: 'Conhecimentos',
      contactNav: 'Fale comigo',
      hello: 'Olá 👋🏾',
      iAm: 'Eu sou a Natália,',
      contactButton: 'Fale comigo',
      about: 'Sobre mim',
      aboutText: 'Sou Natalia, uma jovem apaixonada por moda e no segundo ano do curso, onde me dedico com entusiasmo à criação e à técnica. Minhas notas máximas em modelagem refletem meu talento natural para transformar ideias em peças incríveis. A busca por conhecimento é constante, sempre explorando novas técnicas e aprimorando minhas habilidades. Minha paixão transcende o âmbito acadêmico, participando de projetos sociais onde a moda se torna ferramenta de transformação. Essa experiência me molda como profissional, impulsionando meu crescimento e me preparando para construir uma carreira promissora no mundo da moda.',
      resumeButton: 'Veja meu currículo',
      projects: 'Projetos',
      knowledge: 'Conhecimentos',
      contact: 'Fale comigo!',
      sewingTitle: 'Corte e Costura',
      sewingDescription: 'Domínio das técnicas de corte e costura, desde o básico até técnicas mais avançadas, como modelagem e criação de peças próprias.',
      colorTheoryTitle: 'Teoria da Cor',
      colorTheoryDescription: 'Compreensão profunda da teoria da cor, incluindo harmonia de cores, contrastes, efeitos psicológicos e aplicação prática na criação de peças e paletas de cores.',
      modelingTitle: 'Modelagem',
      modelingDescription: 'Habilidades em modelagem, incluindo técnicas de moulage, desenvolvimento de moldes e criação de peças sob medida.',
      trendsTitle: 'Tendências e Estilos',
      trendsDescription: 'Atualizado sobre as últimas tendências de moda, estilos clássicos e a capacidade de identificar e aplicar elementos de design para criar peças inovadoras.',
      phrases: [
        "Criando looks que te inspiram.",
        "Transformando sonhos em realidade.",
        "Moda com propósito e paixão."
      ]
    },
    'en': {
      aboutNav: 'About me',
      projectsNav: 'Projects',
      knowledgeNav: 'Knowledge',
      contactNav: 'Contact me',
      hello: 'Hello 👋🏾',
      iAm: 'I am Natália,',
      contactButton: 'Contact me',
      about: 'About me',
      aboutText: 'I am Natalia, a young woman passionate about fashion and in the second year of the course, where I enthusiastically dedicate myself to creation and technique. My top marks in modeling reflect my natural talent for turning ideas into amazing pieces. The search for knowledge is constant, always exploring new techniques and improving my skills. My passion transcends the academic realm, participating in social projects where fashion becomes a tool for transformation. This experience shapes me as a professional, driving my growth and preparing me to build a promising career in the fashion world.',
      resumeButton: 'View my resume',
      projects: 'Projects',
      knowledge: 'Knowledge',
      contact: 'Contact me!',
      sewingTitle: 'Sewing',
      sewingDescription: 'Mastery of sewing techniques, from basic to advanced techniques, including pattern making and creating custom pieces.',
      colorTheoryTitle: 'Color Theory',
      colorTheoryDescription: 'Deep understanding of color theory, including color harmony, contrasts, psychological effects, and practical application in creating pieces and color palettes.',
      modelingTitle: 'Modeling',
      modelingDescription: 'Skills in modeling, including moulage techniques, pattern development, and creating custom pieces.',
      trendsTitle: 'Trends and Styles',
      trendsDescription: 'Updated on the latest fashion trends, classic styles, and the ability to identify and apply design elements to create innovative pieces.',
      phrases: [
        "Creating looks that inspire you.",
        "Transforming dreams into reality.",
        "Fashion with purpose and passion."
      ]
    }
  };

  let currentLanguage = 'pt-BR';
  let currentPhraseIndex = 0;
  const typingElement = document.querySelector(".line.typing");

  function translatePage() {
    const elementsToUpdate = {
      aboutNav: document.getElementById('aboutNav'),
      projectsNav: document.getElementById('projectsNav'),
      knowledgeNav: document.getElementById('knowledgeNav'),
      contactNav: document.getElementById('contactNav'),
      homeHello: document.querySelector('#home h4'),
      homeIAm: document.querySelector('#home h1'),
      homeContactButton: document.querySelector('#home .button'),
      aboutHeader: document.querySelector('#about header h2'),
      aboutContent: document.querySelector('#about .content p'),
      aboutButton: document.querySelector('#about .content .button'),
      projectsSection: document.querySelector('#projects .section-title'),
      knowledgeHeader: document.querySelector('#knowledge header h2'),
      contactHeader: document.querySelector('#contact header h2'),
      knowledgeCards: document.querySelectorAll('#knowledge .card'),
    };

    for (const [key, element] of Object.entries(elementsToUpdate)) {
      if (element) {
        switch (key) {
          case 'aboutNav':
            element.textContent = texts[currentLanguage].aboutNav;
            break;
          case 'projectsNav':
            element.textContent = texts[currentLanguage].projectsNav;
            break;
          case 'knowledgeNav':
            element.textContent = texts[currentLanguage].knowledgeNav;
            break;
          case 'contactNav':
            element.textContent = texts[currentLanguage].contactNav;
            break;
          case 'homeHello':
            element.textContent = texts[currentLanguage].hello;
            break;
          case 'homeIAm':
            element.textContent = texts[currentLanguage].iAm;
            break;
          case 'homeContactButton':
            element.textContent = texts[currentLanguage].contactButton;
            break;
          case 'aboutHeader':
            element.textContent = texts[currentLanguage].about;
            break;
          case 'aboutContent':
            element.textContent = texts[currentLanguage].aboutText;
            break;
          case 'aboutButton':
            element.textContent = texts[currentLanguage].resumeButton;
            break;
          case 'projectsSection':
            element.textContent = texts[currentLanguage].projects;
            break;
          case 'knowledgeHeader':
            element.textContent = texts[currentLanguage].knowledge;
            break;
          case 'contactHeader':
            element.textContent = texts[currentLanguage].contact;
            break;
          case 'knowledgeCards':
            if (element.length >= 4) {
              element[0].querySelector('h3').textContent = texts[currentLanguage].sewingTitle;
              element[0].querySelector('p').textContent = texts[currentLanguage].sewingDescription;
              element[1].querySelector('h3').textContent = texts[currentLanguage].colorTheoryTitle;
              element[1].querySelector('p').textContent = texts[currentLanguage].colorTheoryDescription;
              element[2].querySelector('h3').textContent = texts[currentLanguage].modelingTitle;
              element[2].querySelector('p').textContent = texts[currentLanguage].modelingDescription;
              element[3].querySelector('h3').textContent = texts[currentLanguage].trendsTitle;
              element[3].querySelector('p').textContent = texts[currentLanguage].trendsDescription;
            }
            break;
        }
      }
    }
  }

  function typePhrase(phrase, callback) {
    let charIndex = 0;
    function type() {
      if (charIndex < phrase.length) {
        typingElement.textContent += phrase.charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
      } else {
        setTimeout(callback, 2000);
      }
    }
    type();
  }

  function erasePhrase(callback) {
    let charIndex = typingElement.textContent.length;
    function erase() {
      if (charIndex > 0) {
        typingElement.textContent = typingElement.textContent.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
      } else {
        callback();
      }
    }
    erase();
  }

 function loopThroughPhrases(erasing = false) {
    if (erasing || !typingElement.textContent) {
      typePhrase(texts[currentLanguage].phrases[currentPhraseIndex], function () {
        erasePhrase(() => {
          currentPhraseIndex = (currentPhraseIndex + 1) % texts[currentLanguage].phrases.length;
          setTimeout(loopThroughPhrases, 2000); 
        });
      });
    } else {
      erasePhrase(() => loopThroughPhrases(true));
    }
  }

  const languageButtons = document.querySelectorAll('.language-button');
  languageButtons.forEach(button => {
    button.addEventListener('click', () => {
      document.querySelector('.language-button.active').classList.remove('active');
      button.classList.add('active');
      currentLanguage = button.dataset.lang;
      currentPhraseIndex = 0;
      typingElement.textContent = '';
      translatePage();
      loopThroughPhrases();
    });
  });

  translatePage();
  loopThroughPhrases();

  const languageButtons2 = document.querySelectorAll('.language-button img');

  function updateBorderColors() {
    if (window.scrollY === 0) {
      languageButtons2.forEach(button => {
        button.classList.add('top');
        button.classList.remove('scrolled');
      });
    } else {
      languageButtons2.forEach(button => {
        button.classList.add('scrolled');
        button.classList.remove('top');
      });
    }
  }

  window.addEventListener('scroll', updateBorderColors);
  updateBorderColors();

  const navigation = document.querySelector("#navigation");
  const backToTopButton = document.querySelector("#backToTopButton");
  const toggle = document.querySelector("#sw-checkbox");
  const about = document.querySelector("#about");
  const projects = document.querySelector("#projects");
  const knowledge = document.querySelector("#knowledge");
  const contact = document.querySelector("#contact");

  window.addEventListener("scroll", onScroll);
  onScroll();

  function onScroll() {
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
    const menuElement = document.querySelector(
      `.menu a[href*=${sectionId}]`
    );
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

  function openModal(images, index) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImage.src = images[index].querySelector("img").src;
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

  function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
    currentImages = [];
    currentImageIndex = 0;
    document.body.style.overflow = "auto";
    document.body.style.backgroundColor = "";
  }

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % currentImages.length;
    const modalImage = document.getElementById("modalImage");
    modalImage.src = currentImages[currentImageIndex].querySelector("img").src;
  }

  function prevImage() {
    currentImageIndex =
      (currentImageIndex - 1 + currentImages.length) % currentImages.length;
    const modalImage = document.getElementById("modalImage");
    modalImage.src = currentImages[currentImageIndex].querySelector("img").src;
  }

  document.querySelectorAll(".abrirModal").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const images = Array.from(
        e.target.closest(".img-wrapper").querySelectorAll("li")
      );
      const index = images.indexOf(e.target.parentElement);
      openModal(images, index);
    });
  });

  document.querySelector(".next-modal").addEventListener("click", (e) => {
    e.stopPropagation();
    nextImage();
  });

  document.querySelector(".prev-modal").addEventListener("click", (e) => {
    e.stopPropagation();
    prevImage();
  });

  document.getElementById("imageModal").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  });
});