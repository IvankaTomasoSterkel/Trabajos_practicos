function verificar(nombre,nota) {
    let mensaje
    if (nota >= 6) {
        mensaje = "hola " +  nombre  +  " te sacaste un "  +  nota  +  " entonces aprobaste "
    } else {
        mensaje = " hola " + nombre + " no aprobaste "
    }
    return mensaje
}
let p1 = document.querySelector("#p1")
let b1 = document.querySelector("#b1")

b1.onclick = function () {
    p1.textContent = verificar(" ale ",5 )
    console.log(verificar (" ivanka ",6))
}

//arreglos

let veiculos = ["autos","caballos","motos"]
let input12 = document.querySelector ("#input2")
let b2a = document.querySelector ("#b2a")
let b2b = document.querySelector ("#b2b")
let b2c = document.querySelector ("#b2c")

b2a.onclick = function () {
    veiculos.pop();
}
b2b.onclick = function () {
    veiculos.push ("colectivo")
}