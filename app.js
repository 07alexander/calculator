function add(x, y){
    return (x + y);
} 

console.log(add(4,6))

function subtract(x, y){
    return x - y;
}

function multiply(x,y){
    return x * y;
}


function divide(x, y){
    return x / y;
}


function operate(operator, x, y){ 
    switch(operator){
        case "+":
            add(x, y);
            break;
        case "-":
            subtract(x, y);
            break;
        case "*":
            multiply(x, y);
            break;
        case "/":
            divide(x, y);
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
acBTN = document.querySelectorAll(".all-clear");
eqBTN = document.querySelectorAll("equal");

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

