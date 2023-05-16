let number = document.getElementById("number");
let boton = document.getElementById("boton");
let caja = document.getElementById("caja");
let caja1 = document.getElementById("caja1")
let caja2 = document.getElementById("caja2");

boton.addEventListener("click", function() {
    let a = number.value;
    let s = a.split("");
    let r = s.reverse();
    function res() {
    let p = 0;
    let resultHTML = ""; // letiable para almacenar el HTML de los números
    for (let i = 0; i < a.length; i++) {
        if (r[i] === "1") {
        p += 2 ** i;
        resultHTML += `<p>${p}</p>`; // Agregar el número al HTML
        }
    }
    caja.innerHTML = ` <h4>Resultado</h4><div class="container"><p class="resultado">${p}</p></div>`
    caja2.innerHTML = `<h4>Sumando</h4><div class="container">${resultHTML}</div>`;
    }

    function val() {
        let p = 0;
        let resultHTML = "";
        for(let i = 0;i < a.length ; i++ ){
            if(r[i] === "1"){
                p = (2**i)
                resultHTML += `<p>${p}</p>`;
            }
        }
        caja1.innerHTML = `<h4>Potencias</h4><div class="container">${resultHTML}</div>`;
    }
    res();
    val();
})

function enviar(event) {
    if(event && event.keyCode === 13) {
        boton.click("active")
    }
}