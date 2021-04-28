# Kataw parser test case

## Input

`````js
[...{a: true=x} = c]
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
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 1,
                                "start": 0,
                                "end": 4
                            },
                            "argument": {
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
                                                        "flags": 12,
                                                        "start": 512,
                                                        "end": 13
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 768,
                                                        "start": 13,
                                                        "end": 14
                                                    },
                                                    "flags": 256,
                                                    "start": 5,
                                                    "end": 14
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 768,
                                                    "start": 5,
                                                    "end": 6
                                                },
                                                "flags": 256,
                                                "start": 5,
                                                "end": 14
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "start": 5,
                                        "end": 14
                                    },
                                    "flags": 256,
                                    "start": 4,
                                    "end": 15
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 15,
                                    "start": 512,
                                    "end": 17
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 768,
                                    "start": 17,
                                    "end": 19
                                },
                                "flags": 256,
                                "start": 4,
                                "end": 19
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 19
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 1,
                    "end": 19
                },
                "flags": 256,
                "start": 0,
                "end": 20
            },
            "flags": 128,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "[...{a: true=x} = c]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 12, end: 13
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 15, end: 17

```

