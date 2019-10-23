var backdrop = document.querySelector('.backdrop');
var toggleBtn = document.querySelector('.nav-toggle');
var mobileNav = document.querySelector('.nav-menu');



toggleBtn.addEventListener('click', function() {
    backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    setTimeout(function() {
      backdrop.classList.add('open');
    }, 10);
});
  
backdrop.addEventListener('click', function() {
    mobileNav.classList.remove('open');
    backdrop.style.display = 'none';
});