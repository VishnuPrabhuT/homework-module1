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
}


let codebox = document.querySelector("#codeentered");
codebox.addEventListener("input", evaluateCode);

function evaluateCode() {
    let codes = document.querySelector("#codes").innerText;
    let getCode = document.querySelector("#codeentered").value;
    let charset1 = getCode.trim();
    let charset2 = codes.trim();

    if (charset1.length == charset2.length && charset1 == charset2) {
        disableButton(false);
    }
    else {
        disableButton(true);
    }
}
