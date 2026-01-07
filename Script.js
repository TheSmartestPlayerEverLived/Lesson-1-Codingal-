function validate(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const msgBox = document.getElementById('message');

    let message = '';

    if (email === ' ') {
        message = 'Email cannot be blank';
        msgBox.style.color = 'red';
    } else if (pass === ' ') {
        message = 'Password cannot be blank';
        msgBox.style.color = 'red';
    } else if (age === ' ') {
        message = 'Age cannot be blank';
        msgBox.style.color = 'red';
    } else {
        message = 'Login Successful';
        msgBox.style.color = 'green';
    }

    msgBox.innerText = message;
}