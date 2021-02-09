function score( dice ) {
  
    const getResultArray = (number) => {
      const resultArray = dice.filter((elem)=>{
        return elem === number;
      });
      return resultArray.length;
    };
    
    const infoResults = {};
  
    for(i = 1; i <= 6; i++){
      infoResults[`number ${i}`] = getResultArray(i);
    }
  
    let finalScore = 0;
  
    for(let result in infoResults){
      switch(result){
        case 'number 1':
          if(infoResults[result] < 3){
            finalScore += infoResults[result] * 100;
          };
          if(infoResults[result] === 3){
            finalScore += 1000;
          };
          if(infoResults[result] > 3 && infoResults[result] < 6){
            finalScore += 1000 + ( (infoResults[result] - 3) * 100 );
          };
          if(infoResults[result] === 6){
            finalScore += 1000 * 2;
          };
        break;
  
        case 'number 5':
          if(infoResults[result] < 3){
            finalScore += infoResults[result] * 50;
          };
          if(infoResults[result] === 3){
            finalScore += 500;
          };
          if(infoResults[result] > 3 && infoResults[result] < 6){
            finalScore += 500 + ( (infoResults[result] - 3) * 50 );
          };
          if(infoResults[result] === 6){
            finalScore += 500 * 2;
          };
        break;
  
        default:
          const number = Number(result[7]);
          if(infoResults[result] === 3 || infoResults[result] === 6){
            finalScore += (infoResults[result] / 3) * (number * 100);
          } else if (infoResults[result] > 3 && infoResults[result] < 6){
            finalScore += (number * 100);
          }
        break;
      };
    };
    return finalScore;
  }