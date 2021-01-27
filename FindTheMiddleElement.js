var gimme = function (inputArray) {
    const copiedArr = [...inputArray];
    copiedArr.sort((a, b)=>{
      return a - b;
    })
    console.log(copiedArr)
    return inputArray.indexOf(copiedArr[1])
  };