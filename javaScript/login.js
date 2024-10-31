let email = document.getElementById('email');
let password = document.getElementById('password');
let form = document.querySelector('form');
let loginMessage = document.getElementById('loginMessage');


function emailCheck(email){
    let emailPattern =
    /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email);
}

function passwordCheck(password) {
    let passwordPattern = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    return passwordPattern.test(password);
}

function clearMessage(){
    loginMessage.textContent = "";
}

function inputsCheck(e) {
    e.preventDefault();
    const emailValid = emailCheck(email.value);
    const passwordValid = passwordCheck(password.value);

    if (email.value === "" || password.value === "") {
        loginMessage.textContent = "Todos os campos são obrigatórios";
        loginMessage.style.color = "red";
    } else if (!emailValid && !passwordValid) {
        loginMessage.textContent = "Email ou senha inválidos";
        loginMessage.style.color = "red";
    } else if (!emailValid) {
        loginMessage.textContent = "Email ou senha inválidos";
        loginMessage.style.color = "red";
    } else if (!passwordValid) {
        loginMessage.textContent = "A senha deve ter no mínimo 8 caracteres";
        loginMessage.style.color = "red";
    } else {
        loginMessage.textContent = "Dados Ok";
        loginMessage.style.color = "green";
    }
}

form.addEventListener('submit',inputsCheck );
