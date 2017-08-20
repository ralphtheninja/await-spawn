# await-spawn

`child_process.spawn()` wrapped in a `Promise` for doing async/await.

```
$ npm i await-spawn -S
```

[![Build Status](https://travis-ci.org/ralphtheninja/await-spawn.svg?branch=master)](https://travis-ci.org/ralphtheninja/await-spawn)

## Usage

```js
const spawn = require('await-spawn')
(async () => {
  await spawn('ls', [ '-al' ], { stdio: 'inherit' })
})()
```

## Api

Exposes a single function, which has the same api as `child_process.spawn()`. Additionally returns a `Promise` with `.child` set to the spawned child process.

## License

MIT
