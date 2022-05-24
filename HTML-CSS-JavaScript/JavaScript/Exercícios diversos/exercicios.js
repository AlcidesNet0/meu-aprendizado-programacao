/*

1. Alguns exemplos e exercícios

console.log('Meu nome é "Alcides Neto". Estou aprendendo JavaScript às', 02, 'da manhã');

const nome = "Alcides";
const sobrenome = "Neto";
const idade = 23;
const peso = 72;
const altura = 1.73;
let imc = peso / (altura * altura);
let anoNascimento = 2022 - idade
console.log(nome, sobrenome, "tem", idade, "anos, pesa", peso, "kg",);
console.log("tem", altura, "de altura e seu IMC é de", imc,);
console.log(nome, sobrenome, "nasceu em", anoNascimento); 

--> Para tornar o código em um texto junto, pode-se usar a vírgula 
(como o exemplo acima); o sinal de +, junto com ' ', para dar espaço ou
o sinal de crase (` `), onde cada variável e cada constante deve ser iniciada 
com um $  e fechada em {} 

let varA = "A" // B
let varB = "B" // C
let varC = "C" // A
let varD = varA
varA = varB;
varB = varC;
varC = varD;
console.log(varA, varB, varC)

-----------------------------------------------------------------------------------------

2. Exercícios sobre números

let num1 = prompt("Digite um número:")
let num2 = prompt("Digite um segundo número:")
let num3 = prompt("Digite um terceiro número")
num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);
console.log(num1, num2, num3)
const resultado = num1 + num2 * num3;
alert("O resultado é " + resultado) 

-------------------------------------------------------------------------------------

3. Exercício sobre números feito em HTML

<script>
    const num = Number(prompt("Digite aqui o seu número:"));
    document.body.innerHTML = `<h1>Seu número é: ${num}</h1><br>`;
    document.body.innerHTML += `A raiz quadrada desse número é: <strong>${num ** 0.5}</strong><br>`;
    document.body.innerHTML += `O ${num} é inteiro? <strong>${Number.isInteger(num)}</strong><br>`;
    document.body.innerHTML += `O ${num} é NaN? <strong>${Number.isNaN(num)}</strong><br>`;
    document.body.innerHTML += `Como fica esse número arrendodado para baixo? <strong>${Math.floor(num)}</strong><br>`;
    document.body.innerHTML += `Como fica esse número arrendodado para cima? <strong>${Math.ceil(num)}</strong><br>`;
    document.body.innerHTML += `Como fica esse número com duas casas decimais? <strong>${num.toFixed(2)}</strong><br>`;
</script>

--------------------------------------------------------------------------------------

4. Exercício sobre strings feito em HTML

<script>
    const nome = prompt("Digite o seu nome completo:");
    0123456789012345678901234567
    Alcides Augusto de Lira Neto
    document.body.innerHTML += `O seu nome completo é: ${nome}<br>`;
    document.body.innerHTML += `Seu nome tem ${nome.length} letras<br>`;
    document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt(1)}<br>`;
    document.body.innerHTML += `Qual o primeiro índice da letra "a" no seu nome: ${nome.indexOf("a", 0)}<br>`;
    document.body.innerHTML += `Qual o último índice da letra "a" no seu nome: ${nome.lastIndexOf("a", 24)}<br>`;
    document.body.innerHTML += `As últimas três letras do seu nome são: ${nome.slice(-3)}<br>`;
    document.body.innerHTML += `As palavras do seu nome são: ${nome.split(" ")}<br>`;
    document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()}<br>`;
    document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()}<br>`;
</script>

*/

// 5. Exercício envolvendo date, case, switch e break

const data = new Date();
const dataAntiga = new Date(2019, 9, 7, 22, 52);

function exercicioData(calendario) {
    let dia = calendario.getDay(); // Começa com 0 (Domingo) e termina em 6 (Sábado)
    const numero = calendario.getDate();
    let mes = calendario.getMonth(); // Começa com 0 (Janeiro) e termina em 11 (Dezembro)
    const ano = calendario.getFullYear();
    const hora = calendario.getHours();
    const minuto = calendario.getMinutes();

    switch (dia, mes) {
        case 0:
            dia = 'Domingo';
            mes = 'janeiro';
            break;
        case 1:
            dia = 'Segunda-feira';
            mes = 'fevereiro';
            break;
        case 2:
            dia = 'Terça-feira';
            mes = 'março';
            break;
        case 3:
            dia = 'Quarta-feira';
            mes = 'abril';
            break;
        case 4:
            dia = 'Quinta-feira';
            mes = 'maio';
            break;
        case 5:
            dia = 'Sexta-feira';
            mes = 'junho';
            break;
        case 6:
            dia = 'Sábado';
            mes = 'julho';
            break;
        case 7:
            dia = '';
            mes = 'agosto';
            break;
        case 8:
            dia = '';
            mes = 'setembro';
            break;
        case 9:
            dia = '';
            mes = 'outubro';
            break;
        case 10:
            dia = '';
            mes = 'novembro';
            break;
        case 11:
            dia = '';
            mes = 'dezembro';
            break;

    // Uma alternativa ao switch (tanto p/ meses, quanto dia):
    // const meses = ['janeiro', 'fevereiro'...]
    // return (se tiver em uma função) ou console.log() --> meses[mes]
    }

    return `${dia}, ${numero} de ${mes} de ${ano}, hora: ${hora}h:${minuto}min`

    // Uma outra forma seria criar apenas as variáveis 
    // envolvidas em switch e colocar no 'return' assim:
    // return `${dia}, ${data.getDate()} de ${mes} de ${data.getFullYear()}, 
    // hora: ${data.getHours()}h:${data.getMinutes()}min`
}

