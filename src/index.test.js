const test = require('ava');
const { self } = require('../src/index.js');

test('self-with-primitive-type', t => {
  const arg = 5
  const result = self(arg)
  t.is(arg, result)
})

test('self-with-list', t => {
  const arg = [5, 10]
  const result = self(arg)
  t.is(arg, result)
})

test('self-with-object', t => {
  const arg = {a: 5, b:10}
  const result = self(arg)
  t.is(arg, result)
})

// t.pass();

// test('bar', async t => {
// 	const bar = Promise.resolve('bar');
// 	t.is(await bar, 'bar');
// });