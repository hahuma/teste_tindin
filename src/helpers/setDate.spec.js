const setDate = require('./setDate');

test('should return a number with 8 digits representing a date in format YYYYMMDD', () => {
  expect(setDate().toString()).toMatch(/^\d{8}$/);
});
