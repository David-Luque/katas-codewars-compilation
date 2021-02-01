function domainName(url){
    if(url.includes("www") || url.includes("//www")){
      const splitArray = url.split('.');
      return splitArray[1];
    } else if (url.includes('http://') || url.includes("https://")) {
        const firstSplitArray = url.split('//');
        const secondSplitdArray = firstSplitArray[1].split('.');
        return secondSplitdArray[0]
    } else {
      const splitArray = url.split('.');
      return splitArray[0];
    }
    
  }