

//ACERCA DE LA COORDINACION
function Cambio1(){
            
            document.getElementById('info_coordi').style.display = "block";
            document.getElementById('mision1').style.display = "none";
            document.getElementById('vision1').style.display = "none";

            document.getElementById('informacion_coordi').style.display = "block";

        }

    function Cambio2(){
            document.getElementById('info_coordi').style.display = "none";
            document.getElementById('mision1').style.display = "block";
            document.getElementById('vision1').style.display = "none";
        }
    function Cambio3(){
            document.getElementById('info_coordi').style.display = "none";
            document.getElementById('mision1').style.display = "none";
            document.getElementById('vision1').style.display = "block";
        }


//UNIDADES DE LA COORDINACION
function Presentacion(n){
        var cuadro = n; 
        switch(cuadro){
                case 1:
                        document.getElementById('info_presentacion1').style.display = "block";
                        document.getElementById('directorio1').style.display = "none";
                        document.getElementById('eje_trab1').style.display = "none";
                        break;
                case 2:
                        document.getElementById('info_presentacion2').style.display = "block";
                        document.getElementById('directorio2').style.display = "none";
                        document.getElementById('eje_trab2').style.display = "none";
                        break;
                case 3:
                        document.getElementById('info_presentacion3').style.display = "block";
                        document.getElementById('directorio3').style.display = "none";
                        document.getElementById('eje_trab3').style.display = "none";
                        break;
                case 4:
                        document.getElementById('info_presentacion4').style.display = "block";
                        document.getElementById('directorio4').style.display = "none";
                        document.getElementById('eje_trab4').style.display = "none";
                        break;
                case 5:
                        document.getElementById('info_presentacion5').style.display = "block";
                        document.getElementById('directorio5').style.display = "none";
                        document.getElementById('eje_trab5').style.display = "none";
                        break;
        }

        }

function Ubicacion(n){
        var cuadro2 = n; 
        switch(cuadro2){
                case 1:
                        document.getElementById('info_presentacion1').style.display = "none";
                        document.getElementById('directorio1').style.display = "block";
                        document.getElementById('eje_trab1').style.display = "none";
                        break;
                case 2:
                        document.getElementById('info_presentacion2').style.display = "none";
                        document.getElementById('directorio2').style.display = "block";
                        document.getElementById('eje_trab2').style.display = "none";
                        break;
                case 3:
                        document.getElementById('info_presentacion3').style.display = "none";
                        document.getElementById('directorio3').style.display = "block";
                        document.getElementById('eje_trab3').style.display = "none";
                        break;
                case 4:
                        document.getElementById('info_presentacion4').style.display = "none";
                        document.getElementById('directorio4').style.display = "block";
                        document.getElementById('eje_trab4').style.display = "none";
                        break;
                case 5:
                        document.getElementById('info_presentacion5').style.display = "none";
                        document.getElementById('directorio5').style.display = "block";
                        document.getElementById('eje_trab5').style.display = "none";
                        break;
        }
        }


function Enfoque(n){
        var cuadro3 = n; 
        switch(cuadro3){
                case 1:
                        document.getElementById('info_presentacion1').style.display = "none";
                        document.getElementById('directorio1').style.display = "none";
                        document.getElementById('eje_trab1').style.display = "block";
                        break;
                case 2:
                        document.getElementById('info_presentacion2').style.display = "none";
                        document.getElementById('directorio2').style.display = "none";
                        document.getElementById('eje_trab2').style.display = "block";
                        break;
                case 3:
                        document.getElementById('info_presentacion3').style.display = "none";
                        document.getElementById('directorio3').style.display = "none";
                        document.getElementById('eje_trab3').style.display = "block";
                        break;
                case 4:
                        document.getElementById('info_presentacion4').style.display = "none";
                        document.getElementById('directorio4').style.display = "none";
                        document.getElementById('eje_trab4').style.display = "block";
                        break;
                case 5:
                        document.getElementById('info_presentacion5').style.display = "none";
                        document.getElementById('directorio5').style.display = "none";
                        document.getElementById('eje_trab5').style.display = "block";
                        break;
        }
        }



const modal = document.querySelector('.modalUnidades');
const unidades = document.querySelector('.esconder_unidades')

function abrirCambio(idModal) {
        const modal = document.getElementById(idModal); // Selecciona el modal específico por ID
        const unidades = document.getElementById('esconder_unidades');
    
        if (modal && unidades) {
            unidades.style.display = "none";
            modal.style.display = 'block'; // Hacerlo visible antes de la animación
            setTimeout(() => {
                modal.classList.add('show'); // Agrega la clase después de hacerlo visible
            }, 0);
        }
    }
    
    function cerrarCambio(idModal) {
        const modal = document.getElementById(idModal); // Selecciona el modal específico por ID
        const unidades = document.getElementById('esconder_unidades');
    
        if (modal && unidades) {
            modal.classList.remove('show'); // Comienza la animación de cierre
            setTimeout(() => {
                modal.style.display = 'none'; // Lo oculta al finalizar la animación
                unidades.style.display = "block";
            }, 500); // Tiempo igual al de la transición (0.5s)
        }
    }



        
        

function openModal(){
        const openModal1 = document.querySelector('.hero_cta1');
        const modal1 = document.querySelector('.modal1');
        const closeModal1 = document.querySelector('.modal_close1');

        const openModal2 = document.querySelector('.hero_cta2');
        const modal2 = document.querySelector('.modal2');
        const closeModal2 = document.querySelector('.modal_close2');


        const openModal3 = document.querySelector('.hero_cta3');
        const modal3 = document.querySelector('.modal3');
        const closeModal3 = document.querySelector('.modal_close3');


        function Modal1(){
        openModal1.addEventListener('click', (e)=>{
                e.preventDefault();
                modal1.classList.add('modal1--show');
        });
        
        closeModal1.addEventListener('click', (e)=>{
                e.preventDefault();
                modal1.classList.remove('modal1--show');
        });

        }


        function Modal2(){

        openModal2.addEventListener('click', (e)=>{
                e.preventDefault();
                modal2.classList.add('modal2--show');
        });


        closeModal2.addEventListener('click', (e)=>{
                e.preventDefault();
                modal2.classList.remove('modal2--show');
        });

        }


        function Modal3(){

        openModal3.addEventListener('click', (e)=>{
                e.preventDefault();
                modal3.classList.add('modal3--show');
        });


        closeModal3.addEventListener('click', (e)=>{
                e.preventDefault();
                modal3.classList.remove('modal3--show');
        });


        }
}