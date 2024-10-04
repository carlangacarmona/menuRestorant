// Seleccionamos todos los checkboxes
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Elementos para mostrar la cuenta
const itemsPedido = document.getElementById('items-pedido');
const precioTotal = document.getElementById('precio-total');

// Función para formatear el precio con separador de miles
function formatoPrecio(precio) {
    return '$' + precio.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

// Función para actualizar la cuenta
function actualizaPedido() {
    let total = 0;
    itemsPedido.innerHTML = ''; // Limpiar la tabla de la cuenta

    // Revisamos cada checkbox para ver si está seleccionado
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const nombreItem = checkbox.dataset.name; // Obtenemos el nombre del ítem desde data-name
            const precio = parseFloat(checkbox.value); // Precio del ítem

            // Añadimos el ítem seleccionado a la cuenta
            const row = `<tr><td>${nombreItem}</td><td>${formatoPrecio(precio)}</td></tr>`;
            itemsPedido.innerHTML += row;

            total += precio; // Sumamos el precio al total
        }
    });

    // Mostramos el total formateado
    precioTotal.textContent = formatoPrecio(total);
}

// Añadimos el evento 'change' a todos los checkboxes
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', actualizaPedido);
});
