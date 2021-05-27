var inputValorHora = document.querySelector('#valor-hora')
var inputHorasProjeto = document.querySelector('#horas-projeto')

var resultado = document.querySelector('span')

function calcular() {
    var valorHora = inputValorHora.valueAsNumber
    var horasProjeto = inputHorasProjeto.valueAsNumber
    var valorProjeto = valorHora * horasProjeto
    var valorDuasCasas = valorProjeto.toFixed(2)

    resultado.textContent = "R$" + valorDuasCasas

    console.log(resultado)
    }
    