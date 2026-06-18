function validateLength(field, min, max){
    let fieldString = field.value;

    if (fieldString.length > max){
        field.value = field.value.slice(0, max);
        return
    }
    if (fieldString.length < min){
        field.setCustomValidity(`${field.id} não pode conter menos do que ${min} caraceteres!`)
        return
    }

    field.setCustomValidity("");
}