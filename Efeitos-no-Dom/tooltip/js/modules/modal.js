export default function initModal() {
  const openModalBtn = document.querySelector('[data-modal="abrir"]');
  const closeModalBtn = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  if (openModalBtn && closeModalBtn && containerModal) {
    function openModal(event) {
      event.preventDefault();
      containerModal.classList.add("ativo");
    }

    function closeModal() {
      containerModal.classList.remove("ativo");
    }

    function clickOutModal(event) {
      if (event.target === this) {
        closeModal();
      }
    }

    openModalBtn.addEventListener("click", openModal);
    closeModalBtn.addEventListener("click", closeModal);
    containerModal.addEventListener("click", clickOutModal);
  }
}
