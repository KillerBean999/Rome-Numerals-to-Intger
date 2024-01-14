const romeNum = ''
const replacedNums = (romeNum) =>{
return romeNum.map((num) => { 
      switch (num) {
        case 'I':
          return 1;
        case 'V':
          return 5;
        case 'X':
          return 10;
        case 'L':
          return 50;
        case 'C':
          return 100;
        case 'D':
          return 500;
        case 'M':
          return 1000;
      }
    });
}
    const converter = (romeNum) =>{
    const romeNumArr = romeNum.split('').reverse()
    const convertedNums = replacedNums(romeNumArr)
    let result = 0

    for (let i = 0; i < convertedNums.length; i++) {
      console.log('romen array :'+romeNumArr);
      const currectNum = convertedNums[i] 
      const nextNum = convertedNums[i+1];
      console.log('current num: '+currectNum);
      console.log('next num:', nextNum);
      console.log(`${result} +`);
      if(nextNum !== undefined && nextNum > currectNum){ // 5>1 
        result += nextNum-currectNum; //5-1
        i++;
        console.log(`${nextNum} - ${currectNum}=`);
      }else{
        result += currectNum;
      }
        console.log('Result so far: ' + result);
        console.log('------------------------');
    }
    console.log(`The number was converted to: ${result}`);
  }

  converter('MCCX')
