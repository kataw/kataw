# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: `await;
## Options

`````js
{}
`````
## Input

`````js
'use strict'; `await;
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
                "kind": 458761,
                "text": "await;",
                "rawText": "'use strict'",
                "flags": 134217824,
                "start": 13,
                "end": 21
            },
            "flags": 16,
            "start": 13,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "'use strict'; `await;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Unterminated template literal - start: 13, end: 21

```

