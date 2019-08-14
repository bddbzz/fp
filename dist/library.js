(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
}(function () { 'use strict';

    function sayHello(person) {
        return 'Hello, ' + person;
    }
    var user = 'Tom';
    console.log(sayHello(user));
    function swap(tuple) {
        return [tuple[1], tuple[0]];
    }
    swap([7, 'seven']);
    function loggingIdentity(arg) {
        console.log(arg.length);
        return arg;
    }
    loggingIdentity('sss');

}));
//# sourceMappingURL=library.js.map
