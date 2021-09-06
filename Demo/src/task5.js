function tickets(min, max){
    let checkValid = isTicketsValid(min, max);
    if (!checkValid.status) {
        let simpleMethodCounter = 0,
            hardMethodCounter = 0;

        for (let i = parseInt(min); i < parseInt(max)+1; i++) {
            let arr = numToArr(i);
            simpleMethodCounter += simpleMethod(arr);
            hardMethodCounter += hardMethod(arr);
        }
        if (simpleMethodCounter > hardMethodCounter) {
            return `Simple method won - ${simpleMethodCounter}, against - ${hardMethodCounter}`
        } else if (simpleMethodCounter < hardMethodCounter){
            return `Defeated the hard method - ${hardMethodCounter}, against - ${simpleMethodCounter}`
        } else return `None of the methods won`;
    } else {
        return checkValid;
    }
}

function isTicketsValid(min, max) {
    if (min && max) {
        let reg = /^\d+$/;
        if (reg.test(min) && reg.test(max) && parseInt(min) <= parseInt(max)) {
            if (min.length == 6 && max.length == 6) {
                return true;
            } else return {
                status: 'failed',
                reason: 'notEnoughSymbol'
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

function numToArr(index) {
    let arr = [0,0,0,0,0,0];
    let numToStr = index.toString();
    for (let j = 0; j < numToStr.length; j++) {
        arr[arr.length-j-1] = parseInt(numToStr[numToStr.length-j-1]);
    }
    return arr;
}

function simpleMethod(arr) {
    let counter = 0,
        leftNum = 0,
        rightNum = 0;
    for (let i = 0; i < arr.length/2; i++) {
        leftNum += parseInt(arr[i]);
        rightNum += parseInt(arr[i+arr.length/2]);
    }
    counter = leftNum===rightNum ? 1 : 0;
    return counter;
}

function hardMethod(arr) {
    let counter = 0,
        evenNum = 0,
        oddNum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2) {
            oddNum += +arr[i];
        } else evenNum += +arr[i];
    }
    counter = oddNum===evenNum ? 1 : 0;
    return counter;
}