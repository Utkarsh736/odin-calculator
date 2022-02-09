const numbers = document.querySelectorAll('.numbers');
const keys = document.querySelectorAll('.keys');
const operations = document.querySelectorAll('.operations');
const result_div = document.querySelectorAll('.display');
const clr_btn = document.querySelector('#clr');
const dlt_btn = document.querySelector('#dlt');
const eql_btn = document.querySelector('#eql');

let result = 0;
let value = '';


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

function main(){
    numbers[0].childNodes.forEach(item => {
        item.addEventListener('click', ()=>{
            value += item.textContent;
            displayResult(value);
        });
    });
    
    clr_btn.addEventListener('click', ()=>{
        displayResult(0);
    });
};

// function clear(){};


window.onload = function(){
    main();
    displayResult(value);
};