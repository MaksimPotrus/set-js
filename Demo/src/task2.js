function envelopes(a, b) {
    let checkValid = isEnvelopesValid(a, b);
    if (!checkValid.status) {
        let aWidth = parseFloat(a.width),
            aHeight = parseFloat(a.height),
            bWidth = parseFloat(b.width),
            bHeight = parseFloat(b.height);
        if (aWidth<bWidth && aHeight<bHeight || aWidth<bHeight && aHeight<bWidth) {
            return 2;
        } else if (aWidth>bWidth && aHeight>bHeight || aWidth>bHeight && aHeight>bWidth) {
            return 1;
        } else {
            return 0;
        }
    } else {
        return checkValid;
    }
}

function isEnvelopesValid(a, b) {
    if (a.width && b.width && a.height && b.height) {
        let reg = /^([0-9]*[.])?[0-9]+$/;
        if ((reg.test(a.width)) && (reg.test(b.width)) && (reg.test(a.height)) && (reg.test(b.height)) && (parseInt(a.width)) && (parseInt(b.width)) && (parseInt(a.height)) && (parseInt(b.height)) && a.height <=1000 && a.width <= 1000 && b.height <= 1000 && b.width<=1000) {
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