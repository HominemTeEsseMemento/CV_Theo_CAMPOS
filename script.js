document.addEventListener('DOMContentLoaded', () => {
    // Gestion du menu latéral
    const menuToggle = document.querySelector('.menu-toggle');
    const sideMenu = document.querySelector('.side-menu');

    menuToggle.addEventListener('click', () => {
        const isMenuOpen = sideMenu.classList.contains('active');

        if (isMenuOpen) {
            // Fermer le menu
            sideMenu.classList.remove('active');
            menuToggle.classList.remove('open');
            sideMenu.style.visibility = 'hidden';
            sideMenu.style.pointerEvents = 'none';
        } else {
            // Ouvrir le menu
            sideMenu.classList.add('active');
            menuToggle.classList.add('open');
            sideMenu.style.visibility = 'visible';
            sideMenu.style.pointerEvents = 'auto';
        }
    });

    // Fermer le menu lorsque l'utilisateur clique en dehors du menu
    document.addEventListener('click', (e) => {
        if (!sideMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            sideMenu.classList.remove('active');
            menuToggle.classList.remove('open');
            sideMenu.style.visibility = 'hidden';
            sideMenu.style.pointerEvents = 'none';
        }
    });

    // Fermer le menu lorsque l'utilisateur appuie sur la touche Echap
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            sideMenu.classList.remove('active');
            menuToggle.classList.remove('open');
            sideMenu.style.visibility = 'hidden';
            sideMenu.style.pointerEvents = 'none';
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
    if (contactLink) {
        contactLink.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('#top').scrollIntoView({
                behavior: 'smooth'
            });
            showTooltips();
        });
    }

    // Initialiser Particles.js
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 50,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            shape: {
                type: 'image',
                image: {
                    src: 'chess-1250997.png', // Remplace par l'image de ton choix (ici, une pièce d'échec)
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 0.5
            },
            size: {
                value: 15,
                random: true
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 200,
                    line_linked: {
                        opacity: 0.5
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const titles = document.querySelectorAll('.card-title');
    titles.forEach(function(title) {
        title.style.color = '#000000';
    });
});
