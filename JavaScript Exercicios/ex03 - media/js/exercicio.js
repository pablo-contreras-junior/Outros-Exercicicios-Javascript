let num = document.getElementById('num');
let select = document.getElementsByTagName('select')[0];
var array = [];

function intervaloCerto(n){
    if (n >= 0 && n <= 100){
        return true
    } else {
        return false
    }
}

function isIn (n,vetor) {
    if (vetor.indexOf(n) >= 0){ // Significa que 'n' já exite no vetor (não pode acontecer)
        return true
    } else {
        return false // Se for -1, está ok, pois significa que o número ainda não existe, logo o índice não foi encontrado
    }
}

function add() {
    if(intervaloCerto(Number(num.value)) && !isIn(Number(num.value),array)){
        array.push(Number(num.value));
        let option = document.createElement('option');
        option.innerHTML = Number(num.value);
        select.appendChild(option);
    } else {
        window.alert("Número Inválido ou Repetido");
    }
}

function verificar(){
    let res = document.getElementById('res');
    res.innerText = "";
    let tot = array.length;
    let soma = 0;
    for (let counter in array){
        soma += array[counter];
    }
    res.innerText = `A média do vetor é ${(soma/tot).toFixed(2)}`;
}