const rmTrailing = require('./index.js');
const slash = '/';

test('Removes trailing substring', async function () {
  expect(rmTrailing('hello/world/', slash)).toStrictEqual('hello/world');
});

test('Removes multiple trailing substrings', async function () {
  expect(rmTrailing('hello/world//', slash)).toStrictEqual('hello/world');
});

test('Removes all trailing substrings', async function () {
  expect(rmTrailing('worldworld', 'world')).toStrictEqual('');
});

test('Is OK with nothing to remove', async function () {
  expect(rmTrailing('hello/world', slash)).toStrictEqual('hello/world');
});

test('Is OK with empty string', async function () {
  expect(rmTrailing('', slash)).toStrictEqual('');
});

test('Use flag i to ignore case', function () {
  expect(rmTrailing('hello/world', 'World', true)).toStrictEqual('hello/');
});

test('Use flag i to ignore case', function () {
  expect(rmTrailing('hello/world', 'World')).toStrictEqual('hello/world');
});

test('Mixed letters will not work', function () {
  expect(rmTrailing('hello/world', 'wrlod')).toStrictEqual('hello/world');
});

test('Escape char will work', function () {
  expect(rmTrailing('hello/w\\orld', 'w\\orld')).toStrictEqual('hello/');
});

test('Throws for non-string str argument', async function () {
  expect(() => rmTrailing(true, slash)).toThrow();
});

test('Throws for non-string substr argument', async function () {
  expect(() => rmTrailing('hello/world', true)).toThrow();
});
