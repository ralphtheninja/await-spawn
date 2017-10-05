# await-spawn

> `child_process.spawn()` wrapped in a `Promise` for doing async/await.

[![Build Status](https://travis-ci.org/ralphtheninja/await-spawn.svg?branch=master)](https://travis-ci.org/ralphtheninja/await-spawn)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Greenkeeper badge](https://badges.greenkeeper.io/ralphtheninja/await-spawn.svg)](https://greenkeeper.io/)

## Install

```
$ npm i await-spawn -S
```

## Usage

```js
const spawn = require('await-spawn')

const main = async () => {
  const buf = await spawn('ls', [ '-al' ])
  console.log(buf.toString())
}

main()
```

## Api

Exposes a single function, which has the same api as `child_process.spawn()`.

Returns a `Promise` with `.child` set to the spawned child process. The `Promise` resolves to the buffered output of `child.stdout`.

Note that `child.stdout` doesn't exist if `options.stdio === 'inherit'`, so the `Promise` resolves to `''`.

## License

MIT
