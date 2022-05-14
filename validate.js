function validate(password) {

    function checkPass(password) {
        // Minimum eight, at least one uppercase letter, one lowercase letter, one number and one special character:
        var regx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g
        if (password.value.match(regx)) {
            return true;
        } else {
            return false;
        }
    }

    if (checkPass(password)) {
        alert('Valid Form');
    } else {
            var obj3 = document.getElementById('password');
            obj3.style.color = "red";
            alert('Invalid Password')
    }
}