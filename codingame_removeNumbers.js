const separateNumbersAndLetters = (str) => {
   str = str.split("")
   let str1 = []
   let nums = 0
   for(let i = 0; i < str.length; i++){
     if(str[i].match(/^[a-zA-Z]$/) || !str[i].match(/^[a-zA-Z0-9]$/)){
      str1.push(str[i]);
     }else{
      nums += parseInt(str[i])
     }
   }
   return [str1.join(""), nums]

};

console.log(separateNumbersAndLetters("Hello world!2213"));