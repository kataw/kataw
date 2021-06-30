# Kataw parser test case

> Auto-generated tests to validate error recovery
>

## Input

### Cases

> `````js
> { x : y }
> `````

> `````js
> { get = 1, set = 2 }
> `````

> `````js
> [a]
> `````

> `````js
> [a = 1]
> `````

> `````js
> [a, b = 42, c]
> `````

> `````js
> [{x:x, y:y}, [a,b,c]]
> `````

> `````js
> [{x:x = 1, y:y = 2}, [a = 3, b = 4, c = 5]]
> `````

> `````js
> {x}
> `````

> `````js
> {x, y}
> `````

> `````js
> {x = 42, y = 15}
> `````

> `````js
> [a,,b]
> `````

> `````js
> {42 : x}
> `````

> `````js
> {42 : x = 42}
> `````

> `````js
> {42e-2 : x}
> `````

> `````js
> {42e-2 : x = 42}
> `````

> `````js
> {x : y, x : z}
> `````

> `````js
> {'hi' : x = 42}
> `````

> `````js
> {[x] : z}
> `````

> `````js
> {[1+1] : z}
> `````

> `````js
> {[foo()] : z}
> `````

> `````js
> {}
> `````

> `````js
> {[1+1] : z}
> `````

> `````js
> {[foo()] : z}
> `````

> `````js
> [...rest]
> `````

> `````js
> [a,b,...rest]
> `````

> `````js
> [a,,...rest]
> `````

> `````js
> { __proto__: x, __proto__: y}
> `````

> `````js
> {eval: x}
> `````

> `````js
> [{x:x = 1, y:y = 2, ...z}, [a = 3, b = 4, c = 5]]
> `````

> `````js
> {x = 42, y = 15, ...z}
> `````

> `````js
> {42 : x = 42, ...y}
> `````

> `````js
> {'hi' : x, ...z}
> `````

> `````js
> {'hi' : x = 42, ...z}
> `````

> `````js
>{[1+1] : z, ...x}
> `````

> `````js
> {arguments: x, ...z}
> `````

> `````js
> { __proto__: x, __proto__: y, ...z}
> `````

> `````js
> {var: x = 42, ...z}
> `````

> `````js
> {'hi' : x = 42, ...z}
> `````

### Templates

#### lexical let with strict directive

`````js
'use strict'; let # = {};
`````

#### variable declaration

`````js
var # = {};
`````

#### function formal param list

`````js
function f(#) {}
`````

#### function formal param list second arg

`````js
function f(argument1, #) {}
`````

#### parenthized arrow

`````js
var f = (#) => {};
`````

#### parenthized arrow second arg

`````js
var f = (argument1,#) => {};
`````

#### try catch

`````js
try {} catch(#) {}
`````
