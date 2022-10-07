function triangle(n,s) {
    // let n = 5;
    // let s = '';
    let res = ""
    for(let i=1; i<=s; i++){
        for(let j=1; j<=i; j++){
            res += n;
        }
        for(let k=1; k<= n -i; k++){
            s += ' ';
        } 
        res += '\n';
    }
    return res.slice(0,res.length-1)
    // console.log(s);
}
