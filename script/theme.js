let button = document.querySelector("#Theme-toggle");
let checker = false

function handleClick() {
    document.body.classList.toggle("dark")
    let message = document.getElementById("Theme-toggle");
    if (checker == false) {
        message.textContent = "Switch to Light Mode";
        checker = true
    }
    else {
        message.textContent = "Switch to Dark mode";
        checker = false
    }
}

button.addEventListener("click", handleClick);
