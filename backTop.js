document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById("back-to-top");
  const sectionSelector = document.getElementById("section-selector");
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
      sectionSelector.style.display = "none";
    }
  });

  backToTopButton.addEventListener("mouseover", () => {
    sectionSelector.style.display = "block";
  });

  backToTopButton.addEventListener("mouseout", () => {
    sectionSelector.style.display = "none";
  });

  sectionSelector.addEventListener("mouseover", () => {
    sectionSelector.style.display = "block";
  });

  sectionSelector.addEventListener("mouseout", () => {
    sectionSelector.style.display = "none";
  });

  sectionSelector.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      e.preventDefault();
      const targetId = e.target.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
        sectionSelector.style.display = "none";
      }
    }
  });

  let lastScrollY = window.scrollY;

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      const sectionLink = document.querySelector(
        `a[href="#${entry.target.id}"]`
      );
      if (!sectionLink) {
        return;
      }
      const sectionListItem = sectionLink.parentElement;

      if (entry.isIntersecting) {
        sectionListItem.style.display = "block";
      } else if (!entry.isIntersecting && window.scrollY < lastScrollY) {
        sectionListItem.style.display = "none";
      }
    });

    lastScrollY = window.scrollY;
  };

  const observerOptions = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  sections.forEach((section) => observer.observe(section));

  const sectionLinks = document.querySelectorAll("#section-selector ul li");
  sectionLinks.forEach((link) => {
    link.style.display = "none";
  });
});


const button = document.getElementById('themeButton')


button.addEventListener('click', function(){
    const body = document.querySelector('body')
    const footer = document.querySelector('footer')

    if(body.dataset.theme === 'dark'){
        body.style.backgroundColor = '#fff'
        body.style.color = '#000'
        footer.style.backgroundColor = '#a0a0a0'
        footer.style.color = '#000'
        button.classList.add('buttonThemeBlack')
        button.innerText = 'Tema Escuro'
        body.dataset.theme = 'light'
    }
     else{
        body.style.backgroundColor = '#000'
        body.style.color = '#fff'
        footer.style.backgroundColor = '#05030a'
        footer.style.color = '#fff'
        button.classList.remove('buttonThemeBlack')
        button.innerText = 'Tema Claro'
        body.dataset.theme = 'dark'
    }
})

