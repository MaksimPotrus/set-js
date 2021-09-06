function definePalindrome(p){
    let checkValid = isDefinePalindromeValid(p);
    if (!checkValid.status) {
        p = (typeof p == 'number') ? p.toString() : p;
        for (let i = 0; i < p.length; i++) {
            for (let j = 0; j < p.length; j++) {
                let pal = p.slice(i, j + i + 1);
                let palReverse = pal.split('').reverse().join('');
                if (pal == palReverse && pal.length > 1) return pal;
            }
        }
        return 0;

    } else {
        return checkValid;
    }
}

function isDefinePalindromeValid(p) {
    if (p) {
        let reg = /^\d+$/;
        if (reg.test(p)) {
            return true;
        } else return {
            status: 'failed',
            reason: 'invalid'
        }
    } else return {
        status: 'failed',
        reason: 'empty'
    }
}