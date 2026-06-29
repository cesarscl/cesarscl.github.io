const precio = 400000;
let cantidad = 0;

const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const totalSpan = document.querySelector(".valor-total");

precioSpan.innerHTML = precio.toLocaleString("es-CL");
cantidadSpan.innerHTML = cantidad;
totalSpan.innerHTML = 0;

function actualizarTotal() {
    const total = precio * cantidad;
    cantidadSpan.innerHTML = cantidad;
    totalSpan.innerHTML = total.toLocaleString("es-CL");
}

function sumarProducto() {
    cantidad = cantidad + 1;
    actualizarTotal();
}

function restarProducto() {
    if (cantidad > 0) {
        cantidad = cantidad - 1;
        actualizarTotal();
    }
}
