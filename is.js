is.num = function(i){
    return typeof(i) === 'number'
}

is.nan = Number.isNaN

is.str = function(stringValue) {
    return typeof stringValue == "string"
}

is.bool = function(booleanValue){
    return typeof booleanValue == "boolean" 
}

is.undef = function(k){
    if (typeof(k) == "undefined") {
        return true 
    }
}

is.def = function(k){
    if (typeof(k) !== "undefined") {
        return true 
    }
}

is.arr = Array.isArray


is.obj = function(n){
    if (typeof(n) == 'object' && !is.arr(n) && n !== null ) {
        return true
    } else {
        return false
    }
}

is.fun = function(myFunction){
    return typeof myFunction === 'function' 
}

is.truthy = function(l){
    if (l) {
        return true
    } else {
        return false
    }
}


is.falsy = function(l){
    if (l) {
        return false
    } else {
        return true
    }
}
