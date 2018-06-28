const { sum, prod } = require('./calc.js');

test('Add 1 and 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Product 3 and 4 to equal 12', () => {
  expect(prod(3, 4)).toBe(12);
});
