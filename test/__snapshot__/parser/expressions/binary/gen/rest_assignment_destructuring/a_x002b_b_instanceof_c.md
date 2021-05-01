# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: rest assignment destructuring
> :: case: a + b instanceof c
## Input

`````js
[ ... a + b instanceof c ] = x
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
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 0,
                                    "start": 1,
                                    "end": 5
                                },
                                "argument": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": " a",
                                        "flags": 96,
                                        "start": 5,
                                        "end": 7
                                    },
                                    "operatorToken": {
                                        "kind": 34098,
                                        "flags": 64,
                                        "start": 7,
                                        "end": 9
                                    },
                                    "right": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": " b",
                                            "flags": 96,
                                            "start": 9,
                                            "end": 11
                                        },
                                        "operatorToken": {
                                            "kind": 4229173,
                                            "flags": 64,
                                            "start": 11,
                                            "end": 22
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": " c",
                                            "flags": 96,
                                            "start": 22,
                                            "end": 24
                                        },
                                        "flags": 32,
                                        "start": 11,
                                        "end": 24
                                    },
                                    "flags": 32,
                                    "start": 5,
                                    "end": 24
                                },
                                "flags": 32,
                                "start": 1,
                                "end": 24
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1,
                        "end": 24
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 26
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 26,
                    "end": 28
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": " x",
                    "flags": 96,
                    "start": 28,
                    "end": 30
                },
                "flags": 32,
                "start": 0,
                "end": 30
            },
            "flags": 16,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "[ ... a + b instanceof c ] = x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 26, end: 28

```

