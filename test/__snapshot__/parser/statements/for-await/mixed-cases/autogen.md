# Kataw parser test case

> Auto-generated tests to validate error recovery
>

## Input

### Cases

> `````js
> (a of [])
> `````

> `````js
> (a.b of [])
> `````

> `````js
> ([a] of [])
> `````

> `````js
> ({a} of [])
> `````

> `````js
> ({a: a} of [])
> `````

> `````js
> ({'a': a} of [])
> `````

> `````js
> ({[Symbol.iterator]: a} of [])
> `````

> `````js
> ({0: a} of [])
> `````

> `````js
> ({0: a = 1} of [])
> `````

> `````js
> (var {'a': a} of [])
> `````

> `````js
>(var {a: a = 1} of [])
> `````

> `````js
> (let {a} of [])
> `````

> `````js
> (let {'a': a} of [])
> `````

> `````js
> (let {0: a} of [])
> `````

> `````js
> (let {a = 1} of [])
> `````

> `````js
> (const [a] of [])
> `````

> `````js
> (const [a = 1, ...b] of [])
> `````

> `````js
> (const {a} of [])
> `````

> `````js
> const {'a': a} of [])
> `````

> `````js
> (const {0: a} of [])
> `````

> `````js
> (const {a: a = 1} of [])
> `````

> `````js
> (const {[Symbol.iterator]: a = 1} of [])
> `````

> `````js
> (const {0: a = 1} of [])
> `````

### Templates

#### case

`````js
async function f() { let a; for await # ; }
`````

#### with directive prologue

`````js
async function f() { 'use strict'; let a; for await # ; }
`````
