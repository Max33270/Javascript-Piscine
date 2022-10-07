function addWeek(date) {
    let depart = new Date('0001-01-01');

    date.setDate(date.getDate() - 7);
    let weekA = true;
    while (depart <= date) {
        depart.setDate(depart.getDate() + 7);
        weekA = !weekA;
    }
    return weekA ? date.toLocaleString('en-US', { weekday: 'long' }) : 'second' + date.toLocaleString('en-US', { weekday: 'long' });
}

function timeTravel(obj) {
    let date = new Date(obj.date);
    date.setHours(obj.hour);
    date.setMinutes(obj.minute);
    date.setSeconds(obj.second);
    return date; 

}
