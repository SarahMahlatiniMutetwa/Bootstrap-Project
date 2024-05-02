
document.addEventListener('scroll', () => {
    const mynav = document.querySelector('.mynav');
    if (window.scrollY > 0) {
        mynav.classList.add('scrolled');
    } else{
        mynav.classList.remove('scrolled');
    }
}
);