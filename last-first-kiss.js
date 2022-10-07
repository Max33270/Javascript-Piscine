function first(string){
    return string[0]
}

function last(string){
    return string[string.length - 1]
}

function kiss(test){
   const arr = [] 
   arr.push(test[test.length - 1])
   arr.push(test[0])
   return arr
}
