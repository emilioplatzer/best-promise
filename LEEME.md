<!--multilang v0 es:LEEME.md en:README.md -->
# best-promise

<!--lang:es-->

elije la mejor librería de promesas disponible (o le deja la opción al usuario)

<!--lang:en--]

select the best promise available at certain moment or leave the choice to the end user

<!-- cucardas -->
![extending](https://img.shields.io/badge/stability-extending-orange.svg)
[![npm-version](https://img.shields.io/npm/v/best-promise.svg)](https://npmjs.org/package/best-promise)
[![downloads](https://img.shields.io/npm/dm/best-promise.svg)](https://npmjs.org/package/best-promise)
[![build](https://img.shields.io/travis/emilioplatzer/best-promise/master.svg)](https://travis-ci.org/emilioplatzer/best-promise)
[![climate](https://img.shields.io/codeclimate/github/emilioplatzer/best-promise.svg)](https://codeclimate.com/github/emilioplatzer/best-promise)
[![dependencies](https://img.shields.io/david/emilioplatzer/best-promise.svg)](https://david-dm.org/emilioplatzer/best-promise)

<!--multilang buttons-->

idioma: ![castellano](https://raw.githubusercontent.com/codenautas/multilang/master/img/lang-es.png)
también disponible en:
[![inglés](https://raw.githubusercontent.com/codenautas/multilang/master/img/lang-en.png)](README.md) - 

<!--lang:es-->

***Basado en [any-promise](https://npmjs.org/package/any-promise)***

Cuando se usa con Travis-CI ***best-promise*** seleccionará al azar una librería Promise. 

En el resto de los casos funciona igual que [any-promise](https://npmjs.org/package/any-promise).

La lista de módulos Promise es:

<!--lang:en--]

***Based on [any-promise](https://npmjs.org/package/any-promise)***

When testing with Travis-CI ***best-promise*** selects a promise library randomly.

In the rest of cases it will work identically to [any-promise](https://npmjs.org/package/any-promise).

When normal use, attempts to load libraries in the following order:

[!--lang:*-->

  - [es6-promise](https://github.com/jakearchibald/es6-promise)
  - [promise](https://github.com/then/promise)
  - [native-promise-only](https://github.com/getify/native-promise-only)
  - [bluebird](https://github.com/petkaantonov/bluebird)
  - [rsvp](https://github.com/tildeio/rsvp.js)
  - [when](https://github.com/cujojs/when)
  - [q](https://github.com/kriskowal/q)

<!--lang:es-->
  
Si no hay ninguna librearía instalada ***any-promise*** intenta exportar el módulo global `Promise` (ya sea nativo o el polyfill). 

Se puede especificar la librería elegida en cada momento usando la variable de ambiente `PROMISE_IMPL` 
o también se puede usar la variable de ambiente `PROMISE_RANDOM` para que sortee aunque no esté en Travis-CI.

<!--lang:en--]
  
If no library is installed, attempts to export the global `Promise` (native or polyfill). 

You can specify the `PROMISE_IMPL` env variable or the `PROMISE_RANDOM` variable to **yes**

[!--lang:*-->

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

<!--lang:es-->

## mejoras

<!--lang:en--]
  
## improvements

<!--lang:es-->
  
Una forma común de las promesas es empezar la primera función dentro de un then,
de ese modo si la expresión que arma los parámetros lanza un error 
se captura dentro de la cadena de promesas

<!--lang:en--]
  
You can abrevite the common tasks by begining with the first function inside a `then`,
that way if the expression that assembles the parameters throws an error,
it is captured in the promise chain.

[!--lang:*-->

```js

var Promises = require('best-promise');
var fs = require('fs-promise');

Promises.start(function(){
    return fs.stat(path+path.sep+fileName);
}).then(function(stat){
    // ...
});

```

<!--lang:es-->

## Licencia

<!--lang:en--]

## License

[!--lang:*-->

[MIT](LICENSE)
