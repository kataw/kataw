# Kataw parser test case

## Input

`````js
for ([].w ^= s;;) x;

for ([][y] <<= p;;) x;

for ([].u |= c;;) x;

for ({}[y] ^= x;;) x;
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
                "kind": 125,
                "left": {
                    "kind": 129,
                    "member": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 6,
                            "end": 6
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 5,
                        "end": 7
                    },
                    "expression": {
                        "kind": 81921,
                        "value": "w",
                        "autofix": 0,
                        "flags": 768,
                        "start": 8,
                        "end": 9
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 9
                },
                "operatorToken": {
                    "kind": 81921,
                    "autofix": 0,
                    "flags": 0,
                    "start": 0,
                    "end": 12
                },
                "right": {
                    "kind": 81921,
                    "value": "s",
                    "autofix": 0,
                    "flags": 768,
                    "start": 12,
                    "end": 14
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 14
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 17,
                    "end": 19
                },
                "autofix": 0,
                "flags": 128,
                "start": 17,
                "end": 20
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 20
        },
        {
            "kind": 165,
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 130,
                    "member": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 28,
                            "end": 28
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 27,
                        "end": 29
                    },
                    "expression": {
                        "kind": 81921,
                        "value": "y",
                        "autofix": 0,
                        "flags": 768,
                        "start": 30,
                        "end": 31
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 20,
                    "end": 32
                },
                "operatorToken": {
                    "kind": 81921,
                    "autofix": 0,
                    "flags": 0,
                    "start": 20,
                    "end": 36
                },
                "right": {
                    "kind": 81921,
                    "value": "p",
                    "autofix": 0,
                    "flags": 768,
                    "start": 36,
                    "end": 38
                },
                "autofix": 0,
                "flags": 256,
                "start": 20,
                "end": 38
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 41,
                    "end": 43
                },
                "autofix": 0,
                "flags": 128,
                "start": 41,
                "end": 44
            },
            "autofix": 0,
            "flags": 128,
            "start": 20,
            "end": 44
        },
        {
            "kind": 165,
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 129,
                    "member": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 52,
                            "end": 52
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 51,
                        "end": 53
                    },
                    "expression": {
                        "kind": 81921,
                        "value": "u",
                        "autofix": 0,
                        "flags": 768,
                        "start": 54,
                        "end": 55
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 44,
                    "end": 55
                },
                "operatorToken": {
                    "kind": 81921,
                    "autofix": 0,
                    "flags": 0,
                    "start": 44,
                    "end": 58
                },
                "right": {
                    "kind": 81921,
                    "value": "c",
                    "autofix": 0,
                    "flags": 768,
                    "start": 58,
                    "end": 60
                },
                "autofix": 0,
                "flags": 256,
                "start": 44,
                "end": 60
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 63,
                    "end": 65
                },
                "autofix": 0,
                "flags": 128,
                "start": 63,
                "end": 66
            },
            "autofix": 0,
            "flags": 128,
            "start": 44,
            "end": 66
        },
        {
            "kind": 165,
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 130,
                    "member": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 74,
                            "end": 74
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 73,
                        "end": 75
                    },
                    "expression": {
                        "kind": 81921,
                        "value": "y",
                        "autofix": 0,
                        "flags": 768,
                        "start": 76,
                        "end": 77
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 66,
                    "end": 78
                },
                "operatorToken": {
                    "kind": 81921,
                    "autofix": 0,
                    "flags": 0,
                    "start": 66,
                    "end": 81
                },
                "right": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 81,
                    "end": 83
                },
                "autofix": 0,
                "flags": 256,
                "start": 66,
                "end": 83
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 86,
                    "end": 88
                },
                "autofix": 0,
                "flags": 128,
                "start": 86,
                "end": 89
            },
            "autofix": 0,
            "flags": 128,
            "start": 66,
            "end": 89
        }
    ],
    "isModule": false,
    "text": "for ([].w ^= s;;) x;\n\nfor ([][y] <<= p;;) x;\n\nfor ([].u |= c;;) x;\n\nfor ({}[y] ^= x;;) x;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 89
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

