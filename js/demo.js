document.addEventListener('DOMContentLoaded', function() {
    var signInButton = document.getElementById('signInButton');
    var signUpButton = document.getElementById('signUpButton');

    if (signInButton) {
        signInButton.onclick = function() {
            console.log("Sign In button clicked");
            window.location.href = 'index.html?hideSignin=true'; // Redirect with parameter
        };
    }

    if (signUpButton) {
        signUpButton.onclick = function() {
            console.log("Sign Up button clicked");
            window.location.href = 'index.html?hideSignin=true'; // Redirect with parameter
        };
    }
});
document.addEventListener('DOMContentLoaded', function() {
    var urlParams = new URLSearchParams(window.location.search);
    var hideSignin = urlParams.get('hideSignin');
    var homeSignIn = document.getElementById('home_signin');

    if (hideSignin === 'true' && homeSignIn) {
        homeSignIn.style.display = 'none';
    }
});
