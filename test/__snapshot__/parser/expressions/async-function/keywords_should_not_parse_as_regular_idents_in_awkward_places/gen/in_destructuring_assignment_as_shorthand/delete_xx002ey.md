# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: in destructuring assignment as shorthand
> :: case: delete x.y
## Input

`````js
[ delete x.y ] = x
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
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 4259886,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 1,
                                    "end": 8
                                },
                                "expression": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 8,
                                        "end": 10
                                    },
                                    "expression": {
                                        "kind": 81921,
                                        "value": "y",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 11,
                                        "end": 12
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 8,
                                    "end": 12
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 1,
                                "end": 12
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 12
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 14
                },
                "operatorToken": {
                    "kind": 4125,
                    "autofix": 0,
                    "flags": 0,
                    "start": 14,
                    "end": 16
                },
                "right": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 16,
                    "end": 18
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 18
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "text": "[ delete x.y ] = x",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 14,
            "end": 16
        }
    ],
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: in destructuring assignment as shorthand
> :: case: delete x.y
## Input

`````js
[ delete x.y ] = x
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: in destructuring assignment as shorthand
> :: case: delete x.y
## Input

`````js
[ delete x.y ] = x
`````
```

