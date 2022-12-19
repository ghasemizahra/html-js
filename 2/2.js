function sortHeight(array) {
    let result = array.slice()
    let temp = []
    let i = -1
    while ((i = array.indexOf(-1, i+1)) > -1) {
        temp.push(i)
    }
    let p = temp.slice()
    while(p.length){
        result.splice(p.pop(), 1)
    } 

    result.sort((a,b)=>a-b)
    while(temp.length) {
        result.splice(temp.shift(), 0, -1)
    }
    return result
}

console.log(sortHeight([-1, 150, 190, 170, -1, -1, 160, 180])) //[-1, 150, 160, 170, -1, -1, 180, 190]
