const { spawn } = require('child_process')
const BufferList = require('bl')

module.exports = (...args) => {
  const child = spawn(...args)
  const stdout = child.stdout ? new BufferList() : ''
  const stderr = child.stderr ? new BufferList() : ''

  if (child.stdout) {
    child.stdout.on('data', data => {
      stdout.append(data)
    })
  }

  if (child.stderr) {
    child.stderr.on('data', data => {
      stderr.append(data)
    })
  }

  const promise = new Promise((resolve, reject) => {
    child.on('error', reject)

    child.on('exit', code => {
      if (code === 0) {
        resolve(stdout)
      } else {
        reject(new Error(`child exited with code ${code}\n${stderr.toString()}`))
      }
    })
  })

  promise.child = child

  return promise
}
