function cakes(recipe, available) {
  
    let amountForTotalOf;
    let isEnought;
  
    for(let ingr in recipe){
      if(ingr in available === false){
        isEnought = false;
        break;
      }
    }
    
    if(isEnought === false){
      amountForTotalOf = 0;
      return amountForTotalOf;
    } 
  
    const availableAmountFor = [];
    for(let ingr in available){
      if(ingr in recipe === false){
        continue;
      }
      availableAmountFor.push(Math.floor(available[ingr] / recipe[ingr]));
    }
    console.log(availableAmountFor)
  
    const sortAvailableAmountFor = availableAmountFor.sort((a, b)=>{
      return a - b;
    })
    
    amountForTotalOf = sortAvailableAmountFor[0];
    return amountForTotalOf;
  }
  
  