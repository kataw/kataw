# Kataw parser test case

> Auto-generated tests to validate error recovery
>

### Cases

> `````js
> ...([1, 2, 3])
> `````

> `````js
> ...'123', ...'456'
> `````

> `````js
> ...new Set([1, 2, 3]), 4
> `````

> `````js
> 1, ...[2, 3], 4
> `````

> `````js
> ...Array(...[1,2,3,4])
> `````

> `````js
> 0, 1, ...[2, 3, 4], 5, 6, 7, ...'89'
> `````

> `````js
> 0, 1, ...[2, 3, 4], 5, 6, 7, ...'89', 10
> `````

> `````js
> ...[0, 1, 2], 3, 4, 5, 6, ...'7', 8, 9
> `````

> `````js
> ...[0, 1, 2], 3, 4, 5, 6, ...'7', 8, 9, ...[10]
> `````

### Templates

#### wih-use-strict

`````js
function fn() { 'use strict';} fn( # );
`````

#### as-func-decl

`````js
function fn() {} fn( # );
`````
