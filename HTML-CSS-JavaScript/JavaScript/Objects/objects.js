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




































*/
