const invert = (obj) => {
    let res = {}
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            res[obj[i]] = i
        }
    }
    return res
}