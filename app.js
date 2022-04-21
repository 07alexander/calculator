var display = document.getElementById("display");
display.value ="0";
const calculator = document.getElementById("calc");
var keyList = calculator.querySelectorAll(".keys");
console.log(keyList);

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
function clearDisplay(){
    display.value="0";
}
var operatorPressedOnce = false;
calculator.addEventListener("click", function(e){
    var numA = 0;
    var numb = 0;
    const isOP = e.target.classList.contains('op');
    const isCLS = e.target.classList.contains('cls');

    if(!isCLS){
    if(display.value === "0"){display.value="";} //Clear 0 on first input

    
    display.value +=  e.target.innerHTML; //Updates display values

    }else{
        clearDisplay();
    }

    console.log(e.target.innerHTML);
    console.log(isOP);

})