function findMissingLetter(array) {
    if(array.length < 2) {
      return "The length of the array will always be at least 2";
    };
    
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const testArray = array.join('').toLowerCase().split('');
    let startPosition = alphabet.indexOf(testArray[0]);
    let missingLetter;
  
    testArray.forEach(letter => {
      if (letter !== alphabet[startPosition]){
        missingLetter = alphabet[startPosition];
      } else {
        startPosition++;
      }
    });
  
    if(array[0] === array[0].toUpperCase()) {
      return missingLetter.toUpperCase();
    }
    return missingLetter;
  }