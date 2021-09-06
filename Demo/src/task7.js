function rangeFib(min, max){
    let checkValid = isRangeFibValid(min, max);
    if (!checkValid.status) {
        if (max) {
            return fibInRange(min, max);
        } else {
            return fibWithLength(min);
        }
    } else {
        return checkValid;
    }
}

function fibInRange(min, max) {
    let getFib = 0;
    let fib = [1,1];
    let num = [];
    for (let i = 0; getFib < max; i++) {
        if (i >= 2) {
            fib.push(fib[fib.length-1] + fib[fib.length-2]);
            getFib = fib[fib.length-1];
        } else getFib = fib[i];
        if (getFib >= min && getFib <= max) {
            num.push(getFib);
        }
    }
    if (num[0]){
        return num;
    } else {
        return 'There are no Fibonacci numbers in this interval';
    }
}

function fibWithLength(len) {
    let getFib = 0;
    let fib = [1,1];
    let num = [];
    for (let i = 0; getFib.toString().length < +len+1; i++) {
        if (i >= 2) {
            fib.push(fib[fib.length-1] + fib[fib.length-2]);
            getFib = fib[fib.length-1];
        } else getFib = fib[i];
        if (getFib.toString().length == len) {
            num.push(getFib);
        }
    }
    return num;
}

function isRangeFibValid(min, max) {
    if (min) {
        let reg = /^\d+$/;
        if (reg.test(min) && (reg.test(max) && parseInt(min) || (!max))) {
            if ((parseInt(min) < parseInt(max) || (!max))) {
                return true;
            } else return {
                status: 'failed',
                reason: 'minMoreMax'
            }
        } else return {
            status: 'failed',
            reason: 'invalid'
        }
    } else return {
        status: 'failed',
        reason: 'empty'
    }
}