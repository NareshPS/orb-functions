const test = require('ava');
const { self, constant } = require('./index.js')

////////////////////////////// self [start] //////////////////////////////
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
////////////////////////////// self [end] //////////////////////////////

////////////////////////////// constant [start] //////////////////////////////
test('constant-no-args', t => {
  const input = 'constant-input'
  const cfn = constant()
  const output = cfn(input)

  t.is(typeof cfn, 'function')
  t.is(output, undefined)
})

test('constant-with-input', t => {
  const input = 'constant-input'
  const cfn = constant(input)
  const output = cfn()

  t.is(typeof cfn, 'function')
  t.is(output, input)
})
////////////////////////////// constant [end] //////////////////////////////

// t.pass();

// test('bar', async t => {
// 	const bar = Promise.resolve('bar');
// 	t.is(await bar, 'bar');
// });