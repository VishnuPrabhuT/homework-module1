function randomCodes() {
    let len = 8;
    let captcha = "";
    let code = "abcdefghijklmnopqrstuvwxyz";
    code = code + code.toUpperCase();
    code = code + "0123456789@#$";

    while (captcha.length < len) {
        captcha += code[Math.floor(Math.random() * code.length)];
    }

    return captcha;
}

document.querySelector("#codes").innerText = randomCodes();

function disableButton() {
    document.getElementById("submit").disabled = true;
}
disableButton();