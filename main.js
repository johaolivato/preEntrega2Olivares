// Función para mostrar un mensaje de bienvenida y obtener el nombre del usuario
function obtenerNombre() {
    alert("Bienvenidos a Dime que Sí Novia.");
    let nombre = prompt("Por favor, ingresa tu nombre:");

    // Verificar si se ingresó un nombre antes de aplicar transformaciones
    if (nombre) {
        nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
    }

    return nombre;
}

// Función que muestra las opciones de compra y calcula el total
function realizarCompra() {
    let opciones = [
        { nombre: "ramo de cintas", precio: 20000 },
        { nombre: "confeti de colores", precio: 10000 },
        { nombre: "varita de cintas", precio: 15000 }
    ];
    let total = 0;
    let seguirComprando = true;

    while (seguirComprando) {
        // Mostrar opciones de compra de manera descriptiva
        alert("Opciones de compra:\n1. Ramo de cintas $20,000\n2. Confeti de colores $10,000\n3. Varita de cintas $15,000\n4. Finalizar compra");

        let opcion = prompt("¿Qué deseas comprar?");

        // Verificar si la entrada es un número
        if (!isNaN(opcion)) {
            opcion = Number(opcion);

            if (opcion >= 1 && opcion <= opciones.length) {
                total += opciones[opcion - 1].precio;
                let continuar = prompt("Elige una opción:\n1. Continuar comprando\n2. Finalizar compra");

                seguirComprando = (continuar === "1");
            } else if (opcion === 4) {
                seguirComprando = false;
            } else {
                alert("Disculpa, detectamos un error. Por favor, elige una opción válida.");
            }
        } else {
            alert("Por favor, ingresa un número válido.");
        }
    }

    return total;
}

// Función principal
function main() {
    let nombre = obtenerNombre();
    alert("Te damos la bienvenida, " + nombre);
    let total = realizarCompra();
    alert("Gracias, " + nombre + ". El total de tu compra es de $" + total + ". Te responderemos por mail para finalizar el pago. ¡Hasta luego!");
}

// Llamar a la función principal
main();
