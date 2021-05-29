# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-29
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: yield
## Input

`````js
'use strict'; yield
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "'use strict'",
            "flags": 4194400,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "yield",
                "rawText": "yield",
                "flags": 96,
                "start": 13,
                "end": 19
            },
            "flags": 16,
            "start": 13,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "'use strict'; yield",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

yield;
```

### Diagnostics

```javascript
✔ No errors
```

