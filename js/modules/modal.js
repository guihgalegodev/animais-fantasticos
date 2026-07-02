export default function activeModal() {
  const linkLogin = document.querySelector("[data-modal='abrir']");
  const fecharModal = document.querySelector("[data-modal='fechar']");
  const modalContainer = document.querySelector("[data-modal='container']");
  const active = "ativo";

  if (linkLogin && fecharModal && modalContainer) {
    function toggleModal(e) {
      e.preventDefault();
      modalContainer.classList.toggle(active);
    }

    function cliqueForaModal(e) {
      if (e.target === this) {
        toggleModal(e);
      }
    }

    linkLogin.addEventListener("click", toggleModal);
    fecharModal.addEventListener("click", toggleModal);
    modalContainer.addEventListener("click", cliqueForaModal);
  }
}
