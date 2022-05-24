/*

1. Estrutura de uma função

function variável(parâmetro) {
    (opcional) return --> "return" encerra a função
}

Ex: function saudacao(nome) {
    console.log(`Bom dia, ${nome}!`) ou
    return `Bom dia, ${nome}!`
}
    saudacao('Alcides')


--> Exemplo de arrow function (função para um código simples)
 const raiz = n => n ** 0.5
 console.log(raiz(9));

-------------------------------------------------------------------------------------

2. Exercício sobre funções, arrays e objetos

function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')

    const pessoas = []; //isso é um array, que irá conter objetos.

--> Para evitar que o navegador atualize após o clique no "enviar", utiliza-se isso:
     form.onsubmit = function (evento) {
     evento.preventDefault(); }
--> Outra forma: (com exceção das variáveis const)
    function recebeEventoForm (evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const idade = form.querySelector('.idade');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            idade: idade.value,
            peso: peso.value,
            altura: altura.value, 
        })
        console.log(pessoas)
        resultado.innerHTML += `<p>O resultado é: ${nome.value}, ${sobrenome.value}, ${idade.value}anos, ${peso.value}kg, ${altura.value}cm`
    }
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo()

-------------------------------------------------------------------------------------

3. setInterval e setTimeout

--> setInterval determina um intervalo de tempo para a execução de uma função;

Ex: function mostraHora() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

setInterval(function () {
    console.log(mostraHora());
}, 1000);

--> O objetivo dessa função é exibir a hora atual local, com um intervalo de 1000 ms;
--> A função dentro do setInterval é uma função anônima;
--> Observar na documentação algumas características do objeto Date.

--> setTimeout serve para estabelecer um determinado tempo para acontecer algo,
como parar o setInterval, exibir alguma mensagem e etc.

Ex: const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 3000)

--> O setTimeout utiliza uma função anônima e o clearInterval para acabar com
o setInterval em um período de 3000 ms.

Ex: setTimeout(function() {
    console.log('Olá mundo');
}, 5000)

--> O setTimeout aqui exibe uma mensagem após 5 segundos ou 5000 ms.

-------------------------------------------------------------------------------------

4. Função retornando outra função / closure

--> Uma função pode ter como objetivo retornar outra função.. Assim, a variável
declarada com o valor da função primária, vai se tornar a função secundária ou
função retornada

Ex: function retornaFuncao () {
    const nome = 'Luiz';
    return function() {
        return nome
    }
}

const funcao = retornaFuncao(); --> variável declarada com a função inicial torna-se a função secundária;
console.log(funcao())


-- O primeiro 'return' se refere à função inicial (retornaFuncao);
-- O segundo 'return' corresponde à função secundária/ função anônima;

------------------------------------------------------------------------------------

5. Função callback

-- É chamada após o fim de uma função;
-- Uma de suas funções consiste no ordenamento de como determinadas funções serão
exibidas;

Ex: O exemplo consiste em 3 funções, cada uma com um setTimeout aleatório para 
exibição;

function rand(min = 1000, max = 3000) {
    const num = Math.rand() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(function() {
    console.log('f1');
    if (callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(function() {
    console.log('f2');
    if (callback) callback();
    }, rand());
}

function f3(callback) {
    setTimeout(function() {
    console.log('f3');
    if (callback) callback();
    }, rand());
}

--> Sem o parâmetro 'callback' e a função callback, a exibição das funções seria
de forma aleatória;

Porém, com o callback, a ordem f1 - f2 - f3 é preservada:

f1(function() {
    f2(function() {
        f3(function() {
            console.log('Olá mundo');
        });
    });
});

Nesse caso acima, o argumento da f1 é o callback e exibe a função 2, e assim por diante.

-- Uma alternativa mais simples é:

function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log('Olá mundo');
}

f1(f1Callback);

-------------------------------------------------------------------------------------

5. Funções imediatas

- São utilizadas entre parênteses e servem para não conflitarem com o escopo global;
- Geralmente é uma função anônima, que pode abrigar várias funções, apenas para não
conflitar com o escopo global.

Ex:

(function(x, y) {
    const soma = x + y;
    console.log(soma)

}) (10, 2);

--------------------------------------------------------------------------------------

6. Factory functions

--> São funções que retornam objetos;
--> Quando a função está dentro de um objeto, a função é chamada de método;
--> Os métodos, assim como as factroy functions, servem para encurtar as 
linhas dos códigos.

*** THIS ***

-- Esse termo é muito importante e ele sempre está variando;
-- O uso do this se refere a quem chamou o que está sendo executado;

Ex: function criaPessoa (nome, sobrenome) {
    return {
        nome,
        sobrenome,
        fala(assunto) {
            return `${this.nome} está ${assunto}`;
        }
    };
}

const p1 = criaPessoa('Alcides', 'Neto');
console.log(p1.fala('falando sobre JS'));

Nesse caso: 

-- 'fala(assunto)' é um método;
-- p1 está chamando o método, logo, 'this' se refere a p1;
-- Portanto, 'this.nome' corresponde à propriedade nome do objeto p1;

--> Caso a propriedade do objeto tenha um nome diferente do parâmetro, é só atribuir
através do ':', dessa maneira:

Ex: function criaPessoa (primeiroNome, sobrenome) {
    return {
        nome : primeiroNome,
        sobrenome,

--> Se utilizar o termo 'get' antes de um método, esse método se transforma em
atributo e, a partir disso, pode ser chamado sem parênteses. Para isso, o método
não pode ter parâmetros.

Ex: ... get fala()...
    console.log(p1.fala)

-----------------------------------------------------------------------------------

7. Constructor functions

--> Também retorna um objeto;
--> A sintaxe dessa função é diferente, ela utiliza 'new' e o nome em letra
maiúscula;

Ex: function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Alcides', 'Neto');
const p2 = new Pessoa('Lara', 'Pavão');

--> O 'this' nesse caso se refere à 'function Pessoa', visto que o JavaScript já
entende que ela está retornando um objeto;
--> O uso do 'new' nas variáveis é para associar à função molde e assim retornar
um novo objeto. Ele também faz o 'this' se associar a esse novo objeto, ao passo
que o 'return' já está implícito;

----------------------------------------------------------------------------------

8. Função recursiva

--> Função que se chama de volta;
--> Similar a uma estrutura de repetição;
--> Ela tem um limite de chamadas;

Ex: function recursiva(max) {
    console.log(max);
    if (max >= 10) return;
    max++;
    recursiva(max);
}

recursiva(0);

----------------------------------------------------------------------------------

9. Função geradora

--> Para finalidade de performance, essa função serve para exibir valores de uma
forma gradativa ou pausada, ao invés de exibir tudo ao mesmo tempo;
--> Ao invés do 'return', se utiliza 'yield', embora o 'return' possa ser utili-
zado, porém ele termina a função.
--> Para exibir os valores é preciso chamar o método 'next()';
--> A palavra 'function' precisa ter um asterisco (*) nesse tipo de função;

Ex: function* geradora1() {
    // Código qualquer
    yield 'Valor 1';
    // Código qualquer
    yield 'Valor 2';
    // Código qualquer
    yield 'Valor 3';
}

const g1 = geradora1();
console.log(g1.next()); --> retorna um objeto (o valor e se a função terminou);
console.log(g1.next().value); --> retorna apenas o valor ('Valor 2')
console.log(g1.next().value); --> também retorna apenas o valor ('Valor 3');

Ex2: Contador infinito

function* geradora2() {
    let i = 0;
    while(true) {
        yield i;
        i++;
    }
}

const g2 = geradora2();
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
 ...

Ex3: Função geradora que delega tarefa para outra geradora

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3
    yield 4
    yield 5
}

const g4 = geradora4();
for(let valor of g4) {
    console.log(valor);
}

--> Para delegar a função, é preciso colocar um asterisco no 'yield';
--> Utilizou-se 'for' para poder exibir todos os valores de uma vez, ao invés do
'next().value'








*/
