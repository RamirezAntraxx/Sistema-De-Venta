// Guardar productos comprados en localStorage
function guardarCompras() {
    const compras = [];
    const carritoItems = document.querySelectorAll('.carrito-item');
    carritoItems.forEach(item => {
        const producto = {
            titulo: item.querySelector('.carrito-item-titulo').textContent,
            precio: parseFloat(item.querySelector('.carrito-item-precio').textContent.replace('$', '').replace('.', '')),
            cantidad: parseInt(item.querySelector('.carrito-item-cantidad').value),
            fecha: new Date().toLocaleDateString(),
            hora: new Date().toLocaleTimeString(),
            imagen: item.querySelector('img') ? item.querySelector('img').src : ''
        };
        compras.push(producto);
    });
    localStorage.setItem('compras', JSON.stringify(compras));
    // Mostrar alerta de compra exitosa
    document.getElementById('welcomeAlert').classList.add('show');
}


function mostrarCompras() {
    const compras = JSON.parse(localStorage.getItem('compras'));
    if (compras && compras.length > 0) {
        const comprasHTML = compras.map(compra => {
            return `
            <div class="registro-compra">
            <img src="${compra.imagen}" alt="${compra.titulo}" class="img-registro">
            <div class="datos-registro">
                <h2>${compra.titulo}</h2>
                <p>Cantidad: ${compra.cantidad}</p>
                <p>Precio: $${compra.precio}</p>
                <p>Fecha: ${compra.fecha}</p>
                <p>Hora: ${compra.hora}</p>
            </div>
        </div>
            `;
        }).join('');
        document.getElementById('compras').innerHTML = comprasHTML;
    } else {
        document.getElementById('compras').innerHTML = '<p>No hay productos registrados.</p>';
    }
}

// Actualizar total pagado
function actualizarTotalPagado() {
    const compras = JSON.parse(localStorage.getItem('compras'));
    let total = 0;
    compras.forEach(compra => {
        total += compra.precio * compra.cantidad;
    });
    document.getElementById('total-pagado').textContent = `Total pagado: $${total.toLocaleString("es")}`;
}


// Cargar compras al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarCompras();
    actualizarTotalPagado();
});


function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = "";
    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.titulo}" class="img-item">
            <span class="titulo-item">${producto.titulo}</span>
            <span class="precio-item">$${producto.precio}</span>
            <button class="boton-item">Agregar</button>
        `;
        contenedorProductos.append(div);
    });
    actualizarBotonesAgregar();
}

// Cargar compras al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarCompras();
});