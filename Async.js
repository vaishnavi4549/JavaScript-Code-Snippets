//Write a utility which prints numbers starting from an initial value and increment in steps which can be started and stopped by the user, any number of times

function Timer(initialvalue, endvalue){
    let value = initialvalue;
    let interval = null;
    
    function startTimer(){
        if(!interval){
            interval = setInterval(()=>{
                if(value>endvalue) return;
                console.log(value);
                value++;
            },1000)
        }
    }
    
    function stopTimer(){
        if(interval){
            clearInterval(interval);
            interval=null;
        }
    }
    
    return{
        startTimer,
        stopTimer
    }
}

const obj = Timer(1,10)
obj.startTimer();
setTimeout(()=>{
    obj.stopTimer();
},5000)
