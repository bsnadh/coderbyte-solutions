
// Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.
//  For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.

function FirstReverse(str) { 
    let val = '';
    for(let i=str.length-1; i>=0; i--)
    {
      val = val + str[i] ;
    }
    return val;
      // code goes here  
    }
       
    // keep this function call here 
    console.log(FirstReverse(readline()));