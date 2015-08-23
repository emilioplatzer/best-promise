"use strict";
var Promises = require('../');
var Prom = Promises.Promise;

var expect = require('expect.js');

describe('Promises', function(){
    function isAPromiseTest(p){
    };
    it('must return a promise',function(){
        expect(Prom.resolve).to.be.a(Function);
        expect(Prom.reject).to.be.a(Function);
    });
    it('must start returning a theneable',function(){
        var p=Promises.start(function(){});
        expect(p.then).to.be.a(Function);
        expect(p.catch).to.be.a(Function);
    });
    it('must return value when start a promise with value',function(done){
        var p=Promises.start(function(){ return 7; });
        p.then(function(value){
            expect(value).to.be(7);
            done();
        }).catch(done);
    });
    it('must catch error by start a promise with error',function(done){
        var p=Promises.start(function(){ throw new Error('x'); });
        p.then(function(value){
            done(value);
        }).catch(function(err){
            expect(err.message).to.be('x');
            done();
        }).catch(done);
    });
    it('must sleep',function(done){
        var start=new Date();
        Promises.sleep(100).then(function(){
            var now=new Date();
            var elapsed=Math.abs(now.getTime()-start.getTime()-100);
            expect(elapsed).to.be.lessThan(20);
            done();
        }).catch(done);
    });
    describe('make', function(){
        var p;
        var err;
        var result;
        beforeEach(function(){
            err = null;
            result = null;
            p = Promises.make(function(resolve, reject){
                var resolveOrReject=function(){
                    setTimeout(function(){
                        if(err){
                            reject(err);
                        }if(result){
                            resolve(result);
                        }else{
                            resolveOrReject();
                        }
                    },20);
                };
                resolveOrReject();
            });
        });
        it('must resolve ok',function(done){
            result = 8;
            p.then(function(value){
                expect(value).to.be(8);
                done();
            }).catch(done);
        });
        it('must reject',function(done){
            err = new Error('the message');
            p.then(function(value){
                done(value);
            }).catch(function(err){
                expect(err.message).to.be('the message');
                done();
            }).catch(done);
        });
    });
    describe('wrapErrRes', function(){
        var fp;
        var err;
        var result;
        var f;
        beforeEach(function(){
            err = null;
            result = null;
            f = function(data1, data2, callback){
                var resolveOrReject=function(){
                    setTimeout(function(){
                        if(err){
                            callback(data1+data2+err);
                        }if(result){
                            callback(null,data1+data2+result);
                        }else{
                            resolveOrReject();
                        }
                    },20);
                };
                resolveOrReject();
            }
            fp = Promises.wrapErrRes(f);
        });
        it('must resolve ok',function(done){
            result = 9;
            fp('a','b').then(function(value){
                expect(value).to.be('ab9');
                done();
            }).catch(done);
        });
        it('must reject',function(done){
            err = 'error message';
            fp('A','B2').then(function(value){
                done(value);
            }).catch(function(err){
                expect(err).to.be('AB2error message');
                done();
            }).catch(done);
        });
    });
});

