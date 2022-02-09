const numbers = document.querySelectorAll('.numbers');
const keys = document.querySelectorAll('.keys');
const operations = document.querySelectorAll('.operations');
const result_div = document.querySelectorAll('.display');
const clr_btn = document.querySelector('#clr');
const dlt_btn = document.querySelector('#dlt');
const eql_btn = document.querySelector('#eql');
const DEFAULT_VALUE = 0;

let result = DEFAULT_VALUE;
let value = '';
let prev_val;
let cur_val;
let operator;
let flag = 0;

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


function store(val, operation){
    if(flag==1){
        cur_val = val;
        // prev_val = cur_val;
        result = operate(operation, prev_val, cur_val);
        console.log(`result: ${result}`);
        // displayResult(result);
        console.log(`cur: ${cur_val}`)
        console.log(`prev: ${prev_val}`);
        console.log(`opert: ${operation}`);
        flag = 0;
    }
    else if(flag==0){
        prev_val = val;
        console.log(`cur: ${cur_val}`)
        console.log(`prev: ${prev_val}`);
        console.log(`opert: ${operation}`);
        flag = 1;
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
        value = '';
        displayResult(0);
    });

    eql_btn.addEventListener('click', ()=>{
        console.log(operator);
        console.log(prev_val);
        console.log(cur_val);
        // operate(operator, prev_val, cur_val);
    });

};


operations[0].childNodes.forEach(operation =>{
    operation.addEventListener('click', ()=>{
        operator = operation.id;
        store(value, operator);
        value = '';
        displayResult(DEFAULT_VALUE);
    })
})

window.onload = function(){
    main();
    displayResult(result);
};