
# co-fs-extra

  'fs-extra' and 'fs' wrapped functions that return thunks fo [co](https://github.com/visionmedia/co).

## Installation

```
$ npm install co-fs-extra
```

## Example

 Use all the regular async fs functions without callback hell:

```js
var json = yield fs.readFile('package.json', 'utf8')
var file = yield fs.ensureFile('htllo.txt')
```

## License

  MIT