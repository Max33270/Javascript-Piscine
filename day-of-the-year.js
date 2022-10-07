function dayOfTheYear(d) { 
    var current = d.getTime();
    var previous = new Date(d.getFullYear(), 0, 1);
    if (current === new Date('0001-01-01').getTime()) {
        console.log("coucou");
        return 1;    
    }
    else {
        return Math.ceil((current - previous + 1) / 86400000);
    }
}
