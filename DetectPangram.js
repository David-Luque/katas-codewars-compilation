function isPangram(string){
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    
    const verifyArray = [];
  
    for(const letter of alphabet){
      for(const element of string){
        if(element === letter || element.toLowerCase() === letter){
          verifyArray.push('true');
          break;
        }
      }
    }
  
    if(verifyArray.length === alphabet.length){
      return true
    }
    return false
  }