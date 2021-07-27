document.querySelector("fieldset div.selectmenu:nth-child(3) select").addEventListener("change", (e) => {
    let contactMethod = document.querySelector("#contactMethod");
    if (contactMethod) {
        contactMethod.remove();
    }

    let template = document.querySelector("template");
    let fieldset = document.querySelector("fieldset");
    let clone = template.content.cloneNode(true);

    clone.querySelector("label").textContent = `${e.target.value}:`;
    clone.querySelector("input").name = `${e.target.value}`;
    clone.querySelector("input").placeholder = e.target.value == "Phone" ? "xxx-xxx-xxxx" : "johndoe@gmail.com";

    document.querySelector("fieldset div.selectmenu:nth-child(3)").insertAdjacentElement("afterend", clone.firstElementChild);
});