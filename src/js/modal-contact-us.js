(() => {
  const refs = {
      modal: document.querySelector("[data-modal]"),  

      openModalBtn: document.querySelector("[data-modal-open]"),
      heroBtn: document.querySelector('.hero__button'),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      
      inputElems : document.getElementsByClassName('modal-contact-us__input'),
      sendBtn : document.querySelector(".modal-contact-us__btn"),
      formSend: document.querySelector(".modal-contact-us__form"),
      modalSend: document.querySelector(".modal-contact-us"),
      
      modalThanks : document.querySelector('.modal-thank-you'),
      continueBtn: document.querySelector('.modal-thank-you__btn'),
      closeThanksBtn: document.querySelector('.modal-thank-you__btn-close'),
      
      body : document.querySelector('body'),   
  }; 
    
    

  function toggleModal(obj) {
      
    obj.classList.toggle("is-hidden");
    console.log(obj.classList.value);
    
    if (obj.classList.value.startsWith("backdrop")) {
      refs.body.classList.toggle("no-scroll")
    }

    if (/^modal-contact-us$/.test(refs.modalSend.classList.value)){
      refs.modalSend.classList.add("animate__animated",'animate__zoomIn');
    }
    else {
      refs.modalSend.classList.remove("animate__animated",'animate__zoomIn');
    };

    if(/modal-thank-you$/.test(refs.modalThanks.classList.value)){
      refs.modalThanks.classList.add("animate__animated",'animate__zoomIn');
    }
    else if(/is-hidden/.test(refs.modalThanks.classList.value)){
      refs.modalThanks.classList.remove("animate__animated",'animate__zoomIn');
      refs.modalSend.classList.remove("is-hidden");

    }

    
    clearInputs();
      
  }

  function removeAnimationContact(obj){
    if(obj.classList.value){

    }
  }
    
    const clearInputs = () => {
      [...refs.inputElems].forEach(elem => {
          elem.classList.remove('error', 'animate__animated', 'animate__tada');
          elem.value = null;
      })
      refs.sendBtn.classList.remove("active");
    }

    const validationByBtn = () => {
      let isValid = false;
      for (let i = 0; i < refs.inputElems.length; i++) {
          let elem = refs.inputElems[i];
          elem.classList.remove('error', 'animate__animated', 'animate__tada');
        
        let emailPattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(elem.value);
          let textPattern = /[a-zA-Z0-9]{5,}/.test(elem.value);
          
          if (!textPattern && elem.name == "name"){
                elem.classList.add('error', 'animate__animated', 'animate__tada');                
                break;
            }

            if(!emailPattern && elem.name == "email"){
                elem.classList.add('error', 'animate__animated', 'animate__tada');                
                break;
            }
            
            if (i === refs.inputElems.length - 1) {
                isValid = true;
            }

            if (isValid === true) {
              toggleModal(refs.modalThanks);           
              toggleModal(refs.modalSend);               
            }
      }
  }

  const validateInputs = (inputs) => {     
    let validName = false;
    let validEmail = false;

    for (let i = 0; i < inputs.length; i++) {
      let input = inputs[i];
      
      if (input.name === "email") {
        
          console.log(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(input.value));
          validEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(input.value);
          if (validEmail) {
            input.classList.remove('error', 'animate__animated', 'animate__tada');            
          }         
      }

      if (input.name === "name") {
        
          console.log(/[a-zA-Z0-9]{5,}/.test(input.value));
          validName = /[a-zA-Z0-9]{5,}/.test(input.value);
          if (validName) {
            input.classList.remove('error', 'animate__animated', 'animate__tada');             
          }              
      }       
    }  
    return validEmail && validName;
  }

  const sendForm = (e) => {
    e.preventDefault();    
    let checkValid = validateInputs([...refs.inputElems]);
    console.log(`Valid:${checkValid}`)
    if (checkValid) {
      refs.sendBtn.classList.add("active");
    }

  }

  refs.openModalBtn.addEventListener("click", () => toggleModal(refs.modal));
  refs.closeModalBtn.addEventListener("click", () => toggleModal(refs.modal));
  refs.heroBtn.addEventListener("click", () => toggleModal(refs.modal));

  // refs.closeThanksBtn.addEventListener("click", () => toggleModal(refs.modal));
  // refs.closeThanksBtn.addEventListener("click", () => toggleModal(refs.modalThanks));
  // refs.closeThanksBtn.addEventListener("click", () => toggleModal(refs.modalSend));

  refs.continueBtn.addEventListener("click", () => toggleModal(refs.modal));
  refs.continueBtn.addEventListener("click", () => toggleModal(refs.modalThanks));
  // refs.continueBtn.addEventListener("click", () => toggleModal(refs.modalSend));

  refs.sendBtn.addEventListener("click", validationByBtn);
  refs.formSend.addEventListener("keyup", (e) => sendForm(e));

  
  

  })();  
  
  