const whoCalled = require('./index');

test('should return index.test.js, line 4', () => {
  const whoCalledResult = whoCalled();
  expect(whoCalledResult).toContain('index.test.js');
  expect(whoCalledResult).toContain(':4:');
});

