// Ruta al archivo JSON
fetch('../js/serviciosBio.json') // Asegúrate de que la ruta sea correcta
    .then(response => response.json())
    .then(data => {
        const serviciosContainer = document.getElementById('serviciosBio');
        let number = 0;

        data.forEach((servicio) => {
            number++;
            // Crear la tarjeta dinámica
            const servicioElement = document.createElement('div');
            servicioElement.classList.add('col-lg-6', 'col-md-6', 'mb-4');
            servicioElement.innerHTML = `
                <a href="#" class="hero_cta${number} botonModal" data-modal="modal${number}">
                <div class="card shadow-sm h-100 border-0 cardhover" style="min-height: 40vh; padding-top: 30px;">
                    <div class="card-body">
                        <div class="d-flex justify-content-center mb-3">
                            <img src="${servicio.img1}" alt="${servicio.title}" class="img-fluid rounded img-smental" style="max-height: 200px;">
                        </div>
                        <h2 class="fw-bold title-smental">${servicio.title}</h2>
                        
                            <!-- <button class="btn btn-primary mt-3 px-4 btn-expand">
                                Leer más
                            </button> -->
                        
                    </div>
                </div>
                </a>

                <section class="modal1 modal${number}" id="modal${number}">
                    <div class="modal_container1">
                        <a href="#" class="modal_close1">X</a>
                        <div class="modal_header">
                            <img src="${servicio.img1}" alt="${servicio.title}" class="modal-img">
                        </div>
                        <div class="modal_body">
                            <div class="container-fluid d-flex justify-content-center"> <!-- align-items-center : lo pone en medio del div -->
                                <div class="col-lg-10 col-md-10 col-sm-10 text-center">
                                    <p style="font-size: 6.3vh; font-style: italic; font-weight: 500; font-style: oblique;">${servicio.title}</p>
                                    <p class="" style="text-align: justify;">
                                        ${servicio.descr1}
                                    </p>
                                </div>
                            </div>
                            <div class="row justify-content-center align-items-center text-center" style="margin-top: 50px;">
                                <div class="col-lg-6 col-md-6" style="text-align: justify;">
                                    ${servicio.descr2}
                                </div>
                                <div class="col-lg-4 col-md-4">
                                    <img src="${servicio.img2}" alt="Imagen de Salud" class="img-fluid shadow-sm" style="max-height: 400px; width: 100%; border-radius: 10px;">
                                </div>
                            </div>
                            <div class="row justify-content-center align-items-center text-center" style="margin-top: 50px;">
                                <div class="col-lg-5 col-md-6">
                                    <img src="${servicio.img3}" alt="Imagen de Salud" class="img-fluid shadow-sm" style="max-height: 400px; width: 100%; border-radius: 10px;">
                                </div>    
                                <div class="col-lg-5 col-md-5" style="text-align: justify;">
                                    ${servicio.descr3}
                                </div>
                            </div>
                            <div class="row justify-content-center align-items-center text-center" style="margin-top: 50px;">
                                <div class="col-lg-10 col-md-10 mb-3">
                                    ${servicio.descr4}
                                </div>
                                <div class="col-lg-10 col-md-10">
                                    <img src="${servicio.img4}" alt="Imagen de Salud" class="img-fluid shadow-sm" style="max-height: 600px;  width: 100%; border-radius: 10px;">
                                </div>
                            </div>
                        <div class="row justify-content-center align-items-center text-center" style="margin-top: 100px;">
                        <p style="color: white;">/</p></div>

                        </div>
                    </div>
                </section>
            `;

            serviciosContainer.appendChild(servicioElement);
        });

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
 