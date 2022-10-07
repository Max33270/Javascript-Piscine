function split(string, separator){
    let result = []
    if(separator == ''){
        for(let elem of string){
            result.push(elem)
        }
        return result
    } else {
        let index = 0
        while (index != -1){
            index = string.indexOf(separator)
            if (index != -1){
                let part = string.slice(0, index)
                result.push(part)
                string = string.slice(index + separator.length)
            }
        }
        if(string != null){
            result.push(string)
        }
        return result
    }
}

function join(arr, sep) {
    arr = arr || [] 
    sep = sep || ' '
    let res = ''
    for(let i=arr.length;i--;) res = (i?sep:'') + arr[i] + res
    return res 
};
