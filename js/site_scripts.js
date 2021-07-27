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