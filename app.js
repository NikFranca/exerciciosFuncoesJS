/*
//Criar uma função que exibe "Olá, mundo!" no console.
function ola(){
    console.log('Ola, mundo!');
}
ola();*/

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function saudacao(nome){
    console.log(`Ola,${nome}!`);
}
saudacao();
/*
//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function numero(){
    let n1 = prompt('Digite um número: ');
    let n2 = prompt('Digite outro número: ');
    let n3 = prompt('Digite mais um número: ');
    let media = (Number(n1) + Number(n2) + Number(n3)) / 3;
    alert(`A media dos Numeros ${n1}, ${n2} e ${n3} é igual a ${parseInt(media)}`);
}
numero();

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobro(){
    let n1 = prompt('Digite um número: ');
    let dobro = Number(n1) * 2;
    alert(`O dobro de ${n1} é igual a ${dobro}`);
}
dobro();

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maior(){
    let n1 = prompt('Digite um número: ');
    let n2 = prompt('Digite outro número: ');
    if (n1 > n2){
        alert(`O numero ${n1} é maior que ${n2}`);
    }else if (n2 > n1){
        alert(`O numero ${n2} é maior que ${n1}`);
    }else{
        alert(`Os numeros são iguais!`);
    }
}
maior();

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function multiplicacao(){
    let n1 = prompt ('Digite um numero:');
    let resultado = Number(n1) * Number(n1);
    alert(`o numero ${n1} multiplicado por ele mesmo é equivalente ao numero ${resultado}`);
}

multiplicacao();