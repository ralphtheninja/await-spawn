const test = require('tape')
const spawn = require('..')

test('running none existent command throws ENOENT', async t => {
  try {
    await spawn('notexisting')
  } catch (err) {
    t.equal(err.message, 'spawn notexisting ENOENT')
    t.end()
  }
})

test('failed command throws error with code', async t => {
  try {
    await spawn('false')
  } catch (err) {
    t.equal(err.message, 'child exited with code 1')
    t.end()
  }
})

test('running existent works fine', async t => {
  const promise = spawn('true')
  t.ok(promise.child, 'has child set')
  await promise
  t.end()
})
