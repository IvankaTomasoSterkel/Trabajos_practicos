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
//ejercicio 2
let nombreUsuario = 'Joaco Sanchez'
let b2 = document.querySelector("#b2")
let p2 = document.querySelector('#p2')
b2.onclick = function () {
    if (nombreUsuario == 'nahuel') {
        p2.textContent = "Bienvenido Nahuel"
    } else {
        p2.textContent = "bienvenido usuario"
    }
}

// ejercicio 3








