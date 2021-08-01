import { state } from "./state.js";

$(document).ready(function () {
    $("table tbody tr :not(td:first-child)").bind("click", function (e) {
        if (!$(e.target).text().includes("Not Available")) {
            $(e.target).toggleClass("selected");

            $("#result p").remove();

            let header = $(`table th:nth-child(${e.target.cellIndex + 1})`).text();
            state[`${e.target.innerText} at ${header}`] = "";
            state.activities.forEach(activity => {
                $("#result").append(`<p>${activity}</p>`);
            });
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
// });