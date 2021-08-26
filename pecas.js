const listaDePecas = ["Ar condicionado", "Motor", "Armotecedor"]

console.log(listaDePecas)

if(listaDePecas.length < 2) { 
    console.log("É possivel cadastrar mais pecas")
}    else {
    console.log("Não há mais espaço na lista")    
}

var peso = 300;

if (peso >= 100) {
    console.log("Peso da peça está adequado")
} else {
    console.log("Peso insuficiente")
}

let nomePeca = "Disco de Freio"

if (nomePeca.length > 3) {
    console.log("Nome adequado!")
} else if(nomePeca.length == 0) {
    console.log("O nome não pode ser vazio")
} else {
    console.log("O nome deve possuir mais de 3 caracteres")
}
    
// = -> Atribuição de valor, recebe
// == -> Verifica se o valor é igual
// === -> Verifica se o valor, e o tipo de dado, são iguais
