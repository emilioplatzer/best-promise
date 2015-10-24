# best-promise


select the best promise available at certain moment or leave the choice to the end user

![extending](https://img.shields.io/badge/stability-extending-orange.svg)
[![npm-version](https://img.shields.io/npm/v/best-promise.svg)](https://npmjs.org/package/best-promise)
[![downloads](https://img.shields.io/npm/dm/best-promise.svg)](https://npmjs.org/package/best-promise)
[![build](https://img.shields.io/travis/emilioplatzer/best-promise/master.svg)](https://travis-ci.org/emilioplatzer/best-promise)
[![climate](https://img.shields.io/codeclimate/github/emilioplatzer/best-promise.svg)](https://codeclimate.com/github/emilioplatzer/best-promise)
[![dependencies](https://img.shields.io/david/emilioplatzer/best-promise.svg)](https://david-dm.org/emilioplatzer/best-promise)


language: ![English](https://raw.githubusercontent.com/codenautas/multilang/master/img/lang-en.png)
also available in:
[![Spanish](https://raw.githubusercontent.com/codenautas/multilang/master/img/lang-es.png)](LEEME.md)


***Based on [any-promise](https://npmjs.org/package/any-promise)***

When testing with Travis-CI ***best-promise*** selects a promise library randomly.

In the rest of cases it will work identically to [any-promise](https://npmjs.org/package/any-promise).

When normal use attempts to load libraries in the following order:


  - [es6-promise](https://github.com/jakearchibald/es6-promise)
  - [promise](https://github.com/then/promise)
  - [native-promise-only](https://github.com/getify/native-promise-only)
  - [bluebird](https://github.com/petkaantonov/bluebird)
  - [rsvp](https://github.com/tildeio/rsvp.js)
  - [when](https://github.com/cujojs/when)
  - [q](https://github.com/kriskowal/q)


If no library is installed, attempts to export the global `Promise` (native or polyfill).

You can specify the `PROMISE_IMPL` env variable or the `PROMISE_RANDOM` variable to **yes**


```javascript
var Promise = require('best-promise').Promise;

return Promise
  .all([xf, f, init, coll])
  .then(fn);

return new Promise(function(resolve, reject){
  try {
    resolve(item);
  } catch(e){
    reject(e);
  }
});

```


## improvements


You can abrevite the common tasks


```js

var Promises = require('best-promise');
var fs = require('fs-promise');

Promises.start(function(){
    return fs.stat(path+path.sep+fileName);
}).then(function(stat){
    // ...
});

```


## License


[MIT](LICENSE)
