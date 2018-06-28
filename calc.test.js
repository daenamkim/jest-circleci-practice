const { sum, sub, prod, div } = require('./calc.js');

test('Add 1 and 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Sub 2 from 7 to equal 5', () => {
  expect(sub(7, 2)).toBe(5);
});

test('Product 3 and 4 to equal 12', () => {
  expect(prod(3, 4)).toBe(12);
});


test('Divide 44 by 2 equal to 22', () => {
  expect(div(44, 2)).toBe(22);
});
