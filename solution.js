// complete the given function

function palindrome(str){
 let regularexpressions = /[\W_]/g;
 let transformInLowerCase = str.toLowerCase().replace(regularexpressions,'');
 let reverseString = transformInLowerCase.split('').reverse().join('');

   return (reverseString === transformInLowerCase);
}
module.exports = palindrome
