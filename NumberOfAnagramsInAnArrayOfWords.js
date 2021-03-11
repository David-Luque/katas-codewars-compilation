function anagramCounter (wordsArray) {
    let counter = 0;
    
    wordsArray.forEach(word => {
      const decomposedRefWord = [];
  
      for(let i = 0; i < word.length; i++) {
        decomposedRefWord.push(word[i]);
      }
      decomposedRefWord.sort();
  
  
      for(let i = (wordsArray.indexOf(word)); i < wordsArray.length-1; i++){
        const comparedWord = wordsArray[i + 1];
        const comparedWordDesc = [];
        
        for(let i = 0; i < comparedWord.length; i++) {
        comparedWordDesc.push(comparedWord[i]);
        };
        comparedWordDesc.sort();
  
        if(decomposedRefWord.length === comparedWordDesc.length && decomposedRefWord.every((value, index) => value === comparedWordDesc[index])){
          counter += 1;
        }
      };
    })
    return counter;
}