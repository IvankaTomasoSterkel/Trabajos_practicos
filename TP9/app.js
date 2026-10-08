let p = document.querySelector('#ejer1')
// x2 + 5
// x2 + 32
// x2 + 10
//Declarar la funcion
function mayor(n1, n2){
  let nmayor
  if(n1 > n2){
    nmayor = n1
  } else{
    nmayor = n2
  }
  return nmayor
}
ejer1.textContent = 'El mayor es: ' + mayor(10,50)




//ejer2
let p2 = document.querySelector('#ejer2')
// x2 + 5
// x2 + 32
// x2 + 10
//Declarar la funcion
function menor(n3, n4){
  let nmenor
  if(n3 < n4){
    nmenor = n3
  } else{
    nmenor = n4
  }
  return nmenor
}
ejer2.textContent = 'El menor es: ' + menor(10,50)




//ejer3
function iguales (n1,n2,n3){
let resultado
 if ((n1 == n2)&&(n2 == n3)){
  resultado='son iguales'
 }else{
  resultado='son distintos'
 }
 return resultado
}
iguales(2,4,5)
ejer3.textContent = iguales(2,9,2)


//ej4
let precio = 45
function calcular_iva(precio):
    return precio * 0.21
 calcular_total(precio):
    return precio + calcular_iva(precio)
