let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", function(dets) {
    dets.preventDefault();
    document.querySelector("#emailError").textContent = "";
    document.querySelector("#passwordError").textContent = "";


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    let emailans = emailRegex.test(email.value);
    let passwordans = passwordRegex.test(password.value);
    if (!emailans) {
        document.querySelector("#emailError").textContent = "Please enter a valid email address.";
    }

    if (!passwordans) {
        document.querySelector("#passwordError").textContent = "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.";
    }

})