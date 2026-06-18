    const user = document.getElementById("Nickname/email");
    const password = document.getElementById("Senha");
    const passMaxLength = 32;
    const passMinLength = 8;
    const usrMaxLength = 40;
    const usrMinLength = 8;

    user.addEventListener('input', () => validateLength(user, usrMinLength, usrMaxLength));
    password.addEventListener('input', () => validateLength(password, passMinLength, passMaxLength));