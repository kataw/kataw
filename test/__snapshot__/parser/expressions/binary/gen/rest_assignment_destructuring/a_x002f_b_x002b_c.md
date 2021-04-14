# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: rest assignment destructuring
> :: case: a / b + c
## Input

`````js
[ ... a / b + c ] = x
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
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
                                "kind": 223,
                                "argument": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 81921,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 768,
                                            "start": 5,
                                            "end": 7
                                        },
                                        "operatorToken": {
                                            "kind": 35640,
                                            "flags": 768,
                                            "start": 7,
                                            "end": 9
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 768,
                                            "start": 9,
                                            "end": 11
                                        },
                                        "flags": 256,
                                        "start": 5,
                                        "end": 11
                                    },
                                    "operatorToken": {
                                        "kind": 34098,
                                        "flags": 768,
                                        "start": 11,
                                        "end": 13
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 768,
                                        "start": 13,
                                        "end": 15
                                    },
                                    "flags": 256,
                                    "start": 5,
                                    "end": 15
                                },
                                "flags": 256,
                                "start": 1,
                                "end": 15
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 1,
                        "end": 15
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 17
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 17,
                    "end": 19
                },
                "right": {
                    "kind": 81921,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 19,
                    "end": 21
                },
                "flags": 256,
                "start": 0,
                "end": 21
            },
            "flags": 128,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "[ ... a / b + c ] = x",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 17,
            "end": 19
        }
    ],
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: rest assignment destructuring
> :: case: a / b + c
## Input

`````js
[ ... a / b + c ] = x
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: rest assignment destructuring
> :: case: a / b + c
## Input

`````js
[ ... a / b + c ] = x
`````
```

