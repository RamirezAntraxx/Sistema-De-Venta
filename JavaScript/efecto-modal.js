document.addEventListener('DOMContentLoaded', function() {
    // Obtain elements of the links
    let productosLink = document.getElementById('productos-link');
    let desarrolladoresLink = document.getElementById('desarrolladores-link');
    let contactoLink = document.getElementById('contacto-link');
  
    // Obtain the alert
    let accessAlert = document.getElementById('accessAlert');
  
    // Show alert when clicking on the links
    productosLink.addEventListener('click', function() {
      accessAlert.classList.add('show');
    });
  
    desarrolladoresLink.addEventListener('click', function() {
      accessAlert.classList.add('show');
    });
  
    contactoLink.addEventListener('click', function() {
      accessAlert.classList.add('show');
    });
  
    // Close alert when clicking on the close button
    accessAlert.querySelector('.btn-close').addEventListener('click', function() {
      accessAlert.classList.remove('show');
    });
  });

// Obtener el elemento del alert
let accessAlert = document.getElementById('accessAlert');

// Agregar evento de clic al botón de cierre del alert
accessAlert.querySelector('.btn-close').addEventListener('click', function() {
  accessAlert.classList.remove('show');
});
