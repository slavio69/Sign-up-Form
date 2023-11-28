const password = document.querySelector('#password');
const confirm = document.querySelector('#confirm');
const errorMessage = document.querySelector('#error-message');
const form = document.querySelector('form');

window.addEventListener('load', () => {
    const isValid = password.value ==='' || password.value != confirm.value;
    errorMessage.className = isValid ? "invalid" : "valid";
    password.className = isValid ? "invalid" : "valid";
    confirm.className = isValid ? "invalid" : "valid";
    errorMessage.textContent = '*Passwords do not match'
})

password.addEventListener('input', () => {
    if (password.value.length > 0) {
        password.className = "valid";
        errorMessage.className = "valid"
    } else {
        password.className = "invalid";
        errorMessage.className = "invalid"
    }
})

confirm.addEventListener('input', () => {
    if (confirm.value.length > 0) {
        confirm.className = "valid";
    } else {
        confirm.className = "invalid";
    }
})

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    const isValid = password.value === confirm.value;

    if (!isValid) {
        password.className = "invalid";
        errorMessage.textContent = "*Passwords do not match"
        errorMessage.className = "invalid"
        confirm.className = "invalid"
        alert("Try again")
    } else {
        password.className = "valid";
        errorMessage.textContent = ""
        confirm.className = "valid"
        alert("YEAHHH")
    }

})