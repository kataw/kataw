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
    "kind": 2243,
    "source": "'use strict'; #",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "use strict",
                "rawText": "use strict",
                "flags": 33554432,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 12
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 13
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "#",
                "rawText": "use strict",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 13,
                "end": 15
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 13,
            "end": 15
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 15,
            "length": 1
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
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

