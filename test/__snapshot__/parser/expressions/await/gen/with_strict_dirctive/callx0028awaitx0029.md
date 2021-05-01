# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: call(await)
## Input

`````js
'use strict'; call(await)
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
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "original": "call",
                    "text": "call",
                    "rawText": " call",
                    "flags": 96,
                    "start": 13,
                    "end": 18
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "original": "await",
                            "text": "await",
                            "rawText": "await",
                            "flags": 96,
                            "start": 19,
                            "end": 24
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 19,
                    "end": 24
                },
                "flags": 32,
                "start": 13,
                "end": 25
            },
            "flags": 16,
            "start": 13,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "'use strict'; call(await)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
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

