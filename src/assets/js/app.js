const form = document.getElementById('form');

const password1 = document.getElementById('password');

const password2 = document.getElementById('confirm-password');

const errMsg = document.getElementById('error-msg');

form.addEventListener('submit',(event)=>{
    event.preventDefault();

    if(password1.value != password2.value){
        password1.setCustomValidity("Passwords don't match");
        password2.setCustomValidity("Passwords don't match");

        if(errMsg.value ==''){
            errMsg.value = '* Passwords do not match'
        }
    }
})


password2.addEventListener('input', ()=>{
    if(password1.value != password2.value){
        password2.classList.add('invalid');
        errMsg.textContent = '* Passwords do not match'
    }else{
        password2.classList.remove('invalid');
        errMsg.textContent = '';
    }
})