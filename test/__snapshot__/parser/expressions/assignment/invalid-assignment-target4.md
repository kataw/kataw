# Kataw parser test case

## Input

`````js
({x: ({})} = {x: {}})
`````

## Output

### CST

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
                                    "kind": 219,
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 2,
                                        "end": 3
                                    },
                                    "right": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 7,
                                                "end": 7
                                            },
                                            "flags": 48,
                                            "start": 6,
                                            "end": 8
                                        },
                                        "flags": 32,
                                        "start": 4,
                                        "end": 9
                                    },
                                    "flags": 32,
                                    "start": 2,
                                    "end": 9
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 2,
                            "end": 9
                        },
                        "flags": 48,
                        "start": 1,
                        "end": 10
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 10,
                        "end": 12
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 14,
                                        "end": 15
                                    },
                                    "right": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 18,
                                            "end": 18
                                        },
                                        "flags": 48,
                                        "start": 16,
                                        "end": 19
                                    },
                                    "flags": 32,
                                    "start": 14,
                                    "end": 19
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 14,
                            "end": 19
                        },
                        "flags": 48,
                        "start": 12,
                        "end": 20
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 20
                },
                "flags": 32,
                "start": 0,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "({x: ({})} = {x: {}})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side must be a variable or a property access. - start: 1, end: 12

```

