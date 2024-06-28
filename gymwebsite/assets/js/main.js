// toggle functionality
const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})
//onclick functionality and move to registration form
function member() {
  alert('thank you for your interest in becoming a member');
  alert('register now and join us');
   window.location.href='https://forms.gle/MNDTgL7aqWhCP98H8';
}
 // Smooth scrolling for anchor links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// hambergur
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('item');
  navMenu.style.right='-300px';
  hamburger.onclick=function(){
  if(navMenu.style.right=='-300px'){
    navMenu.style.right='0';
  }
  else{
    navMenu.style.right='-300px';
  }
}
});

//signin functionality
function signin(){
  alert('Sign in Now!')
}
//know more functionality
function knowmore(){
  alert('EXPLORE')
}
// get started functionality
function joinus(){
      alert('join us')
      window.location.href='https://forms.gle/MNDTgL7aqWhCP98H8';
}
function sentmes(){
  alert('message sent')
}
