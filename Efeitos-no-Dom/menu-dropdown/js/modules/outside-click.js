export default function outsideClick(element, callback) {
    const html = document.documentElement;
    const outside = "data-outside";
  
    if (!element.hasAttribute(outside)) {
      html.addEventListener("click", handleOutsideClick);
      element.removeAttribute(outside, "");
    }
  
    function handleOutsideClick(event) {
      if (!element.contains(event.target)) {
        html.removeEventListener("click", handleOutsideClick);
        callback();
      }
    }
  }
  