const rooms = [[3, 3], [5, 6], [6, 9]];

function findChair(rooms, need) {
  let newArray = rooms.flat();
  const freeChairs = [];
  let counter = 0;
  for (let index = 0; index < newArray.length; index+=2) {
    let employed = newArray[index];
    let chairs = newArray[index+1];
    let freeCH = chairs - employed;
    counter += freeCH;
    freeChairs.push(freeCH);
    if (counter >= need) {
      return matrixOutput(rooms, need, freeChairs);
    }
  }
  return matrixOutput(rooms, need, freeChairs);
}

function matrixOutput(newArray, need, freeChairs){
  let count = '';
  for (let index = 0; index < newArray.length; index+=1){
    for (let sindex = 0; sindex < newArray[0][index]; sindex+=1)
      count+="X";
    newArray[index][0] = count;
  }
  return "meeting(["+newArray+"], "+need.toString()+") ---> ["+freeChairs.toString()+"]";
}

console.log(findChair(rooms, 4));