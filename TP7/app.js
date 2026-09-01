let p1 = document.querySelector("#p1")
let edad = 18
let b1 = document.querySelector("#b1")

b1.onclick = function () {
    //b1.textContent = "resultado"
    if (edad >= 18) {
        p1.textContent = "sos mayorde edad"
    } else {
        p1.textContent = "sos menor de edad"
    }
}
//ejercicio 2 y 3
let nombreUsuario = 'Joaco Sanchez'
let b23 = document.querySelector("#b2")
let p23 = document.querySelector('#p2')
b23.onclick = function () {
    if ((nombreUsuario == 'nahuel') || (nombreUsuario == 'marcos')) {
        p23.textContent = "Bienvenido " + nombreUsuario + " ¿cómo estás?"
    } else {
        p23.textContent = "Bienvenido " + nombreUsuario
    }
}

// ejercicio 4
let numero = 0
if (numero < 0) {
    P2.textContent = "el numero es negativo"
} else if (numero > 0) {
    P2.textContent = "el numero es positivo"
} else {
    P2.textContent = "el numero 0"
}

// ejercicio 5
b4.onclick = function () {
    let edad = 18
    if ((edad >= 6) || (edad <= 11)) {
        P2.textContent = "sos un niño"
    } else if ((edad >= 12) || (edad <= 18)) {
        P2.textContent = "sos un adolecente"
    } else if ((edad >= 19) || (edad <= 26)) {
        P2.textContent = "sos un joven"
    } else if ((edad >= 27) || (edad <= 59)) {
        P2.textContent = "sos un adulto"
    } else if (edad >= 60)
        P2.textContent = "anciano"
}

//ejercicio 6
let p4 = document.querySelector("#p4")
let b4 = document.querySelector("#b4")
let dia = jueves
b4.onclick = function () {
    if ((dia == lunes) || (dia == martes) || (dia == miercoles) || (dia == jueves) || (dia == viernes)) {
        p4.textContent = "es dia se semana"
    } else {
        b4.textContent = " ya es finde semana"
    }
}

//ejercicio 7
let b5 = document.querySelector ("#b5")
let contraseña = document.querySelector ("#contraseña")

b5.onclick = function () {
if (contraseña == 'secreto') {
    p5.textContent = "aceso consedido"
} else {
    p5.textContent = "aceso denegado"
}
}











