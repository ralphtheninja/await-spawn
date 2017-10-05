const { spawn } = require('child_process')
const BufferList = require('bl')

module.exports = (...args) => {
  const child = spawn(...args)
  const bl = child.stdout ? new BufferList() : ''

  if (child.stdout) {
    child.stdout.on('data', data => {
      bl.append(data)
    })
  }

  const promise = new Promise((resolve, reject) => {
    child.on('error', reject)

    child.on('exit', code => {
      if (code === 0) {
        resolve(bl)
      } else {
        reject(new Error(`child exited with code ${code}`))
      }
    })
  })

  promise.child = child

  return promise
}
