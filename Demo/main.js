function chessBoardRun(n) {
    let v = document.form1.elements;
    let result = chessBoard(v[0].value, v[1].value, v[2].value);
    if (!result.status) {
        document.querySelectorAll(".result")[n].innerHTML = result;
    } else {
        errorHandler(result.reason, n);
    }
}

// TASK 2
function runEnvelopes(n) {
    let v = document.form2.elements;//get inputs

    let env1 = {
        width:v[0].value,
        height:v[1].value
    }

    let env2 = {
        width:v[2].value,
        height:v[3].value
    }

    //run the main function
    let result = envelopes(env1, env2);

    if (!result.status) {
        successHandler(result, n);
    } else {
        errorHandler(result.reason, n);
    }
}

// TASK 3
function runAreaOfTriangle(n) {
    let arrayOfTriangles = [];
    let triangles = document.querySelectorAll(".triangle");// get all the triangles

    for (let i = 0; i < triangles.length; i++) {
        let sidesOfTriangle = triangles[i].querySelectorAll("input");

        let triangle = {
            vertices: `ABC${i+1}`,
            a: sidesOfTriangle[0].value,
            b: sidesOfTriangle[1].value,
            c: sidesOfTriangle[2].value,
        };

        arrayOfTriangles.push(triangle);
    }

    //run the main function with arrayOfTriangles as argument
    let result = areaOfTriangle(arrayOfTriangles);

    if (!result.status) {
        successHandler(result, n);
    } else {
        errorHandler(result.reason, n);
    }
}

//success handling function
function successHandler(text, n) {
    document.querySelectorAll(".result")[n].innerHTML = `Результат: ${text}`;
    console.log(`Результат: ${text}`);
}

//error handling function
function errorHandler(err, n) {
    let msg = "";
    console.log(err)
    switch (err) {
        case "invalid":
            msg = "Значения введены некорректно";
            break;
        case "empty":
            msg = "Не все значения введены";
            break;
        case "incorrectSides":
            msg = "Невозможно рассчитать площадь треугольника по заданным сторонам";
            break;
        case "notEnoughSymbol":
            msg = "Значение должно содержать 6 цифр";
            break;
        case "minMoreMax":
            msg = "Минимальное значение должно быть меньше максимального";
            break;
        default:
            msg = "Ошибка 102";
    }

    document.querySelectorAll(".result")[n].style = "color:red";
    document.querySelectorAll(".result")[n].innerHTML = msg;
    setTimeout(()=>{
        document.querySelectorAll(".result")[n].style = "color:#212529";
        document.querySelectorAll(".result")[n].innerHTML = "";
    },2000)
}