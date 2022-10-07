function hasCity(country,arr) { 
    return function func(city) {
        let res = city + " is not a city from " + country
        for (let i = 0; i < arr.length; i++) {
            if (city === arr[i]) {
                res = city + " is a city from " + country
                break
            }
        }
        return res; 
    }
}
