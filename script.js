document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('open');
});

