# Kataw parser test case

> Auto-generated tests to validate error recovery
>

### Cases

> `````js
> a: class { #a = 1 }
> `````

> `````js
> a: class { #a = () => {} }
> `````

> `````js
> a: class { #a }
> `````

> `````js
> a: class { #a() { } }
> `````

> `````js
> a: class { set #a(foo) { } }
> `````

> `````js
>  a: class { async #a() { } }
> `````

> `````js
> a: class { async *#a() { } }
> `````

### Templates

#### object_expr

`````js
({ # })
`````

#### obj_expr_strict

`````js
'use strict'; ({ # });
`````
