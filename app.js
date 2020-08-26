let total=0;

function add(x, y){
    return Math.round(x + y);
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
}

document.getElementById("+").addEventListener("click", function(){
    curr=document.getElementById("screen").value;
    total = add(total, curr);
    document.getElementById("screen").value = total;
});
document.getElementById("-").addEventListener("click", function(){
    document.getElementById("screen").value += "-";
});
document.getElementById("*").addEventListener("click", function(){
    document.getElementById("screen").value += "*";
});
document.getElementById("/").addEventListener("click", function(){
    document.getElementById("screen").value += "/";
});
document.getElementById("9").addEventListener("click", function(){
    if(document.getElementById("screen").value == 0){
        document.getElementById("screen").value = 9
    }else
    document.getElementById("screen").value += 9;
});
document.getElementById("8").addEventListener("click", function(){
    if(document.getElementById("screen").value == 0){
        document.getElementById("screen").value = 8
    }else
    document.getElementById("screen").value += 8;
});
document.getElementById("7").addEventListener("click", function(){
    if(document.getElementById("screen").value == 0){
        document.getElementById("screen").value = 7
    }else
    document.getElementById("screen").value += 7;
});
document.getElementById("6").addEventListener("click", function(){
    if(document.getElementById("screen").value == 0){
        document.getElementById("screen").value = 6
    }else
    document.getElementById("screen").value += 6;
});
document.getElementById("5").addEventListener("click", function(){
    if(document.getElementById("screen").value == 0){
        document.getElementById("screen").value = 5
    }else
    document.getElementById("screen").value += 5;
});
document.getElementById("4").addEventListener("click", function(){
    if(document.getElementById("screen").value == 0){
        document.getElementById("screen").value = 4
    }else
    document.getElementById("screen").value += 4;
});
document.getElementById("3").addEventListener("click", function(){
    if(document.getElementById("screen").value == 0){
        document.getElementById("screen").value = 3
    }else
    document.getElementById("screen").value += 3;
});
document.getElementById("2").addEventListener("click", function(){
    if(document.getElementById("screen").value == 0){
        document.getElementById("screen").value = 2
    }else
    document.getElementById("screen").value += 2;
});
document.getElementById("1").addEventListener("click", function(){
    if(document.getElementById("screen").value == 0){
        document.getElementById("screen").value = 1
    }else
    document.getElementById("screen").value += 1;
});
document.getElementById("0").addEventListener("click", function(){
    if(document.getElementById("screen").value == 0){
        document.getElementById("screen").value = 0
    }else
    document.getElementById("screen").value += 0;
});
/*
document.getElementById(".").addEventListener("click", function(){
    document.getElementById("screen").value += ".";
});
*/
document.getElementById("all-clear").addEventListener("click", function(){
    document.getElementById("screen").value = '0';
    console.log(document.getElementById("screen").value)
});
document.getElementById("=").addEventListener("click", function(){
    console.log(document.getElementById("screen").value)
});