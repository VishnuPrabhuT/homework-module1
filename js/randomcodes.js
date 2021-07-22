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

let btnValue;

function disableButton(btnValue) {
    document.getElementById("submit").disabled = btnValue;

    if (btnValue == true) {
        document.querySelector("#submit").style.backgroundColor = "rgba(73, 119, 209, 0.3)";
        document.querySelector("#submit").style.color = "rgba(255, 255, 255, 0.5)";
    } else {
        document.querySelector("#submit").style.backgroundColor = "rgba(73, 119, 209, 0.1)";
        document.querySelector("#submit").style.color = "rgba(255, 255, 255, 1)";
    }
}

let codebox = document.querySelector("#codeentered");
let codes = document.querySelector("#codes").innerText;

codebox.addEventListener("input", evaluateCode);

function evaluateCode() {
    getCode = document.querySelector("#codeentered").value;
    let charset1 = getCode.trim();
    let charset2 = codes.trim();

    if (charset1.length == charset2.length && charset1 == charset2) {
        disableButton(false);
    }
}
