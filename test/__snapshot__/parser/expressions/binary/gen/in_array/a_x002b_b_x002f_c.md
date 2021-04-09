# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: in array
> :: case: a + b / c
## Input

`````js
[ a + b / c ]
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
                            "kind": 198,
                            "left": {
                                "kind": 81921,
                                "value": "a",
                                "autofix": 0,
                                "flags": 768,
                                "start": 1,
                                "end": 3
                            },
                            "operatorToken": {
                                "kind": 34098,
                                "autofix": 0,
                                "flags": 0,
                                "start": 3,
                                "end": 5
                            },
                            "right": {
                                "kind": 198,
                                "left": {
                                    "kind": 81921,
                                    "value": "b",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 5,
                                    "end": 7
                                },
                                "operatorToken": {
                                    "kind": 35640,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 7,
                                    "end": 9
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "c",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 9,
                                    "end": 11
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 7,
                                "end": 11
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 1,
                            "end": 11
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 11
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 13
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "text": "[ a + b / c ]",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: in array
> :: case: a + b / c
## Input

`````js
[ a + b / c ]
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: in array
> :: case: a + b / c
## Input

`````js
[ a + b / c ]
`````
```

