# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: in computed key
> :: case: a + b instanceof c
## Input

`````js
x = {[ a + b instanceof c ]: y}
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
                                    "kind": 81921,
                                    "value": "y",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 28,
                                    "end": 30
                                },
                                "right": {
                                    "kind": 194,
                                    "expression": {
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
                                            "kind": 34098,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 8,
                                            "end": 10
                                        },
                                        "right": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 81921,
                                                "value": "b",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 10,
                                                "end": 12
                                            },
                                            "operatorToken": {
                                                "kind": 4229173,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 12,
                                                "end": 23
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": "c",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 23,
                                                "end": 25
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 12,
                                            "end": 25
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 6,
                                        "end": 25
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 5,
                                    "end": 27
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 5,
                                "end": 30
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 5,
                        "end": 30
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 3,
                    "end": 31
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 31
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "x = {[ a + b instanceof c ]: y}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: in computed key
> :: case: a + b instanceof c
## Input

`````js
x = {[ a + b instanceof c ]: y}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: in computed key
> :: case: a + b instanceof c
## Input

`````js
x = {[ a + b instanceof c ]: y}
`````
```

