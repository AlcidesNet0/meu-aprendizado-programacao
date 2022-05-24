/*

1. Algumas ações extras:

- Capturar o evento de um click: (exemplo)

const variavel = document.querySelector('.variavel')

variavel.addEventListener('click', function(event) {
    ## Execute o código
});

* O padrão dessa captura consiste no .addEventListener('click', function(event){}),
com essa função(event) retornando alguma ação.

- Como adicionar ou remover uma classe via JavaScript:

variavel.classList.add('.class');
variavel.classList.remove('.class);

- Capturar o evento de um click com múltiplas variáveis: (exemplo)

document.addEventListener('click', function(event) {
    const el = event.target;

    if(el.classList.contains('.class')) {
        ## Execute tal código
    }
    if(el.classList.contains('.class2')) {
        ## Execute tal código
    }
});

* O 'el' foi usado para facilitar na substituição do 'event.target';
* 'event' também pode ser 'e', entre outros;

------------------------------------------------------------------------------------

2. Como tratar e lançar erros

Sintaxe:

    try {
        // Código que pode apresentar algum erro;
    } catch (err) {
        // Código exibirá alguma mensagem caso aconteça algum erro;
    }

--> Não é recomendado exibir o erro para o usuário final.
--> Outra opção envolve usar o 'throw' (olhar a documentação quando necessário)














*/
