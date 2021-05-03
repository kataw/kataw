# Kataw parser test case

## Input

`````js
({790: false} = x)
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
                                    "kind": 219,
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 134,
                                        "text": false,
                                        "flags": 96,
                                        "start": 6,
                                        "end": 12
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 790,
                                        "rawText": "790",
                                        "flags": 96,
                                        "start": 2,
                                        "end": 5
                                    },
                                    "flags": 32,
                                    "start": 2,
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
                        "text": "x",
                        "rawText": "x",
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
    "source": "({790: false} = x)",
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
✖ The left-hand side must be a variable or a property access. - start: 13, end: 15

```

