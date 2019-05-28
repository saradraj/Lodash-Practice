const _ = require('lodash');
const assert = require('assert');
const fakeData1 = `You don't really know the library but they ask you about it.`;
console.log(_.chunk(fakeData1));

const fakeData2 = [1,2,3];
console.log(_.reverse(fakeData2));

console.log(_.without([2, 1, 2, 3], 1, 2));

console.log(_.shuffle([1,2,3,4]));


describe('Test for lodash', function() {
    it('Check for reverse', () => {
        assert(
            _.reverse([1,2,3,4], [4,3,2,1])
        )
    });
    it('Check for without', () => {
        assert(
            _.without([2, 1, 2, 3], 1, 2, [3])
        )
    })

    it('Check for shuffle', () => {
        assert(
            _.shuffle([1,2,3,4], [2,3,41])
        )
    })


})