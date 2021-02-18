# Kataw parser test case

> Auto-generated tests to validate error recovery
>

## Input

### Cases

> `````js
> function f() { ++(yield); }
> `````

> `````js
> function f(arg, ...arguments) {g(arg); arguments[0] = 42; g(arg)}
> `````

> `````js
> function *f(){  class x extends foo(yield y) { }  }
> `````

> `````js
> function f(a, a) {}
> `````

> `````js
> function f([foo], b){}
> `````

> `````js
> function f([foo], b = y){}
> `````

> `````js
> function f([foo=a,bar=b] = x){}
> `````

> `````js
> function f({foo=a} = x){}
> `````

> `````js
> function f({a}, {b}, {c = ""}) { return [a, b, c] }
> `````

> `````js
> function f({foo:a,bar:b} = x){}
> `````

> `````js
> function f({a}, {b}, {c = ""}) { return [a, b, c] }
> `````

> `````js
> function f(foo, {bar}){}
> `````

> `````js
> function f([foo] = x){}
> `````

> `````js
> function f([,,foo]){}
> `````

> `````js
> function f(...arg) {g(arg); eval('arg = 42'); g(arg)}
> `````

> `````js
> function f(arg) {g(arg)}
> `````

> `````js
> function f(arg=1) {}
> `````

> `````js
> function f(arg) {g(arg); arguments[0] = 42; g(arg)}
> `````

> `````js
> function f(arg, arguments=[]) {g(arg); arguments[0] = 42; g(arg)}
> `````

> `````js
> function f(arg) {g(arg); eval('arguments[0] = 42'); g(arg)}
> `````

> `````js
> function f([,,] = x){}
> `````

> `````js
> function f([,,]){}
> `````

> `````js
> function f([foo,,]){}
> `````

> `````js
> function f([]){}
> `````

> `````js
> function fn2([,,,,,,,...args]) {}
> `````

> `````js
> function fn2([a, b,]) {}
> `````

> `````js
> function fnc({x: {}}) {}
> `````

> `````js
> function fn2({a: {p: q, }, }) {}
> `````

> `````js
> function fn1({a: {p: q}, b: {r}, c: {s = 0}, d: {}}) {}
> `````

> `````js
> function fn2([{a: [{}]}]) {}
> `````

> `````js
> function f([,,foo] = x){}
> `````

> `````js
> function f([foo=a,bar] = x){}
> `````

> `````js
> function makeArrayLength(x) { if(x < 1 || x > 4294967295 || x != x || isNaN(x) || !isFinite(x)) return 1; else return Math.floor(x); };
> `````

> `````js
> function a(b, c) { }
> `````

> `````js
> (function(){})
> `````

> `````js
> function hello() { say_hi_to_ariya(); }
> `````

> `````js
> function f() {let async = 1; return async;}
> `````

> `````js
> function f() {function foo() { var await = 1; return await; }}
> `````

> `````js
> function f() {function async() {} return async();}
> `````

> `````js
> 'use strict'; var O = { method() { var asyncFn = async function*() {}} }
> `````

> `````js
> 'use strict'; var f = () => {var O = { async *method() {} };}
> `````

> `````js
> function f(arg, x=1) {g(arg); arguments[0] = 42; g(arg)}
> `````

> `````js
> function f() { ++(yield); }
> `````

> `````js
> function foo () {"use strict";}
> `````

> `````js
> function* f() {} function* f() {}
> `````

> `````js
> function* f() {} function* f() {} function* f() {}
> `````

> `````js
> function eval() { function inner() { "use strict" } }
> `````

> `````js
> function arguments() { function foo() { "use strict"; } }
> `````

> `````js
> function arguments(eval) { eval = arguments; function foo() { "use strict"; } }
> `````

> `````js
> function f([x]) {}
> `````

> `````js
> function f([x = 23] = []) {}
> `````

> `````js
> function f({ x, } = { x: 23 }) {}
> `````

