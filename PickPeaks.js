function pickPeaks(arr){
  console.log(`initial array ${arr}`);
  const result = {pos:[],peaks:[]}

  for(let i = 1; i < arr.length - 1; i++){
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
  return result
}