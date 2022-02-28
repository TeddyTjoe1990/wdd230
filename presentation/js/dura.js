function change() {
    const elements = document.querySelectorAll("div.box");
    for (let element of elements) {
        element.classList.toggle("transformed-state");
    }
}

const changeButton = document.querySelector("#change");
changeButton.addEventListener("click", change);