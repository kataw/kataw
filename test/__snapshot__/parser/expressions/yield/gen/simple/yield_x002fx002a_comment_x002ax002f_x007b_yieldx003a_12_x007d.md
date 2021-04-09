# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: yield /* comment */ { yield: 12 }
## Input

`````js
yield /* comment */ { yield: 12 }
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
                "kind": 81921,
                "value": "yield",
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 5
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 81921,
                            "value": "yield",
                            "autofix": 0,
                            "flags": 768,
                            "start": 21,
                            "end": 27
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 21,
                        "end": 27
                    }
                ],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 21,
                "end": 27
            },
            "autofix": 0,
            "flags": 128,
            "start": 5,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 12,
                "autofix": 0,
                "flags": 768,
                "start": 28,
                "end": 31
            },
            "autofix": 0,
            "flags": 128,
            "start": 28,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "yield /* comment */ { yield: 12 }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 5,
            "end": 21
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 27,
            "end": 28
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 27,
            "end": 28
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 27,
            "end": 28
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 31,
            "end": 33
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
> :: test: simple
> :: case: yield /* comment */ { yield: 12 }
## Input

`````js
yield /* comment */ { yield: 12 }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: yield /* comment */ { yield: 12 }
## Input

`````js
yield /* comment */ { yield: 12 }
`````
```

