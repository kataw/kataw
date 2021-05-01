# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: await 5;
## Input

`````js
'use strict'; await 5;
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
                "kind": 134299649,
                "original": "await",
                "text": "await",
                "rawText": " await",
                "flags": 96,
                "start": 13,
                "end": 19
            },
            "flags": 16,
            "start": 13,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 5,
                "original": "5",
                "rawText": " 5",
                "flags": 96,
                "start": 19,
                "end": 21
            },
            "flags": 16,
            "start": 19,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "'use strict'; await 5;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expected a `;` - start: 19, end: 21

```

