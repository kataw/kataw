# Kataw parser test case

## Input

`````js
([x, y]) = z;
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
                    "kind": 121,
                    "expression": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 2,
                                    "end": 3
                                },
                                {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": " y",
                                    "flags": 96,
                                    "start": 4,
                                    "end": 6
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 2,
                            "end": 6
                        },
                        "flags": 32,
                        "start": 1,
                        "end": 7
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 8
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 8,
                    "end": 10
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": " z",
                    "flags": 96,
                    "start": 10,
                    "end": 12
                },
                "flags": 32,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "([x, y]) = z;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 8, end: 10

```

