# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: async(await);
## Input

`````js
'use strict'; async(await);
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
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "original": "async",
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 13,
                "end": 19
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
                        "start": 20,
                        "end": 25
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 13,
                "end": 13
            },
            "flags": 32,
            "start": 13,
            "end": 26
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 26,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "'use strict'; async(await);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
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

