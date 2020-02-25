module.exports = function toReadable (number) {
    const units = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const first_tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
    if (number == undefined || number == 0) return 'zero';
    if (number <= 9 ) return units[number-1];
    if (number <= 19) return first_tens[number-10];
    if (number <= 99) {
        return `${tens[Math.floor(number/10) - 2]}${number%10 != 0 ? ' ' + units[number%10 -1] : ''}`;
    }
    return `${units[Math.floor(number / 100) - 1]} hundred${number%100 != 0 ? ' ' + toReadable(number%100) : ''}` ;
  }
  