> `````js
> function f({ w: { x, y, z } = { x: 4, y: 5, z: 6 } } = { w: { x: undefined, z: 7 } }) {}
> `````

> `````js
> function f([foo], b){}
> `````

> `````js
> async function f({ w: { x, y, z } = { x: 4, y: 5, z: 6 } }) {}
> `````

> `````js
> function f({ w: { x, y, z } = { x: 4, y: 5, z: 6 } }) {}
> `````

> `````js
> function
    x
    (
    )
    {
    }
    ;`,
    `function                                                    y                                   (                                          )                                              {};
    y();
    `,
    `function
    z
    (
    )
    {
    }
    ;
> `````

> `````js
> function foo (a, b, c) { }
> `````

> `````js
> function f() { class await { }   }
> `````

> `````js
> function w(casecase){y:j:function casecase(){}}
> `````

> `````js
> function* x() { for (const [j = yield] in (x) => {}) {} }
> `````

> `````js
> "use strict"; function* g() { yield; }; f = ([...[,]] = g()) => {};
> `````

> `````js
> function foo(package) {}
> `````

> `````js
> function f([foo,,bar] = x){}
> `````

> `````js
> function f(){ foo: bar: function f(){} }
> `````

> `````js
> function f(){ let f; }
> `````

> `````js
> function* a( [ {  x  =  y  }  =  a ] )  { }
> `````

> `````js
> function a( a = b  ) {} n => {  "use strict"; }
> `````

> `````js
> function a([ { a = x }, {} = b]) {}
> `````

> `````js
> function f(){} function f(){}
> `````

> `````js
> function f(x) { { const x = y } }
> `````

> `````js
> function f(x) {var x}
> `````

> `````js
> function f(x) {{var x}}
> `````

> `````js
> function f(){}\n/foo/
> `````






















> `````js
> with ({}) label: function f() { };
> `````

> `````js
> label: function* f() { }
> `````


> `````js
> for (var x in {a: 1}) label: function f() { };
> `````

> `````js
> for (var i = 0; i < 1; i++) function f() { };
> `````

> `````js
> for (var x in {}) function f() { };
> `````

> `````js
> do function foo() {} while (0);
> `````


> `````js
> for (var x in {}) label: function foo() {}
> `````

> `````js
> function foo(p\\x61ckage) { "use strict"; }
> `````

> `````js
> function test({...x = 1}) {}
> `````

> `````js
> function f() { class x extends await { }   }
> `````


> `````js
> function *f(){ class x extends yield { }
> `````

> `````js
> function f(){ class x { foo(x=yield){} }  }
> `````

> `````js
> function f() { class x extends foo(await y) { }   }
> `````

> `````js
> function f() { ++(yield); }
> `````


> `````js
> function f
> `````

> `````js
> function f(
> `````

> `````js
> function f()
> `````

> `````js
> function f() {
> `````

> `````js
> function f() { +
> `````

> `````js
> function f() { ++
> `````

> `````js
> function f() { ++(
> `````

> `````js
> function f() { ++(yield
> `````

> `````js
> function f() { ++(yield);
> `````

> `````js
> function f() { ++(yield }
> `````

> `````js
> function f()  }
> `````

> `````js
> function f() ; }
> `````

> `````js
> function f(function
> `````

> `````js
> function f({ ++(yield); })
> `````

> `````js
> function f() { ++(> function f() { ++(yield); }); }
> `````

> `````js
> function f() { ++(yield); }
> `````


> `````js
> function f() { ++(> function f() { ++(yield); } }
> `````

> `````js
> function f() { ++(yield); }
> `````

> `````js
> function > function > function
> `````

> `````js
> function f(function) function { ++(yield); }
> `````


> `````js
> function f() { ++(yield function
> `````

> `````js
> function f() { ++(yield); }
> `````

### Templates

#### as function declaraion

`````js
#
`````

#### as function expression

`````js
(#)
`````
