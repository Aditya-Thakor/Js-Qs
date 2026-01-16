function palindromeNum(n){
    if (n < 0 || (n % 10 === 0 && n !== 0)) { // this will check  n + or -
      return false;
    }

    let reversedHalf = 0;
    while (n > reversedHalf) {
      reversedHalf = reversedHalf * 10 + n % 10;
      n = Math.floor(n / 10);
    }

    return n === reversedHalf || n === Math.floor(reversedHalf / 10);
   
    

    // // LOOPHOLE!!!
    // let x = n.toString();
    // if(x[0]===x[x.length-1]){
    //     return true;
    // }else {
    //     return false;
    // }
    
}

console.log(palindromeNum(121));
console.log(palindromeNum(12321));
console.log(palindromeNum(-121));
