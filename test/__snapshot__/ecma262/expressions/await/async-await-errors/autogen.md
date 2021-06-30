# Kataw parser test case

> Auto-generated tests to validate error recovery
>

### Cases

> `````js
> var asyncFn = async function await() {};
> `````

> `````js
> var asyncFn = async () => var await = 'test';
> `````

> `````js
> var asyncFn = async function(await) {};
> `````

> `````js
> var asyncFn = async (await) => 'test';
> `````

> `````js
> async function f(await) {}
> `````

> `````js
> var O = { async method(a, a) {} }
> `````

> `````js
> var O = { async ['meth' + 'od'](a, a) {} }
> `````

> `````js
> var O = { *async method() {} };
> `````

> `````js
> var O = { async method*() {} };
> `````

> `````js
> async function f(x = await 1) { return x; }
> `````

> `````js
> var f = async(x = await 1) => x;
> `````

> `````js
> ar O = { async method(x = await 1) { return x; } };
> `````

> `````js
> function* g() { var f = async yield => 1; }
> `````

> `````js
> function* g() { var f = async(yield) => 1; }
> `````

> `````js
> unction* g() { var f = async({x = yield}) => 1; }
> `````

> `````js
> class C {}; class C2 extends C { async constructor() {} }
> `````

> `````js
> class C { async constructor() {} }
> `````

> `````js
> class C { static async prototype() {} }
> `````

> `````js
> class C {}; class C2 extends C { static async prototype() {} }
> `````

> `````js
> (async function foo3() { } () => 1)
> `````

> `````js
> (async function() { } foo5 => 1)
> `````

> `````js
> (async function() { } => 1)
> `````

> `````js
> (async.foo9 () => 1)
> `````

> `````js
> (async().foo10 => 1)
> `````

> `````js
> (async().foo11 foo12 => 1)
> `````

> `````js
> (async['foo15'] foo16 => 1)
> `````

> `````js
> (async`foo22` => 1)
> `````

> `````js
> (async`foo23` foo24 => 1)
> `````

> `````js
> (async`foo25` () => 1)
> `````

> `````js
> (async`foo28`.bar29 foo30 => 1)
> `````

> `````js
> (async`foo31`.bar32 () => 1)
> `````

> `````js
> async({ foo33 = 1 })
> `````

> `````js
> async(...a = b) => b
> `````

> `````js
> async(...a,) => b
> `````

> `````js
> async(...a, b) => b
> `````

> `````js
> async(a = (...await) => 1) => a
> `````

> `````js
> async(a = (await) => 1) => a
> `````

### Templates

#### stand alone

`````js
#
`````

#### with strict directive

`````js
'use strict'; #
`````

