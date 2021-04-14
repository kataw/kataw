# Kataw parser test case

## Input

`````js
[((((((x = y))))))] = obj
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
                                "kind": 121,
                                "expression": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 125,
                                                        "left": {
                                                            "kind": 81921,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 768,
                                                            "start": 7,
                                                            "end": 8
                                                        },
                                                        "operatorToken": {
                                                            "kind": 4125,
                                                            "flags": 768,
                                                            "start": 8,
                                                            "end": 10
                                                        },
                                                        "right": {
                                                            "kind": 81921,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 768,
                                                            "start": 10,
                                                            "end": 12
                                                        },
                                                        "flags": 256,
                                                        "start": 6,
                                                        "end": 12
                                                    },
                                                    "flags": 256,
                                                    "start": 6,
                                                    "end": 13
                                                },
                                                "flags": 256,
                                                "start": 5,
                                                "end": 14
                                            },
                                            "flags": 256,
                                            "start": 4,
                                            "end": 15
                                        },
                                        "flags": 256,
                                        "start": 3,
                                        "end": 16
                                    },
                                    "flags": 256,
                                    "start": 2,
                                    "end": 17
                                },
                                "flags": 256,
                                "start": 1,
                                "end": 18
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 1,
                        "end": 18
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 19
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 19,
                    "end": 21
                },
                "right": {
                    "kind": 81921,
                    "text": "obj",
                    "rawText": "obj",
                    "flags": 768,
                    "start": 21,
                    "end": 25
                },
                "flags": 256,
                "start": 0,
                "end": 25
            },
            "flags": 128,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "text": "[((((((x = y))))))] = obj",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 19,
            "end": 21
        }
    ],
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

