// Variáveis são espaços na memória do pc para guardar algum valor.
let pesoPeca = 150 

// se o peso da peça for maior que 100, executa o programa


if (pesoPeca >100) {
    console.log("Peso maior que 100g, logo, podemos cadastrar a peça!")
} else {
    console.log("Peso insuficiente, não é possível cadastrar")
}

let numeroPecas = 8

if(numeroPecas <10) {
    console.log("Podemos cadastrar, pois há espaço na caixa")
}else{
    console.log("Não podemos cadastrar, pois é menor que 10")
}

let nomePeca = "Disco do freio"

// askII table até o espaço é considerado um caractere pelo pc

console.log("O comprimento do nome da peça é:", nomePeca.length)

if(nomePeca <3) {
    console.warn("Nome muito curto, menor que 3, não sendo possível cadastrar")
}else{
    console.log("Nome de peça adequado, podemos cadastrar")
}