function DNA(rna) {
    let res = ""; 
    for (let i = 0; i < rna.length; i++) {
        if (rna[i] === '') return rna; 
        if (rna[i] === 'G') res += "C"; 
        if (rna[i] === 'C') res += "G";
        if (rna[i] === 'A') res += "T"; 
        if (rna[i] === 'U') res += "A"; 
        console.log(res)
    }
    return res; 
}

function RNA(dna){
    let res = "";
    if (dna === '') return dna; 
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === 'G') res+= "C"; 
        if (dna[i] === 'C') res+= "G"; 
        if (dna[i] === 'T') res+= "A";  
        if (dna[i] === 'A') res+= "U"; 
        console.log(res)
    }
    return res; 
}
