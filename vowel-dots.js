const vowels = /[aeiouAEIOU]/g; 
function vowelDots(s) {
    let newS = ""; 
    for (let i=0; i < s.length; i++) {
        if (vowels.test(s[i])) {
            newS += s[i] + '.';
        } else {
            newS += s[i]; 
        }
    }
    return newS; 
}
