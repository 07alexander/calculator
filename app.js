function add(x, y){
    return x + y;
}

console.log(add(4,5))

function subtract(x, y){
    return x - y;
}

console.log(subtract(4, 5))

function multiply(x,y){
    return x * y;
}

console.log(multiply(4, 5))

function divide(x, y){
    return x / y;
}

console.log(divide(4, 5))

function operate(operator, x, y){
    let answer;
    
    switch(operator){
        case "+":
            answer = add(x, y);
            break;
        case "-":
            answer = subtract(x, y);
            break;
        case "*":
            answer = multiply(x, y);
            break;
        case "/":
            answer = divide(x, y);
    }
    console.log(x + operator + y + "=" + answer)
}

operate("/",5,6);

document.getElementById("keys").addEventListener("click",function(){
    let value = keys(document.getElementById)
})

/*const numbers = document.querySelectorAll('.number')
numbers.forEach(function(currentNumber){
    currentNumber.addEventListener('click', console.log(currentNumber.value));
})

function getValue(){

}
*/
