# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: c
> :: test: inside an async func
> :: case: d\u0065lete
## Input

`````js
async () => {  d\u0065lete = x  }
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
                    "value": "async",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 5
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 7,
                    "end": 7
                },
                "flags": 256,
                "start": 0,
                "end": 8
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 8
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 125,
                            "left": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 4259886,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 13,
                                    "end": 26
                                },
                                "expression": {
                                    "kind": 253,
                                    "text": "",
                                    "autofix": 0,
                                    "flags": 12,
                                    "start": 26,
                                    "end": 26
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 13,
                                "end": 26
                            },
                            "operatorToken": {
                                "kind": 81921,
                                "autofix": 0,
                                "flags": 0,
                                "start": 13,
                                "end": 28
                            },
                            "right": {
                                "kind": 81921,
                                "value": "x",
                                "autofix": 0,
                                "flags": 768,
                                "start": 28,
                                "end": 30
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 13,
                            "end": 30
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 13,
                        "end": 30
                    }
                ],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 13,
                "end": 30
            },
            "autofix": 0,
            "flags": 128,
            "start": 11,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "async () => {  d\\u0065lete = x  }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 8,
            "end": 11
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 8,
            "end": 11
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 26,
            "end": 28
        },
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 26,
            "end": 28
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
- Path: c
> :: test: inside an async func
> :: case: d\u0065lete
## Input

`````js
async () => {  d\u0065lete = x  }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: c
> :: test: inside an async func
> :: case: d\u0065lete
## Input

`````js
async () => {  d\u0065lete = x  }
`````
```

