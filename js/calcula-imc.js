var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
var pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];
  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;
  var pesoEhValido = validaPeso(peso);
  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;
  var alturaEhValida = validaAltura(altura);
  var tdImc = paciente.querySelector(".info-imc");
  

  if (!pesoEhValido) {
    tdPeso.textContent = "Peso inválido!";
    pesoEhValido = false;
  }

  if (!alturaEhValida) {
    tdAltura.textContent = "Altura inválida!";
    alturaEhValida = false;
  }

  if (pesoEhValido && alturaEhValida) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  } else {
    tdImc.textContent = "Altura e/ou peso inválidos!";
    paciente.classList.add("paciente-invalido");
  }
}

function validaPeso(peso) {
  if(peso >= 0 && peso < 1000) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if(altura >= 0 && altura <= 3.0) {
    return true;
  } else {
    return false;
  }
}

function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}