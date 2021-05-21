# Kataw parser test case

> Auto-generated tests to validate error recovery
>

## Input

### Cases

> `````js
> let {...obj1,} = foo
> `````

> `````js
> let {...obj1,a} = foo
> `````

> `````js
> let {...obj1,...obj2} = foo
> `````

> `````js
> let {...(obj)} = foo
> `````

> `````js
> let {...(a,b)} = foo
> `````

> `````js
> let {...{a,b}} = foo
> `````

> `````js
> let {...[a,b]} = foo
> `````

### Templates

#### case

`````js
#
`````
