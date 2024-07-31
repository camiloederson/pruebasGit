document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    menuToggle.addEventListener('click', function () {
        mainNav.classList.toggle('active'); // Alternar la clase active
        menuIcon.style.display = mainNav.classList.contains('active') ? 'none' : 'inline';
        closeIcon.style.display = mainNav.classList.contains('active') ? 'inline' : 'none';
    });

    // Cerrar el menú cuando se hace clic en un enlace
    document.querySelectorAll('#main-nav a').forEach(anchor => {
        anchor.addEventListener('click', function () {
            mainNav.classList.remove('active');
            menuIcon.style.display = 'inline';
            closeIcon.style.display = 'none';
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
