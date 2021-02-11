function validParentheses(parens){
    let openParenCount = 0;
    let closeParenCount = 0;
    let validParens = null;
  
    for(i = 0; i < parens.length; i++){
      if(parens[i] === '('){
        openParenCount++;
      } else if(parens[i] === ')'){
        closeParenCount++;
      }
      
      if(closeParenCount > openParenCount){
        validParens = false;
        break;
      }
    }
  
    if(openParenCount === closeParenCount){
      validParens = true;
    } else { validParens = false;}
  
    return validParens;
  }