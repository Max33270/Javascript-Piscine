function sign(n1) {
    if (n1>0){
        return 1
    } else if (n1<0) {
        return -1
    } else {
        return 0
    }
}

function sameSign(n1,n2) {
    if (n1>0 && n2>0 || n1<0 && n2<0 || n1 == 0 && n2 == 0) {
        return true
    } else {
        return false 
    }
}
