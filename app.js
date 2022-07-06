var display = document.getElementById("display");
display.value ="0";
const calculator = document.getElementById("calc");
var keyList = calculator.querySelectorAll(".keys");
console.log(keyList);

var numA = 0;
var numb = 0;

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
var operatorPressedOnce = false;
var done=false;
var opFlag;
function clearDisplay(){
    display.value="";
    display.value="0";
    
}

calculator.addEventListener("click", function(e){
    
    const isOP = e.target.classList.contains('op');
    const isCLS = e.target.classList.contains('cls');
    const isKeys = e.target.classList.contains('keys');
    if(display.value === "0"){display.value="";} //Clear 0 on first input
    
    if(isKeys){ 
        if(!isOP){
        display.value +=  e.target.textContent; //Updates display values
        console.log(display.value);
        }
        
    }
    if(isCLS){
        clearDisplay();
        operatorPressedOnce =false;
    done=false;
    }
    if(isOP){
        if(!operatorPressedOnce){
            numA = parseInt(display.value);
            console.log("numa:",numA);
            opFlag = e.target.textContent;
            console.log(opFlag);
            operatorPressedOnce = true;
            clearDisplay();
        }
        if(operatorPressedOnce){
            if(!done){
            if(e.target.textContent === "="){
                numb = parseInt(display.value);
                switch(opFlag){
                    case '+':
                    display.value = add(numA,numb);
                    done=true;
                    break;
                case '−':
                    display.value = subtract(numA,numb);
                    done=true;
                    break;
                case '×':
                    display.value = multiply(numA,numb);
                    done=true;
                    break;
                case '÷':
                    display.value = divide(numA,numb);
                    done=true;
                    break;
                default: 
                    display.value = "Error Check!"
                    console.log("Operate Error!");
                        }
                
            }
        }
        }
    }
})