function welcome(){
    let nome = window.prompt('Qua seu nome?:');
    let cor = window.prompt('Qual sua cor favorita?:').toLowerCase();
    if (cor == "preto"){
        document.body.style.color = "white";
        document.body.style.backgroundColor = 'black';
    }else if(cor == "vermelho"){
        document.body.style.color = "white";
        document.body.style.backgroundColor = 'red';
    }else if(cor == "verde"){
        document.body.style.color = "white";
        document.body.style.backgroundColor = 'green';
    }else if(cor == "amarelo"){
        document.body.style.backgroundColor = 'yellow';
    }else if(cor == "azul"){
        document.body.style.color = "white";
        document.body.style.backgroundColor = 'blue';
    }else if(cor == "rosa"){
        document.body.style.color = "white";
        document.body.style.backgroundColor = 'deeppink';
    }else if(cor == "roxo"){
        document.body.style.color = "white";
        document.body.style.backgroundColor = 'purple';
    }else{
        document.body.style.backgroundColor = "White"
    }

    let itemTitulo = document.createElement('h1');
    itemTitulo.innerHTML = `Boas Vindas, ${nome}<br> É um prazer te ter aqui`
    document.body.appendChild(itemTitulo);
}