const form = document.getElementById('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateForm()) {
        displayUserData();
    }
});
function validateForm() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorHint = document.getElementById('errorHint');
    if (password !== confirmPassword) {
        errorHint.textContent = 'Passwords do not match';
        return false;
    }else {
        errorHint.textContent = ''; 
    }
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);
    const isMinLength = password.length >= 8;

    if(hasLower && hasUpper && hasDigit && hasSpecial && isMinLength){
        errorHint.textContent = '';
        return true;
    }else{
        errorHint.textContent = 'Password does not meet the criteria';
        return false;
    }
    
}

function displayUserData() {
    const userData = {
        Name: document.getElementById('name').value,
        Age: document.getElementById('age').value,
        Hapiness: document.getElementById('hapiness').value,
        StudyDate: document.getElementById('studyDate').value,
        Gender: document.querySelector('input[name="gender"]:checked').value,
        Email: document.getElementById('email').value,
        Password: document.getElementById('password').value,
    };
    alert('Entered data:\n' + JSON.stringify(userData, null, 2));
}