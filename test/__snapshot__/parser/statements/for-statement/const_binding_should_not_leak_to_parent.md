# Kataw parser test case

## Input

`````js
for (const { x, } = { x: 23 }; a < 1; ) {}; for (const { x, } = { x: 23 }; a < 1; ) {};
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
            "kind": 165,
            "initializer": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 222,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 12,
                                            "end": 14
                                        },
                                        "right": null,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 12,
                                        "end": 14
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": true,
                                "autofix": 0,
                                "flags": 256,
                                "start": 12,
                                "end": 15
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 10,
                            "end": 17
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 81921,
                                            "value": 23,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 24,
                                            "end": 27
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 21,
                                            "end": 23
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 21,
                                        "end": 27
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 21,
                                "end": 27
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 19,
                            "end": 29
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 10,
                        "end": 29
                    }
                ],
                "autofix": 0,
                "flags": 160,
                "start": 10,
                "end": 29
            },
            "condition": null,
            "incrementor": {
                "kind": 198,
                "left": {
                    "kind": 81921,
                    "value": "a",
                    "autofix": 0,
                    "flags": 768,
                    "start": 30,
                    "end": 32
                },
                "operatorToken": {
                    "kind": 536905794,
                    "autofix": 0,
                    "flags": 0,
                    "start": 32,
                    "end": 34
                },
                "right": {
                    "kind": 81921,
                    "value": 1,
                    "autofix": 0,
                    "flags": 768,
                    "start": 34,
                    "end": 36
                },
                "autofix": 0,
                "flags": 256,
                "start": 30,
                "end": 36
            },
            "statement": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "autofix": 0,
                    "flags": 128,
                    "start": 41,
                    "end": 41
                },
                "autofix": 0,
                "flags": 128,
                "start": 39,
                "end": 42
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 42
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
            "start": 42,
            "end": 43
        },
        {
            "kind": 165,
            "initializer": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 222,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 56,
                                            "end": 58
                                        },
                                        "right": null,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 56,
                                        "end": 58
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": true,
                                "autofix": 0,
                                "flags": 256,
                                "start": 56,
                                "end": 59
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 54,
                            "end": 61
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 81921,
                                            "value": 23,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 68,
                                            "end": 71
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 65,
                                            "end": 67
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 65,
                                        "end": 71
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 65,
                                "end": 71
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 63,
                            "end": 73
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 54,
                        "end": 73
                    }
                ],
                "autofix": 0,
                "flags": 160,
                "start": 54,
                "end": 73
            },
            "condition": null,
            "incrementor": {
                "kind": 198,
                "left": {
                    "kind": 81921,
                    "value": "a",
                    "autofix": 0,
                    "flags": 768,
                    "start": 74,
                    "end": 76
                },
                "operatorToken": {
                    "kind": 536905794,
                    "autofix": 0,
                    "flags": 0,
                    "start": 76,
                    "end": 78
                },
                "right": {
                    "kind": 81921,
                    "value": 1,
                    "autofix": 0,
                    "flags": 768,
                    "start": 78,
                    "end": 80
                },
                "autofix": 0,
                "flags": 256,
                "start": 74,
                "end": 80
            },
            "statement": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "autofix": 0,
                    "flags": 128,
                    "start": 85,
                    "end": 85
                },
                "autofix": 0,
                "flags": 128,
                "start": 83,
                "end": 86
            },
            "autofix": 0,
            "flags": 128,
            "start": 43,
            "end": 86
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
            "start": 86,
            "end": 87
        }
    ],
    "isModule": false,
    "text": "for (const { x, } = { x: 23 }; a < 1; ) {}; for (const { x, } = { x: 23 }; a < 1; ) {};",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 87
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

