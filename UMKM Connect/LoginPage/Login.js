document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const loginButton = document.querySelector('.login-button');

    function validateInput(input) {
        if (input.value.trim() === '') {
            input.style.borderLeft = '3px solid #e53e3e';
            return false;
        } else {
            input.style.borderLeft = '3px solid #38a169';
            return true;
        }
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    emailInput.addEventListener('blur', function() {
        if (this.value.trim() !== '' && !validateEmail(this.value)) {
            this.style.borderLeft = '3px solid #e53e3e';
        } else if (this.value.trim() !== '') {
            this.style.borderLeft = '3px solid #38a169';
        }
    });

    passwordInput.addEventListener('blur', function() {
        validateInput(this);
    });

    [emailInput, passwordInput].forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderLeft = 'none';
        });
    });

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        console.log('Form submitted, redirecting...');
        window.location.href = '/DashboardPagePembuatLowongan/DashboardPembuat.html';
    });

    const formElements = document.querySelectorAll('.form-input, .login-button');
    formElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-1px)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    function addTypingEffect(input, text) {
        let index = 0;
        input.placeholder = '';
        
        function typeChar() {
            if (index < text.length) {
                input.placeholder += text.charAt(index);
                index++;
                setTimeout(typeChar, 50);
            }
        }
        
        setTimeout(typeChar, 500);
    }

    setTimeout(() => {
        addTypingEffect(emailInput, 'Masukkan Email Anda');
    }, 200);
    
    setTimeout(() => {
        addTypingEffect(passwordInput, 'Masukkan kata sandi anda');
    }, 1000);

    console.log('Simple login test loaded');
});