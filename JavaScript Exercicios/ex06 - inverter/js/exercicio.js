let userNumb = document.getElementById('userNumb');
let lista = document.querySelector('select'); /*Funcionou*/
let lista2 = document.getElementById('invertido');
let matriz = [];
let tempMatriz = [];

function add(){
    matriz.push(Number(userNumb.value));
    let option = document.createElement('option');
    option.innerHTML = userNumb.value;
    lista.appendChild(option);
    userNumb.value = "";
    userNumb.focus();
}

function invert() {
    lista2.innerHTML = '';
    for(let cont = (matriz.length - 1); cont >= 0; cont-- ){
        tempMatriz.push(matriz[cont]);
        let option = document.createElement('option');
        option.innerHTML = matriz[cont];
        lista2.appendChild(option);
    }
    matriz = tempMatriz;
    tempMatriz = [];
}
