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
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 12
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "#",
                "autofix": 0,
                "flags": 768,
                "start": 13,
                "end": 15
            },
            "autofix": 0,
            "flags": 128,
            "start": 13,
            "end": 15
        }
    ],
    "isModule": false,
    "text": "'use strict'; #",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 13,
            "end": 15
        }
    ],
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

```

