function anagrams(word, words) {
  
    function doCount(string){
      const wordCount = {};
      const splitWord = string.split('');
      splitWord.forEach(letter =>{
        const filterWordArray = splitWord.filter(elem =>{
          return elem === letter;
        })
        wordCount[letter] = filterWordArray.length;
      });
      return wordCount;
    }
    
    const referenceWord = doCount(word);
    const matchesArray = [];
  
    words.forEach(word =>{
      let wordData = doCount(word);
  
      if(Object.keys(referenceWord).length === Object.keys(wordData).length){
        let checkCount = 0;
        
        for(let letter in wordData){
          if(
            letter in referenceWord &&
            referenceWord[letter] === wordData[letter]
          ){
            checkCount++;
          };
        }
        if(checkCount === Object.keys(referenceWord).length){
          matchesArray.push(word)
        }
      }
    })
    return matchesArray
  }
  