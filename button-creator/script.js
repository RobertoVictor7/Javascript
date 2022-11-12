const controles = document.querySelector('#controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');

const handleStyle = {
    element: btn,
    texto(value){
        this.element.innerText = value;
    },
    color(value){
        this.element.style.color = value;
    },
    backgroundColor(value) {
        this.element.style.backgroundColor = value;
    },
    height(value) {
        this.element.style.height = value + 'px';
    },
    width(value){
        this.element.style.width = value + 'px';
    },
    padding(value) {
        this.element.style.padding = value + 'px';
    },
    border(value) {
        this.element.style.border = value + 'px solid'
    },
    borderRadius(value) {
        this.element.style.borderRadius = value + 'px';
    },
    fontFamily(value) {
        this.element.style.fontFamily = value;
    },
    textTransform(value) {
        this.element.style.textTransform = value;
    },
    fontSize(value){
        this.element.style.fontSize = value + 'px';
    }
}

function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
   
    handleStyle[name](value);
}

function showCss(){
    cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join('; </span><span>');
    console.log(btn.style)
}

btn.addEventListener('click', showCss);

controles.addEventListener('change', handleChange)