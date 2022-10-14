function initTabNav() {
const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
const tabContent = document.querySelectorAll('[data-tab="content"] section');

if (tabMenu.length && tabContent.length) {
  tabContent[0].classList.add('ativo')

  function activeTab(index) {
    tabContent.forEach((item) => {
      item.classList.remove("ativo");
    });

    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add("ativo", direcao);
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
const faqTitle = document.querySelectorAll('[data-faq="lista"] dt');

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

function initAnimacaoScroll() {
const sections = document.querySelectorAll('[data-tab="scroll"]')
if(sections.length) {
const windowMetade = window.innerHeight * 0.6

function animaScroll(){
  sections.forEach((item) => {
    const sectionTop = item.getBoundingClientRect().top;
    const isSectionVisible = (sectionTop - windowMetade) < 0;

    if(isSectionVisible) {
      item.classList.add('ativo')
    }
  })
}

animaScroll()

window.addEventListener('scroll', animaScroll)
}}

initAnimacaoScroll()