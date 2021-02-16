# Kataw parser test case

> Auto-generated tests to validate error recovery
>

## Input

### Cases


> `````js
> async ()=>x
> `````

> `````js
> class{}
> `````

> `````js
> delete x.y
> `````

> `````js
> false
> `````

> `````js
> function(){}
> `````

> `````js
> new x
> `````

> `````js
> null
> `````

> `````js
> true
> `````

> `````js
> this
> `````

> `````js
> typeof x
> `````

> `````js
> void x
> `````

> `````js
> x + y
> `````

> `````js
> [].length
> `````

> `````js
> [x].length
> `````

> `````js
> {}.length
> `````

> `````js
> {x: y}.length
> `````

### Templates

#### in array

`````js
[ # ]
`````

#### in destructuring assignment as shorthand

property is valid assignment target so should work

`````js
[ # ] = x
`````

#### in arrow head

`````js
([ # ]) => {}
`````
