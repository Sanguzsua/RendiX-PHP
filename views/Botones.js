
// fUNCIONES DE LA PAGINA PRINCIPAL
  // Función para abrir un enlace del botón ALQUILAR 
    function redirigir1() {
      window.location.href="Lavadora.html"; //Link Lavadora Haceb
    }
    function redirigir2() {
      window.location.href="bafle.html"; //Link de Bafle de sonido
    }
    function redirigir3() {
      window.location.href="televisor.html"; //Link de Televisor
    }
    function redirigir4() {
      window.location.href="xbox.html"; //Link de Xbox 360
    }
    function redirigir5() {
      window.location.href="camping.html" // Link del camping
    }
    
    function redirigir6() {
      window.location.href = "carro.html"; //Link Renault Kwid
    }
    function buscarProducto() {
    // Obtener el valor del campo de búsqueda
    const busqueda = document.getElementById('busqueda').value.toLowerCase();

    // Redirigir a la página correspondiente según el término de búsqueda
    if (busqueda === 'lavadora') {
        window.location.href = 'Lavadora.html'; // Cambia 'lavadora.html' por la URL de la página de la lavadora
    } else if (busqueda === 'bafle') {
        window.location.href = 'bafle.html'; // Cambia 'bafle.html' por la URL de la página del bafle
      } else if (busqueda === 'televisor') {
        window.location.href = 'televisor.html'; // Cambia 'televisor.html' por la URL de la página del televisor
    } else if (busqueda === 'xbox') {
        window.location.href = 'xbox.html'; // Cambia 'xbox.html' por la URL de la página del xbox
    } else if (busqueda === 'camping') {
      window.location.href = 'camping.html'; // Cambia 'camping.html' por la URL de la página del camping
  } else if (busqueda === 'renault') {
    window.location.href = 'carro.html'; // Cambia 'carro.html' por la URL de la página del carro
} else {
        alert('Producto no encontrado. Inténtelo nuevamente.'); // Mensaje si no se encuentra el producto
    }
}
// FUNCIONES PARA LA PAGINA LAVADORA
  function registro(event) { 
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario 
    window.location.href = "RegistroExitoso.html"; // Redirigir a la página de registro exitoso 
    } 
  function met1() {
    window.location.href="Forma-Entrega.html" // Link para Pag Forma de Entrega
  }
  function met2() {
    window.location.href="form-Entrega-not.html" // Link para Pag Forma de Entrega
  }

// fUNCIONES PARA LA PAGINA DE FORMA-ENTREGA
   function Opc1() {
    window.location.href="Form-Direccion.html"; //Link fORMULARIO De Direccion
                   }
    function Opc2()  {
    window.location.href="Contraentrega-not.html" //Link fORMULARIO De Direccion
} 
  function Opc3(event) { 
   event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario 
   window.location.href = "Contraentrega.html"; // Redirigir a la página de Contraentrega
} 


// FUNCIONES PARA LA PAGINA DE FORMA-ENTREGA-NOT
function Opc4() {
  window.location.href="Form-Direccion-not.html"; //Link fORMULARIO De Direccion
                 }
  function Opc5()  {
  window.location.href="Tarjetas-not.html" //Link fORMULARIO De Direccion
} 
function Opc6(event) { 
  event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario 
  window.location.href = "Tarjetas.html"; // Redirigir a la página de Contraentrega
} 

// FUNCIONES PARA LA PAG PEDIDO-PREPARACION

 function comprar()  {
   window.location.href= "index.html"
 }

 // FUNCIONES DE LA PAG CONTRAENTREGA Y CONTRAENTREGA-NOT

  function pedido()  {
    window.location.href= "Pedido-Preparacion.html"
  }

// FUNCIONES PARA LA PAG PROCESO-TARJETAS
  function vis()  {
    window.location.href= "Form-visa.html"
  }
  function mastercard()  {
    window.location.href= "form-mastercard.html"
  }
// FUNCIONES PARA LAS PAG TARJETAS Y TARJETAS-NOT
  function proceso()  {
  window.location.href= "Proceso-Tarjetas.html"
}
// FUNCIONES PARA LAS PAG DE FORM-VISA Y FORM-MASTERCARD
  function master(event) { 
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario 
   window.location.href = "Pedido-Preparacion.html"; // Redirigir a la página de Contraentrega
} 
  function visa(event) { 
   event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario 
   window.location.href = "Pedido-Preparacion.html"; // Redirigir a la página de Contraentrega
} 

