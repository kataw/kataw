# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: await = 1
## Input

`````js
'use strict'; await = 1
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "original": "'use strict'",
                "rawText": "'use strict'",
                "flags": 4194400,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "original": "await",
                    "text": "await",
                    "rawText": " await",
                    "flags": 96,
                    "start": 13,
                    "end": 19
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 19,
                    "end": 21
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "original": "1",
                    "rawText": " 1",
                    "flags": 96,
                    "start": 21,
                    "end": 23
                },
                "flags": 32,
                "start": 13,
                "end": 23
            },
            "flags": 16,
            "start": 13,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "'use strict'; await = 1",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

