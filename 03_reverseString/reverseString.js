const reverseString = function(string) {
   /*const getArray = string.split("");
   let reverseArray = [];
   for (let x of getArray) {
      reverseArray.unshift(x);
   }
   return reverseArray.join("");*/
   return string.split("").reverse().join("")
};

// Do not edit below this line
module.exports = reverseString;
