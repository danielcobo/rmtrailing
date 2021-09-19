const rmTrailing = require('./index.js');
const slash = '/';

test('Removes trailing substring', async function () {
  expect(rmTrailing('hello/world/', slash)).toStrictEqual('hello/world');
});

test('Removes multiple trailing substrings', async function () {
  expect(rmTrailing('hello/world//', slash)).toStrictEqual('hello/world');
});

test('Removes all trailing substrings', async function () {
  expect(rmTrailing('///', slash)).toStrictEqual('');
});

test('Is OK with nothing to remove', async function () {
  expect(rmTrailing('hello/world', slash)).toStrictEqual('hello/world');
});

test('Is OK with empty string', async function () {
  expect(rmTrailing('', slash)).toStrictEqual('');
});

test('Throws for non-string str argument', async function () {
  expect(() => rmTrailing(true, slash)).toThrow();
});

test('Throws for non-string substr argument', async function () {
  expect(() => rmTrailing('hello/world', true)).toThrow();
});
