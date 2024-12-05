document.addEventListener('DOMContentLoaded', function() {
    // Obtener el nombre y apellido del usuario actual del localStorage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    // Verificar si hay un usuario actual
    if (currentUser) {
        // Obtener el elemento del nombre y apellido del usuario en el botón
        const userFullNameElement = document.getElementById('userFullName');
        
        // Mostrar el nombre y apellido del usuario en el botón
        userFullNameElement.textContent = `${currentUser.name} ${currentUser.lastname}`;
    }
});