function getURL(s) {
    return s.match(/(http|https):\/\/[^\s]+/g); 
}

function greedyQuery(s) {
    let r = s.match(/(http|https):\/\/([^\s]*\w\d*=){3}([\S]([\w\d]|))*(?=\s)/g)
    if (r===null) return []; 
    return r;
}

function notSoGreedy(url) {
    let regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=\[\]]{1,256}[a-zA-Z0-9()\[\]]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=\[\]\,]*)/gm
    let regex1 = /[?&]/g
    let res = url.match(regex)
    let res2
    let res3 = []
    for (let index = 0; index < res.length; index++) {
        res2 = (res[index].match(regex1))
        if (res2 !== null) {
            if (res2.length === 2 || res2.length === 3) {
                res3.push(res[index])
            }
        }
    }   
    return res3
}
