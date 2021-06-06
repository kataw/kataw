# Kataw parser test case

> Auto-generated tests to validate error recovery
>

### Cases

> `````js
> (function  a(b,) {});
> `````

> `````js
> (function   (b,) {});
> `````

> `````js
> function* a(b,c,d,) {}
> `````

> `````js
> (function* a(b,c,d,) {});
> `````

> `````js
> (b,) => {};
> `````

> `````js
> (b,c,d,) => {};
> `````

> `````js
> a(1,);
> `````

> `````js
> a(...[],);
> `````

> `````js
> a(1, 2, ...[],);
> `````

> `````js
> a(...[], 2, ...[],);
> `````

> `````js
> a(1,2,3,);
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

#### in function body

`````js
function foo() {#}
`````

#### in function body with strict directive

`````js
function foo() {'use strict'; # }
`````

