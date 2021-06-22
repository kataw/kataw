# Kataw parser test case

> Auto-generated tests to validate error recovery
>

### Cases

> `````js
> (a of [])
> `````

> `````js
> ([a] of [])
> `````

> `````js
> ({a} of [])
> `````

> `````js
> ({[Symbol.iterator]: a} of [])
> `````

> `````js
> ({0: a} of [])
> `````

> `````js
> ({[Symbol.iterator]: a = 1} of [])
> `````

> `````js
> ({0: a = 1} of [])
> `````

> `````js
> (var [a] of [])
> `````

> `````js
> (var {a: a} of [])
> `````

> `````js
> (var {'a': a} of [])
> `````

> `````js
> (var {0: a} of [])
> `````

> `````js
> (var {a = 1} of [])
> `````

> `````js
> (var {a: a = 1} of [])
> `````

> `````js
> (var {[Symbol.iterator]: a = 1} of [])
> `````

> `````js
> (var {0: a = 1} of [])
> `````

> `````js
> (let {a: a} of [])
> `````

> `````js
> (let [a = 1, ...b] of [])
> `````

> `````js
> (let [a = 1] of [])
> `````

> `````js
> (let [a] of [])
> `````

> `````js
> (const [a = 1] of [])
> ````

> `````js
> (const {a: a = 1} of [])
> `````

> `````js
> (const {0: a = 1} of [])
> `````

### Templates

#### one

`````js
async function f() { for await # ; }

`````

#### 2

`````js
async function f() { for await # { } }
`````

#### 3

`````js
async function * f() { for await # { } }
`````

#### Four

`````js
async function f() { 'use strict'; for await # ; }
`````

#### Five

`````js
async function f() { 'use strict'; for await #  { } }
`````

#### Six

`````js
async function * f() { 'use strict'; for await #  { } }
`````

#### Seven

`````js
async function f() { for
await # ; }
`````

#### Eigth

`````js
async function f() { for
await # { } }
`````

#### Nine

`````js
async function * f() { for
await # { } }
`````

#### Ten

`````js
async function f() { 'use strict'; for
await # ; }
`````

#### Eleven

`````js
async function f() { 'use strict'; for
await # { } }
`````

#### Twelwe

`````js
async function * f() { 'use strict'; for
await # { } }
`````

#### Thirteen

`````js
async function f() { for await
#  ; }
`````

#### Fourteen

`````js
async function f() { for await
#  { } }
`````

#### Fifthteen

`````js
async function * f() { for await
#  { } }
`````

#### Sixteen

`````js
async function f() { 'use strict'; for await
#  ; }
`````

#### Seventeen

`````js
async function f() { 'use strict'; for await
#  { } }
`````
