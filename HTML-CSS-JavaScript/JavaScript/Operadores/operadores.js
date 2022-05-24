/* 

1. Operadores de comparação

> maior que
< menor que
>= maior que ou igual a
<= menor que ou igual a
== igualdade (valor) ### não é bom utilizar
=== igualdade estrita (valor e tipo)
!= diferente (valor) ### não é bom utilizar
!== diferente estrito

------------------------------------------------------------------------------------

2. Operadores lógicos

&& --> AND (Todas as expressões precisam ser verdadeiras para o valor 'true' ser retornado)
||--> OR (Pelo menos UMA expressão precisa ser verdadeira para o valor 'true' ser retornado)
! --> NOT (Inverte um valor)

--> Em JavaScript, a depender do contexto, certos valores são avaliados como 'falso':
1. false (esse sempre vai ser);
2. 0;
3. null / undefined;
4. '' "" `` (string vazia);
5. NaN

-----------------------------------------------------------------------------------

3. Operador Ternário

- Serve para códigos mais simples, substituindo o if/else;
- Símbolos = '?' e ':'  --> essas aspas são só pra separar os símbolos aqui na anotação;

Sintaxe: 
    (condição) ? 'Valor verdadeiro' : 'Valor falso';

* Como seria com if/else:
const pontuacaoUsuario = 999;

if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP')
} 
else (pontuacaoUsuario < 1000) {
    console.log('Usuário normal')
}

* Como é feito com operação ternária:

const tipoUsuario = (pontuacaoUsuario >=1000) ? 'Usuário VIP' : 'Usuário normal';
console.log(tipoUsuario);









*/