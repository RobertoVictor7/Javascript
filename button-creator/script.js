const controles = document.querySelector('#controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');
const clearBtn = document.querySelector('.clearData');

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
        this.element.style.fontSize = value + 'rem';
    }
}

function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
   
    handleStyle[name](value);
    saveValues(name, value);
    showCss();
}

function showCss(){
    cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join('; </span><span>');
}

btn.addEventListener('click', showCss);
controles.addEventListener('change', handleChange);

function saveValues(name, value){
    localStorage[name] = value;
}

function setValues(){
    const properties = Object.keys(localStorage);
    properties.forEach(propertie => {
        handleStyle[propertie](localStorage[propertie]);
        controles.elements[propertie].value = localStorage[propertie];
    })
    showCss();
}

function clearData() {
    localStorage.clear();
}

clearBtn.addEventListener('click', clearData);

setValues();