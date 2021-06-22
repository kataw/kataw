# Kataw parser test case

> Auto-generated tests to validate error recovery
>

### Cases

> `````js
> x = function await() {}
> `````

> `````js
> x = function *await() {}
> `````

> `````js
> x = function() { let await = 0; }
> `````

> `````js
> x = () => { let await = 0; }
> `````

### Templates

#### async function

`````js
var f = async function f(#) {}
`````

#### with strict directive

`````js
'use strict'; var f = async function f(#) {}
`````

#### in arrow

`````js
'use strict'; var f = async(#) => {}
`````
