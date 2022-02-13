document.getElementById('login-button').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    //check email & password
    if (userEmail == 'sontan@baap.com' && userPassword == 'secret') {
        console.log('valid user');
        window.location.href = 'banking.html';
    }
    else {
        console.log('invalid user');
    }

});
