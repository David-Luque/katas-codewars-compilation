function generateHashtag (str) {

    const splitString = str.split(' ');
    
    const filteredStringArray = splitString.filter((string)=>{
      return string !== '';
    })
  
    if(filteredStringArray.length === 0){
      return false
    }
  
    const capitalizedStrings = filteredStringArray.map((e)=>{
      const firstUpperLetter = e[0].toUpperCase();
      const restWord = e.slice(1);
      const upperWord = firstUpperLetter.concat(restWord);
      return upperWord;
    })
    
    let concatCapitalizedStrings = capitalizedStrings[0];
    
    for(let i = 1; i < capitalizedStrings.length; i++) {
      concatCapitalizedStrings = concatCapitalizedStrings.concat(capitalizedStrings[i]);
    }
  
    if(concatCapitalizedStrings.length >= 140){
      return false
    }
  
    return `#${concatCapitalizedStrings}`
  }