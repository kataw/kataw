# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: in object
> :: case: a instanceof b > c
## Input

`````js
x = { a: a instanceof b > c }
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
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 268501004,
                    "autofix": 0,
                    "flags": 0,
                    "start": 0,
                    "end": 3
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 81921,
                                            "value": "a",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 8,
                                            "end": 10
                                        },
                                        "operatorToken": {
                                            "kind": 4229173,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 10,
                                            "end": 21
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": "b",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 21,
                                            "end": 23
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 5,
                                        "end": 23
                                    },
                                    "operatorToken": {
                                        "kind": 34883,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 23,
                                        "end": 25
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "c",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 25,
                                        "end": 27
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 5,
                                    "end": 27
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "a",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 5,
                                    "end": 7
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 5,
                                "end": 27
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 5,
                        "end": 27
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 3,
                    "end": 29
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 29
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "text": "x = { a: a instanceof b > c }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: in object
> :: case: a instanceof b > c
## Input

`````js
x = { a: a instanceof b > c }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: in object
> :: case: a instanceof b > c
## Input

`````js
x = { a: a instanceof b > c }
`````
```

