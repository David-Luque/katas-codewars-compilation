var moveZeros = function (arr) {
    const zerosArray = [];
    arr.forEach(elem =>{
      if(elem === 0){
        zerosArray.push(elem);
      };
    });
    const theOthers = arr.filter((elem)=>{
      return elem !== 0;
    });
    const finalArray = theOthers.concat(zerosArray);
    return finalArray
  }