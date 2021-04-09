# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: rest param destructuring
> :: case: a / b + c
## Input

`````js
([ ... a / b + c ]) => x
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
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 223,
                                    "argument": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 81921,
                                                "value": "a",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 6,
                                                "end": 8
                                            },
                                            "operatorToken": {
                                                "kind": 35640,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 8,
                                                "end": 10
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": "b",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 10,
                                                "end": 12
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 6,
                                            "end": 12
                                        },
                                        "operatorToken": {
                                            "kind": 34098,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 12,
                                            "end": 14
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": "c",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 14,
                                            "end": 16
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 6,
                                        "end": 16
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 2,
                                    "end": 16
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 2,
                            "end": 16
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 18
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 22,
                    "end": 24
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 24
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "text": "([ ... a / b + c ]) => x",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 31,
            "error": "The left hand side of the arrow is not destructible ",
            "start": 19,
            "end": 22
        }
    ],
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: rest param destructuring
> :: case: a / b + c
## Input

`````js
([ ... a / b + c ]) => x
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: rest param destructuring
> :: case: a / b + c
## Input

`````js
([ ... a / b + c ]) => x
`````
```

