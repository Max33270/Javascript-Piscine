function sameAmount(data, reg1, reg2) {
    if (data.match(reg1)!== null && data.match(reg2) !== null) {
        console.log(data.match(new RegExp(reg1,'g')));
        console.log(data.match(new RegExp(reg2,'g')));
        if (data.match(new RegExp(reg1,'g')).length === data.match(new RegExp(reg2,'g')).length) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