const resposta1 = exercicioData(data);

const paragrafo1 = document.querySelector('.data_hoje');
paragrafo1.innerHTML = resposta1;

// OPÇÃO MAIS CURTA

/* const data = new Date();
   const opcoes {
    dateStyle: 'full';
    timeStyle: 'short'
}
paragrafo1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);

*/

// Teste com outra data

function exercicioData2(antigo) {
    let dia = antigo.getDay();
    const numero = antigo.getDate();
    let mes = antigo.getMonth();
    const ano = antigo.getFullYear();
    const hora = antigo.getHours();
    const minuto = antigo.getMinutes();

    switch (dia, mes) {
        case 0:
            dia = 'Domingo';
            mes = 'janeiro';
            break;
        case 1:
            dia = 'Segunda-feira';
            mes = 'fevereiro';
            break;
        case 2:
            dia = 'Terça-feira';
            mes = 'março';
            break;
        case 3:
            dia = 'Quarta-feira';
            mes = 'abril';
            break;
        case 4:
            dia = 'Quinta-feira';
            mes = 'maio';
            break;
        case 5:
            dia = 'Sexta-feira';
            mes = 'junho';
            break;
        case 6:
            dia = 'Sábado';
            mes = 'julho';
            break;
        case 7:
            dia = '';
            mes = 'agosto';
            break;
        case 8:
            dia = '';
            mes = 'setembro';
            break;
        case 9:
            dia = '';
            mes = 'outubro';
            break;
        case 10:
            dia = '';
            mes = 'novembro';
            break;
        case 11:
            dia = '';
            mes = 'dezembro';
            break;
    }

    return `${dia}, ${numero} de ${mes} de ${ano}, hora: ${hora}h:${minuto}min`
}

const resposta2 = exercicioData2(dataAntiga);

const paragrafo2 = document.querySelector('.data_aula');
paragrafo2.innerHTML = resposta2

 
/* 

const data = new Date();

// Função pra colocar um zero à esquerda:

function zeroEsquerda (a) {
    return a >=10 ? a : `0${a}`;
}

function calendario (tempo) {
    const dia = zeroEsquerda(tempo.getDate());
    const mes = zeroEsquerda(tempo.getMonth() + 1);
    const ano = zeroEsquerda(tempo.getFullYear());
    
    return `${dia}/${mes}/${ano}`;
}

const dataBrasil = calendario(data)
console.log(dataBrasil)

*/

// Validando um CPF

let soma = 0
let soma2 = 0
let soma3 = 0
function recebeCPF(cpf) {
    // Retira tudo que não é letra e número e junta a string
    let cpfLimpo = cpf.replace(/\D+/g, '');

    // Seleciona apenas os 9 primeiros números do cpf para poder realizar a conta
    let cpfParcial = cpfLimpo.slice(0, -2);

    // Primeiro loop para realizar a soma da conta dos 9 números e encontrar o
    // primeiro dígito

    /* A conta envolve multiplicar o primeiro dos 9 números por 10 e depois somar 
com a multiplicação do segundo dos 9 números por 9 e assim por diante, até chegar 
no nono número e multiplicá-lo por 2; */
    for (let i = 0; i < cpfParcial.length; i++) {
    soma += Number(cpfParcial[i]) * (cpfParcial.length + 1 - i);
} 
    // Como o cpfParcial é uma string, foi preciso transformá-lo em número para 
    // realizar a conta

    // Encontrando o primeiro dígito (se ele for maior que 9, se torna 0);
    let primeiroDigito = 11 - (soma % 11);
    if (primeiroDigito > 9) primeiroDigito = 0;

    // Concatenando o cpfParcial (9 números) com o primeiro dígito;
    const cpfNovo = cpfParcial + primeiroDigito;

    // O segundo loop realiza a mesma conta do primeiro loop. A diferença é que
    // o primeiro dos 10 números se multiplica por 11;
    for (let i = 0; i < cpfNovo.length; i++) {
    soma2 += Number(cpfNovo[i]) * (cpfNovo.length + 1 - i);
}

    // Encontrando o segundo dígito
    let segundoDigito = 11 - (soma2 % 11);
    if (segundoDigito > 9) segundoDigito = 0;

    // Chegando ao cpfFinal;
    const cpfFinal = cpfNovo + segundoDigito;

    // Verificação da validação: O CPF é válido:
    // 1. Se o valor do primeiro dígito for igual ao penúltimo índice do CPF &&
    // 2. Se o valor do segundo dígito for igual ao último índice do CPF;
    // Para isso é preciso transformar ambos as strings dos índices em números;
    if (primeiroDigito === Number(cpfFinal[9]) && 
       segundoDigito === Number(cpfFinal[10])) {return 'Este CPF é válido'}
    else return 'O CPF é inválido'
}
console.log(recebeCPF('055.928.544-20'));
console.log(recebeCPF('123.310.814-27'));
console.log(recebeCPF('686.836.264-15'));
console.log(recebeCPF('401.354.894.15'));
