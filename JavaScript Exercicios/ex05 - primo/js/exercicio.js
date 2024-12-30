// INCOMPLETO//


function verificar(){
    let userInput = document.getElementById('userNumb');
    let intervalo = [];
    let divisores = [];
        
    let inputNumb = Number(userInput.value);
    
    function isPrimo(inputNumb){
        let cont = 1;
        while(intervalo.length <= inputNumb){
           intervalo.push(cont);
           cont++;
        }
    
        for(let numToTest of intervalo){
           if(inputNumb % numToTest === 0){
            divisores.push(numToTest);
           }
        }
    
        if(divisores.length == 2){
           return true;
        }
        else{
           return false;
        }
    }

    if (isPrimo(inputNumb)){
        res.value = `Primo`;
    } else {
        res.value = "Não Primo";
    }
}
