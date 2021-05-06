# Kataw parser test case

## Input

`````js
([a]) = [];

({a}) = {};
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
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 2,
                                    "end": 3
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 2,
                            "end": 3
                        },
                        "flags": 32,
                        "start": 1,
                        "end": 4
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 5
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 5,
                    "end": 7
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 9,
                        "end": 9
                    },
                    "flags": 32,
                    "start": 7,
                    "end": 10
                },
                "flags": 32,
                "start": 0,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 15,
                                    "end": 16
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 15,
                            "end": 16
                        },
                        "flags": 32,
                        "start": 14,
                        "end": 17
                    },
                    "flags": 32,
                    "start": 11,
                    "end": 18
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 18,
                    "end": 20
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 22,
                        "end": 22
                    },
                    "flags": 32,
                    "start": 20,
                    "end": 23
                },
                "flags": 32,
                "start": 11,
                "end": 23
            },
            "flags": 16,
            "start": 11,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "([a]) = [];\n\n({a}) = {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 5, end: 7
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 18, end: 20

```

