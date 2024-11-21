let createPassword = document.getElementById('createPassword');
let confirmPassword = document.getElementById('confirmPassword');

let toggleCreatePassword = document.getElementById('toggleCreatePassword');
let toggleConfirmPassword = document.getElementById('toggleConfirmPassword');

toggleCreatePassword.addEventListener('click', function() {
    if(createPassword.type === 'password'){
        createPassword.type = 'text';
        toggleCreatePassword.src = 'img register/eyex.png';
    }else{
        createPassword.type = 'password';
        toggleCreatePassword.src = 'img register/eye.png';

    }
});

toggleConfirmPassword.addEventListener('click', function() {
    if(confirmPassword.type === 'password'){
        confirmPassword.type = 'text';
        toggleConfirmPassword.src = 'img register/eyex.png';
    }else{
        confirmPassword.type = 'password';
        toggleConfirmPassword.src = 'img register/eye.png';

    }
});


