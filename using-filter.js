function filterShortStateName(arr) {
    let result = arr.filter(word => word.length < 7);
    return result;
}

function filterStartVowel(arr) {
    let result = arr.filter(word => /^[aeiou]/i.test(word));
    return result;
}

function filter5Vowels(arr) {
    let reg = /[aeiou]/gi; 
    let result = arr.filter(arr => arr.match(reg).length >= 5);
    return result;  
}

function sameValue(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].toUpperCase() != arr[0].toUpperCase()) {
            return false
        }
    }
    return true
}

function filter1DistinctVowel(arr) {
    let vowels = /[aeiou]/gi
    let result = []
    arr.filter(word => {
        if (sameValue(word.match(vowels))) {
            result.push(word)
        }
    })
    return result
}

function multiFilter(arr) {
    let vowels = /[aeiou]/gi
    let result = []
    arr.filter(word => {
        if (word.capital.length >= 8 && !word.name[0].match(vowels) && word.region != 'South') {
            if (word.tag.match(vowels) != null) {
                if (word.tag.match(vowels).length >= 1) {
                    result.push(word)
                }
            }
        }
    })
    return result
}
