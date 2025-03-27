// Nuevo código para el diseño específico con los modales
fetch('../js/notices.json')
    .then(response => response.json())
    .then(data => {
        const noticiasContainer = document.getElementById('noticias');
        let number = 0;

        data.forEach(noticias => {
            number++;
            const noticiaElement = document.createElement('div');
            noticiaElement.classList.add('col-md-4', 'col-lg-4', 'col-sm-6', 'mb-4');
            noticiaElement.innerHTML = `
            
            `;
            noticiasContainer.appendChild(noticiaElement);
        });

        // Event listeners para modales
        document.querySelectorAll('.botonModal').forEach(boton => {
            boton.addEventListener('click', (e) => {
                e.preventDefault();
                const modalId = boton.getAttribute('data-modal');
                const modal = document.getElementById(modalId);
                if (modal) modal.classList.add('modal1--show');
            });
        });

        document.querySelectorAll('.modal_close1').forEach(boton => {
            boton.addEventListener('click', (e) => {
                e.preventDefault();
                const modal = boton.closest('.modal1');
                if (modal) modal.classList.remove('modal1--show');
            });
        });
    })
    .catch(error => console.error('Error al cargar el JSON:', error));
