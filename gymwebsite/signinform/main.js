let signupBtn=document.getElementById("signupBtn");
let signinBtn=document.getElementById("signinBtn");
let nameField=document.getElementById("nameField");
let emailField=document.getElementById("emailField");
let passwordField=document.getElementById("passwordField");
let title=document.getElementById("title");
function forgotPassword() {
    // Redirect to password reset page
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSeSrY4gA3lgc9MubNn6HpTLIX3R68lf39SAT9MIYstMKk7JIw/viewform?usp=sf_link';

}

signinBtn.onclick=function(){
        // nameField.style.display = "none";
        // emailField.style.display = "block";
        // /passwordField.style.display = "block";
        title.innerHTML="Sign In";
        signupBtn.classList.add("disable");
        signinBtn.classList.remove("disable");
 }
signupBtn.onclick=function(){
        // nameField.style.display = "block";
        // emailField.style.display = "block";
        // passwordField.style.display = "block";
     title.innerHTML="Sign up";
     signinBtn.classList.add("disable");
     signupBtn.classList.remove("disable");
}