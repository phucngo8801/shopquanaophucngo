const bar  = document.getElementById('bar');
const close  = document.getElementById('close');
const Nav = document.getElementById('Navbar');

if (bar) {
    bar.addEventListener('click' , () => {
        Nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click' , () => {
        Nav.classList.remove('active');
    })
}