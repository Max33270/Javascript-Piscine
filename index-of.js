function indexOf(arr1,val,s) {
    for (let i = s || 0; i < arr1.length; i++) {
        if (arr1[i]==val) {
            return i;
        }
    }
    return -1;
}

function lastIndexOf(arr1,val,s) {
    for (let i = s || arr1.length -1; i >= 0; i--) {
        if (arr1[i]==val) {
            return i;
        }
    }
    return -1;
}

function includes(arr1, value) {
    for (let i=0; i<arr1.length;i++) {
        if (arr1[i]==value) {
            return true
        }
    }
    return false
}
