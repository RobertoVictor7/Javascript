function initTabNav() {
const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent section");

if (tabMenu.length && tabContent.length) {
  tabContent[0].classList.add('ativo')

  function activeTab(index) {
    tabContent.forEach((item) => {
      item.classList.remove("ativo");
    });

    tabContent[index].classList.add("ativo");
  }

  tabMenu.forEach((item, index) => {
    item.addEventListener("click", function () {
      activeTab(index);
    });
  });

  
}
}

initTabNav();

function initAccordion(){
const faqTitle = document.querySelectorAll('.js-faqlista dt');

if(faqTitle.length) {
faqTitle[0].nextElementSibling.classList.add('ativo')

function activeFaq() {
  this.nextElementSibling.classList.toggle('ativo')
}

faqTitle.forEach((item) => {
  item.addEventListener("click", activeFaq)
})
}
}

initAccordion()

function initScrollSuave() {
const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

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