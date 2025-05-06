
  
  function redirigirAyuda() {
    window.location.href = "Pagina de ayuda.html"; // Pagina propia de ayuda
}
function redirigirCalificacion(){
    window.location.href ="Calificanos.html"; 

}
function carro2(){
  window.location.href ="carrito.html"; 

}

function redirigirPQRS() {
  window.location.href = "PQRS.html";
}

// Selección del botón y del contenido del menú desplegable
const dropdownButton = document.querySelector('.dropdown-menu-btn');
const dropdownContent = document.querySelector('.dropdown-menu-content');

// Función para alternar la visibilidad del menú
dropdownButton.addEventListener('click', () => {
    dropdownContent.classList.toggle('show');
});

// Cerrar el menú si se hace clic fuera de él
document.addEventListener('click', (event) => {
    if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
        dropdownContent.classList.remove('show');
    }
});

// Selección del botón y contenido del menú desplegable de Sección 2
const dropdownButton2 = document.querySelector('.dropdown-menu2');
const dropdownContent2 = document.querySelector('.dropdown-menu2-content');

// Función para alternar la visibilidad del menú
dropdownButton2.addEventListener('click', () => {
    dropdownContent2.classList.toggle('show2');
});

// Cerrar el menú si se hace clic fuera de él
document.addEventListener('click', (event) => {
    if (!dropdownButton2.contains(event.target) && !dropdownContent2.contains(event.target)) {
        dropdownContent2.classList.remove('show2');
    }
});





