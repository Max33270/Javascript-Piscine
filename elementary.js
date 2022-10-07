function multiply(a,b) {
    let res = 0; 
    if (a<0 && b<0) {
        Math.abs(a)
        for (let i=0; i<Math.abs(b);i++){
            res += -a; 
        }
    } else if (a>0 && b>0) {
        for (let i=0; i<Math.abs(b);i++){
            res += a;
        }
    } else if (b<0) {
        for (let i=0; i<Math.abs(b); i++){
            res += -a; 
        }
    } else if (a<0) {
        for (let i=0; i<Math.abs(a); i++){
            res += -b; 
        }
    }
    return res;
}

function divide(a,b) {
    if (a == 0) {
        return 0;
    }
    if (b == 0) {
        return INT_MAX;
    }
    let negResult = false;
    if (a < 0) {
        a = - a ;
        if (b < 0) {
            b = - b ;
        } else {
        negResult = true;
        }
    } else if (b < 0) {
        b = - b ;
        negResult = true;
    }
    let quotient = 0;
    while (a >= b) {
        a = a - b ;
        quotient++ ;
    }
    if (negResult) {
        quotient = - quotient ;
    }
    return quotient ;
}

function modulo(a,b) {
    let m = divide(a,b); 
    let l = multiply(m,b)
    let n = a - l
    return n
}