// Funcion del boton del carro de compras

function carro()  {
  window.location.href= "carrito.html"
}

//Funciones para el boton politicas de alquilar

function politicas()  {
  window.location.href= "Pagina de ayuda.html"
}
document.addEventListener('DOMContentLoaded', function () {
  let currentIndex = 0;
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    slides.style.transform = `translateX(-${100 * currentIndex}%)`;
  }, 5000);
});

function inicializarMapa() {
  const mapa = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 4.711, lng: -74.0721 }, // Bogotá como centro por defecto
    zoom: 12,
  });

  let marcador = new google.maps.Marker({
    position: mapa.getCenter(),
    map: mapa,
    draggable: true,
  });

  // Actualizar coordenadas al mover el marcador
  marcador.addListener("dragend", function () {
    const pos = marcador.getPosition();
    document.getElementById("latitud").value = pos.lat();
    document.getElementById("longitud").value = pos.lng();
  });

  // También actualizar coordenadas al hacer clic en el mapa
  mapa.addListener("click", function (e) {
    marcador.setPosition(e.latLng);
    document.getElementById("latitud").value = e.latLng.lat();
    document.getElementById("longitud").value = e.latLng.lng();
  });
}

window.onload = () => {
  const productos = JSON.parse(localStorage.getItem('productos')) || [];

  const contenedor = document.getElementById('productos');

  productos.forEach(p => {
    const card = document.createElement('div');
    card.innerHTML = `
      <img src="${p.imagen}" style="width:100%; border-radius:8px" />
      <h3>${p.nombre}</h3>
      <p>${p.descripcion}</p>
      <strong>$${p.valor}</strong>
    `;
    contenedor.appendChild(card);
  });
};
//funcion para agregar al carrito de compras
function agregarAlCarrito(nombreProducto, tipoEntrega) {
  let precioBase;
  let imagen;
  let costoDomicilio = 12500;
// Se utiliza una estructura switch para identificar qué producto seleccionó el usuario
  switch (nombreProducto) {
    // Cada caso representa un producto específico
    case "Lavadora 11 Kilogramos Haceb Panel Frontal Digital Gris":
      precioBase = 70000;
      costoDomicilio=12500;
      imagen = "IMAGENES/7704353431483-1.webp";
      break;
    case "PC Gamer Ryzen 5":
      precioBase = 150000;
      costoDomicilio=12500;
      imagen = "IMAGENES/PCRYZEN.webp";
      break;
    case "Televisor 32 Pulgadas Challenger LED TV3":
      precioBase = 60000;
      costoDomicilio=12500;
      imagen = "IMAGENES/7705191043944_01.webp";
      break;
    case "Xbox 360":
      precioBase = 65000;
      costoDomicilio=12500;
      imagen = "IMAGENES/41G+FzEeRCL.jpg";
      break;
    case "CAMPING IGLU ROYAKAMP 4 PERSONAS":
      precioBase = 55000;
      costoDomicilio=12500;
      imagen = "IMAGENES/tienda-turistica-aislado-sobre-fondo-blanco_873674-588.avif";
      break;
    case "Renault Kwid 2019":
      precioBase = 200000;
      costoDomicilio=12500;
      imagen = "IMAGENES/Renault Kwid.jpeg";
      break;
    // Si el nombre del producto no coincide con ninguno de los anteriores muestra una alerta
      default:
      alert("Producto no encontrado");
      return;
  }
  
// Se crea un objeto que representa el producto con toda su información
  const producto = {
    nombre: nombreProducto,
    imagen: imagen,
    tipoEntrega: tipoEntrega,
    // Si el usuario eligió entrega a domicilio, se suma el costo extra al precio base,de lo contrario, solo se asigna el precio base
    precio: tipoEntrega === "domicilio" ? precioBase + costoDomicilio : precioBase
  };
// Recupera el carrito actual desde el almacenamiento local del navegador si no existe, se inicializa como un arreglo vacío
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  carrito.push(producto);
  // Guarda el carrito actualizado en el almacenamiento local (como texto JSON)
  localStorage.setItem('carrito', JSON.stringify(carrito));
  // Muestra una alerta al usuario confirmando que se agregó el producto
  alert("¡Producto agregado al carrito!");
}
function seguirAlquilando() {
  // Eliminar el carrito del localStorage
  localStorage.removeItem("carrito");

  // Redirigir al usuario de vuelta al sitio de alquiler, por ejemplo, a la página principal
  window.location.href = "index.html"; // Cambia "index.html" por la URL correcta
}