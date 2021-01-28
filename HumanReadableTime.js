function humanReadable(seconds) {
  
    const hoursInt = parseInt(seconds / 3600);
  
    if(hoursInt > 99){
      return "Error"
    }
    
    const remainingSeconds = seconds - (hoursInt * 3600);
    const minutesInt = parseInt(remainingSeconds / 60);
    const secondsInt = remainingSeconds - (minutesInt * 60);
    
    const digits = [hoursInt, minutesInt, secondsInt];
  
    const clockDigits = digits.map((digit)=>{
      
      const stringDigit = digit.toString();
      
      if(stringDigit.length === 1){
        return `0${digit}`
      }
      
      return stringDigit
    });
    
    return `${clockDigits[0]}:${clockDigits[1]}:${clockDigits[2]}`;
  }
  
  