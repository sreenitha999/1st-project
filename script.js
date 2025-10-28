document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const eyeIcon = togglePassword.querySelector('i');
    
    // Toggle password visibility
    togglePassword.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            eyeIcon.classList.remove('fa-eye');
            eyeIcon.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            eyeIcon.classList.remove('fa-eye-slash');
            eyeIcon.classList.add('fa-eye');
        }
    });
    
    // Form validation
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const agreeTerms = document.getElementById('agreeTerms').checked;
        
        let isValid = true;
        
        // Validate name
        if (fullName.length < 2) {
            document.getElementById('nameError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('nameError').style.display = 'none';
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById('emailError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('emailError').style.display = 'none';
        }
        
        // Validate password
        if (password.length < 8) {
            document.getElementById('passwordError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('passwordError').style.display = 'none';
        }
        
        // Validate confirm password
        if (password !== confirmPassword) {
            document.getElementById('confirmPasswordError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('confirmPasswordError').style.display = 'none';
        }
        
        // Validate terms
        if (!agreeTerms) {
            document.getElementById('termsError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('termsError').style.display = 'none';
        }
        
        // If form is valid, submit (in a real app, this would send to server)
        if (isValid) {
            alert('Registration successful! Welcome to AI Assistant.');
            form.reset();
        }
    });
    
    // Real-time validation for password confirmation
    document.getElementById('confirmPassword').addEventListener('input', function() {
        const password = document.getElementById('password').value;
        const confirmPassword = this.value;
        
        if (password !== confirmPassword && confirmPassword.length > 0) {
            document.getElementById('confirmPasswordError').style.display = 'block';
        } else {
            document.getElementById('confirmPasswordError').style.display = 'none';
        }
    });
});