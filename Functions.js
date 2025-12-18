// Design a Calculator interface for 2 number inputs which can perform sum, difference, product and dividend whenever invoked on the same interface

function Calculator(num1,num2){
    function sum(){
        return num1+num2;
    }
    
    function difference(){
        return num1-num2;
    }
    
    function product(){
        return num1*num2;
    }
    
    function divide(){
        return num1/num2
    }
    
    return {sum,difference,product,divide}
}

const obj = Calculator(12,2);
console.log(obj.sum())
console.log(obj.difference());
console.log(obj.product());
console.log(obj.divide());


/// Design a Calculator interface for 2 number inputs which can perform sum, difference, product and dividend whenever invoked on the same interface CLASS

class Calculator{
     num1= null;
     num2 = null;
    
    constructor(a,b){
        this.num1 = a;
        this.num2 = b;
    }
    sum(){
        return this.num1+this.num2;
    }
    
    difference(){
        return this.num1-this.num2;
    }
    
    product(){
        return this.num1*this.num2;
    }
    
    divide(){
        return this.num1/this.num2
    }
}

const obj = new Calculator(12,2);
console.log(obj.sum())
console.log(obj.difference());
console.log(obj.product());
console.log(obj.divide());

//Design a private counter function which exposes increment and retrive functionalities

function Counter(){
    let count=0;
    
    function increment(){
        return count+=1;
    }
    
    function decrement(){
        return count-=1;
    }
    
    function getValue(){
        return count;
    }
    
    return {increment,decrement,getValue}
}

const obj = Counter();
console.log(obj.increment());
console.log(obj.getValue())

//  Write a polyfill for bind function
// The bind method creates a new function that, when called, has its this keyword set to the provided context
const details={
    name:'vaishnavi',
    edu: 'btech'
}
Function.prototype.mybind = function(...args){
    let obj = this
    const params = args.slice(1);
    return function(){
        obj.call(args[0],params)
    }
}

const newobj = getDetails.mybind(details,"badminton")
newobj()

//Write a function which helps to achieve multiply(a)(b) and returns product of a and b

function multiplyby3(x){
    return function (y){
       console.log(x*y)
    }
}

multiplyby3(2)(3);
