function add(a, b){
    var answer = a + b;
    return answer;
}
function subtract(a, b){
    var answer = a - b;
    return answer;
}
function multiply(a, b){
    var answer = a * b;
    return answer;
}
function divide(a, b){
    var answer = a / b;
    return answer;
}
function operate(a, b, op){
    var answer=0;
    console.log(a,b,op);
    switch(op){
        case 'add':
            answer = add(a,b);
            console.log(answer);
            break;
        case 'subtract':
            answer = subtract(a,b);
            console.log(answer);
            break;
        case 'multiply':
            answer = multiply(a,b);
            console.log(answer);
            break;
        case 'divide':
            answer = divide(a,b);
            console.log(answer);
            break;
        default: 
            console.log("Operate Error!");
    }
}

operate(12,2,'add');
operate(12,2,'subtract');
operate(12,2,'multiply');
operate(12,2,'divide');