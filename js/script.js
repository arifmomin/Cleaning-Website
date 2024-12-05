const Navbar = document.getElementById('Navbar');
window.addEventListener('scroll', () =>{
    let scrolling = this.scrollY;
    if(scrolling > 100){
        Navbar.classList.add('navbar-fixed');
    }else{
        Navbar.classList.remove('navbar-fixed')
    }
});