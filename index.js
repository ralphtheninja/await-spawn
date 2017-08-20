const { spawn } = require('child_process')
const debug = require('debug')('await-spawn')

module.exports = (cmd, args, options) => {
  const child = spawn(cmd, args, options)
  debug('spawning child', cmd, args, options)
  const promise = new Promise((resolve, reject) => {
    child.on('error', reject)
    child.on('exit', code => {
      if (code === 0) {
        debug('child exited successfully')
        return resolve()
      }
      const msg = `child exited with code ${code}`
      debug(msg)
      reject(new Error(msg))
    })
  })
  promise.child = child
  return promise
}
