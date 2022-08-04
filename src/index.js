module.exports = function toReadable (number) {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
    'seventeen', 'eighteen', 'nineteen'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
                  'seventeen', 'eighteen', 'nineteen'];
      const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
                  'ninety'];

      let numString = number.toString();

      if (number < 0) throw new Error('Negative numbers are not supported.');

      if (number === 0) return 'zero';

      //the case of 1 - 20
      if (number < 20) {
        return ones[number];
      }

      if (numString.length === 2) {
        return (tens[numString[0]] + ' ' + ones[numString[1]]).trim();
      }

      //100 and more
      if (numString.length == 3) {
        if (numString[1] === '0' && numString[2] === '0') {
          return ones[numString[0]] + ' hundred';
      } else if (numString[2] === '0') {
        if(numString[1] == 1) {
            return (ones[numString[0]] + ' hundred ' + ones[numString[1]*10]).trim();

        } else
            return (ones[numString[0]] + ' hundred ' + tens[numString[1]]).trim();
      }
          else {
            if(numString[1] == 1){
                return (ones[numString[0]] + ' hundred ' + tens[numString[1]]).trim() + ' ' + ones[10 + +numString[2]];

            } else
          return (ones[numString[0]] + ' hundred ' + tens[numString[1]]).trim() + ' ' + ones[numString[2]];
        }
      }



      if (numString.length === 4) {
        var end = (numString[1] + numString[2] + numString[3]);
        if (end === 0) return ones[numString[0]] + ' thousand';
        if (end < 100) return ones[numString[0]] + ' thousand ' + end;
        return ones[numString[0]] + ' thousand ' + end;
      }
    }
