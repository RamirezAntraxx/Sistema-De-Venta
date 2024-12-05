const inicioForm = document.querySelector('#inicioForm');
inicioForm.addEventListener('submit', (evento) => {
  evento.preventDefault();
  
  let password = document.querySelector("#password").value;
  let email = document.querySelector("#email").value;
  
  let Users = JSON.parse(localStorage.getItem('users')) || [];
  let validUser = Users.find(user => user.email === email && user.password === password);
  
  if (validUser) {
    // Mostrar el alert de bienvenida al sistema
    const welcomeAlert = document.getElementById('welcomeAlert');
    welcomeAlert.querySelector('strong').textContent = `¡Bienvenido al sistema ${validUser.name} ${validUser.lastname}`;
    welcomeAlert.classList.add('show');

    // Agregar evento de click al botón de cierre
    welcomeAlert.querySelector('.btn-close').addEventListener('click', () => {
      welcomeAlert.classList.remove('show');
    });

    // Ocultar el alert después de 1 segundos
    setTimeout(() => {
      welcomeAlert.style.display = 'none';
    }, 1500);

    // Redirigir al usuario a la página deseada después de 4 segundos
    setTimeout(() => {
      localStorage.setItem('login_success', JSON.stringify(validUser));
      window.location.href = 'indexuser.html';
    }, 1500);
  } else {
    // Mostrar el alert de datos invalidos
    const errorAlert = document.getElementById('errorAlert');
    errorAlert.querySelector('strong').textContent = 'Datos invalidos';
    errorAlert.classList.add('show');

    // Ocultar el alert después de 1 segundos
    setTimeout(() => {
      errorAlert.style.display = 'none';
    }, 2000);

    // Agregar evento de click al botón de cierre
    errorAlert.querySelector('.btn-close').addEventListener('click', () => {
      errorAlert.classList.remove('show');
    });
  }
});