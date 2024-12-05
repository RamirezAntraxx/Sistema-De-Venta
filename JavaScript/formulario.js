const registroForm = document.querySelector('form');
registroForm.addEventListener('submit', (evento) => {
  evento.preventDefault();

  let nombre = document.querySelector("#n1").value;
  let apellido = document.querySelector("#n2").value;
  let email = document.querySelector("#n3").value;
  let contraseña = document.querySelector("#n4").value;
  let telefono = document.querySelector("#n5").value;
  let celula = document.querySelector("#n6").value;

  let Users = JSON.parse(localStorage.getItem('users')) || [];
  let isUserRegistered = Users.find(user => user.email === email);

  if (isUserRegistered) {
    document.getElementById('errorAlert').classList.add('show');
    setTimeout(() => {
      document.getElementById('errorAlert').classList.remove('show');
    }, 3000); // Ocultar la alerta después de 3 segundos
  } else {
    Users.push({ name: nombre, lastname: apellido, email: email, password: contraseña, phone: telefono, cell: celula });
    localStorage.setItem('users', JSON.stringify(Users));
    document.getElementById('successAlert').classList.add('show');

    // Define el objeto usuarioActual con los datos del usuario registrado
    let usuarioActual = { name: nombre, lastname: apellido, email: email, password: contraseña, phone: telefono, cell: celula };

    // Guarda el usuario actual en el localStorage :V
    localStorage.setItem('currentUser', JSON.stringify(usuarioActual));

    // Esperar 2 segundos antes de redirigir espera pa
    setTimeout(() => {
      window.location.href = "formulario.html";
    }, 2000); // 2000 milisegundos = 2 segundos
  }
});

// Validación de Número de Teléfono
const phoneInput = document.getElementById('n5');
phoneInput.addEventListener('input', (event) => {
  event.target.value = event.target.value.replace(/\D/g, '');
});

// Validación de Documento de Identidad
const idInput = document.getElementById('n6');
idInput.addEventListener('input', (event) => {
  event.target.value = event.target.value.replace(/\D/g, '');
});



registroForm.addEventListener('submit', (evento) => {
  evento.preventDefault();

  // Validar que todos los campos obligatorios estén llenos
  if (nombre.trim() === '' || apellido.trim() === '' || email.trim() === '' || contraseña.trim() === '' || telefono.trim() === '' || celula.trim() === '') {
    // Mostrar una alerta o mensaje de error
    return;
  }

});


// No me raspen me duele la cabeza :,(