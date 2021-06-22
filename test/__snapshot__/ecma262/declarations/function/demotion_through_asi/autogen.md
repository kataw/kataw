# Kataw parser test case

> Auto-generated tests to validate error recovery
>

## Input

### Cases

> `````js
> .foo
> `````

> `````js
> [foo]
> `````

> `````js
> ()
> `````

> `````js
> `x`
> `````

> `````js
>  + x
> `````

> `````js
> /f
> `````

> `````js
> /f/g
> `````

> `````js
> foo
> `````

> `````js
> ++x
> `````

> `````js
> --x
> `````

> `````js
> function f(){}
> `````

> `````js
> {x}
> `````

> `````js
> ;
> `````

> `````js
> 25
> `````

> `````js
> true
> `````

> `````js
> suffix = */ VALUE;
> `````

> `````js
> eval = 1;
> `````

### Templates

#### case


`````js
function f(){
  "use strict"
  #
}
`````
