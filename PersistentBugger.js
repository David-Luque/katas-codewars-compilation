function persistence(num) {
  
    let persistenceCounter = 0;
    let totalCounts;
    
    persistCalc(num);
    
    function persistCalc(num) {
      const stringy = num.toString();
      const splitStringy = stringy.split('');
      
      if(splitStringy.length === 1){
        totalCounts = 0;
        return
      }
  
      let product = 1;
      
      for(let i = 0; i < splitStringy.length; i++){
        product *= splitStringy[i];
      }
      
      persistenceCounter++;
      
      if(product.toString().length > 1){
        persistCalc(product);
      } else {
        totalCounts = persistenceCounter;
      }
    }
    
    return totalCounts;
  }