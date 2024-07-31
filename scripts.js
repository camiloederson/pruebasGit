document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    menuToggle.addEventListener('click', function () {
        if (mainNav.style.display === 'flex') {
            mainNav.style.display = 'none';
            menuIcon.style.display = 'inline';
            closeIcon.style.display = 'none';
        } else {
            mainNav.style.display = 'flex';
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'inline';
        }
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


