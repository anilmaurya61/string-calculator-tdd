export class StringCalculator {
  add = (input = '') => {
    if (input === '') return 0;

    let delimiterRegex = /,|\n/;
    let numbersString = input;

    if (input.startsWith('//')) {
      const match = input.match(/^\/\/(.+)\n(.*)$/);
      if (!match || match[2].trim() === '') {
        throw new Error('Invalid custom delimiter format');
      }
      const [, delimiter, rest] = match;
      delimiterRegex = new RegExp(delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
      numbersString = rest;
    }

    const numbers = numbersString.split(delimiterRegex).map(Number);

    const negatives = numbers.filter(n => n < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
    }

    return numbers.reduce((sum, n) => sum + n, 0);
  };
}
