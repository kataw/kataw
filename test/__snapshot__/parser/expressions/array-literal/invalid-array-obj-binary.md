# Kataw parser test case

## Input

`````js
[{} = 2/=2]
`````

## Options

### Parser Options

`````js
{}
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
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 125,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 2,
                                    "end": 2
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 1,
                                "end": 3
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "autofix": 0,
                                "flags": 0,
                                "start": 3,
                                "end": 5
                            },
                            "right": {
                                "kind": 125,
                                "left": {
                                    "kind": 81921,
                                    "value": 2,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 5,
                                    "end": 7
                                },
                                "operatorToken": {
                                    "kind": 67174402,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 5,
                                    "end": 9
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": 2,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 9,
                                    "end": 10
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 5,
                                "end": 10
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 1,
                            "end": 10
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 10
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 11
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "text": "[{} = 2/=2]",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 7,
            "end": 9
        }
    ],
    "start": 0,
    "end": 11
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

