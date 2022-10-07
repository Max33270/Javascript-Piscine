function arrToSet(arr1) {
    return new Set(arr1); 
}

function arrToStr(arr1) {
    return arr1.join(''); 
}

function setToArr(set1) {
    return Array.from(set1);
}

function setToStr(set1){
    return Array.from(set1).join('');
}

function strToArr(str1) {
    return str1.split(''); 
}

function strToSet(str1) {
    return new Set(str1); 
}

function mapToObj(map1) {
    return Object.fromEntries(map1); 
}

function objToArr(obj1) {
    return Object.values(obj1);
}

function objToMap(obj1) {
    return new Map(Object.entries(obj1)); 
}

function arrToObj(arr1) {
    const obj1 = Object.assign({},arr1);
    return obj1;  
}

function strToObj(str1) {
    const str2 = strToArr(str1)
    return arrToObj(str2);
} 

function superTypeOf(arg1) {
    let t = typeof(arg1)
    if (arg1 === null) return 'null'; 

    if (t === "object") {
        if (arg1 instanceof Map) return 'Map';
        else if (arg1 instanceof Set) return 'Set';
        else if (arg1 instanceof Array) return 'Array';
        // else return 'Object'
    } 
    if (arg1 === undefined) return t; 
    return t.charAt(0).toUpperCase() + t.slice(1);
}
