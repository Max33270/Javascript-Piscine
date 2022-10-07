function countLeapYears(d) { 
    var year = d.getFullYear();
    let res = 0; 
    for (let i=1; i<year; i++) {
        if (i % 400 === 0 || (i % 4 === 0 && i % 100 !== 0)) {
            res += 1; 
        }
    }
    return res; 
}
