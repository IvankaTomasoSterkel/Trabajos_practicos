let p1 = document.querySelector ("p1")
let edad= 15
let b1 = document.querySelector ("b1")

b1.onclick = function() {
    //b1.textContent = "resultado"
    if (edad >= 18) { 
p1.textContent = "sos mayorde edad"
    } else {
        p1.textContent = "sos menor de edad"
    }
}






