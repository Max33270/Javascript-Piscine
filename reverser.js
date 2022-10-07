function reverse(a) {
    let newString = "";
    if (typeof a == "string") {
        for (var i = a.length - 1; i >= 0; i--) { 
            newString += a[i];
        }
        return newString; 
    } else {
        var newArray = [];
        for (let i = a.length - 1; i >= 0; i--) {
            newArray.push(a[i]);
        }
        return newArray; 
    }
}

console.log(reverse("test toto")) 