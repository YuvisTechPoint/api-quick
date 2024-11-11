document.addEventListener('DOMContentLoaded', function() {
    const loginPopup = document.getElementById('loginPopup');
    const loginLink = document.querySelector('a[href="login.html"]');
    const closeBtn = document.querySelector('.close');
    const signupLink = document.querySelector('a[href="signup.html"]');

    // Show popup if it hasn't been shown this session
    if (!sessionStorage.getItem('popupShown')) {
        loginPopup.style.display = 'block';
        sessionStorage.setItem('popupShown', 'true');
    }

    // Show popup when login link is clicked
    loginLink.addEventListener('click', function(e) {
        e.preventDefault();
        loginPopup.style.display = 'block';
    });

    // Close popup when close button is clicked
    closeBtn.addEventListener('click', function() {
        loginPopup.style.display = 'none';
    });

    // Close popup when clicking outside of it
    window.addEventListener('click', function(e) {
        if (e.target == loginPopup) {
            loginPopup.style.display = 'none';
        }
    });

    // Prevent form submission (for demo purposes)
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Login functionality would be implemented here.');
    });

    // Handle signup link click (for demo purposes)
    signupLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Signup functionality would be implemented here.');
    });
});
