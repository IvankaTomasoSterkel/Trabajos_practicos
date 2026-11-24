//rindo funciones

function calculo_de_combustible (litros,nafta) {
    let precio
if (nafta == "super") {
     precio = 1500 * litros
} else if (nafta == "premium") {
     precio = 2000 * litros
}
return "contando los " + litros + " litros cargados y de nafta " + nafta + " es de " + precio
}
