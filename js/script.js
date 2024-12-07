const Navbar = document.getElementById('Navbar');
window.addEventListener('scroll', () =>{
    let scrolling = this.scrollY;
    if(scrolling > 100){
        Navbar.classList.add('navbar-fixed');
    }else{
        Navbar.classList.remove('navbar-fixed')
    }
});

const navbarMenu = document.querySelector('.navbar-menu-icon');
const navbarCross = document.querySelector('.navbar-cross');
const navbarRight = document.querySelector('.navbar-right');
const navbarBg = document.querySelector('.navbar-bg');
navbarMenu.addEventListener('click', () =>{
    navbarRight.classList.add('navbar-Right-show');
    navbarBg.style.display = 'block';
});

navbarCross.addEventListener('click', () =>{
    navbarRight.classList.remove('navbar-Right-show');
    navbarBg.style.display = 'none';
})