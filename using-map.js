function citiesOnly(arr) {
    const final = arr.map(citiesOnly => {
        return citiesOnly.city;
    })
    return final;
}

function capitalizeTheFirstLetterOfEachWord(words) {
    let separateWord = words.toLowerCase().split(' ');
    for (let i = 0; i < separateWord.length; i++) {
       separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
       separateWord[i].substring(1);
    }
    return separateWord.join(' ');
}

function upperCasingStates(arr) {
    let finalArr = []; 
    const final = arr.map(citiesOnly => {
        return citiesOnly.city;
    })
    for (let i = 0; i < arr.length; i++){
        finalArr.push(capitalizeTheFirstLetterOfEachWord(arr[i]));
    }
    return finalArr; 
}

function fahrenheitToCelsius(arrF) {
    let cels = []; 
    let res = undefined;
    let newRes = undefined; 
    const final = arrF.map(citiesOnly => {
        return citiesOnly.city;
    })
    for (let i = 0; i < arrF.length; i++){
        res = (parseInt(arrF[i]) - 32.0) * 5.0/9.0;
        newRes = Math.floor(res) + '°C'; 
        cels.push(newRes); 
    }
    return cels; 
}

function trimTemp(array){
    let res = [];
    let reg = / /g; 
    array.map(f => {
        f.temperature = f.temperature.replace(reg,'');
        res.push(f); 
    })
    return res; 
}

function tempForecasts(arr) {
    return arr.map(citiesOnly => {
        return [fahrenheitToCelsius([citiesOnly.temperature]) + "elsius" + " in " + citiesOnly.city + ", " + upperCasingStates([citiesOnly.state])].join("");
    })
} 
