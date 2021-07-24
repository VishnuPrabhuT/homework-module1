function addPartners() {
    let ul = document.querySelector("#partners");

    let images = [];
    images.push("partner-bustour");
    images.push("partner-cabinrental");
    images.push("partner-campingadv");
    images.push("partner-collegetours");
    images.push("partner-rentalbike");
    images.push("partner-tourgroup");

    images.forEach(imageName => {
        let li = document.createElement("li");
        li.classList.add("partner");
        let img = document.createElement("img");
        img.src = `images/partners/${imageName}.png`;
        li.appendChild(img);
        ul.appendChild(li);
    });
}

addPartners();

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