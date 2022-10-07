let escapeStr = "\`\/\"\'\\"
let arr = [4,'2']
const obj = {
    str : "hello max",
    num : 3,
    bool : false,
    undef : undefined
}; 
const nested = {
    arr : [4,undefined,'2'], 
    obj : {
        str : "hello", 
        num : 3,
        bool : true
    }
};
Object.freeze(nested) 
Object.freeze(obj)
Object.freeze(nested.arr)
Object.freeze(nested.obj)
