const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent section");

if (tabMenu.length && tabContent.length) {
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

  window.onload(activeTab(0));
}
