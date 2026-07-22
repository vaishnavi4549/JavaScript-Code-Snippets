

async function retry(fetchData, retryCount){
    while(retryCount>0){
        try{
            const result = await fetchData()
            return result;
        }catch(e){
            if(retryCount===0){
                return e;
            }
        }
        retryCount--;
    }
}

let count=0;
async function fetchData(){
    return new Promise((resolve,reject)=>{
        count++;
        if(count<3){
            reject('failed')
        }else{
            resolve('success')
        }
    })
}

retry(fetchData, 3)
    .then(console.log)
    .catch(console.error);
