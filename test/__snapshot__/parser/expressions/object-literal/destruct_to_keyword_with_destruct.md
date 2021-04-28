# Kataw parser test case

## Input

`````js
s = {s: true = x} = x
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
                    "kind": 134299649,
                    "text": "s",
                    "rawText": "s",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 134,
                                            "text": true,
                                            "flags": 768,
                                            "start": 7,
                                            "end": 12
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 768,
                                            "start": 12,
                                            "end": 14
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 14,
                                            "end": 16
                                        },
                                        "flags": 256,
                                        "start": 5,
                                        "end": 16
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "s",
                                        "rawText": "s",
                                        "flags": 768,
                                        "start": 5,
                                        "end": 6
                                    },
                                    "flags": 256,
                                    "start": 5,
                                    "end": 16
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 5,
                            "end": 16
                        },
                        "flags": 256,
                        "start": 3,
                        "end": 17
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 17,
                        "end": 19
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 19,
                        "end": 21
                    },
                    "flags": 256,
                    "start": 3,
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
    "text": "s = {s: true = x} = x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 12, end: 14
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 17, end: 19

```

