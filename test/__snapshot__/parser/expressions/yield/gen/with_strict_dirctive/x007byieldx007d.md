# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: {yield}
## Input

`````js
'use strict'; {yield}
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
            "flags": 4194400,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "yield",
                            "rawText": "yield",
                            "flags": 96,
                            "start": 15,
                            "end": 20
                        },
                        "flags": 16,
                        "start": 15,
                        "end": 20
                    }
                ],
                "multiLine": false,
                "flags": 16,
                "start": 15,
                "end": 20
            },
            "flags": 16,
            "start": 13,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "'use strict'; {yield}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
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

