const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F", "G"],
  D: [],
  E: [],
  F: ["K"],
  G: []
};

async function getAllLinks(url){
    return graph[url] || []
}
async function getAllDecendentLinks(url){
    let visited = new Set();
    
    async function dfs(currurl){
        const promise = []
        const allnodes = await getAllLinks(currurl);
        
        for(let i=0;i<allnodes.length;i++){
            if(!visited.has(allnodes[i])){
                visited.add(allnodes[i]);
                promise.push(dfs(allnodes[i]));
            }
        }
        await Promise.all(promise)
    }
    await dfs(url);
    return [...visited];
}

const result = await getAllDecendentLinks('D');
console.log(result);

