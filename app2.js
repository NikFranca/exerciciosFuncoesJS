//Crie uma função que calcule o índice de massa corporal (IMC) 
//de uma pessoa, a partir de sua altura, em metros, e peso, em
//quilogramas, que serão recebidos como parâmetro.
function imc(){
    let altura = prompt("me diga sua altura ex: 1.75 ");
    let peso = prompt("me diga a o seu peso ex: 70 ");
    let imc = peso / (altura * altura); 
    alert(` O seu imc é de: ${imc}`)
}
imc();
//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
//(depois de muita pesquisa consegui fazer)
function calcularFatorial(){
    let numero = prompt("me diga um numero: ");
    let fatorial = 1;
    for (let i = 2; i <= numero; i++){
        fatorial *= i;
    }
    alert(` O fatorial de ${numero} é: ${fatorial}`);
}
calcularFatorial();

//Crie uma função que converte um valor em dólar, passado como parâmetro, 
//e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function dolar(){
    let real = prompt(" me diga um valor em real R$:");
    let cotacao = 5.25 * real
    alert(`o valor convertido em dolar é U$${cotacao}`); 
}
dolar();

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function taboada(){
    let n1 = Number(prompt("me diga um numero para ver a taboada: "));
    let contador2 = 1;
    while (contador2 <= 10) {
        console.log(`${n1} x ${contador2} ${contador2 * n1}`);
        contador2++;
    }
}
taboada();
