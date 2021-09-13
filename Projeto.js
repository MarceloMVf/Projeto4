// Este projeto é individual e deverá ser entregue até sexta  10/09 as 23:59.

// A ideia deste projeto é criar um programa que simule uma votação com todo o conteúdo visto no módulo até este momento.

// O programa tem que:

// Receber votos até que o usuário diga que não tem mais ninguém para votar; (1,0 ponto)
// Ter uma função chamada autorizaVoto(anoNascimento) retornando: "Negado`, "Opcional"  ou "Obrigatório"; (2,0 pontos)
// Ter uma função chamada votacao(autorizacao, voto) que valida  e contabiliza o voto (número entre 1 e 5) ou retorna a mensagem: "Você não pode votar", caso o voto não possa ser contabilizado; (2,0 pontos) 
// Contabilizar os votos de acordo com os significados (3,0 pontos):
// 1 = Candidato 1
// 2 = Candidato 2
// 3 = Candidato 3
// 4 = Voto Nulo`
// 5 = Voto em Branco
// Ter uma função chamada exibirResultados() que deve mostrar: (2,0 pontos)
//  - O total de votos para cada candidato 
//  - O total de votos nulos
//  - O total de votos em branco
//  - Qual candidato venceu a votação

const prompt = require('prompt-sync')();

 let candidato1 = 0;
 let candidato2 = 0;
 let candidato3 = 0;
 let nulo = 0;
 let Branco = 0;
 let candidatos = "1 = Candidato 1 \n2 = Candidato 2\n3 = Candidato 3\n4 = Voto Nulo\n5 = Voto em Branco\n"


let name = prompt ("\nQual seu nome?: ");
let age = +prompt ("\nQual sua idade?: ");

function autorizaVoto(anoNascimento) {

    if (age >= 18){
       return `Obrigatório.`

    } else if (age === 16 || age === 17){
       return `Opcional.`

    } else if (age < 17){
       return `negado.`
    }
};

console.log (`\nA pessoa chamada ${name} tem seu voto ${autorizaVoto()}\n`);

function votacao(autorizacao, voto){

    console.log (candidatos),
    voto = +prompt ("Em qual candidato deseja votar?: ")
    
    if (voto === 1 && autorizaVoto() === "Obrigatório." || autorizaVoto() === "Opcional."){
        candidato1++
        return autorizacao = console.log(`\n Seu voto foi computado.\n`)
    } else if (voto === 2 && autorizaVoto() === "Obrigatório." || autorizaVoto() === "Opcional."){
        candidato2 ++
        return autorizacao = console.log(`\n Seu voto foi computado.\n`)
    } else if (voto === 3 && autorizaVoto() === "Obrigatório." || autorizaVoto() === "Opcional."){
        candidato3++
        return autorizacao = console.log(`\n Seu voto foi computado.\n`)
    } else if (voto === 4 && autorizaVoto() === "Obrigatório." || autorizaVoto() === "Opcional."){
        nulo++
        return autorizacao = console.log(`\n Seu voto foi computado.\n`)
    } else if (voto === 5 && autorizaVoto() === "Obrigatório." || autorizaVoto() === "Opcional."){
        Branco++
        return autorizacao = console.log(`\n Seu voto foi computado.\n`)
    } else {   

        return autorizacao = console.log (`\n ${name} não pode votar por não ter idade mínima.`)
        
    }; 
};

var escolha = "sim"
while (escolha.toLowerCase() === "sim"){
votacao()
var escolha = prompt("Deseja realizar seu voto hoje?: ")
};

function exibirResultados() { 
    
    console.log(`Votos no candidato 1: ${candidato1}`)
    console.log(`Votos no candidato 2: ${candidato2}`)
    console.log(`Votos no candidato 3: ${candidato3}`)
    console.log(`Votos Nulos: ${nulo}`)
    console.log(`Votos em branco: ${Branco}`)

    if (candidato1 > candidato2 && candidato1 > candidato3) {
        
        console.log (`O candidato 1 venceu a votação!`)
    } else if (candidato2 > candidato1 && candidato2 > candidato3) {
        
        console.log (`O candidato 2 venceu a votação!`)
    } else if (candidato3 > candidato1 && candidato3 > candidato2) {
        
        console.log (`O candidato 3 venceu a votação!`)
    } else {
        console.log (`Deve ser realizada uma segunda votação, por falta de votos conclusivos.`)
    }
}

exibirResultados()