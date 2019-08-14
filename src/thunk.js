let x = 1,
    y = 2,
    z = 3

function thunk() {
    return x * y * z
}

function fByName() {
    return thunk() * 2
}

function fByValue(r) {
    return r * 2
}
//console.log(fByName(1, 2, 3)) //传名调用
//console.log(fByValue(x * y * z)) //传值调用

function timer(time, cb) {
    setTimeout(() => {
        cb(time)
    }, time)
}


console.time('t')
Thunk(timer)(1000)(function (t) {
    console.log(t)
    console.timeEnd('t')
})

function f(a, cb) {
    cb(a);
}

let log = console.log.bind(console);
Thunk(f)(88)(log)

//确保回调函数只运行一次
function thunkify(fn) {
    return function (...args) {
        return function (cb) {
            let called

            function proxy() {
                if (called) {
                    return
                }
                called = true
                cb.apply(null, arguments)
            }
            return fn.call(this, ...args, proxy)
        }
    }
}

function f2(a, cb) {
    cb(a);
    cb(a);
}
thunkify(f2)(77)(log)

function Thunk(fn) {
    return function (...args) {
        return function (cb) {
            return fn.call(this, ...args, cb)
        }
    }
}

function step1(cb) {
    setTimeout(() => {
        cb("step1")
        console.log(1)
    }, 2000);
}

function step2(cb) {
    setTimeout(() => {
        cb("step2")
        console.log(2)
    }, 200);
}

function* gen() {
    yield Thunk(step1)
    yield Thunk(step2)
}
/*let g = gen()
g.next().value(function (v1) {
    console.log(v1)
    let n = g.next()
    n.value(function (v2) {
        console.log(v2)
    })
})*/

function run(fn) {
    var gen = fn();

    function next(data) {
        var result = gen.next(data);
        if (result.done) return;
        result.value(next);
        console.log(data)
    }

    next();
}

run(gen)

//问题：回调执行、只有callback的函数