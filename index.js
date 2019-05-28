const _ = require('lodash');
const fakeData1 = `You don't really know the library but they ask you about it.`;
console.log(_.chunk(fakeData1));

const fakeData2 = [1,2,3];
console.log(_.reverse(fakeData2));

console.log(_.without([2, 1, 2, 3], 1, 2));

console.log(_.shuffle([1,2,3,4]));
