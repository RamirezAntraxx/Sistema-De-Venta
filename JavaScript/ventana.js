// Obtén todas las tarjetas
const cards = document.querySelectorAll('.card');

// Obtén la ventana modal y los elementos necesarios
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalDescription = document.getElementById('modal-description');
const closeButton = document.getElementsByClassName('close-button')[0];

// Definir la información de cada producto: imagen y descripción
const productos = [
  {
    titulo: "Viveres",
    imagen: "01.png",
    descripcion: "Viveres al Mejor Precio y con sus Variedad de Productos a lllevar"
  },
  {
    titulo: "Electrodomesticos",
    imagen: "02.png",
    descripcion: "Los Mejores Electrodomesticos para el Hogar En un Precio accesible"
  },

  {
    titulo: "Plomeria",
    imagen: "03.png",
    descripcion: "Obten Tus Llaves,Tenflon, y variedad de productos Para el mantenimiento de tus Tuberias"
  },

  {
    titulo: "Confiteria",
    imagen: "04.png",
    descripcion: "Al Mayor Para Tus Reuniones en Familia y Fiestas Infantiles"
  },


  {
    titulo: "Repuestos y Accesorios Para Motos",
    imagen: "05.png",
    descripcion: "Repuestos para El Mantenimiento de Moto o Accesorios"
  },

  
  {
    titulo: "Papeleria",
    imagen: "06.png",
    descripcion: "Utiles Escolares, Para tus Hijos para empezar el Año escolar con utiles De la Mejor  Calidad"
  },


  {
    titulo: "Productos de Limpieza",
    imagen: "07.png",
    descripcion: "Productos de limpieza para todo uso en nuestro hogar "
  },

  {
    titulo: "Medicamentos",
    imagen: "08.png",
    descripcion: "Medicamentos Para El Tratamiento de Sus Dolencias"
  },


 
];


// Agregar un evento de clic a cada tarjeta
cards.forEach((card, index) => {
    card.addEventListener('click', () => {
      // Mostrar la ventana modal
      modal.style.display = 'block';
  
      // Establecer el título, la imagen y la descripción del producto seleccionado
      const tituloProducto = productos[index].titulo || "Producto " + (index + 1);
      document.getElementById('modal-title').textContent = tituloProducto;
      modalImage.src = `imag/${productos[index].imagen}`;
      modalDescription.textContent = productos[index].descripcion;
    });
  });
  
  // Agregar un evento de clic al botón de cerrar
  closeButton.addEventListener('click', () => {
    // Ocultar la ventana modal
    modal.style.display = 'none';
  });
  
  // Cerrar la ventana modal al hacer clic fuera de ella
  window.addEventListener('click', (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
  
  // Agregar evento de clic al botón "Ver más productos"
  document.getElementById('ver-productos').addEventListener('click', () => {
    window.location.href = 'categoria-viveres.html';

    const closeButton = document.querySelector('.close-button');

closeButton.addEventListener('click', () => {
  modal.style.display = 'none'; // Ocultar la ventana modal al hacer clic en el botón de cierre
});
  });


