// Verificar si hay un usuario actual en el localStorage
const currentUser = JSON.parse(localStorage.getItem('currentUser'));

// Mostrar el alert de bienvenida si hay un usuario actual
if (currentUser) {
  const welcomeAlert = document.getElementById('welcomeAlert');
  welcomeAlert.querySelector('strong').textContent = `¡Bienvenido ${currentUser.name} ${currentUser.lastname}`;
  welcomeAlert.classList.add('show');

  // Agregar evento de click al botón de cierre
  welcomeAlert.querySelector('.btn-close').addEventListener('click', () => {
    welcomeAlert.classList.remove('show');
  });
}




