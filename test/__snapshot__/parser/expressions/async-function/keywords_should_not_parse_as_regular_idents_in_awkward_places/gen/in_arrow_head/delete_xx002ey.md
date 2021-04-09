# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: in arrow head
> :: case: delete x.y
## Input

`````js
([ delete x.y ]) => {}
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
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 4259886,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 2,
                                        "end": 9
                                    },
                                    "expression": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 9,
                                            "end": 11
                                        },
                                        "expression": {
                                            "kind": 81921,
                                            "value": "y",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 12,
                                            "end": 13
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 9,
                                        "end": 13
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 2,
                                    "end": 13
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 2,
                            "end": 13
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 15
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 21,
                        "end": 21
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 19,
                    "end": 22
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 22
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "([ delete x.y ]) => {}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 31,
            "error": "The left hand side of the arrow is not destructible ",
            "start": 16,
            "end": 19
        }
    ],
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: in arrow head
> :: case: delete x.y
## Input

`````js
([ delete x.y ]) => {}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: in arrow head
> :: case: delete x.y
## Input

`````js
([ delete x.y ]) => {}
`````
```

