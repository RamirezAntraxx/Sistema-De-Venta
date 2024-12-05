
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    // Muestra la ventana emergente
    var modal = document.getElementById("myModal");
    modal.style.display = "block";

    // Cierra la ventana emergente al hacer clic en el botón de cerrar
    var closeButton = document.getElementsByClassName("close-button")[0];
    closeButton.onclick = function() {
      modal.style.display = "none";
    }

    // Cierra la ventana emergente al hacer clic fuera de ella
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
 });

 