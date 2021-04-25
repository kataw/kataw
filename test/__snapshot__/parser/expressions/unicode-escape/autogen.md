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

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "use strict",
            "flags": 67109632,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [],
    "isModule": false,
    "text": "'use strict'; #",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 13, end: 15
@{x2716}@ Private identifiers are not allowed outside class_bodies - start: 13, end: 15

```

