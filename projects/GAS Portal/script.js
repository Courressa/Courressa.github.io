const loginSubmit = document.getElementById('loginSubmit');
const activateSubmit = document.getElementById('activateSubmit');
const requestSubmit = document.getElementById('requestSubmit');

const afterLoginSubmit = (event) => {
    event.preventDefault();
    alert("Thank you for attempting to login. This portal is only for Gods Academy Students. Please return to Project Flutter and enjoy the 'secret' game! :D");
}
const afterActivateSubmit = (event) => {
    event.preventDefault();
    alert("Thank you for attempting to activate your account. This portal is only for Gods Academy Students. Please return to Project Flutter and enjoy the 'secret' game! :D");
}
const afterRequestSubmit = (event) => {
    event.preventDefault();
    alert("Thank you for attempting to make a submission. This portal is only for Gods Academy Students. Please return to Project Flutter and enjoy the 'secret' game! :D");
}


loginSubmit.addEventListener('click', afterLoginSubmit);
activateSubmit.addEventListener('click', afterActivateSubmit);
requestSubmit.addEventListener('click', afterRequestSubmit);