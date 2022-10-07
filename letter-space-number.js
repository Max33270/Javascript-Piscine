function letterSpaceNumber(s1) {
    let t = []; 
    t = s1.match(/[a-zA-Z] [0-9](?![a-zA-Z]|[0-9])/g); 
    if (t === null) {
        return []; 
    } else {
        return t;
    }
}
