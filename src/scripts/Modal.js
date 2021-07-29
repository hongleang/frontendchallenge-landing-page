const Modal = () => {
  const modal = document.querySelector(".modal");
  const hamburgerButton = document.querySelector("#hamburgerButton");

  const clickHandler = () => {
    modal.classList.toggle("active");
  };

  return hamburgerButton.addEventListener("click", clickHandler);
};


export default Modal;