document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const sideMenu = document.querySelector('.side-menu');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('open');
        sideMenu.classList.toggle('active');
    });

    // Fermer le menu lorsque l'utilisateur clique en dehors du menu
    document.addEventListener('click', (e) => {
        if (!sideMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            sideMenu.classList.remove('active');
            menuToggle.classList.remove('open');
        }
    });

    // Fermer le menu lorsque l'utilisateur appuie sur la touche Echap
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            sideMenu.classList.remove('active');
            menuToggle.classList.remove('open');
        }
    });

    // Fonction pour montrer les bulles
    function showTooltips() {
        const phoneTooltip = document.querySelector('.phone-tooltip');
        const emailTooltip = document.querySelector('.email-tooltip');

        phoneTooltip.style.visibility = 'visible';
        phoneTooltip.style.opacity = '1';
        phoneTooltip.style.transform = 'scale(1.1) translateY(-10px)';

        emailTooltip.style.visibility = 'visible';
        emailTooltip.style.opacity = '1';
        emailTooltip.style.transform = 'scale(1.1) translateY(-60px)';

        // Revenir à l'état initial après un certain temps
        setTimeout(() => {
            phoneTooltip.style.visibility = '';
            phoneTooltip.style.opacity = '';
            phoneTooltip.style.transform = '';

            emailTooltip.style.visibility = '';
            emailTooltip.style.opacity = '';
            emailTooltip.style.transform = '';
        }, 3000); // Les bulles disparaissent après 3 secondes
    }

    // Ajouter un écouteur d'événement pour le clic sur le lien "Contact"
    const contactLink = document.querySelector('a[href="#top"]');
    contactLink.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#top').scrollIntoView({
            behavior: 'smooth'
        });
        showTooltips();
    });
});
