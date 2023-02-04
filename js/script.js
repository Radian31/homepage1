console.log("Hej wszystkim developerom");

let buttonElement = document.querySelector(".js-button");

let changeBackgrund = document.querySelector(".js-changeBackground");
let body = document.querySelector(".body");
let innerColor = document.querySelector(".js-innerColor");

changeBackgrund.addEventListener("click", () => {
    body.classList.toggle("innerBackground");
    innerColor.innerText = body.classList.contains("innerBackground") ? "jasny" : "ciemny";
});