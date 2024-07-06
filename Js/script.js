document.getElementById('registrationForm').addEventListener('submit', function(event) {
    const contactField = document.getElementById('contact');
    const contactError = document.getElementById('contact-error');
    const contactValue = contactField.value;

    if (!/^\d+$/.test(contactValue)) {
        contactError.style.display = 'block';
        event.preventDefault();  // Prevent form submission
    } else {
        contactError.style.display = 'none';
    }
});

document.getElementById('resetForm').addEventListener('click', function() {
    document.getElementById('contact-error').style.display = 'none';
});


const signInButton = document.getElementById('signIn');
const signUpButton = document.getElementById('signUp');
const main = document.getElementById('main');

signUpButton.addEventListener('click', () => {
    main.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    main.classList.remove("right-panel-active");
});





            