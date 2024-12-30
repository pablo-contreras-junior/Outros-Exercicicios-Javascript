function clicar(){
    let userText = document.getElementById('texto');
    let res = document.getElementById('res')
    res.value = "";

    function upper(texto){
        return texto.toUpperCase();
    }

res.value = upper(userText.value);
}
/*
Quando o botão for clicado, vai disparar a função:
    - Guarda o texto do input na varável 'userText'
    - Guarda a resposta do programa na variável 'res'
    - Limpa o texto de 'res' caso já haja uma resposta anterior
    - Fiz uma função que recebe como parâmetro um texto e, o retorna em upper case
    - Configuro o input de resposta (res) para sendo o texto do usuário com a função 'upper';
*/



/*
o nome da função não deve ser uma palavra reservada
*/