$(document).ready(function () {
    $("table tbody tr :not(td:first-child)").bind("click", function (e) {
        if (!$(e.target).text().includes("Not Available")) {
            $(e.target).toggleClass("selected");
        }
    });

    $("table tbody tr :not(td:first-child):contains('Not Available')").toggleClass("no-select");
});


// document.querySelectorAll("table tbody tr :not(td:first-child)").forEach(td => {
//     console.log(td.innerText);
//     if (!td.innerText.includes("Not Available")) {
//         td.addEventListener("click", e => {
//             e.target.classList.toggle("selected");
//         })
//     }
// })