function chessBoard(height, width, symbol) {
    let checkValid = isValid1(height, width, symbol);
    if (!checkValid.status) {
        let result = "";
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                result += (i % 2 === 1) ? ` ${symbol}` : `${symbol} `;
            }
            result += '\n';
        }
        return result;
    } else {
        return checkValid;
    }
}

function isValid1(height, width, symbol) {
    if (height && width && symbol) {
        let reg = /^\d+$/;
        if (reg.test(height) && reg.test(width) && parseInt(height) && parseInt(width)) {
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