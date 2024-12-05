// Obtener los campos del formulario
const nameInput = document.getElementById('name');
const passwordInput = document.getElementById('password');

// Agregar un evento de submit al formulario
document.getElementById('inicioForm').addEventListener('submit', (e) => {
  e.preventDefault();

  // Obtener los valores del formulario
  const name = nameInput.value;
  const password = passwordInput.value;

  // Verificar si el usuario es administrador
  if (name === 'admin' && password === 'admin') {
    // Mostrar mensaje de bienvenida
    alert('¡Bienvenido al sistema!');

    // Redirigir al administrador
    window.location.href = 'administrador-user.html';
  } else {
    // Mostrar mensaje de error
    alert('¡Datos invalidos!');
  }
});
