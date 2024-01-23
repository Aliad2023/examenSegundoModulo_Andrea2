// creacion de variables
const btnsumar = document.getElementById("btnsumar")
const btnigual = document.getElementById("btnigual")
const btniniciar = document.getElementById("btniniciar")

let digito = document.getElementById("digito")

let digito1 = 0
let digito2 = 0
let resultado = 0

function sumar() {
    if(digito1 !== 0){
        digito1 = document.getElementById("digito").value
        alert("Numero 1:"+ digito1)
    }else{
        alert("ERROR, falta ingresar un numero")
    }
}
    
function igual() {
    digito2 = document.getElementById("digito").value;
    alert("Numero 2:"+ digito2)
    resultado = digito1 + digito2
    alert("Resultado:"+ digito1)
}

function iniciar() {
  pantalla.textContent = "";
  digito1 = 0;
  digito2 = 0;
  resultado = 0;
}

btnsumar.addEventListener("click", sumar);
btnigual.addEventListener("click", igual);
btniniciar.addEventListener("click", iniciar);
