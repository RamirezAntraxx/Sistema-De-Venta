document.addEventListener('DOMContentLoaded', function() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
        document.getElementById('nombreInfo').textContent = currentUser.name;
        document.getElementById('apellidoInfo').textContent = currentUser.lastname;
        document.getElementById('emailInfo').textContent = currentUser.email;
        document.getElementById('celulaInfo').textContent = currentUser.cell;
        document.getElementById('telefonoInfo').textContent = currentUser.phone;
        document.getElementById('contrasenaInfo').textContent = currentUser.password;
    } else {
        console.error('No se encontró el usuario actual en el localStorage.');
    }
});


document.addEventListener('DOMContentLoaded', function() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
        document.getElementById('userName').textContent = `${currentUser.name} ${currentUser.lastname}`;
    } else {
        console.error('No se encontró el usuario actual en el localStorage.');
    }
});
