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
let b2 = document.querySelector("#b2")
let p2 = document.querySelector('#p2')
b2.onclick = function () {
    if ((nombreUsuario == 'nahuel') || (nombreUsuario == 'marcos'))  {
        p2.textContent = "Bienvenido " + nombreUsuario + " ¿cómo estás?"
    } else {
        p2.textContent = "Bienvenido " + nombreUsuario 
    }
}

// ejercicio 4
let numero = 0
if (numero < 0) {
    P2.textContent =  "el numero es negativo"
}else if(numero > 0){
    P2.textContent = "el numero es positivo"
} else {
    P2.textContent = "el numero 0"


// ejercicio 5
let edad = 










