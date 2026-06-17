function checkPasswordStrength(password){
    let passwordStrength = 0;
    
    if(password.length < 8){
        passwordStrength = 1;
    }else if(!(/\d/.test(password))){ //num check
        passwordStrength = 2;
    }else if(!/[^A-Za-z0-9]/.test(password)){ //special check
        passwordStrength = 3;
    }
    return passwordStrength;
}
