function longestConsec(strarr, k) {
    if(strarr.length === 0 || k > strarr.length || k <= 0){
        return ""
      }
    const filteredArr = strarr.filter((string)=>{
        return strarr.indexOf(string) + (k - 1) < strarr.length;
    })
  
    const concatArr = filteredArr.map((string)=>{
      let concatString = string;
      for (i = 1; i < k; i++) {
        concatString += strarr[strarr.indexOf(string) + i];
      }
      return concatString;
    });
    
    const sortArray = concatArr.map((data, idx)=>{
      return {idx:idx, data:data}
    })
    
    sortArray.sort((a, b)=>{
      if (a.data.length < b.data.length) return 1;
      if (a.data.length > b.data.length) return -1;
      return a.idx - b.idx
    });
    //this above ensure that elements will be sorted by length in descendant order, 
    //but also, they will be returned in their original position for those which have the same length
    
    const leanArr = sortArray.map((val)=>{
        return val.data
    });
  
    return leanArr[0];
}