function calcularPromocao()
{ let inMedicamento = document.getElementById("inMedicamento") 
let inPreco = document.getElementById("inPreco")
let outMedicamento = document.getElementById("outMedicamento") 
let outPromocao = document.getElementById("outPromocao")
let medicamento = inMedicamento.value
let preco = Number(inPreco.value)

let total = preco * 2
let desconto = total % 1
let valorFinal = total - desconto

outMedicamento.textContent = "Promoção de " + medicamento
outPromocao.textContent = "Leve 2 por apenas R$ " + valorFinal
}

let mostrar = document.getElementById("mostrar") 
mostrar.addEventListener ("click", calcularPromocao)