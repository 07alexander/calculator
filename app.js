function add(x, y){
    return (x + y);
} 

function subtract(x, y){
    return x - y;
}

function multiply(x,y){
    return x * y;
}


function divide(x, y){
    return x / y;
}


function operate(x, y, operator){ 
    switch(operator){
        case "+":
            return add(x, y);
            break;
        case "-":
            return subtract(x, y);
            break;
        case "*":
            return multiply(x, y);
            break;
        case "/":
            return divide(x, y);
            break;
        default:
            return null;
    }
}

let displayVal = 0;
let op;
let newOp;
let firstVal;
let secondVal;
let firstCalc = false;
let isFirst = true;

numBTN = document.querySelectorAll(".number");
opBTN = document.querySelectorAll(".operator");
acBTN = document.querySelector("#clear");
eqBTN = document.querySelector("#equal");

numBTN.forEach(btn =>{
    btn.addEventListener("click", insert);
});


function insert(){
    if(displayVal == 0){
        document.querySelector("input").value = this.value;
        displayVal = this.value;
        secondVal = displayVal;
    }else{
        document.querySelector("input").value = document.querySelector("input").value + this.value;
        displayVal = document.querySelector("input").value;
        secondVal = displayVal;
    }
}

function display(){
    document.querySelector("input").value = displayVal;
}

display();

opBTN.forEach(btn =>{
    btn.addEventListener("click", operation);
});

function operation(){
    if (isFirst){
        if(!firstCalc){
            firstVal = displayVal;
        }
        op = this.value;
        isFirst = false;
        if(firstCalc){
            secondVal = displayVal;
            firstVal = operate(parseFloat(firstVal), parseFloat(secondVal), newOp);
            document.querySelector("input").value = first_value;
        }
        displayVal = 0;
    }else if(!isFirst){
        displayVal = 0;
        newOp = this.value;
        firstVal = operate(parseFloat(firstVal), parseFloat(secondVal), op);
        document.querySelector("input").value = firstVal;
        isFirst = true;
        firstCalc = true;
    }
}

acBTN.addEventListener("click", clear);
eqBTN.addEventListener("click", equal);

function clear(){
    displayVal = 0;
    firstVal = 0;
    secondVal = 0;
    op = "";
    newOp = "";
    firstCalc = false;
    isFirst = true;
    document.querySelector("input").value = displayVal;
    numBTN.forEach(btn =>{
        btn.disabled = false;
    });
    opBTN.forEach(btn =>{
        btn.disabled = false;
    });
}

function equal(){
    if(!isFirst){
        document.querySelector("input").value = operate(parseFloat(firstVal), parseFloat(secondVal), op)
    }else if(isFirst){
        document.querySelector("input").value = operate(parseFloat(firstVal), parseFloat(secondVal), newOp);
    }
    numBTN.forEach(btn =>{
        btn.disabled = true;
    });
    opBTN.forEach(btn=>{
        btn.disabled = true;
    });
}
