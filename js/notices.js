fetch('../js/notices.json') // Cambia la ruta según la ubicación de tu archivo JSON
    .then(response => response.json())
    .then(data => {
        const noticiasContainer = document.getElementById('noticias');
        let number = 0; // Inicializa el contador

        data.forEach(noticia => {
            number++; // Incrementa el contador para cada noticia

            // Crear el HTML dinámico con clases de Bootstrap para la tarjeta y el modal
            const noticiaElement = document.createElement('div');
            noticiaElement.classList.add('col-md-4', 'col-lg-4', 'col-sm-6', 'mb-4'); // Cada noticia ocupa 4 columnas en pantallas medianas
            
            noticiaElement.innerHTML = `
                <a href="#" class="hero_cta${number} botonModal" data-modal="modal${number}">
                    <div class="card h-100 shadow">
                        <img src="${noticia.imagen}" class="card-img-top" alt="${noticia.titulo}">
                        <div class="card-body">
                            <h6 class="card-title">${noticia.titulo}</h6>
                            <p class="card-text">${noticia.fecha}</p>
                        </div>
                    </div>
                </a>

                <!-- Modal correspondiente a esta tarjeta -->
                <section class="modal1 modal${number}" id="modal${number}">
                    <div class="modal_container1">
                        <a href="#" class="modal_close1">X</a>
                        <div class="modal_header">
                            <img src="${noticia.imagen}" alt="${noticia.titulo}" class="modal-img">
                        </div>
                        <div class="modal_body">
                            <p class="modal-title">${noticia.titulo}</p>
                            <p class="modal-descr">${noticia.descripcion}</p>
                        </div>
                        <div class="modal_body">
                            <p class="modal-descr" style="font-weight: 500;">Visita la noticia completa en:</p>
                            <a href="${noticia.url}" target="_blank" class="btn btn-outline-primary mt-1 mx-3 col-3">
                                Leer más
                            </a>   
                        </div>
                    </div>
                </section>

            `;

            noticiasContainer.appendChild(noticiaElement);
        })
        
        // Agregar eventos a los botones dinámicamente
        const botonesModal = document.querySelectorAll('.botonModal');
        botonesModal.forEach(boton => {
            boton.addEventListener('click', (e) => {
                e.preventDefault();

                // Obtiene el ID del modal desde el atributo 'data-modal'
                const modalId = boton.getAttribute('data-modal');
                const modal = document.getElementById(modalId);

                // Si el modal existe, lo muestra
                if (modal) {
                    modal.classList.add('modal1--show');
                }
            });
        });

        // Agregar eventos para cerrar los modales
        const botonesCerrar = document.querySelectorAll('.modal_close1');
        botonesCerrar.forEach(boton => {
            boton.addEventListener('click', (e) => {
                e.preventDefault();

                // Encuentra el modal más cercano con la clase 'modal1--show'
                const modal = boton.closest('.modal1');
                if (modal) {
                    modal.classList.remove('modal1--show');
                }
            });
        });
    })
    .catch(error => console.error('Error al cargar el JSON:', error));

/* NEW MODAL */
document.addEventListener("DOMContentLoaded", () => {
    const noticias = document.querySelectorAll(".noticia-principal");

    noticias.forEach(noticia => {
        noticia.addEventListener("click", () => {
            const titulo = noticia.getAttribute("data-titulo");
            const descripcion = noticia.getAttribute("data-descripcion");
            const imagen = noticia.getAttribute("data-imagen");
            const url = noticia.getAttribute("data-url");

            document.getElementById("modalNoticiaLabel").textContent = titulo;
            document.getElementById("modalNoticiaDescripcion").textContent = descripcion;
            document.getElementById("modalNoticiaImagen").src = imagen;

            // Seleccionamos el botón correctamente
            const modalBtn = document.querySelector(".modal-btn");
            if (modalBtn) {
                modalBtn.href = url;
            }
        });
    });
});


/* #endregion */