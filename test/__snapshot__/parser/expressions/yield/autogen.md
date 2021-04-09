# Kataw parser test case

> Auto-generated tests to validate error recovery
>

### Cases

> `````js
> let foo = function*() { try {yield 42} finally {yield 43; return 13} };
> `````

> `````js
> yield
> `````

> `````js
> function* foo() { (yield* (c = d) => { })  }
> `````

> `````js
> function *foo() { do try {} catch (q) {} while ((yield* 810048018773152)); }
> `````

> `````js
> function* foo() { yield 2; if (true) { yield 3 }; yield 4 }
> `````

> `````js
> function* foo() { var x = 10; yield 1; return x; }
> `````

> `````js
> ({} = ({x} = (function* y(z) { (yield) }))) => (p);
> `````

> `````js
> ({} = ([x] = (function* y(z) { (yield) }))) => (p);
> `````

> `````js
> ({} = ([x] = (function* y(z) { async (yield) }))) => (p);
> `````

> `````js
> yield *
> `````

> `````js
> yield 3 + yield 4;
> `````

> `````js
> var foo = yield = 1;
> `````

> `````js
> function * yield() { }
> `````

> `````js
> var [yield] = [42];
> `````

> `````js
> yield /* comment */\n {yield: 42}
> `````

> `````js
> class C extends yield { }
> `````

> `````js
> async ([...yield]) => {};
> `````

> `````js
> async ([yield]) => {};
> `````

> `````js
> ([yield = 0]) => {};
> `````

> `````js
> (class { static async method(...await) {} })
> `````

> `````js
> (a = yield /a/g) => {}
> `````

> `````js
> () => { var {a: yield} = {}; };
> `````

> `````js
> () => { let {yield = 0} = {}; };
> `````

> `````js
> () => { const [...yield] = []; };
> `````

> `````js
> yield * \n { yield: 12 }
> `````

> `````js
> yield /* comment */ { yield: 12 }
> `````

> `````js
> yield * 1; return 37; yield * 'dead';
> `````

> `````js
> {yield}
> `````

> `````js
> yield /* comment */
> `````

> `````js
> async function wrap() { async function await() { } };
> `````

> `````js
> await.b[c] => async
> `````

> `````js
> (yield) ? yield : yield
> `````

> `````js
> x = class extends (a ? null : yield) { }
> `````

> `````js
> yield /* comment */ { yield: 12 }
> `````

> `````js
> function foo(yield) {
> `````

> `````js
> function yield(yield) { yield: yield (yield + yield(0)); }
> `````

> `````js
> async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     }
> `````

> `````js
> async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    }
> `````

> `````js
> ({ yield: 1 })
> `````

> `````js
> yield(100)
> `````

> `````js
> function* gf() { yield 'foo' }
> `````

> `````js
> unction* gf() { var a = yield 'foo'; }
> `````

> `````js
> var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }
> `````

> `````js
> function* gf() { switch (1) { case yield* 'foo': break; } }
> `````

> `````js
> var o = { *gf() { switch (1) { case yield: break; } } }
> `````

> `````js
> function * yield() { }
> `````

> `````js
> function * gen() { (yield) ? yield : yield }
> `````

> `````js
> function *a(){yield typeof 0}
> `````

> `````js
> function *a(){yield 2e308}
> `````

> `````js
> function *a(){({get b(){yield}})}
> `````

> `````js
> function *a(){({set b(yield){}})}
> `````

> `````js
> function* g(){ x ? yield : y }
> `````

> `````js
> async function a(){     async ([y] = [{m: 5 + t(await bar)}]);     }
> `````

> `````js
> (function * () { x = class extends (a ? null : yield) { } });
> `````

> `````js
> (function * () { ({ [yield]: x } = { }) });
> `````

> `````js
> function *g() { yield void x }
> `````

> `````js
> function* g1() { (yield 1) }
> `````

> `````js
> function* gf() { class C { *yield() { } } }
> `````

> `````js
> function* gf() { var fe = function yield() { } }
> `````

> `````js
> function f() { class C { yield() { } } }
> `````

> `````js
> function *gf(){ function yield(){}; }
> `````

> `````js
> ({x} = yield) => {}
> `````

> `````js
> function* gf() { var yield; }
> `````

> `````js
> function* gf() { +yield; }
> `````

> `````js
> function* gf() { +yield 2; }
> `````

> `````js
> o = {await(){}}
> `````

> `````js
> async function f(){ await await foo; }
> `````

> `````js
> function* gf() { yield++; }
> `````

> `````js
> function*g(){ function yield(){}; }
> `````

> `````js
> function*g() { for ({yield = 0} in 0); }
> `````

### Templates

#### with_strict_dirctive

`````js
'use strict'; #
`````

#### simple

`````js
#
`````

#### function declaration

`````js
function not_gen() { # }}
`````

#### function generator

`````js
function * gen() { function not_gen() { # }}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 12
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "#",
                "autofix": 0,
                "flags": 768,
                "start": 13,
                "end": 15
            },
            "autofix": 0,
            "flags": 128,
            "start": 13,
            "end": 15
        }
    ],
    "isModule": false,
    "text": "'use strict'; #",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 13,
            "end": 15
        }
    ],
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

