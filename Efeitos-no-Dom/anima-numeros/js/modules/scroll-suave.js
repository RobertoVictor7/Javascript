export default function initScrollSuave() {
    const linksInternos = document.querySelectorAll('[data-tab="menu"] a[href^="#"]');
    
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href)
    
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    
      // FORMA ALTERNATIVA
      // const topo = section.offsetTop
      // window.scrollTo({
      //   top: topo,
      //   behavior: "smooth",
      // });
    }
    
    linksInternos.forEach((item => {
      item.addEventListener('click', scrollToSection)
    }))
    }
    
 initScrollSuave();