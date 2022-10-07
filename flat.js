function flat(array) {
    let flat = [];
    for (let i = 0; i < array.length; i++) {
        const current = array[i];
        for (let j = 0; i < current.length; j++) {
            flat.push(current[j])
        }
    }
    return flattened
}
