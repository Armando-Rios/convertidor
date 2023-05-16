let number = document.getElementById("number");
let boton = document.getElementById("boton");
let caja = document.getElementById("caja");
let caja1 = document.getElementById("caja1");

boton.addEventListener("click", function() {
let valor = number.value;
let resultado = [];
let resultHTML = "";
while(valor !== 1 && valor !== 0) {
    resultado.unshift(valor % 2);
    valor = Math.floor(valor / 2);
    resultHTML += `<p>${valor}</p>`
}
resultado.unshift(valor)
caja.innerHTML = ` <h4>Resultado</h4><div class="container"><p class="resultado">${resultado.join("")}</p></div>`
caja1.innerHTML = `<h4>Cociente</h4><div class="container">${resultHTML}</div>`
})
function enviar(event) {
    if(event && event.keyCode === 13) {
        boton.click("active")
    }
}