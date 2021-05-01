# Kataw parser test case

## Input

`````js
({...a, ...b} = x)
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
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 0,
                                        "start": 2,
                                        "end": 5
                                    },
                                    "argument": {
                                        "kind": 134299649,
                                        "original": "a",
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 5,
                                        "end": 6
                                    },
                                    "flags": 32,
                                    "start": 2,
                                    "end": 6
                                },
                                {
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 0,
                                        "start": 7,
                                        "end": 11
                                    },
                                    "argument": {
                                        "kind": 134299649,
                                        "original": "b",
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 11,
                                        "end": 12
                                    },
                                    "flags": 32,
                                    "start": 7,
                                    "end": 12
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 2,
                            "end": 12
                        },
                        "flags": 32,
                        "start": 1,
                        "end": 13
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 13,
                        "end": 15
                    },
                    "right": {
                        "kind": 134299649,
                        "original": "x",
                        "text": "x",
                        "rawText": " x",
                        "flags": 96,
                        "start": 15,
                        "end": 17
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 17
                },
                "flags": 32,
                "start": 0,
                "end": 18
            },
            "flags": 16,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "({...a, ...b} = x)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 13, end: 15

```

