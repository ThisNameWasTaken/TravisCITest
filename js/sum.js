/**
 * @param {Array<Number>} numbers 
 * @returns the sum of the given numbers
 */
const sum = numbers => numbers.reduce((sum, number) => sum + number);

const x = sum([1, 2, 3, 4, 5, 6]);

export default sum;