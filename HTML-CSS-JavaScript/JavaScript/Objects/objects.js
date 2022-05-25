/*

1. Estrutura de um objeto (a partir de um exemplo):
 
const pessoa1 = {
     nome: 'Alcides',
     sobrenome: 'Neto',
     idade: 23
 }
console.log(pessoa1.nome);
 
--> Criando objetos a partir de funções (exemplo):
 function criaPessoa (nome, sobrenome, idade) {
     return {nome, sobrenome, idade)
     }
}
const pessoa1 = criaPessoa('Alcides', 'Neto', '23');
console.log(pessoa1);

--------------------------------------------------------------------------------

2. Atribuição via desestruturação (objetos)

Ex:

const pessoa = {
    nome: 'Alcides'
    sobrenome: 'Neto'
    idade: 23
    endereco: {
        rua: 'Ulisses Tenorio'
        numero: 53
    }
}

const { nome, sobrenome, idade, endereco: { rua, numero } } = pessoa
console.log(nome, sobrenome, idade, rua, numero)

*Caso queira um nome diferente para a variável, é só copiar o elemento do objeto
e colocar o nome da variável.

Ex:

const { nome: teste, sobrenome} = pessoa
console.log(teste, sobrenome)

-----------------------------------------------------------------------------------

3. Mais informações sobre objetos

--> Também é possível acessar a propriedade de um objeto utilizando colchetes e
o nome da propriedade em formato string;

Ex: console.log(pessoa['nome']);

--> Para apagar uma propriedade, utiliza-se 'delete';

Ex: delete pessoa.nome;

--> Object.freeze() trava qualquer eventual alteração das características e valores
de um objeto

-------------------------------------------------------------------------------------

4. Object.defineProperty() / Object.defineProperties()

--> Caso queira travar apenas uma propriedade do objeto ou mais de uma, mas não todas
é utilizado o defineProperty() ou defineProperties();
--> Com esses métodos, é possível impedir eventuais alterações dos valores
da propriedade, assim como outras configurações;
--> A sintaxe do método se refere: (objeto, 'propriedade', descrição da propriedade);


Ex: função construtora;

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: false, 
        configurable: true // pode ser reconfigurada e apagada
    })
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

-- O objetivo deste exemplo é realizar ações para a propriedade 'estoque';
-- Na sintaxe do defineProperty, a descrição da propriedade é um objeto;
-- Ainda na sintaxe, como a função construtora já retorna um objeto, a identifica-
ção desse objeto pode ser feita por 'this', por isso ele se encontra no primeiro
parâmetro.

--> "Enumerable", sendo 'true', significa a aparição da propriedade, da chave,
aparecendo em métodos como Object.keys(), que tem a função de mostrar um array
com as chaves do objeto, e o loop 'for in'; Nesse caso, embora não tenha sido
declarada na função, com o "enumerable", foi possível.

--> Diante disso, o "value", serve para mostrar o valor, no caso, o parâmetro
estoque;

--> "Writable", sendo 'true', permite futuras alterações no valor da propriedade.
Caso seja 'false', não é possível modificar mais, se assemelhando com as caracterís-
ticas do Object.freeze();

--> O "configurable", sendo 'true', possibilita que todas essas características
da propriedade (enumerable, value, writable e configurable) possam ser reconfiguradas,
ou seja, é possível repetir essa ação. Além disso, permite que a propriedade seja
deletada. Caso seja 'false', nada disso é possível e a propriedade só pode ser confi-
gurada nessa única vez.

Ex: Object.defineProperties() baseado na função anterior;

Object.defineProperties(this, {
    nome: {configurações},
    preco: {configurações}
})

-- A identificação das propriedades é por um objeto.

------------------------------------------------------------------------------------

5. Getters e Setters

--> Simplificam a forma de acessar a chave de um objeto, substituindo o acesso via
métodos/funções e apenas pelo nome da propriedade.
--> O 'get' pega um valor, enquanto o 'set' determina um valor;
--> Assegura uma melhor qualidade dos dados.
--> Também servem para proteger uma propriedade (geralmente estipulando algum
    limite para o seu valor);


Ex: Utilizando getter e setter no defineProperty();

    function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, 
        configurable: true,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                console.log('Não pode ser um valor diferente de número')
                return
            } estoque = valor
        }
    })
}
const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 2
console.log(p1.estoque);

--> Ambos necessitam de uma função. No caso do 'set', é necessário um parâmetro;
--> As características 'writable' e 'value' não são necessárias quando se utiliza
esses dois acessores;
--> O 'get' simplesmente pega o valor. Então, caso não houvesse alguma alteração,
o valor do estoque seria 3;
--> Já o 'set' ele intervém e pode definir um valor diferente, além de suas condições.
Nesse caso, caso o novo valor fosse uma string, apareceria uma mensagem que impedia
o valor do estoque ser uma string, como é determinado na função do 'set', e assim,
o valor do 'get' permaneceria (3). Porém, com a alteração de um valor numérico, apenas
é exibido esse novo valor (2);
--> Se ainda tiver dúvidas, experimenta testar o código acima ou ver a documentação;
--> A ideia do 'get' e do 'set' é acessar valores do objeto através de suas proprie-
dades, e não de métodos/funções; Por ex: (p1.estoque) ao invés de (p1.método());

-------------------------------------------------------------------------------------

6. Métodos úteis para objetos

*** Spread operator: 

--> Caso eu queira copiar um objeto, mas sem linká-los, podendo posteriormente 
alterar o valor de um e não influenciar no outro;

Ex: const produto = {nome: 'Caneca', preco: 2.5};
    const estoque = produto;

    -- Nesse caso, alteração no valor da variável 'estoque' também será alterado em
    'produto' e vice-versa, pois ambos estão linkados;
    -- Para que isso seja resolvido, ou seja, para que seja possível copiar o valor
    de 'produto' para variável 'estoque' e depois alterar o valor de uma sem modifi-
    car a outra, utiliza-se o spread operator

Ex: const produto = {nome: 'Caneca', preco: 2.5};
    const estoque = { ...produto };
    estoque.preco = 5.2;
    console.log(produto);
    console.log(estoque);

    -- Os valores da propriedade 'preco' serão diferentes;

*** Outra forma que reproduz a mesma função é o Object.assign();

Ex: const produto = {nome: 'Caneca', preco: 2.5};
    const estoque = Object.assign({}, produto);

    -- O primeiro argumento consiste em um novo objeto, enquanto o segundo trata
    do objeto que será copiado;
    -- A importância desses dois métodos é, em casos de vários objetos com a mesma
    propriedade, basta apenas copiar de um objeto e depois realizar as alterações;

*** Object.getOwnPropertyDescriptor()

--> Mostra as características de uma propriedade, as mesmas que são definidas em
Object.defineProperty();

--> Sintaxe: Object.getOwnPropertyDescriptor(nome do objeto, nome da propriedade);

*** Object.values()

--> Retorna os valores das propriedades de um objeto. Para isso, basta inserir o no-
me do objeto dentro dos parênteses desse método;

*** Object.entries()

--> Retorna um array com as chaves do objeto (propriedade e seus valores);

------------------------------------------------------------------------------------

7. Prototypes

--> São as cadeias que os objetos usam para buscar/acessar as coisas;

--> Todo objeto tem um objeto-mor atrelado a ele: 'Object.prototype'. E ele, 
implicitamente, está presente nas chaves dos objetos como: '_proto_';

--> A ideia do prototype é melhorar a performance do servidor, tendo em vista que
normalmente o servidor vai estar tratando de inúmeros objetos. Se cada objeto tem
um método igual a ser reproduzido, isso acabaria ulitizando bastante recurso da
máquina.

--> Para simplificar e assegurar uma melhor qualidade no dado, é utilizado o proto-
type. Nesse caso, ele é acessado fora da função construtora.

Ex: Adicionando uma propriedade e um método a uma função construtora

function Person(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome,;
    this.idade = idade;
}

Person.prototype.nacionalidade = 'Brasileiro';
Person.prototype.nomeCompleto = function() {
    return this.nome + '' + this.sobrenome;
}

const p1 = new Person('Alcides', 'Neto', '23');
const p2 = new Person('Julio', 'Mosquera', '22');
console.log(p1.nomeCompleto());
console.log(p1.nacionalidade);

-------------------------------------------------------------------------------------

8. Polimorfismo

--> Maneira de métodos se comportarem de maneiras diferentes em funções construtoras
ou classes;

Ex: comportamento de um método diferente nas instâncias da função construtora (molde);

// Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

// Adição de métodos através do prototype da função construtora

Conta.prototype.sacar = function(valor) {
    if (valor > this.saldo) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};
Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
}
Conta.prototype.verSaldo = function() {
    console.log(`Ag./c: ${this.agencia}/${this.conta} | ` +
    `Saldo: R$${this.saldo.toFixed(2)}`)
}

// Teste: a cada declaração do método, o valor do saldo de altera:

const conta1 = new Conta(6342, 1291267, 500);
conta1.depositar(50);
conta1.depositar(20);
conta1.sacar(600);

// Agora vem o polimorfismo: o método 'sacar' irá apresentar um comportamento diferente
// na função construtora 'ContaCorrente', enquanto a função 'ContaPoupanca' irá repetir
// o comportamento da 'Conta' genérica

function ContaCorrente(agencia, conta, saldo, limite) {

    // Essa parte consiste na herança, onde através do método call(), essa função construtora irá 'copiar'
    // as chaves da 'superclass' (nesse caso), assim como demais códigos; É importante destacar que outras
    // chaves e propriedades podem ser adicionadas após o processo de herança;

    Conta.call(this, agencia, conta, saldo), 
    // O 'this' é o objeto criado por ContaCorrente e que irá receber os parâmetros da 'superclass' Conta;

    this.limite = limite;  
}

// É preciso fazer também um link entre os prototypes, dessa nova função e da 'superclass', através do
// Object.create(), para que os métodos (adicionados fora da função, através do prototype), possam ser
// sincronizados;

    ContaCorrente.prototype = Object.create(Conta.prototype);

// A partir da realização da herança, o construtor do 'ContaCorrente' será o mesmo do 'Conta', então 
// é preciso redefini-lo para ser novamente o construtor da 'ContaCorrente';

    ContaCorrente.prototype.constructor = ContaCorrente;

// Agora o método sacar() irá apresentar um comportamento diferente, já que possui um limite;

    Conta.prototype.sacar = function(valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

// Teste:

const contaCorrente1 = new ContaCorrente (6342, 129267, 0, 100);
contaCorrente1.sacar(90);
contaCorrente1.sacar(100);

// A function ContaPoupanca repete o processo da 'superclass' Conta, com o mesmo método que a
// function ContaCorrente, porém com um comportamento diferente, já que não assume um saldo negativo;

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo)
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca

// Teste

const poupanca = new ContaPoupanca(6342, 129267, 5);
poupanca.depositar(10);
poupanca.sacar(20);

-----------------------------------------------------------------------------------------------------

9. Factory functions + prototypes

--> Trabalhando com herança e prototype de duas formas: dentro e fora da factory function;

// Tendo em mente uma factory function clássica:

function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        falar() {
            console.log(`${this.nome} está falando`);
        }
    }
}

Ex1: Dentro:

function criaPessoa(nome, sobrenome) {

// Aqui será criado um prototype para ser utilizado em todas as instâncias da factory function;
// Nesse caso, o prototype irá armazenar o método utilizado acima.

    const pessoaPrototype = {
        falar() {
            console.log(`${this.nome} está falando`);
        }
    }

// A linkagem dos prototypes também ocorre dentro, dessa vez adicionando o resto do código, como
// property descriptors;

    return Object.create(pessoaPrototype, {
        nome: { value: nome },    // Nesse caso, só utilizou 'value' como característica da propriedade;
        sobrenome: {value: sobrenome}
    });
}

// Teste:

const p1 = criaPessoa('Alcides', 'Neto');
p1.fala();
const p2 = criaPessoa('Maria', 'Joana');
p2.fala();

Ex2: Fora:

// Os métodos são desacoplados e podem ser utilizados em qualquer objeto e não apenas os instanciados
// pela factory function;

const falar {
    falar() {
        console.log(`${this.nome} está falando`);
    }
}

// Declarando esse método no prototype através do spread operator (também pode-se utilizar Object.assign());

const pessoaPrototype = { ...falar };

// E agora a função apenas com o 'pessoaPrototype' inserido no Object.create();

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: {value: sobrenome}
    });
}

--------------------------------------------------------------------------------------------------

10. Map();

--> O Map() é bastante similar a um Objeto, entretanto, para certas ocasiões ele é
    preferível de ser utilizado dada as suas diferenças;

--> Um Map() pode ser diretamente iterável (através do 'for of'), enquanto um Objeto
    usa Object.keys, ou 'for in' para enumerar suas propriedades;

--> As chaves do Map() são ordenadas a partir de sua inserção (pode ser '2', '3', '1').
    Já o Objeto não possui uma ordenação boa, no minímo, sendo complexa;
    Isso é importante para casos de algoritmo que necessitam da ordem através da inserção,
    não respeitando a ordem crescente de números, por exemplo;

--> O número de itens dentro de um Map() é retornado pela propriedade 'size'; Por fim,
    as chaves do Map() podem ser de quaisquer tipos, enquanto as do Objeto devem ser
    strings ou símbolos.

--> Para criar um Map(), se utiliza new Map(), para determinar um valor, se utiliza o
    set() e para pegar um valor se utiliza o get(), entre outros métodos;

















*/
