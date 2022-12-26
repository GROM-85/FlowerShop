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
        
        refs.body.classList.toggle("no-scroll");
        clearInputs();

        if(/is-hidden/.test(refs.modal.classList.value)){
            console.log("hidden removed")
            refs.modal.classList.remove("is-hidden");
            refs.form.classList.add("animate__animated","animate__zoomIn");
            refs.modal.classList.add("animate__animated","animate__fadeIn");
            
        }
        else if(/animated/.test(refs.modal.classList.value)){
            refs.form.classList.remove("animate__zoomIn");
            refs.form.classList.add("animate__animated","animate__zoomOut");
            refs.modal.classList.add("animate__animated","animate__fadeOut");
            setTimeout(removeAnimation,1000);
        }
        
        
    };

    function removeAnimation(){
        refs.modal.classList.add("is-hidden");
        refs.form.classList.remove("animate__animated","animate__zoomOut","animate__zoomIn");
        refs.modal.classList.remove("animate__animated","animate__fadeOut","animate__fadeIn");
    }

    const clearInputs = () => {

        [...refs.inputElems].forEach(elem => {
            elem.classList.remove('error', 'animate__animated', 'animate__tada');
            elem.value = null;
        })

        refs.subscribeBtn.classList.remove("active");
    }

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
    };

    function validateInputByKeyUp(inputs){
        
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

        }  
        return validEmail ;
    }


    const sendSubForm = (e) =>{
        e.preventDefault();
        let checkValid  = validateInputByKeyUp([...refs.inputElems]);
        if(checkValid){
            refs.subscribeBtn.classList.add("active");
        }
    }

    refs.subscribeBtn.addEventListener("click", validation);
    refs.form.addEventListener("keyup",(e) => sendSubForm(e));
})();