let matrix = [
[2,2],
[2,8],
[5,5],
[6,3],
[6,7],
[7,4],
[7,9]];

function foundMin(Array){
  let counter = 2;
  let newArray = Array.flat();
  console.log(newArray);
  let firstMin = formula(newArray[0], newArray[1], newArray[2], newArray[3]);
  let secondMin = firstMin;
  let firstItemArray, secondItemArray;
  do{
    if(formula(newArray[counter], newArray[counter+1], newArray[counter+2], newArray[counter+3]) < firstMin){
      firstMin = formula(newArray[counter], newArray[counter+1], newArray[counter+2], newArray[counter+3]);
      firstItemArray = [newArray[counter], newArray[counter+1], newArray[counter+2], newArray[counter+3]];
    }
    counter += 2;
  }while(newArray[counter+1]!=undefined)
  counter = 0;
  do{
    if(formula(newArray[counter], newArray[counter+1], newArray[counter+2], newArray[counter+3]) < secondMin && 
    formula(newArray[counter], newArray[counter+1], newArray[counter+2], newArray[counter+3]) != firstMin){
      secondMin = formula(newArray[counter], newArray[counter+1], newArray[counter+2], newArray[counter+3]);
      secondItemArray = [newArray[counter], newArray[counter+1], newArray[counter+2], newArray[counter+3]];
    }
    counter += 2;
  }while(newArray[counter+1]!=undefined)
  return [toMatrix(firstItemArray, 2), toMatrix(secondItemArray, 2)];
}

function formula(firstX, firstY, secondX, secondY){
  let X = secondX - firstX;
  let Y = secondY - firstY;
  const size = Math.sqrt(Math.pow(X, 2)+Math.pow(Y, 2));
  return size;
}

function toMatrix(arr, width) {
  return arr.reduce(function (rows, key, index) { 
    return (index % width == 0 ? rows.push([key]) 
      : rows[rows.length-1].push(key)) && rows;
  }, []);
}

console.log(foundMin(matrix));