const removeFromArray = function(argArray, ...args) {
   let checkArgs = [...argArray];
   let index;
   // skip first argument, it is the array
   for (let i = 1; i < arguments.length; i++) {
      index = checkArgs.findIndex( (item) => {return item === arguments[i]});
      if (index != -1) {
         checkArgs.splice(index, 1);
      }
   }
   return checkArgs;
};

/* solution 2
const removeFromArray = function(...args) {
   let arrayToCheck = arguments[0];
  
   // skip first element of arguments
   for (let i = 1; i < arguments.length; i++) {
      newArray = arrayToCheck.filter( item => return item !== arguments[i]);
      }
   }
   return checkArgs;
};
*/

// Do not edit below this line
module.exports = removeFromArray;
