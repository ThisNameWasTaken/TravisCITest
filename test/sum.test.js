import { expect } from 'chai';
import sum from '../js/sum';

describe('sum', () => it('should return the sum of 2, 3 and 4', () => expect(sum([2, 3, 4])).to.equal(9)));