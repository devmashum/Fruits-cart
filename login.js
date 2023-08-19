document.getElementById('button').addEventListener('click', function () {
    const userName = document.getElementById('username');
    const userValue = userName.value;
    user = userValue;
    // 

    const password = document.getElementById('password');
    const passwordValue = password.value;
    pass = passwordValue;

    if (user === 'demo' && pass === '1234') {
        window.location.href = 'freuits.html'
    } else {
        alert('try again');
    }

})