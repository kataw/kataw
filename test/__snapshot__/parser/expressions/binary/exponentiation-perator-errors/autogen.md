# Kataw parser test case

> Auto-generated tests to validate error recovery
>

### Cases

> `````js
> delete O.p ** 10
> `````

> `````js
> delete x ** 10
> `````

> `````js
> !O.p ** 10
> `````

> `````js
> +O.p ** 10
> `````

> `````js
> typeof O.p ** 10
> `````

> `````js
> void ** 1
> `````

> `````js
> ++delete O.p ** 10
> `````

> `````js
> ++~O.p ** 10
> `````

> `````js
> ++~x ** 10
> `````

> `````js
> --!O.p ** 10
> `````

> `````js
> [ x **= 2 ] = [ 2 ]
> `````

> `````js
> { x: x **= 2 ] = { x: 2 }
> `````

### Templates

#### in if-statement

`````js
var O = { p: 1 }, x = 10; ; if (#) { foo(); }
`````

#### in parenteses

`````js
var O = { p: 1 }, x = 10; ; (#)
`````

#### in call expression

`````js
var O = { p: 1 }, x = 10; foo(#)
`````

