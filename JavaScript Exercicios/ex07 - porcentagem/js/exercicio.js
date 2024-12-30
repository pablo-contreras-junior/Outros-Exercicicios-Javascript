function analize(){
    let userNumb = document.getElementById('userNumb');
    let percent = document.getElementById('percent');
    let res = document.getElementById('res');
    let porcentagem = (((Number((percent.value))) /100)*(Number(userNumb.value)));
    
    res.value = `${userNumb.value} acrescido de ${percent.value}% é ${porcentagem+(Number(userNumb.value))}`;
}