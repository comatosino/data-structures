const sum = require('../_dist/sum');

// test()
// 1st arg: desc of the test
// 2nd arg: callback test function
test('properly adds two numbers', () => {
  expect(sum(1,2)).toBe(3);
});