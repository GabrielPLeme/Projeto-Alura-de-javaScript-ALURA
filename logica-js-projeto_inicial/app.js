alert("BEM-VINDO!\n Ao jogo do número secreto ");

let numeroDigitado;
let contador= 1;

let variavel = prompt(`Digite o valor maximo de numeros para ser sorteados`);


let numeroSecreto = parseInt(Math.random()* variavel + 1);
console.log(`Número secreto: ${numeroSecreto}`);


while ( numeroDigitado !== numeroSecreto ){
    alert(`${contador} ª tentativa`)
    numeroDigitado = prompt(`Digite um número entre 1 a ${variavel}: `);
    //comparar para ver se tem algum engraçadinho tentando burlar
    if(numeroDigitado <= 0 || numeroDigitado == null || numeroDigitado >100 ){
        alert(`VOCÊ É UM FANFARRÃO`);
        contador--;
    }
    
    console.log(`Numero do chute: ${numeroDigitado}`);
    console.log(`Resultado da comparação:`,numeroDigitado == numeroSecreto);
    if ( numeroDigitado == numeroSecreto){
        console.log(`Acertoou!`); 
        break
        
    } else {
        alert(`F você errou`);
        if( numeroDigitado > numeroSecreto ){
            alert(`O número secreto é menor que ${numeroDigitado}`);
        }else{
            alert(`O número secreto é maior que ${numeroDigitado}`);
        }
        contador++;
        console.log("Tentativas:",contador);   
    }
    
}
//declara a variavel = compara se o contatdor é maior que se for  a  variavel palavraTentavia == `tentativas` se não fo vao ser == `tentativa` 
console.log(contador);
let palavraTentativa = contador > 1 ? `tentativas` : `tentativa`
alert(`Muito bem! Você descobriu o numero secreto ${numeroDigitado}. \n Total de ${palavraTentativa}: ${contador}.`);
