//Map 

//what is map -> is used for creating a new array from an existing one by applying a function to each ele in the array
const nums = [1,2,3,4];
//multiply each ele
const multiplied = nums.map((x)=>{
    return x*3;
}); // contains callback fun : current ele & index
console.log(multiplied) //creates new aarray with each value multiplied by 3


//POLYFILL for MAP
//prototype is just adding this mymap fun to the array in the current js file
// map syntax = Array.map((num,index,arr)=>{});
Array.prototype.mymap = function (cb){
    let temp = [];
    //this is holding the array nums
    //for i=0 this[i] → this[0] → 1
    //cb(1, 0, this) → cb(1, 0, [1, 2, 3])
    //The callback is: x => x * 3, so 1 * 3 = 3
    //temp becomes [3]

    //for i=2;
    //cb(2, 1, [1, 2, 3]) → 2 * 3 = 6
    for(let i=0;i<this.length;i++){
        temp.push(cb(this[i],i,this))
    }
    return temp;
}
//this gets called once, then for all other ele callback gets called, which we are passing mymap
const multipliedwithmymap = nums.mymap((x)=>{
    //this is the cb
    return x*3;
}); 



//FILTER
//what is filter -> takes each ele in the array and applies a condition if the condition returns true, the element is pushed into the output array
// only keep the ele which fulfills the criteria

const morethantwo = nums.filter((x)=>{
    return x>2; // only ele which greter than 2
})

//POLYFILL for FILTER
Array.prototype.myfiter = function(cb){
    let temp = [];
    for(let i=0;i<this.length;i++){
        if(cb(this[i],I,this)){
            temp.push(this[i]);
        }
    }
    return temp;
}
const morethantwowithmyfilter = nums.myfiter((x)=>{
    return x>2; // only ele which greter than 2
})


//REDUCE
// what is it -> it reduces the array of values down to one value;
//callback fun & initoal value
//callback fun contains accumulator: result of prev calculations,currentvalue, index.arr as params
const sum = nums.reduce((acc,curr)=>{
    return acc+curr;
},0)

//POLYFILL for REDUCE
//ARR.REDUCE((ACC,CURR,NDEX,ARR)=>{},IniatilaValue);
//if no initial value given, acc takes the first ele of the array as the initial value

Array.prototype.myReduce = function (cb,IniatilaValue){
    var acc = IniatilaValue;
    for(let i=0;i<this.length;i++){
        acc = acc ? cb(acc,this[i],this) : this[i];
    }
    return acc;
}
const sumwithmyreduce = nums.myReduce((acc,curr)=>{
    return acc+curr;
},0)


//DIFFERENCE BETWEEN MAP and FOREACH
const arr = [1,2,3,4]
//return new array || we can store the result in a new array
arr.map((x)=>{
    return x*2;
})
//update the existing array || we can not store the result in the new array as it does not create a new one
//can use it where we want to update an array directly
arr.forEach((x)=>{
    return x*2;
})
