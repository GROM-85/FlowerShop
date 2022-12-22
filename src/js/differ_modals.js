(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    form: document.querySelector('[alt-form]')
  };
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.form.addEventListener("click", formSubmit);
  function formSubmit(e){
    e.preventDefault();
    if(e.target.tagName==='BUTTON'){
      toggleModal();
    }
  }
  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
(() => {
  const refs = {
    openModalBtn: document.querySelectorAll("[js-data-modal-open]"),
    closeModalBtn: document.querySelectorAll("[js-data-modal-close]"),
    modal: document.querySelector("[js-data-modal]"),
  };
  refs.openModalBtn.forEach(el=>el.addEventListener("click", toggleModal));
  refs.closeModalBtn.forEach(el=>el.addEventListener("click", toggleModal));
  function toggleModal() {
    document.querySelector('[aside]').style.display = 'none';
    document.querySelector('[contact]').style.display = 'block';
    document.querySelector('[js-send-btn]').innerText='Send';
    refs.modal.classList.toggle("is-hidden");
  }
})();

// ----------------------------------
const formSend = document.querySelector('[js-send-form]'); 
const btnSend = document.querySelector('[js-send-btn]');
const asideBlock = document.querySelector('[aside]');
const contactBlock = document.querySelector('[contact]');
const modal = document.querySelector('[js-data-modal]')
formSend.addEventListener('click', (e)=>sendPost(e));
function sendPost (e){
  e.preventDefault() 
  if(e.target.tagName==='BUTTON' && btnSend.innerText==='Send'){
    asideBlock.style.display = 'block';
    contactBlock.style.display = 'none';
    btnSend.innerText='Continue';
    return;
  }
  if(e.target.tagName==='BUTTON' && btnSend.innerText==='Continue'){
    asideBlock.style.display = 'none';
    contactBlock.style.display = 'block';
    btnSend.innerText='Send';
    modal.classList.add("is-hidden");
    return;
  }
}

//------- Order modal -------
(() => {
  
  const openModalBtn = document.querySelector('[store-open]');
  const closeModalBtn = document.querySelector('[shop-close]');
  const orderModal = document.querySelector('[shop-backdrop]');
  const openOrderFromHeroBtn = document.querySelector('[shop-open]');
  const orderForm = document.querySelector('[shop-form]');
  openModalBtn.addEventListener('click', () => toggleIsHidden(orderModal));
  closeModalBtn.addEventListener('click', () => toggleIsHidden(orderModal));
  openOrderFromHeroBtn.addEventListener('click', () =>
    toggleIsHidden(orderModal)
  );
  const modalThanks = document.querySelector('[thanks-modal]');
  const closeThanksModalBtn = document.querySelector('[thank-close]');
  const continueThanksModalBtn = document.querySelector('[thank-continue]');
  closeThanksModalBtn.addEventListener('click', () =>
    toggleIsHidden(modalThanks)
  );
  continueThanksModalBtn.addEventListener('click', () =>
    toggleIsHidden(modalThanks)
  );
  function toggleIsHidden(object) {
    object.classList.toggle('is-hidden');
  }
  function toggleIsHidden(object, shoudDisableScroll = false) {
    object.classList.toggle('is-hidden');
    if (shoudDisableScroll) {
      document.body.style.overflowY = 'hidden';
      return;
    }
    document.body.style.overflowY = null;
  }
  orderForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var checkValid = validatInputs(orderForm.getElementsByTagName('input'));
    if (checkValid) {
      toggleIsHidden(modalThanks);
      toggleIsHidden(orderModal);
      clearInputs(orderForm.getElementsByTagName('input'));
    }
  });
  function validatInputs(inputs) {
    for (let element of inputs) {
      if (!element.validity.valid) {
        return false;
      }
    }
    return true;
  }
  function clearInputs(inputs) {
    for (let element of inputs) {
      element.value = null;
    }
  }
})();