function adder(arr,num) {
    const initialValue = num || 0;
    return arr.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
    );
}

function sumOrMul(arr,initialValue = 0) {
    return arr.reduce(
        (previousValue, currentValue) => {
            if (currentValue % 2 !== 0) {
                return previousValue + currentValue
            } else {
                return previousValue * currentValue
            }
        },initialValue
    );
}

function funcExec(arr,initialValue = 0 ) {
    return arr.reduce(
        (previousValue,currentValue) => {
            return currentValue(previousValue); 
        },initialValue
    );
}

