const senha = document.getElementById("Senha");
const confirmarSenha = document.getElementById("Senharep");
const forca = document.getElementById("Forca");
const message = document.getElementById("PasswordMessage");
const user = document.getElementById("Nickname");
const mail = document.getElementById("Email");

const maxPassLength = 32;
const minPassLength = 8;
const maxNicknameLength = 40;
const minNicknameLength = 8;
const maxMailLength = 256;
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
    senha.setCustomValidity("");
    confirmarSenha.setCustomValidity("");

    let passString = senha.value.toString();

    if(passString.length == 0){
        forca.textContent = "-";
        forca.style = "color: aliceblue;";
        message.textContent = "";
        message.style = "";
        return
    }

    let passconfirmString = confirmarSenha.value.toString();

    let strength = 0;
    
    if(passString.length < minPassLength){
        strength = 1;
    }else if(!(/\d/.test(passString))){ //num check
        strength = 2;
    }else if(!/[^A-Za-z0-9]/.test(passString)){ //special check
        strength = 3;
    }

    validateLength(senha, minPassLength, maxPassLength);

    message.textContent = warnings.messages[strength];
    message.style = warnings.colors[strength];
    forca.textContent = warnings.strengthStrings[strength];
    forca.style = warnings.colors[strength];

    senha.setCustomValidity(warnings.messages[strength]);
}

function validatePassRepetition(){
    if(senha.checkValidity() && senha.value !== confirmarSenha.value){
        message.textContent = "As senhas precisam ser iguais!";
        message.style = "color: orange;";
        confirmarSenha.setCustomValidity("As senhas precisam ser iguais!");
        return
    }

    confirmarSenha.setCustomValidity("");
    message.textContent = "";
}

senha.addEventListener('input', validatePassword);
confirmarSenha.addEventListener('input', validatePassRepetition);
user.addEventListener('input', () => validateLength(user, minNicknameLength, maxNicknameLength));
mail.addEventListener('input', () => validateLength(mail, 0, maxMailLength));

