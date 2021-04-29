# Kataw parser test case

> Auto-generated tests to validate error recovery
>

### Cases

> `````js
> `await;
> `````

> `````js
> ({ await: async })
> `````

> `````js
> await => async
> `````

> `````js
> await => async.await[foo]
> `````

> `````js
> await => async.await[async / ((async) => foo.bar)]
> `````

> `````js
> ({ async* f(a) { await 1; } })
> `````

> `````js
> ({ async* f(a, b = 2) { yield 1; } })
> `````

> `````js
> var [...await f] = [];
> `````

> `````js
> let [await f] = [];
> `````

> `````js
> let { ...await f } = {};
> `````

> `````js
> var { f: await f } = {};
> `````

> `````js
> let { f: ...await f } = {};
> `````

> `````js
> async function f({ await }) {}
> `````

> `````js
> var asyncArrow = async(await) => 1;
> `````

> `````js
> var asyncArrow = async(...await) => {};
> `````

> `````js
> ({ async method(await) {} })
> `````

> `````js
> ({ async method([await]) {} })
> `````

> `````js
> ({ async method([await = 1]) {} })
> `````

> `````js
> (class { async method(await) {} })
> `````

> `````js
> (class { static async method(...await) {} })
> `````

> `````js
> var e = (await, f);
> `````

> `````js
> var e = (await);
> `````

> `````js
> var f = (await) => 42;
> `````

> `````js
> return async (await) => {};
> `````

> `````js
> var f = (...await) => 42;
> `````

> `````js
> const { f: await f } = {};
> `````

> `````js
> await 5;
> `````

> `````js
> () => { await 5; }
> `````

> `````js
> export var await;
> `````

> `````js
> async function wrap() { async function await() { } };
> `````

> `````js
> await.b[c] => async
> `````

> `````js
> ([x] = await bar) => {}
> `````

> `````js
> ([p] = [{m: 5 + t(await bar)}]) => {}
> `````

> `````js
> a = async function() { g(await) }
> `````

> `````js
> let x = function f(foo = await bar){
> `````

> `````js
> class x {async f(foo = await bar){}}
> `````

> `````js
> async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     }
> `````

> `````js
> async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    }
> `````

> `````js
> async function af(a, b = await a) { }
> `````

> `````js
> async function f() { return {await = 0} = {}; }
> `````

> `````js
> async function g(){let o = {async *f(foo = await bar){}}    }
> `````

> `````js
> async function g(){let o = {f(foo = await bar){}}    }
> `````

> `````js
> ([p] = [{m: 5 + t(await bar)}]) => {}
> `````

> `````js
> class x {async *f(foo = [{m: t(await bar)}]){}}
> `````

> `````js
> class x {*f(foo = await bar){}}
> `````

> `````js
> function *f(){  (await) => x  }
> `````

> `````js
> let x = function *f(foo = await){}
> `````

> `````js
> async function f(){ await foo\n/foo/g }
> `````

> `````js
> function f() { class C { await() { } } }
> `````

> `````js
> function f() { var await; }
> `````

> `````js
> async(await);
> `````

> `````js
> async function f() {
>   let { [await "a"]: a } = { a: 1 };
>   return a;
> }
> `````

> `````js
> async function a(){     async ([y] = [{m: 5 + t(await bar)}]);     }
> `````

> `````js
> async function f(){ await \n x; }
> `````

> `````js
> let o = {await(){}}
> `````

> `````js
> class x {await(){}}
> `````

> `````js
> async function f() { await 3; }
> `````

> `````js
> function f(x = await){}
> `````

> `````js
> async function a(){     async ({r} = await bar);     }
> `````

> `````js
> await = 1
> `````

> `````js
> call(await)
> `````

> `````js
> call(await[1])
> `````

> `````js
> call(await.foo)
> `````

> `````js
> (function call(foo=await){})
> `````

> `````js
> y = async x => await x
> `````

> `````js
> o = {await(){}}
> `````

> `````js
> async function f(){ await await foo; }
> `````

> `````js
> function *f(await){}
> `````

> `````js
> async function a(){     async ([v] = await bar);     }
> `````

> `````js
> let o = {*f(await){}}
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

#### var

`````js
var await; var f = (async function() { # });
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "use strict",
            "flags": 4194400,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [],
    "isModule": false,
    "source": "'use strict'; #",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid character - start: 13, end: 15
✖ Private identifiers are not allowed outside class_bodies - start: 13, end: 15

```

