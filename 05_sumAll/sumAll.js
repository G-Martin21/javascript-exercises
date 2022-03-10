const sumAll = function(intX, intY) {
   initValues = [...arguments];

   if (initValues.every( value => Number.isInteger(value) && value >= 0)) {
      initValues.sort( (a, b) => a - b);
      let sum = 0;
      for (let i = initValues[0]; i <= initValues[1]; i++) {
         sum += i;
      }
      return sum;
   } else {
      return "ERROR";
   }
};

// Do not edit below this line
module.exports = sumAll;
