let result;

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
    if (num2==0){
        return 'Undefined';
    }
    else{
        result = num1/num2;
        return result;
    };
};