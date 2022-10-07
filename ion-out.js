const l = /[A-z]*t(?=ion)/g; 
function ionOut(s) {
    if (s.match(l)===null) {
        return [];
    }
    return s.match(l); 
}
