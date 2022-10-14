export default function initAccordion(){
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