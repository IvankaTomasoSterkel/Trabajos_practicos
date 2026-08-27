//ejercicio 1
let input1 = document.querySelector ("#input1")
let boton1 = document.querySelector ("#boton1")
let parrafo1 = document.querySelector ("#parrafo1")

boton1.onclick = function_(){
if (input1 <10) { 
    parrafo1.textContent = "hace frio"
    style.color = rgb (73, 137, 139)
} else if (input1 >10 || == 25 ){
    parrafo1.textContent = " AGRADABLE"
    style.color =  rgb(34, 204, 34)
} else if (input1 >=25) { 
    parrafo1.textContent = " hace calor"
    style.colorFondo = rgb(201, 22, 22)
}
}
