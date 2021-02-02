function rot13(message){
  
    const messageArray = message.split('');
    const messageLowerCase = messageArray.map((e)=>{
      return e.toLowerCase()
    })
    
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  
    const messageNewLetters = messageLowerCase.map((letter)=>{
      const index = alphabet.indexOf(letter);
      let newIndex = index + 13;
      if(newIndex > 25){ newIndex -= 26 }
      return alphabet[newIndex];
    })
  
    const upperLettersCheck = messageArray.map((letter)=>{
      if(!alphabet.includes(letter.toLowerCase())) {
        return messageArray[messageArray.indexOf(letter)]
      }
      if(letter === letter.toUpperCase()){
        return messageNewLetters[messageArray.indexOf(letter)].toUpperCase();
      }
      return messageNewLetters[messageArray.indexOf(letter)]
    })
  
    let finalString = upperLettersCheck[0];
    
    for (let i = 1; i < upperLettersCheck.length; i++){
      finalString = finalString.concat(upperLettersCheck[i])
    }
  
    return finalString;
  }