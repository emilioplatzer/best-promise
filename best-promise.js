var Promises = {};

Promises.Promise = require('./any-promise.js');
process.env.PROMISE_IMPL = 'best-promise';

Promises.start = function then(f){
    if(!f){
        return Promises.Promise.resolve();
    }
    return Promises.Promise.resolve().then(f);
};

Promises.reject = function reject(err){
    return Promises.Promise.reject(err);
};

Promises.all = function all(promises){
    return Promises.Promise.all(promises);
};

Promises.make = function make(functionResolveReject){
    return new Promises.Promise(functionResolveReject);
}

module.exports = Promises;