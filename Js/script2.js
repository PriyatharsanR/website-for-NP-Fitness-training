const signInButton = document.getElementById('signIn');
const signUpButton = document.getElementById('signUp');
const main = document.getElementById('main');

signUpButton.addEventListener('click', () => {
    main.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    main.classList.remove("right-panel-active");
});
