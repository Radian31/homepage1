{
    const welcome = () => {
        console.log("Hej wszystkim developerom");
    }


    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const innerColor = document.querySelector(".js-innerColor");

        body.classList.toggle("innerBackground");
        innerColor.innerText = body.classList.contains("innerBackground") ? "jasny" : "ciemny";
    }


    const init = () => {
        const changeBackgrund = document.querySelector(".js-changeBackground");
        changeBackgrund.addEventListener("click", toggleBackground);
        welcome();
    }
    init();
}
