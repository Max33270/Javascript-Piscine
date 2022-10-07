function isFriday(d = new Date()) {
    if (d.getDay() === 5) return true;
    return false;
}

function isWeekend(d = new Date()) {
    if (d.getDay() > 5) return true;
    return false;
}

 function isLeapYear(date) {
    var year = date.getFullYear();
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
} 

function isLastDayOfMonth(a) {
    let m = a.getMonth();
    let y = a.getFullYear();
    let res = new Date(y,m+1,0)
    return a.getDate() == res.getDate()
}
