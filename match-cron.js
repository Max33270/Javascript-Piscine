function matchCron(cronSchedule, validDate) {
    let result = false; 
    if (cronSchedule === '* * * * *') {
        return true; 
    }
    for (let i=0; i < cronSchedule.length; i++) {
        if (i == 0 && cronSchedule[i] != '*') {
            if (cronSchedule[i] == validDate.getMinutes()) {
                result = true;
            } else {
                result = false; 
            }
        }
        if (i == 2 && cronSchedule[i] != '*') {
            if (cronSchedule[i] == validDate.getHours()) {
                result = true;
            } else {
                result = false; 
            }
        }
        if (i == 4 && cronSchedule[i] != '*') {
            if (cronSchedule[i] == validDate.getDate()) {
                result = true;
            } else {
                result = false; 
            }
        }
        if (i == 6 && cronSchedule[i] != '*') {
            if (cronSchedule[i] == validDate.getMonth()+1) {
                result = true;
            } else {
                result = false; 
            }
        }
        if (i == 8 && cronSchedule[i] != '*') {
            if (cronSchedule[i] == validDate.getDay()) {
                result = true;
            } else {
                result = false; 
            }
        }
    }
    return result; 
}
