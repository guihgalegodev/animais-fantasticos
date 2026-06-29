function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add("ativo", direcao);
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

function initAccordionList() {
  const accordionList = document.querySelectorAll(
    "[data-anime='accordion'] dt",
  );

  const activeClass = "ativo";

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((dt) => {
      dt.style.cursor = "pointer";
      dt.addEventListener("click", activeAccordion);
    });
  }
}

initAccordionList();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    "[data-menu='suave'] a[href^='#'",
  );

  function scrollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    const topo = section.offsetTop;

    window.scrollTo({
      top: topo,
      behavior: "smooth",
    });

    // section.scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    // });
  }
  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

initScrollSuave();

function initAnimacaoScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isVisible = sectionTop - windowMetade < 0;

        if (isVisible) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo");
        }
      });
    }

    window.addEventListener("scroll", animaScroll);
    animaScroll();
  }
}

initAnimacaoScroll();
