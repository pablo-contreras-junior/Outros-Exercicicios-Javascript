function parimpar(n){
    if(n%2 == 0){
        return true
    } else {
        return false
    }
}

function clicar(){
    let res = document.getElementById('res');
    let num = document.getElementById('num');
    res.innerText = "";
if(num.length == 0){
    window.alert('Numero Inválido');
}else if(parimpar(Number(num.value)) == false){
    let title = document.createElement('h1');
    title.innerHTML = `ÍMPAR`;
    res.appendChild(title);
} else{
    let title = document.createElement('h1');
    title.innerHTML = `PAR`;
    res.appendChild(title);
}
}

