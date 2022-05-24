/*

1. Algumas anotações sobre Arrays

const alunos = ['Alcides', 'Maria', 'Julia', 'Carlos']; - Cada palavra equivale a um índice.
alunos[1] = 'Flávia' - Essa ação substitui a palavra no índice 1 (no caso, Maria).

--> Formas de adicionar/remover um elemento na array:

* alunos[4] = 'Mauro' - inserindo um índice que não existe;
* alunos[alunos.length] = 'Mauro' - para casos em que o array possui muitos elementos;
* alunos.push('Mauro') - essa função insere no final - um jeito mais prático;
* alunos.unshift('Mauro') - essa função adiciona o elemento no início, empurrando todos os outros p/ frente;
* alunos.pop() - remove o último elemento do array;
* alunos.shift() - remove o primeiro elemento do array;
* delete alunos[1] - deleta o elemento, mas não altera os índices;
* alunos.slice(0, 2) - fatia os elementos, da mesma forma que string. O resultado é 'Alcides' e 'Maria'; 

------------------------------------------------------------------------------------

2. Atribuição via desestruturação (arrays)

--> É a forma de atribuir o valor (seja alterando ou repetindo) de um elemento 
de um array para uma variável.

Ex:

let a = 'A'
let b = 'B'
let c = 'C'

const letras = [b, c, a];
[a, b, c] = letras; --- atribuição
console.log(letras) --- o resultado é B C A, da mesma forma que os valores das
variáveis mudaram; 'a' passou a ser 'B' e assim por diante;

Ex2:

const numeros = [1, 2, 3, 4, 5];
const [primeiroNumero, segundoNumero] = numeros --- atribuição
console.log(primeiroNumero, segundoNumero) --- o resultado é 1 2.

* O operador '...' pega o resto dos elementos de um array:

const [primeiroNumero, segundoNumero, ...resto] = numeros;
console.log(resto) --- o resultado seriam todos os outros elementos do array

* Para pular valores, é só usar um espaço entre as vírgulas.

--> Acessando um elemento de um array dentro de outro array:

const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(numeros[1][2]); -- O resultado é 6.
- O primeiro colchete se refere ao array primário;
- O segundo colchete se refere ao array secundário.

Na atribuição:

const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [lista1, lista2, lista3] = numeros;
console.log(lista2[2]); -- O resultado também é 6.

------------------------------------------------------------------------------------

3. Mais informações sobre Arrays

--> Eles podem ser criados através de um construtor 'new', dessa forma:

Ex: const nome = new Array('Alcides', 'Júlio');

--> Para fazer uma cópia de um Array sem precisar declarar uma variável, pode-se
utilizar o operador 'spread', semelhante ao 'rest'. Dessa forma, qualquer alteração
nessa nova variável não irá influenciar na antiga.

Ex2: const nomes = ['Alcides', 'Augusto', 'Neto'];
     const nomes2 = [...nomes];
     console.log(nomes);
     nomes2.pop();
     console.log(nomes2);

-- Apenas na variável 'nomes2' que o último elemento do array foi removido;


--> Convertendo string em arrays: através do método split();

const nome = 'Alcides Augusto de Lira Neto';
const nomeArray = nome.split(' ');
console.log(nomeArray);

-- Como os nomes da string estão separados por espaço, o 'split' recebe um ' ';
-- Para converter um array em uma string, ao invés de 'split()', utiliza-se 'join()';

-----------------------------------------------------------------------------------

4. Método splice()

--> Ele engloba os métodos 'pop()', 'shift()', 'unshift()' e 'push()';

Sintaxe: variável.splice(índice, delete, elem1, elem2, elem3);

-- O 'índice' se refere ao índice no qual será iniciado o método;
-- 'Delete' vai corresponder a quantos elementos serão removidos;
-- 'Elem1, elem2, elem3' consiste nos elementos que podem ser adicionados;

Ex: Performando o método pop();

const nomes = ['Alcides', 'Augusto', 'Neto'];
nomes.splice(2, 1)
console.log(nomes)

Ex2: Performando o método shift();

const nomes = ['Alcides', 'Augusto', 'Neto'];
nomes.splice(0, 1)
console.log(nomes)

Ex3: Performando o método unshift();

const nomes = ['Alcides', 'Augusto', 'Neto'];
nomes.splice(0, 0, 'Alcides Lira')
console.log(nomes)

Ex4: Performando o método push();

const nomes = ['Alcides', 'Augusto', 'Neto'];
nomes.splice(nomes.length, 0, 'Alcides Lira', 'Augusto Francisco', 'Zélia')
console.log(nomes)

-- Para os casos de unshift() e push(), o método splice() é melhor recomendado
nas situaçõs em que é preciso adicionar muitos elementos de uma vez.

------------------------------------------------------------------------------------

5. Concatenando arrays

-- Se faz através do método concat();

Ex: const num1 = [1, 2, 3];
    const num2 = [4, 5, 6];
    const num3 = num1.concat(num2);
    console.log(num3)

-- Após o 'num2', pode-se acrescentar outros arrays também;

--> Outra forma seria utilizar o operador 'spread':

Ex: const num1 = [1, 2, 3];
    const num2 = [4, 5, 6];
    const num3 = [...num1, ...num2];
    console.log(num3)

-- Também pode ser acrescentado outros elementos;

------------------------------------------------------------------------------------

6. Filtrando os valores de um array

--> Isso é feito através do método filter() e serve pra extrair elementos sob
determinada condição;
--> Sempre vai retornar um array com a mesma quantidade de elementos ou menos.

Ex: * O objetivo é retornar apenas os números que são maiores que 10.

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callbackFilter(valor) {
    return valor > 10
}

const filtro = numeros.filter(callbackFilter);
console.log(filtro);

-- O método filter() requer uma função callback no seu parâmetro. Da mesma forma
que o método requer que seja retornado um boolean (true ou false)
-- No caso acima, poderia-se ter utilizado a estrutura 'if' e 'else', mas quando
o que é retornado é um boolean, pode-se desconsiderar o 'if' e retornar a própria
condição

* Forma mais curta

const filtro = numeros.filter(valor => valor > 10);
console.log(filtro);

-- Nesse caso, como a função callback só serviria para esta situação, ela pôde ser
incorporada ao método filter() como uma função anônima;
-- A partir disso, por ser uma função anônima e ter apenas um parâmetro ('valor'),
este permaneceu, retirando-se os parênteses;
-- Assim como esta função se tornou uma arrow function, tendo em vista que possui
apenas uma linha, removendo, portanto, as chaves e o 'return'.

Ex2: *Retorne as pessoas que tem o nome com 5 letras ou mais
     **Retorne as pessoas com mais de 50 anos
     ***Retorne as pessoas cujo nome termina com a

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

*const nomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
*console.log(nomeGrande);

**const idoso = pessoas.filter(age => age.idade > 50);
**console.log(idoso);

***const terminaA = pessoas.filter(ltr => ltr.nome.toLowerCase().endsWith('a'));
***console.log(terminaA)


-- No caso de 'nomeGrande', foi utilizado 'obj' como parâmetro ao invés de 'valor', 
já que tem-se um objeto como elemento do array, mas isso foi apenas por convenção.
Assim como na variável 'idoso'.

-- Na variável 'terminaA', usou-se o método que transforma todas as letras da string
em letras minúsculas, além de utilizar o método que procura saber com que elemento
terminou tal string. No caso em questão, a letra 'a';

------------------------------------------------------------------------------------

7. Mapeando o array

--> Altera os valores do array, retornando o mesmo tamanho;
--> A mesma sintaxe do filter() se aplica ao map();

Ex: O objetivo é dobrar os números;

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const dobro = numeros.map(function(valor) {
    return valor * 2;
});

console.log(dobro);

-- Ao invés de precisar retornar 'true' ou 'false', como em filter(), 
no map() se retorna um valor diferente;

* Convertendo em arrow function:

const dobro = numeros.map(valor => valor * 2);

Ex2: Para cada elemento:
    *Retorne apenas uma string com o nome da pessoa
    **Remova apenas a chave 'nome' do objeto
    *Adicione uma chave id em cada objeto

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

*const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

**const idades = pessoas.map(function(obj) {
    delete obj.nome;
    return obj;
});
console.log(idades);

--> Outra forma:

**const idades = pessoas.map(function(obj){
    return { idade: obj.idade };
})

--> Transformando em uma arrow function:

**const idades = pessoas.map(obj => ({ idade: obj.idade }));

*** const comIds = pessoas.map(obj, indice) {
    obj.id = indice;
    return obj;
}
console.log(comIds);

-- No caso da variável 'idades', na segunda forma, foi retornado um nono objeto.
Na arrow function em questão, foi utiliza uma expressão, com as '{}' do objeto
ficando entre parênteses, tendo em vista que elas poderiam ser intepretadas como
'{}' da função;

-- Na variável 'comIds', foi inserido um novo parâmetro ('indice'), que corresponde
ao indíce dos elementos do array, e serviu como valor da nova propriedade que fora
adicionada ('id'). Como pôde ser visto, não foi possível a transformação em
arrow function;

------------------------------------------------------------------------------------

8. Reduzindo o array

--> Para isso, é utilizado o reduce() e, geralmente, a intenção é reduzir o array
a um único elemento;
--> É similar na sua sintaxe ao filter() e ao map(), divergindo apenas na adição
de mais um parâmetro ('acumulador'), tendo esse acumulador um valor inicial,
depositado no final da função;

Ex: O objetivo é a soma de todos os números

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const soma = numeros.reduce(function(acumulador, valor) {
    acumulador += valor;
    return acumulador;
}, 0);
console.log(soma);

-- Explicando: O valor inicial do acumulador é 0, assim ele passa a somar com
cada elemento do array (através do código 'acumulador += valor'), percorrendo 
todo o laço;
-- Se não enviar um valor inicial, o valor inicial do acumulador passa a ser
o primeiro elemento do array;

Ex2: Retorne a pessoa mais velha

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const maisVelha = pessoas.reduce(function(acumulador, valor){
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
})
console.log(maisVelha);

-- Sem a definição de um valor inicial, o 'acumulador' passa a ser o primeiro elemento,
logo, o 'valor' se torna o segundo. A partir daí, passa a ser uma comparação entre
as idades dos elementos, percorrendo o laço;

-- Se a idade do elemento do acumulador é maior que a idade do elemento do valor,
ele permanece sendo elemento do acumulador, enquanto o valor passa para o próximo
elemento;

-- Por exemplo, tendo em vista este caso, a idade do elemento do acumulador 
(primeiro elemento) é maior que a idade do elemento do valor (o segundo elemento).
Assim, o primeiro elemento permanece sendo o elemento do acumulador (de acordo com
o código 'return acumulador'), enquanto o elemento do valor passa a ser o próximo
(no caso, o terceiro), e assim por diante;

------------------------------------------------------------------------------------

9. Combinando os três métodos

Ex: Retorne a soma do dobro de todos os pares
    1. Filtrar os pares;
    2. Dobrar os valores;
    3. Realizar a soma desses valores dobrados

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const pares = numeros.filter(valor => valor % 2 === 0);
console.log(pares);

const dobro = pares.map(valor => valor * 2);
console.log(dobro);

const soma = dobro.reduce(function(acumulador, valor){
    acumulador += valor;
    return acumulador;
})
console.log(soma);


PS: FIZ SOZINHOOOOOOOOO!!!!!!!!!

-- É possível juntar todos os métodos sem criar outras variáveis, apenas adicionando
o método no final da primeira função, por ex:

const pares = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce(function(acumulador, valor){
    acumulador += valor;
    return acumulador;
});

-----------------------------------------------------------------------------------

10. forEach()

-- Forma de iterar um array
-- Recebe uma função callback, similar às sintaxes dos métodos acima;

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

numeros.forEach(valor => console.log(valor));

------------------------------------------------------------------------------------




























*/
let soma = 0
function recebeCPF(cpf) {
    for (let i = 0; i < cpf.length; i++) {
        soma += Number(cpf[i]) * (cpf.length - i);
    }
    return soma
}

console.log(recebeCPF('055928544'));