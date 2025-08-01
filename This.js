//THIS keyword --> IMPLICITE BINDING
// The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run. Most typically, 
//it is used in object methods, 
//where this refers to the object that the method is attached to, thus allowing the same method to be reused on different objects.
//The value of this in JavaScript depends on how a function is invoked (runtime binding), not how it is defined. 
//When a regular function is invoked as a method of an object (obj.method()), this points to that object. When invoked as a standalone function 
//(not attached to an object: func()), this typically refers to the global object (in non-strict mode) or undefined
//This inside a function will return Window object if not called on any object or call/bind/apply
//if the property or fun is not defined inside obj, it's considered as Window obj globally

class user{
    //this inside of a class will point to everything defined inside the constructor
    constructor(n){
        this.name = n;
    }
    getName(){
        console.log(this.name);
    }
}
const obj = new user("vaish");
obj.getName();

//QUE 1
const user = {
    firstname : "vaish",
    getName(){
        const firstname="heyy"
        //this is pointing to USER, not specific to this function
        return this.firstname;
    },
}
console.log(user.getName)// vaish as this points to USEr

//QUE 2
function makeUser(){
    return{
        name:'vaish',
        ref:this //here the ref will point to the window object and the window doen't have a name
        //can fix this by making ref as fun, which will return this, then will point to name
    }
}
let user = makeUser();
console.log(user.ref.name)//nothing will print

//QUE 3
const user = {
    name: "vaish",
    logmsg(){
        console.log(this.name)//?NOTHING
    }
}
setTimeout(user.logmsg,1000);
//cause setimeout is using user.logmsg as callback, and when it gets called 
//it won't have access to the user & window, don't have any name, so 
//fix
setTimeout(function(){
        user.logmsg();
    },1000)
//in this case, the log msg is called as method of object user //print vaish 

//QUE 4
//create an object calculator
let calculator = {
    read(){
        this.a = +prompt("a = ",0);
        this.b = +prompt("b = ",0);
    },
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    }
}
calculator.read(); 
console.log(calculator.sum());
console.log(calculator.mul());

//QUE 5
var length=4;
function callback(){
    console.log(this.length); //?ans 4
}
const object ={
    length:5,
    //this method targets the object 
    method(fn){
        //since this method is called from inside of fun, it will target the global object 
        fn();
    }
}
object.method(callback);

//QUE 6
//implement cals
const result = cal.add(10).multiply(5).substract(30).add(10)
console.log(result);
//ans
const calc = {
    total:0,
    add(a){
        this.total+=a;
        return this; //it will return the whole object needed for the function chaining
    },
    multiply(a){
        this.total*=a;
        return this;
    },
    substract(a){
        this.total-=a;
        return this;
    }
}
