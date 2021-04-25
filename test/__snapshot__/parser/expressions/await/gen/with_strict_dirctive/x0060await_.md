# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: `await;
## Input

`````js
'use strict'; `await;
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
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 458761,
                "text": "await;",
                "rawText": "use strict",
                "flags": 768,
                "start": 13,
                "end": 21
            },
            "flags": 128,
            "start": 13,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "'use strict'; `await;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unterminated template literal - start: 13, end: 21

```

