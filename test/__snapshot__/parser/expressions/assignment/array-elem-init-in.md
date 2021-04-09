# Kataw parser test case

## Input

`````js
result = [ x = 'x' in {} ] = vals;
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
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "result",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 336003091,
                    "autofix": 0,
                    "flags": 0,
                    "start": 0,
                    "end": 8
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 125,
                                    "left": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 10,
                                        "end": 12
                                    },
                                    "operatorToken": {
                                        "kind": 67174403,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 10,
                                        "end": 14
                                    },
                                    "right": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 67174403,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 14,
                                            "end": 18
                                        },
                                        "operatorToken": {
                                            "kind": 21006388,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 18,
                                            "end": 21
                                        },
                                        "right": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 23,
                                                "end": 23
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 21,
                                            "end": 24
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 14,
                                        "end": 24
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 10,
                                    "end": 24
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 10,
                            "end": 24
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 8,
                        "end": 26
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 26,
                        "end": 28
                    },
                    "right": {
                        "kind": 81921,
                        "value": "vals",
                        "autofix": 0,
                        "flags": 768,
                        "start": 28,
                        "end": 33
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 8,
                    "end": 33
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 33
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "text": "result = [ x = 'x' in {} ] = vals;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

