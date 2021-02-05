function pickPeaks(arr){
  const result = {pos:[],peaks:[]}

  for(let i = 1; i < arr.length - 2; i++){
    //console.log(arr[i] + 1)
    if(
      arr[i] > arr[i - 1]  &&
      arr[i] > arr[i + 1] 
    ){
      result.pos.push(arr.indexOf(arr[i], i - 1));
      result.peaks.push(arr[i]);
    }
    if(
      arr[i] > arr[i - 1] &&
      arr[i] === arr[i + 1]
    ){
      const restOfArr = arr.slice(i);
      console.log(restOfArr);
      for (let j = 0; j < restOfArr.length - 1; j++){
        console.log(restOfArr[j])
        if (restOfArr[j + 1] < restOfArr[j]){
          result.pos.push(i);
          result.peaks.push(arr[i]);
          break;
        }
        if(restOfArr[j + 1] > restOfArr[j]){
          break
        }
        if(restOfArr[j + 1] = restOfArr[j]){
          continue;
        }
      }
    }
    
  }
  //console.log(result);
  return result

}

//pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1])