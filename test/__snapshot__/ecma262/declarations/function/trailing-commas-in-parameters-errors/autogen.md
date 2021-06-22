# Kataw parser test case

> Auto-generated tests to validate error recovery
>

### Cases

> `````js
> function  a(b,,) {}
> `````

> `````js
> (function  a(b,,) {});
> `````

> `````js
> (function* a(b,,) {});
> `````

> `````js
> (function*  (b,,) {});
> `````

> `````js
> (function* a(b,c,d,,) {});
> `````

> `````js
> (b,,) => {};
> `````

> `````js
> a(1,,);
> `````

> `````js
> a(1,2,3,,);
> `````

> `````js
> function  a1(,) {}
> `````

> `````js
> (,) => {};
> `````

> `````js
> function  a(...b,) {}
> `````

> `````js
> function* a(...b,) {}
> `````

> `````js
> (function  a(...b,) {});
> `````

> `````js
> (function*  (...b,) {});
> `````

> `````js
> function* a(b, c, ...d,) {}
> `````

> `````js
> (function  a(b, c, ...d,) {});
> `````

> `````js
> (function* a(b, c, ...d,) {});
> `````

> `````js
> (function*  (b, c, ...d,) {});
> `````

> `````js
> (...b,) => {};
> `````

> `````js
> (b, c, ...d,) => {};
> `````

> `````js
> (,);
> `````

> `````js
> (a,);
> `````

> `````js
> (a,b,c,);
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

