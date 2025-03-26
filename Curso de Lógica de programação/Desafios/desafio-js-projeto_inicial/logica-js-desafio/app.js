console.log('Bem vindo ao desafio');

let nome = 'Henrique';
let linguagemFavorita;
let valor1 = 8;
let valor2 = 3;
let resultado1;
let resultado2;
let idade;
let numero;
let nota = parseInt(Math.random() * 10 + 1);
let numeroAle = (Math.random() * 5);
let numeroUmADez = parseInt(Math.random() * 10 + 1);
let numeroUmACem = parseInt(Math.random() * 100 + 1);

console.log(`Olá ${nome}`);
alert(`Olá ${nome}`);

linguagemFavorita = prompt('Qual a linguagem de programação você mais usa?');
console.log(linguagemFavorita);

console.log('-----------------------');

resultado1 = valor1 + valor2;

console.log(`O valor da soma de ${valor1} e ${valor2} é ${resultado1}`);

resultado2 = valor1 - valor2;

console.log(`O valor da subtração de ${valor1} e ${valor2} é de ${resultado2}`);

console.log('-----------------------');

idade = prompt('Quantos anos de idade você tem?');

let deMaiorDeMenor = idade > 18 ?'já é maior de idade' : 'ainda é menor de idade' ;

console.log(`Você ${deMaiorDeMenor}`);

console.log('-----------------------');

numero = prompt('Digite um número de -50 a 50');

if(numero < 0){
    console.log('O número digitado é negativo')
} else if(numero > 0){
    console.log('O número digitado é positivo')
} else{
    console.log('O número digitado é zero')
};

console.log('-----------------------');

let numeroUMDEZ = 0;

while(numeroUMDEZ != 10){
    numeroUMDEZ ++
    console.log(numeroUMDEZ)
};

console.log('-----------------------');

if(nota < 7){
    console.log('Você foi reprovado')
} else{
    console.log('Você foi reprovado')
};
console.log('-----------------------');
console.log(numeroAle)
console.log('-----------------------');
console.log(numeroUmADez);
console.log('-----------------------');
console.log(numeroUmACem);

/*let numeroUMDEZ = 0;

while(numeroUMDEZ != 2){
    numeroUMDEZ ++
    console.log(numeroUMDEZ)
};

console.log('----------------------------------------------------------') ;

let numeroDEZUM = 2;

while(numeroDEZUM != 0){
    numeroDEZUM -- 
    console.log(numeroDEZUM)
};

console.log('Contagem regressiva');

let contagemRegressiva = prompt('Digite um número para a contagem regressiva:');

while(contagemRegressiva != 0){
    contagemRegressiva -- 
    console.log(contagemRegressiva)
};

console.log('Contagem progressiva');

let numeroMaximo = prompt("Digite um número para a contagem progregressiva:");;
let contador = 0;

while (contador <= numeroMaximo) {
    console.log(contador);
    contador++
}


let zero = 0;
let contagemProgressiva = prompt('Digite um número para a contagem progressiva:')

while(zero <= contagemProgressiva){
    zero ++
    console.log(contagemProgressiva)
}*/








/*let diaDaSemana = prompt ('Qual o dia da semana:');

if (diaDaSemana == ("Sabado", "Domingo")) {
    alert('Bom Fim de Semana!')
} else {
    alert('Boa Semana!')
};

let numDigitado = prompt ('Digite um número de -100 até 100:');
if (numDigitado >= 0){
    alert('o número digitado é positivo')
} else {
    alert('O número digitado é negativo')
}

pontuacao = 105;
if (pontuacao >= 100) {
    console.log('Parabéns, você venceu!');
} else {
    console.log('Tente novamente para ganhar.');
}

let saldoConta = 500; // Exemplo de saldo
alert(`Seu saldo é de R$${saldoConta}.`);

let nome = prompt('Qual o seu nome?');
alert(`Boas vindas ${nome}`);
*/


