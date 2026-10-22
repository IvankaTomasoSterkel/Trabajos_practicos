// Actividad 1
let utiles = ["Lápiz", "Goma", "Regla", "Cuaderno", "Lapicera"];

// Mostrar el arreglo completo en la consola
console.log(utiles);


// Mostrar el primer elemento
console.log(utiles[0]);


// Mostrar el tercer elemento
console.log(utiles[2]);


// Mostrar el último elemento utilizando length
console.log(utiles[utiles.length - 1]);


// Mostrar la cantidad de elementos del arreglo
console.log(utiles.length);


// Agregar "Mochila" al final utilizando push()
utiles.push("Mochila");


// Mostrar el arreglo actualizado
console.log(utiles);


// Agregar "Cartuchera" al principio utilizando unshift()
utiles.unshift("Cartuchera");


// Mostrar el arreglo actualizado
console.log(utiles);


// Mostrar la cantidad de elementos después de las modificaciones
console.log(utiles.length);


// Eliminar el último elemento utilizando pop()
let eliminado = utiles.pop();


// Mostrar el elemento eliminado
console.log(eliminado);


// Mostrar el arreglo actualizado
console.log(utiles);


// Eliminar el primer elemento utilizando shift()
eliminado = utiles.shift();


// Mostrar el elemento eliminado
console.log(eliminado);


// Mostrar el arreglo definitivo
console.log(utiles);


// Mostrar la cantidad final de elementos
console.log(utiles.length);

// Actividad 2
let productos = ["Leche", "Pan", "Arroz", "Fideos", "Aceite"];

// Mostrar la lista inicial
console.log("Lista inicial:", productos);

// Mostrar la cantidad de productos
console.log("Cantidad de productos:", productos.length);

// Agregar Azúcar al final
productos.push("Azúcar");

// Agregar Yerba al final
productos.push("Yerba");

// Agregar Café al final
productos.push("Café");

// Mostrar la lista actualizada
console.log("Lista actualizada:", productos);

// Agregar Sal al principio
productos.unshift("Sal");

// Agregar Galletitas al principio
productos.unshift("Galletitas");

// Mostrar la lista actualizada
console.log("Lista actualizada:", productos);

// Mostrar la cantidad de productos
console.log("Cantidad de productos:", productos.length);

// Eliminar el último producto
let eliminado = productos.pop();

// Mostrar el producto eliminado
console.log("Producto eliminado:", eliminado);

// Eliminar nuevamente el último producto
eliminado = productos.pop();

// Mostrar el producto eliminado
console.log("Producto eliminado:", eliminado);

// Mostrar la lista actualizada
console.log("Lista actualizada:", productos);

// Eliminar el primer producto
eliminado = productos.shift();

// Mostrar el producto eliminado
console.log("Producto eliminado:", eliminado);

// Mostrar la lista definitiva
console.log("Lista definitiva:", productos);

// Mostrar la cantidad de productos restantes
console.log("Cantidad de productos restantes:", productos.length);

// actividad 3
let productos = [
    "Teclado",
    "Mouse",
    "Monitor",
    "Auriculares",
    "Webcam",
    "Parlantes"
];

// Buscar Mouse
let posicion = productos.indexOf("Mouse");

// Mostrar la posición obtenida
console.log("Posición de Mouse:", posicion);

// Buscar Monitor
posicion = productos.indexOf("Monitor");

// Mostrar la posición obtenida
console.log("Posición de Monitor:", posicion);

// Buscar Webcam
posicion = productos.indexOf("Webcam");

// Mostrar la posición obtenida
console.log("Posición de Webcam:", posicion);

// Buscar Impresora
posicion = productos.indexOf("Impresora");

// Mostrar el resultado obtenido
console.log("Resultado de buscar Impresora:", posicion);

// Buscar Teclado y guardar el resultado en una variable
let teclado = productos.indexOf("Teclado");

// Utilizar if para determinar si el teclado está registrado
if (teclado != -1) {
    console.log("El teclado está registrado.");
} else {
    console.log("El teclado no está registrado.");
}

// Buscar Impresora y guardar el resultado en otra variable
let impresora = productos.indexOf("Impresora");

// Utilizar if para determinar si la impresora está registrada
if (impresora != -1) {
    console.log("La impresora está registrada.");
} else {
    console.log("La impresora no está registrada.");
}

// Agregar Impresora al final del arreglo
productos.push("Impresora");

// Volver a buscar Impresora
impresora = productos.indexOf("Impresora");

// Mostrar el resultado de la búsqueda
console.log("Nueva posición de Impresora:", impresora);

//  Mostrar la cantidad de productos registrados
console.log("Cantidad de productos registrados:", productos.length);

// ejercicio 4
let videojuegos = [
    "Minecraft",
    "Pokémon Cristal",
    "Super Mario",
    "The Legend of Zelda",
    "Sonic"
    
    ];

    