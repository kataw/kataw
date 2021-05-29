# Kataw parser test case

> Auto-generated tests to validate error recovery
>

## Input

### Cases

> `````js
> let
> `````

> `````js
> let = 1
> `````

> `````js
> for (let = 1; let < 1; let++) {}
> `````

> `````js
> for (let in {}) {}
> `````

> `````js
> for (var let = 1; let < 1; let++) {}
> `````

> `````js
> for (var let in {}) {}
> `````

> `````js
> for (var [let] in {}) {}
> `````

> `````js
> var let
> `````

> `````js
> var [let] = []
> `````

### Templates

#### stand alone

`````js
#
`````
#### with strict directive

`````js
"use strict"; #
`````
