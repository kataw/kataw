# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: await.b[c] => async
## Input

`````js
'use strict'; await.b[c] => async
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
                "kind": 130,
                "member": {
                    "kind": 129,
                    "member": {
                        "kind": 81921,
                        "value": "await",
                        "autofix": 0,
                        "flags": 768,
                        "start": 13,
                        "end": 19
                    },
                    "expression": {
                        "kind": 81921,
                        "value": "b",
                        "autofix": 0,
                        "flags": 768,
                        "start": 20,
                        "end": 21
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 13,
                    "end": 21
                },
                "expression": {
                    "kind": 81921,
                    "value": "c",
                    "autofix": 0,
                    "flags": 768,
                    "start": 22,
                    "end": 23
                },
                "autofix": 0,
                "flags": 256,
                "start": 13,
                "end": 24
            },
            "autofix": 0,
            "flags": 128,
            "start": 13,
            "end": 24
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "async",
                "autofix": 0,
                "flags": 768,
                "start": 27,
                "end": 33
            },
            "autofix": 0,
            "flags": 128,
            "start": 27,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "'use strict'; await.b[c] => async",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 24,
            "end": 27
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 24,
            "end": 27
        }
    ],
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: await.b[c] => async
## Input

`````js
'use strict'; await.b[c] => async
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: await.b[c] => async
## Input

`````js
'use strict'; await.b[c] => async
`````
```

