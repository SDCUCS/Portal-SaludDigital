document.addEventListener('DOMContentLoaded', () => {
    const banner = document.querySelector('.banner-area');
    const content = document.querySelector('.salud-digital-title');

    document.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            banner.classList.add('hidden');
            content.style.marginTop = '0'; // Ajusta el margen cuando el banner está oculto
        } else {
            banner.classList.remove('hidden');
            content.style.marginTop = '20vh'; // Ajusta el margen cuando el banner está visible (cambia 20vh por el valor deseado)
        }
    });
});


/*ESPACIO PARA CARGAR A LOS COMPANEROS EN QUIENES SOMOS*/
