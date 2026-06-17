const senha = document.getElementById("Senha");
const confirmarSenha = document.getElementById("Senharep");
const forca = document.getElementById("Forca");
const message = document.getElementById("PasswordMessage");
const user = document.getElementById("Nickname");

const maxPassLength = 32;
const minPassLength = 8;
const maxNicknameLength = 40;
const minNicknameLength = 8;
const warnings = {
        strengthStrings : ["FORTE!","bruh...","fraca","média"],

        messages : ["","A senha precisa conter pelo menos 8 caracteres!",
        "A senha precisa conter um número!",
        "A senha precisa conter um caractere especial!",""],

        colors : ["color: green","color: red;",
        "color: saddlebrown;",
        "color: orange;"]
    }

function validatePassword() {
    let passString = senha.value.toString();

    if(passString.length == 0){
        forca.textContent = "-";
        forca.style = "color: aliceblue;";
        message.textContent = "";
        message.style = "";
        return
    }

    let passconfirmString = confirmarSenha.value.toString();

    senha.setCustomValidity("");
    confirmarSenha.setCustomValidity("");

    let strength = 0;
    
    if(passString.length < minPassLength){
        strength = 1;
    }else if(!(/\d/.test(passString))){ //num check
        strength = 2;
    }else if(!/[^A-Za-z0-9]/.test(passString)){ //special check
        strength = 3;
    }

    message.textContent = warnings.messages[strength];
    message.style = warnings.colors[strength];
    forca.textContent = warnings.strengthStrings[strength];
    forca.style = warnings.colors[strength];

    senha.setCustomValidity(warnings.messages[strength]);

    if(senha.checkValidity() && passString !== passconfirmString){
        message.textContent = "As senhas precisam ser iguais!";
        message.style = "color: orange;";
        confirmarSenha.setCustomValidity("As senhas precisam ser iguais!");
    }
    
    if(passString.length > maxPassLength){
        confirmarSenha.setCustomValidity(`A senha não pode ser maior que ${maxNicknameLength} caracteres!`)
        message.textContent = `A senha não pode ser maior que ${maxNicknameLength} caracteres!`;
        message.style = "color: red;";
    }
}

function validateUser () {
    let userString = user.value.toString();
    if(userString.length == 0){
        message.textContent = "";
        message.style = "";
        return
    }
    user.setCustomValidity("");
    if(userString.length > maxNicknameLength){
        user.setCustomValidity(`O nome de usuário não pode ser maior que ${maxNicknameLength} caracteres!`);
        message.textContent = `O nome de usuário não pode ser maior que ${maxNicknameLength} caracteres!`;
        message.style = "color: red;";
        user
    }else if(userString.length < minNicknameLength){
        user.setCustomValidity(`O nome de usuário não pode ser menor que ${minNicknameLength} caracteres!`);
        message.textContent = `O nome de usuário não pode ser menor que ${minNicknameLength} caracteres!`;
        message.style = "color: red;";
    }
}

senha.addEventListener('input', validatePassword);
confirmarSenha.addEventListener('input', validatePassword);
user.addEventListener('input', validateUser);
