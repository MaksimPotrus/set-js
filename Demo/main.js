function chessBoardRun(n) {
    let v = document.form1.elements;
    let result = chessBoard(v[0].value, v[1].value, v[2].value);
    if (!result.status) {
        document.querySelectorAll(".result")[n].innerHTML = result;
    } else {
        errorHandler(result.reason, n);
    }
}

function runEnvelopes(n) {
    let v = document.form2.elements;
    let env1 = {
        width:v[0].value,
        height:v[1].value
    }
    let env2 = {
        width:v[2].value,
        height:v[3].value
    }
    let result = envelopes(env1, env2);
    if (!result.status) {
        successHandler(result, n);
    } else {
        errorHandler(result.reason, n);
    }
}

function runAreaOfTriangle(n) {
    let arrayOfTriangles = [];
    let triangles = document.querySelectorAll(".triangle");
    for (let i = 0; i < triangles.length; i++) {
        let sidesOfTriangle = triangles[i].querySelectorAll("input");
        let triangle = {
            vertices: `YTO${i+1}`,
            a: sidesOfTriangle[0].value,
            b: sidesOfTriangle[1].value,
            c: sidesOfTriangle[2].value,
        };
        arrayOfTriangles.push(triangle);
    }
    let result = areaOfTriangle(arrayOfTriangles);
    if (!result.status) {
        successHandler(result, n);
    } else {
        errorHandler(result.reason, n);
    }
}

function runDefinePalindrome(n) {
    let value = document.form4.elements[0].value;
    let result = definePalindrome(value);
    if (!result.status) {
        successHandler(result, n);
    } else {
        errorHandler(result.reason, n);
    }
}

function runTickets(n) {
    let v = document.form5.elements;
    let result = tickets(v[0].value, v[1].value);
    if (!result.status) {
        successHandler(result, n);
    } else {
        errorHandler(result.reason, n);
    }
}

function runNumberSequence(n) {
    let v = document.form6.elements;
    let result = numberSequence(v[0].value, v[1].value);
    if (!result.status) {
        successHandler(result, n);
    } else {
        errorHandler(result.reason, n);
    }
}

function runRangeFib(n) {
    let v = document.form7.elements;
    let result = rangeFib(v[0].value, v[1].value);
    if (!result.status){
        successHandler(result, n);
    } else {
        errorHandler(result.reason, n);
    }
}

function successHandler(text, n) {
    document.querySelectorAll(".result")[n].innerHTML = `Result: ${text}`;
    console.log(`Result: ${text}`);
}

function errorHandler(err, n) {
    let msg = "";
    console.log(err)
    switch (err) {
        case "invalid":
            msg = "Values entered incorrectly";
            break;
        case "empty":
            msg = "Not all values entered";
            break;
        case "incorrectSides":
            msg = "Can't calculate the area of a triangle on the given sides";
            break;
        case "notEnoughSymbol":
            msg = "The value must be 6 digits";
            break;
        case "minMoreMax":
            msg = "The minimum value must be less than the maximum";
            break;
        default:
            msg = "Error 102";
    }
    document.querySelectorAll(".result")[n].style = "color:red";
    document.querySelectorAll(".result")[n].innerHTML = msg;
    setTimeout(()=>{
        document.querySelectorAll(".result")[n].style = "color: #f4f4f4";
        document.querySelectorAll(".result")[n].innerHTML = "";
    },2000)
}