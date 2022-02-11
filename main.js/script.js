const numbers = document.querySelectorAll('.numbers');
const keys = document.querySelectorAll('.keys');
const operations = document.querySelectorAll('.operations');
const display_prev = document.querySelector('.display_prev');
const display_cur = document.querySelector('.display_cur');
const clr_btn = document.querySelector('#clr');
const dlt_btn = document.querySelector('#dlt');
const eql_btn = document.querySelector('#eql');
const DEFAULT_VALUE = 0;
const STORE_VALUE = '';

let result = DEFAULT_VALUE;
let store_val  = STORE_VALUE;
let value = '';
let prev_val;
let cur_val;
let prev_op;
let cur_op;
let operator;
let flag = 0;

function add(num1, num2){
    return parseFloat(num1) + parseFloat(num2);
};

function subtract(num1, num2){
    return parseFloat(num1)-parseFloat(num2);
};

function multiply(num1, num2){
    return parseFloat(num1)*parseFloat(num2);
};

function divide(num1, num2){
    return parseFloat(num1)/parseFloat(num2);
};


function operate(operator, num1, num2){
    switch(operator){

        case('add'):
            return add(num1, num2);

        case('subtract'):
            return subtract(num1, num2);

        case('multiply'):
            return multiply(num1, num2);

        case('divide'):
            return divide(num1, num2);
    };
};


function equal(value){
    cur_val = value;
    result = operate(prev_op, prev_val, cur_val);
    show_result(result);
    flag = 0;
};

function cur_store(operator, value){
    cur_op = operator;
    cur_val = value;
    result = operate(prev_op, prev_val, cur_val);
    show_result(result);
    flag = 0;
};


function prev_store(operator, value){
    prev_op = operator;
    prev_val = value;
    display_store(prev_val);
    flag = 1;
};

function show_result(result){
    console.log(`Result: ${result}`);
    display_result(result);
};

function display_store(store_val){
    display_prev.innerHTML = `${store_val}`;
};

function display_result(result){
    display_cur.innerHTML = `${result}`;
};

function main(){
    numbers[0].childNodes.forEach(item => {
        item.addEventListener('click', ()=>{
            value += item.textContent;
            display_result(value);
        });
    });

    operations[0].childNodes.forEach(operation =>{
        operation.addEventListener('click', ()=>{
            operator = operation.id;
            if(flag == 0){
                prev_store(operator, value);
            }
            else if(flag==1){
                cur_store(operator, value);
            };

            value = '';
            display_result(DEFAULT_VALUE);
        });
    });
    
    clr_btn.addEventListener('click', ()=>{
        value = '';
        display_result(0);
    });

    eql_btn.addEventListener('click', ()=>{
        equal(value);
    });

};


window.onload = function(){
    main();
    display_result(result);
    display_store(store_val);
};