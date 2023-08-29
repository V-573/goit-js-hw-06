const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const emailInput = loginForm.elements.email;
    const passwordInput = loginForm.elements.password;

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (emailValue === '' || passwordValue === '') {
        alert('Todos los campos deben ser llenados');

    } else {
        const formData = {
            email: emailValue,
            password: passwordValue
        };
        console.log(formData);
        loginForm.reset();

    }



})
