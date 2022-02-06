const numbers = document.getElementsByClassName('numbers');
const keys = document.getElementsByClassName('keys');
const operations = document.getElementsByClassName('operations');
const result_div = document.getElementsByTagName('span');

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

// Button function
// numbers[0].forEach((number)=>{
//     number.addEventListner('click', ()=>{
//         console.log(number.innerHTML);
//     });
// });


window.onload = function(){
    displayResult(result);
};