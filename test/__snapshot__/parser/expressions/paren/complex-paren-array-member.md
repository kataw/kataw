# Kataw parser test case

## Input

`````js
([...[([...[].x] = x)].x] = x);
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
                "kind": 121,
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
                                        "flags": 2,
                                        "start": 0,
                                        "end": 5
                                    },
                                    "argument": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 121,
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
                                                                                "flags": 8,
                                                                                "start": 0,
                                                                                "end": 11
                                                                            },
                                                                            "argument": {
                                                                                "kind": 129,
                                                                                "member": {
                                                                                    "kind": 119,
                                                                                    "elementList": {
                                                                                        "kind": 270,
                                                                                        "elements": [],
                                                                                        "trailingComma": false,
                                                                                        "flags": 256,
                                                                                        "start": 12,
                                                                                        "end": 12
                                                                                    },
                                                                                    "flags": 256,
                                                                                    "start": 11,
                                                                                    "end": 13
                                                                                },
                                                                                "expression": {
                                                                                    "kind": 134299649,
                                                                                    "text": "x",
                                                                                    "rawText": "x",
                                                                                    "flags": 768,
                                                                                    "start": 14,
                                                                                    "end": 15
                                                                                },
                                                                                "flags": 256,
                                                                                "start": 11,
                                                                                "end": 15
                                                                            },
                                                                            "flags": 256,
                                                                            "start": 8,
                                                                            "end": 15
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 256,
                                                                    "start": 8,
                                                                    "end": 15
                                                                },
                                                                "flags": 256,
                                                                "start": 7,
                                                                "end": 16
                                                            },
                                                            "operatorToken": {
                                                                "kind": 4125,
                                                                "flags": 512,
                                                                "start": 16,
                                                                "end": 18
                                                            },
                                                            "right": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 768,
                                                                "start": 18,
                                                                "end": 20
                                                            },
                                                            "flags": 256,
                                                            "start": 7,
                                                            "end": 20
                                                        },
                                                        "flags": 256,
                                                        "start": 6,
                                                        "end": 21
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 6,
                                                "end": 21
                                            },
                                            "flags": 256,
                                            "start": 5,
                                            "end": 22
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 23,
                                            "end": 24
                                        },
                                        "flags": 256,
                                        "start": 5,
                                        "end": 24
                                    },
                                    "flags": 256,
                                    "start": 2,
                                    "end": 24
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 2,
                            "end": 24
                        },
                        "flags": 256,
                        "start": 1,
                        "end": 25
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 512,
                        "start": 25,
                        "end": 27
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 27,
                        "end": 29
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 29
                },
                "flags": 256,
                "start": 0,
                "end": 30
            },
            "flags": 128,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "([...[([...[].x] = x)].x] = x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 16, end: 18
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 25, end: 27

```

