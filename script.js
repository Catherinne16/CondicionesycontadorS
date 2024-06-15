document.addEventListener("DOMContentLoaded", function() {
    const portada = document.getElementById("portada");

    portada.addEventListener("click", function() {
        portada.classList.toggle("border"); 
    });
});

const uno = document.querySelector(".uno");
const dos = document.querySelector(".dos");
const tres = document.querySelector(".tres");
const boton = document.querySelector(".boton");

boton.addEventListener("click", function() {
    const total = parseInt(uno.value) + parseInt(dos.value) + parseInt(tres.value)
    if (total > 10){
        alert("excede limite")
    } else if (total < 1){
        alert("no has agregado estampillas")
    } else {
        alert("dentro del limite")
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const validador = document.getElementById("validador");
    const select1 = document.getElementById("select1");
    const select2 = document.getElementById("select2");
    const select3 = document.getElementById("select3");

    validador.addEventListener("click", function() {
        const pass = select1.value + select2.value + select3.value;

        if (pass === "911") {
            alert("Pass Correct");
        } else if (pass === "714") {
            alert("Contraseña 2 correcta");
        } else {
            alert("Pass Invalid");
        }
    });
});