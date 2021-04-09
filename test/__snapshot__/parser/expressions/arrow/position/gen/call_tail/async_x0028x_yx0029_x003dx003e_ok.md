# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: call tail
> :: case: async (x, y) => ok
## Input

`````js
foo(async (x, y) => ok).bar
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
                "kind": 131,
                "expression": {
                    "kind": 81921,
                    "value": "foo",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 3
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 131,
                            "expression": {
                                "kind": 81921,
                                "value": "async",
                                "autofix": 0,
                                "flags": 768,
                                "start": 4,
                                "end": 9
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 11,
                                        "end": 12
                                    },
                                    {
                                        "kind": 81921,
                                        "value": "y",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 13,
                                        "end": 15
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 11,
                                "end": 15
                            },
                            "flags": 256,
                            "start": 4,
                            "end": 16
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 4,
                    "end": 16
                },
                "flags": 256,
                "start": 0,
                "end": 16
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "ok",
                "autofix": 0,
                "flags": 768,
                "start": 19,
                "end": 22
            },
            "autofix": 0,
            "flags": 128,
            "start": 19,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "bar",
                "autofix": 0,
                "flags": 768,
                "start": 24,
                "end": 27
            },
            "autofix": 0,
            "flags": 128,
            "start": 24,
            "end": 27
        }
    ],
    "isModule": false,
    "text": "foo(async (x, y) => ok).bar",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 16,
            "end": 19
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 16,
            "end": 19
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 16,
            "end": 19
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 16,
            "end": 19
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 22,
            "end": 23
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 22,
            "end": 23
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 23,
            "end": 24
        }
    ],
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: call tail
> :: case: async (x, y) => ok
## Input

`````js
foo(async (x, y) => ok).bar
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: call tail
> :: case: async (x, y) => ok
## Input

`````js
foo(async (x, y) => ok).bar
`````
```

