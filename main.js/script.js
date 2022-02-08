const numbers = document.querySelectorAll('.numbers');
const keys = document.querySelectorAll('.keys');
const operations = document.querySelectorAll('.operations');
const result_div = document.querySelectorAll('.display');

let result = 0;



function add(num1, num2){
    result = num1 + num2;
    return result;
};

function subtract(num1, num2){
    result = num1-num2;
    return result;
};

function multiply(num1, num2){
    result = num1*num2
    return result;  
};

function divide(num1, num2){
    result = num1/num2;
    return result;
};


function operate(operator, num1, num2){
    switch(operator){

        case('add'):
            add(num1, num2);
            break;

        case('subtract'):
            subtract(num1, num2);
            break;

        case('multiply'):
            multiply(num1, num2);
            break;

        case('divide'):
            divide(num1, num2);
            break;
    };
};

function displayResult(result){
    result_div[0].innerHTML = `${result}`;
};

numbers[0].childNodes.forEach(item => {
    item.addEventListener('click', ()=>{
        let num_display = item.textContent;
        displayResult(num_display);
    });
});


window.onload = function(){
    displayResult(result);
};