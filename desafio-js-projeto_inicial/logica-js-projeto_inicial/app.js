alert("Boas vindas ao nosso site!");
let nome = "lua";
let age = 25;
let numeroDeVendas  = 50;
let saldoDisponivel = 100;
let mensgemErro = "Erro! Preencha todos os campos";

alert(mensgemErro);

let nomeDigitado = prompt("Digite seu nome: ");
let IdadeDigitada = prompt("Digite sua idade: ");

if(IdadeDigitada == 18){
    alert("Ja pode a  tirar a habilitação!");
    console.log("E ser presso");
}else{
    alert("Você não pode tirar a habilitação, Sinto muito...");
    console.log("O sorte");
}