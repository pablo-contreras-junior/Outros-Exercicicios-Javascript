document.body.style.backgroundColor = 'black';
function clicar(){
    let userString = document.querySelector('input');
    let res = document.getElementsByTagName('h2')[0];   
    let arrayLetters = userString.value.split('');
    let stringReverse = "";

    for (let i in arrayLetters.reverse()){
        stringReverse += arrayLetters[i]; // funcionou!
    }

    stringReverse = stringReverse.replace(/( |\.|,)/gi, '');
    

    if(userString.value.replace(/(\s|\.|,)/gi, '').toLowerCase() == stringReverse.toLowerCase()){
        res.innerHTML = `A string ${userString.value} é um palindromo`;
        res.style.color = 'green';
    } else {
        res.innerHTML = `A string ${userString.value} não é um palindromo`;
        res.style.color = 'red';
    }
}
/*
Fiz a cor de fundo dá página ficar preto
*/



/*
Quando a função for clicada, salva o valor do input e faz o input de resposta ser referenciado apenas por 'res'.
Também cria um array com as letras e espaços em branco separadamente do input que reberá a string.
E também, cria uma string de armazenamento, seu valor no começo, é vazio, mas eventualmente, receberá o valor 
invertido da string recebida pelo programa
*/



/*
Crio um laço que percorre de tras para frente, o array que recebeu as letras e espaços.
A cada índice analizado, ele adiciona e armazena seu valor dentro da string de armazenamento que eu criei
 */ 


/*
Depois do laço, retiro todos os espaços da string de armazenamento, assim como os pontos e virgulas.
*/

/*
E por ultimo, comparo a string de armazenmento (que agora tem apenas as letras invertidas da string recebida no inicio)
em lower case, com uma versão também em lowercase e sem espaços da string recebida no inicio do programa
*/

/*
Se a comparção for verdadeira, o programa informará o usuario que a palavra é um palindromo.
*/