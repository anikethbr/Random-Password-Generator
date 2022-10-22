function genRandomLowerCase(){
    const randLowerCase="abcdefghijklmnopqrstuvwxyz";
    const random = Math.floor(Math.random()*randLowerCase.length);
    return randLowerCase.substring(random,random+1)
}
function genRandomUpperCase(){
    const randUpperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const random = Math.floor(Math.random()*randUpperCase.length);
    return randUpperCase.substring(random,random+1)
}
function genRandomNumbers(){
    const randNumbers="0123456789";
    const random = Math.floor(Math.random()*randNumbers.length);
    return randNumbers.substring(random,random+1)
}
function genRandomSpecialCharacters(){
    const randSpecialCharacters="!@#$%^&*(){}[]:/*-+<>/_";
    const random = Math.floor(Math.random()*randSpecialCharacters.length);
    return randSpecialCharacters.substring(random,random+1)
}
function genPassword(){
    const passwordLength = document.getElementById("length").value;
    let password=""
    const functions=[genRandomLowerCase,genRandomUpperCase,genRandomNumbers,genRandomSpecialCharacters];
    for(var i=0; i<passwordLength; i++) {
        const random = Math.floor(Math.random()*functions.length);
        password += functions[random]();
    }
    document.getElementById("password").value = password;
}
function copyPassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");  
}

