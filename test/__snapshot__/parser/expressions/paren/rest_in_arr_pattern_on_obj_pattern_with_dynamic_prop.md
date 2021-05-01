# Kataw parser test case

## Input

`````js
([...{}[x]] = x);
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
                                        "flags": 0,
                                        "start": 2,
                                        "end": 5
                                    },
                                    "argument": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 6,
                                                "end": 6
                                            },
                                            "flags": 32,
                                            "start": 5,
                                            "end": 7
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 8,
                                            "end": 9
                                        },
                                        "flags": 32,
                                        "start": 5,
                                        "end": 10
                                    },
                                    "flags": 32,
                                    "start": 2,
                                    "end": 10
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 2,
                            "end": 10
                        },
                        "flags": 32,
                        "start": 1,
                        "end": 11
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 11,
                        "end": 13
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": " x",
                        "flags": 96,
                        "start": 13,
                        "end": 15
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 15
                },
                "flags": 32,
                "start": 0,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "([...{}[x]] = x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 11, end: 13

```

