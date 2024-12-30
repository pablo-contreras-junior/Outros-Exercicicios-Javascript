function fatorial(){
    let userNumb = document.querySelector('input');
    let exitInput = document.getElementById('res');
    let storage = 1;

    for (let cont = Number(userNumb.value); cont >= 1; cont--){
        storage *= cont;
    }
    
    exitInput.value = storage;
}