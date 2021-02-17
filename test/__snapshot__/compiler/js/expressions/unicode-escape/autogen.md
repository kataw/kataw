# Kataw parser test case

> Auto-generated tests to validate error recovery
>

### Cases

> `````js
> var foob\\u123r = 0;
> `````

> `````js
> var \\u123roo = 0;
> `````

> `````js
> var foob\\v1234r = 0;
> `````

> `````js
> var foob\\U1234r = 0;
> `````

> `````js
> var foob\\u{}ar = 0;
> `````

> `````js
> /regex/\\u006g
> `````

> `````js
> var \\u0052oo = 0;
> `````

> `````js
> var \\u{0052}oo = 0;
> `````

> `````js
> var foob\\u{c481}r = 0;
> `````

> `````js
> var \\u{0052}oo = 0;
> `````

> `````js
> var \\u{52}oo = 0;
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
