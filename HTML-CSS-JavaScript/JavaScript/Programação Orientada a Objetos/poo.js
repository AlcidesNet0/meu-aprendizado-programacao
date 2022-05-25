/*

1. Classes

--> As classes desempenham a mesma ação que uma função construtora;
--> A sintaxe é bastante semelhante, a grande diferença reside na questão do prototype;
--> Os métodos, por exemplo, são adicionados dentro da classe e já se inserem no _proto_ da classe;
--> Não é preciso atrelá-los ao prototype, eles já são automaticamente linkados;
--> Não precisa utilizar vírgulas para separar um método do outro, apenas o espaço

Ex:

class Pessoa {
    constructor(nome, sobrenome) { // Esse é o método que vai receber os parâmetros
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando.`);
    }
}
 const p1 = new Pessoa('Alcides', 'Neto');
 p1.falar()

* Antes de falar sobre heranças, existe uma maneira de deixar uma chave/propriedade/método
  privado, não tendo seu valor alterado fora da classe/função/objeto. Se dá através da seguinte
  forma:

--> const _nome = Symbol('nome'); // O '_' pode ser substituído, mas o importante é o uso
  do 'Symbol', com a descrição da chave/propriedade/método entre parênteses

-----------------------------------------------------------------------------------------

2. Herança com classes

--> A herança se dá, ao invés do call() e de atrelações de prototypes, através do termo
'extends'.

Ex: class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
    }
}

class Smartphone extends DispositivoEletronico {}

// Dessa simples forma, a classe Smartphone herda as chaves da classe DispositivoEletronico;

// Caso queira adicionar mais chaves, é preciso declara o constructor:

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor) {
        super(nome); 

        // O 'super' se refere à classe que está herdando, a superclass, e passa o
        // parâmetro que foi colocado na própria superclass;

        this.cor = cor
    }
}
const s1 = new Smartphone('Iphone', 'Preto');
console.log(s1);

---------------------------------------------------------------------------------------

3. Métodos estáticos

--> São métodos que não são acessados pelos objetos instanciados, ou seja, os objetos
    criados a partir de moldes (funções construtoras, factory functions e classes);

--> Eles são acessados diretamente pela classe. Para defini-los como estáticos, utiliza-se
    o termo 'static' antes do método.

--> Quando não utilizamos 'this' em um método, quer dizer que esse método pode ser estático.

Ex: Ex: class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
    }

    static ligar() {
        console.log(`O dispositivo está ligado`);
    }
}

const d1 = new DispositivoEletronico('Celular')
DispositivoEletronico.ligar();

d1.ligar() // Vai dar um erro;

--------------------------------------------------------------------------------------

4. 






































*/