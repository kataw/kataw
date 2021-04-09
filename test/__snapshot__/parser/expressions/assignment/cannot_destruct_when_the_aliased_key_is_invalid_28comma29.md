# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
x, {a: 1} = [];
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 81921,
                        "value": "x",
                        "autofix": 0,
                        "flags": 768,
                        "start": 0,
                        "end": 1
                    },
                    {
                        "kind": 125,
                        "left": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 81921,
                                            "value": 1,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 6,
                                            "end": 8
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": "a",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 4,
                                            "end": 5
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 4,
                                        "end": 8
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 4,
                                "end": 8
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 2,
                            "end": 9
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "autofix": 0,
                            "flags": 0,
                            "start": 9,
                            "end": 11
                        },
                        "right": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 13,
                                "end": 13
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 11,
                            "end": 14
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 2,
                        "end": 14
                    }
                ],
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 14
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": true,
    "text": "x, {a: 1} = [];",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 9,
            "end": 11
        }
    ],
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

