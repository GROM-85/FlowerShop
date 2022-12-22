(() => {
    const refs = {
        openModalBtn: document.querySelector('.blog__btn-subscribe'),
        closeModalBtn: document.querySelector('.modal__btn-close'),
        modal: document.querySelector('.backdrop__subscribe'),
        body: document.querySelector('body'),
        form: document.querySelector('.modal__subscribe'),
        subscribeBtn: document.querySelector('.modal__btn-subscribe'),
        inputElems : document.getElementsByClassName('modal__input'),
    }

    refs.openModalBtn.addEventListener("click", subscribeModal);
    refs.closeModalBtn.addEventListener("click", subscribeModal);
    


    function subscribeModal() {        
        refs.modal.classList.toggle("is-hidden");
        refs.body.classList.toggle("no-scroll");
        
        [...refs.inputElems].forEach(elem => {
            elem.classList.remove('error', 'animate__animated', 'animate__tada');
            elem.value = null;
        })
        
    };

    const validation = () => {        
        
        let isValid = false;

        for (let i = 0; i < refs.inputElems.length; i++) {
            let elem = refs.inputElems[i];
            elem.classList.remove('error', 'animate__animated', 'animate__tada');

            let emailPattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(elem.value);
            let textPattern = /[a-zA-Z0-9]/.test(elem.value);

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
                subscribeModal();             
                
            }
        }
    }

    refs.subscribeBtn.addEventListener("click", validation);
    
})();