/*

1. Exercício com FOR e atribuição por desestruturação

const frases = document.querySelector('.for');

const elementos = [
    {tag: 'p', texto: 'Frase 1'}, // 0
    {tag: 'div', texto: 'Frase 2'}, // 1
    {tag: 'footer', texto: 'Frase 3'}, // 2
    {tag: 'section', texto: 'Frase 4'} // 3
];

for (let i = 0; i < elementos.length; i++) {
    const { tag, texto } = elementos[i]; // atribuição por desest. de objeto
    const element = document.createElement(tag);
    element.innerHTML = texto; 
    frases.appendChild(element);
}

# For clássico - Geralmente com iteráveis (array ou strings);

Ex: for (let i = 0; i<= 500; i++) {
    console.log(`Linha ${i}`);
}

Ex2: const frutas = ['Maçã', 'Abacaxi', 'Melão'];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

# For in - Retorna (lê) o índice ou chave (string, array ou objetos);

Ex: const frutas = ['Maçã', 'Abacaxi', 'Melão'];

for (let i in frutas) {
    console.log(frutas[i]);
}

Ex2: const pessoa {
    nome: 'Alcides';
    sobrenome: 'Neto';
    idade: 23
}

for (let i in pessoa) {
    console.log(i) -- retorna as propriedades
    console.log (pessoa[i]) -- retorna o valor das propriedades
}

# For of - Retorna o valor em si (iteráveis: array ou strings);

Ex: const frutas = ['Maçã', 'Abacaxi', 'Melão'];

for (let valor of frutas) {
    console.log(valor);
}

Ex2: const nome = 'Alcides Neto'

for (let valor of nome) {
    console.log(valor);
}


--------------------------------------------------------------------------------------

3. While/ do while/ break e continue

* WHILE

-- Serve normalmente para variáveis com uma quantidade indefinida de repetições;

Ex: let i = 0; 

while (i <= 10) {
    console.log(i)
    i++
}

* DO WHILE

-- Diferentemente da estrutura 'while', o 'do while' realiza o código e depois checa
a condição;

Ex: let i = 0;

do {
    console.log(i);
    i++
} while (i <= 10);

-- Utiliza-se 'let' pois a variável precisa ser atualizada no 'while';
-- A declaração da variável é realizada antes da estrutura de repetição;

BREAK

--> Termina a iteração do laço.

CONTINUE

--> Pula determinada iteração do laço, logo, pula o seu código.

Ex: const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i of numeros) {
    if (i === 2) {
        continue
    }
    console.log(i)
}

--> No exemplo acima, todos os números serão mostrados, menos o '2', 
porque foi pulado;

Pegando o mesmo exemplo:

for (let i of numeros) {
    if (i === 7) {
        break
    }
    console.log(i)
}

--> O laço será finalizado assim que a iteração chegar no valor '7', logo,
apenas os valores de 1 a 6 serão mostrados

--> Importante destacar que, para 'continue', o código tem que estar após as 
condições, ou seja, no final da estrutura, como é o caso do exemplo acima, 
com o 'console.log(i)'. 

--> No 'break', vai depender de como o programador vai querer, podendo o código 
ser antes ou depois.

--> CUIDADO: Ao utilizar 'while' e 'continue', é preciso atualizar a variável
de controle (colocando um incremento como 'i++') no final do laço e exatamente 
antes da palavra 'continue'.

------------------------------------------------------------------------------------

































*/