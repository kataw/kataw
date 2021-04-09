# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: in array
> :: case: delete x.y
## Input

`````js
[ delete x.y ]
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
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "text": "[ delete x.y ]",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: in array
> :: case: delete x.y
## Input

`````js
[ delete x.y ]
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: in array
> :: case: delete x.y
## Input

`````js
[ delete x.y ]
`````
```

