function pigIt(str){
    const arrayString = str.split(' ');
    
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const newArrayString = [];
    
    for(let i = 0; i < arrayString.length; i++){
      if(arrayString[i].length === 1){
        if(
          alphabet.includes(arrayString[i]) || 
          alphabet.includes(arrayString[i].toLowerCase())
        ){ newArrayString.push(`${arrayString[i]}ay `)}
        else {
          newArrayString.push(arrayString[i]);
        }
        continue;
      }
      
      const firstLetter = arrayString[i][0];
      const restOfLetter = arrayString[i].slice(1); 
      
      if(i === arrayString.length - 1){
        newArrayString.push(`${restOfLetter}${firstLetter}ay`);
      } else {
        newArrayString.push(`${restOfLetter}${firstLetter}ay `);
      }
    }
  
    const finalString = newArrayString.join('');
    return finalString
  }
  