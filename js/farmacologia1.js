fetch('../js/farmacos.json')
    .then(response => response.json())
    .then(data => {
        const noticiasContainer = document.getElementById('medicamentos');
        const paginacionContainer = document.getElementById('paginacion');
        const categoryButtons = document.querySelectorAll('.btn-secondary'); // Botones de categorías
        const itemsPorPagina = 15;
        let paginaActual = 1;
        let selectedCategory = "Todo"; // Categoría seleccionada (por defecto "Todo")
        let filteredData = data; // Datos filtrados (inicialmente todos)

        // Función para mostrar una página específica de medicamentos
        function mostrarPagina(pagina) {
            noticiasContainer.innerHTML = '';
            let inicio = (pagina - 1) * itemsPorPagina;
            let fin = inicio + itemsPorPagina;
            let itemsPagina = filteredData.slice(inicio, fin);

            itemsPagina.forEach((medicamento, index) => {
                let number = inicio + index + 1;
                const noticiaElement = document.createElement('div');
                noticiaElement.classList.add('col-md-4', 'col-lg-4', 'col-sm-6', 'mb-4');
                noticiaElement.setAttribute('data-category', medicamento.cat); // Establecemos el atributo de categoría
                noticiaElement.innerHTML = `
                    <a href="#" class="hero_cta${number} botonModal" data-modal="modal${number}">
                        <div class="border zoom" style="padding: 0; background-color: #fff; overflow: hidden; word-wrap: break-word;">
                            <div style="height: 5px; background-color: ${medicamento.color};"></div>
                            <p class="text-muted" style="font-size: 1.2rem; padding-left: 20px; padding-top: 10px;">
                                <strong style="color: black;">${medicamento.titulo}</strong>
                                <br><br>${medicamento.via}
                            </p>
                            <br>
                            <p class="text-muted" style="font-size: 0.8rem; padding-left: 20px; padding-top: 10px;">
                                ${medicamento.descripcion}
                            </p>
                        </div>
                    </a>
                    <section class="modal1 modal${number}" id="modal${number}">
                        <div class="modal_container1">
                            <div class="linea_med" style="background-color: ${medicamento.color};"></div>
                            <div class="modal_left">
                                <br><br>
                                <div class="w3r-circle" style="padding-top: 20px; height: 80px; width: 80px; border-radius: 100%; background:${medicamento.color}; margin: 0 auto;"></div>
                                <br>
                                <h5>Presentación</h5>
                                <p class="modal_paragraph1">${medicamento.presentacion}</p><br>
                                <h5>Vía de Administración</h5>
                                <p class="modal_paragraph1">${medicamento.via}</p><br>
                                <h5>Efectos adversos</h5>
                                <p class="modal_paragraph1">${medicamento.efectos}</p><br>
                            </div>
                            <div class="modal_text">
                                <br>
                                <div style="display: flex; align-items: center; justify-content: space-between;">
                                    <h2 class="modal_title1" style="margin: 0;">${medicamento.titulo}</h2>
                                    <a href="#" class="modal_close1">X</a>
                                </div>  
                                <details>
                                    <summary>¿Qué es?
                                    <div style="height: 2px; background-color: ${medicamento.color}; width: 90%;"></div>
                                    </summary>
                                    <br>
                                    <p class="modal_paragraph1">${medicamento.descripcion}</p>
                                </details>
                                <br>
                                <details>
                                    <summary>Indicaciones 
                                    <div style="height: 2px; background-color: ${medicamento.color}; width: 90%;"></div>
                                    <br>
                                    </summary>
                                    <p class="modal_paragraph1">${medicamento.indicaciones}</p> 
                                </details>
                                <br>
                                <details>
                                    <summary>Contraindicación
                                    <div style="height: 2px; background-color: ${medicamento.color}; width: 90%;"></div>
                                    <br>
                                    </summary>
                                    <p class="modal_paragraph1">${medicamento.contra}</p>
                                </details>
                                <br>
                                <details>
                                    <summary>Interacción
                                    <div style="height: 2px; background-color: ${medicamento.color}; width: 90%;"></div>
                                    </summary>
                                    <p class="modal_paragraph1">${medicamento.interacc}</p>
                                </details>
                            </div>
                            <br><br><br>
                        </div>
                    </section>
                </div>`;
                noticiasContainer.appendChild(noticiaElement);
            });

            agregarEventosModales();
            crearPaginacion(); // Asegúrate de llamar a la función de paginación después de mostrar los medicamentos
        }

        function agregarEventosModales() {
            document.querySelectorAll('.botonModal').forEach(boton => {
                boton.addEventListener('click', e => {
                    e.preventDefault();
                    const modalId = boton.getAttribute('data-modal');
                    document.getElementById(modalId).classList.add('modal1--show');
                });
            });
            document.querySelectorAll('.modal_close1').forEach(boton => {
                boton.addEventListener('click', e => {
                    e.preventDefault();
                    boton.closest('.modal1--show').classList.remove('modal1--show');
                });
            });
        }

        // Función para crear los botones de paginación
        function crearPaginacion() {
            paginacionContainer.innerHTML = '';
            let totalPaginas = Math.ceil(filteredData.length / itemsPorPagina);
            for (let i = 1; i <= totalPaginas; i++) {
                let boton = document.createElement('button');
                boton.textContent = i;
                boton.classList.add('m-1', 'paginacion');
                if (i === paginaActual) boton.classList.add('active');
                boton.addEventListener('click', () => {
                    paginaActual = i;
                    mostrarPagina(paginaActual);
                });
                paginacionContainer.appendChild(boton);
            }
        }

        // Función para filtrar los medicamentos según la categoría seleccionada
        function filtrarPorCategoria() {
            filteredData = data.filter(medicamento => {
                // Si la categoría seleccionada es "Todo", mostramos todos los medicamentos
                if (selectedCategory === "Todo") return true;
                // Filtramos por la categoría 'cat' del medicamento
                return medicamento.cat === selectedCategory;
            });
            paginaActual = 1; // Resetear la página actual al filtrar
            mostrarPagina(paginaActual); // Actualizamos los medicamentos visibles
        }

        // Event listeners para los botones de categoría
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                selectedCategory = button.getAttribute('data-category'); // Obtener la categoría
                // Remover "active" de todos los botones y agregarlo al seleccionado
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                filtrarPorCategoria(); // Aplicar el filtro
            });
        });

        // Inicializar la vista con todos los medicamentos
        mostrarPagina(paginaActual);
    })
    .catch(error => console.error('Error al cargar el JSON:', error));
