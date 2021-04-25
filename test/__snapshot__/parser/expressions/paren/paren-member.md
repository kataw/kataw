# Kataw parser test case

## Input

`````js
(a[b]);
(a[{}]);
(a[[]]);
(a[1]);

(x, a[b]);
(x, a[{}]);
(x, a[[]]);
(x, a[1]);
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
                    "kind": 130,
                    "member": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 768,
                        "start": 1,
                        "end": 2
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 768,
                        "start": 3,
                        "end": 4
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 5
                },
                "flags": 256,
                "start": 0,
                "end": 6
            },
            "flags": 128,
            "start": 0,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 130,
                    "member": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 768,
                        "start": 9,
                        "end": 10
                    },
                    "expression": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 12,
                            "end": 12
                        },
                        "flags": 256,
                        "start": 11,
                        "end": 13
                    },
                    "flags": 256,
                    "start": 7,
                    "end": 14
                },
                "flags": 256,
                "start": 7,
                "end": 15
            },
            "flags": 128,
            "start": 7,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 130,
                    "member": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 768,
                        "start": 18,
                        "end": 19
                    },
                    "expression": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 21,
                            "end": 21
                        },
                        "flags": 256,
                        "start": 20,
                        "end": 22
                    },
                    "flags": 256,
                    "start": 16,
                    "end": 23
                },
                "flags": 256,
                "start": 16,
                "end": 24
            },
            "flags": 128,
            "start": 16,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 130,
                    "member": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 768,
                        "start": 27,
                        "end": 28
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": 1,
                        "rawText": "1",
                        "flags": 768,
                        "start": 29,
                        "end": 30
                    },
                    "flags": 256,
                    "start": 25,
                    "end": 31
                },
                "flags": 256,
                "start": 25,
                "end": 32
            },
            "flags": 128,
            "start": 25,
            "end": 33
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 36,
                            "end": 37
                        },
                        {
                            "kind": 130,
                            "member": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 38,
                                "end": 40
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 768,
                                "start": 41,
                                "end": 42
                            },
                            "flags": 256,
                            "start": 33,
                            "end": 43
                        }
                    ],
                    "flags": 256,
                    "start": 33,
                    "end": 44
                },
                "flags": 256,
                "start": 33,
                "end": 44
            },
            "flags": 128,
            "start": 33,
            "end": 45
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 47,
                            "end": 48
                        },
                        {
                            "kind": 130,
                            "member": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 49,
                                "end": 51
                            },
                            "expression": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 53,
                                    "end": 53
                                },
                                "flags": 256,
                                "start": 52,
                                "end": 54
                            },
                            "flags": 256,
                            "start": 45,
                            "end": 55
                        }
                    ],
                    "flags": 256,
                    "start": 45,
                    "end": 56
                },
                "flags": 256,
                "start": 45,
                "end": 56
            },
            "flags": 128,
            "start": 45,
            "end": 57
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 59,
                            "end": 60
                        },
                        {
                            "kind": 130,
                            "member": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 61,
                                "end": 63
                            },
                            "expression": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 65,
                                    "end": 65
                                },
                                "flags": 256,
                                "start": 64,
                                "end": 66
                            },
                            "flags": 256,
                            "start": 57,
                            "end": 67
                        }
                    ],
                    "flags": 256,
                    "start": 57,
                    "end": 68
                },
                "flags": 256,
                "start": 57,
                "end": 68
            },
            "flags": 128,
            "start": 57,
            "end": 69
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 71,
                            "end": 72
                        },
                        {
                            "kind": 130,
                            "member": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 73,
                                "end": 75
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": 1,
                                "rawText": "1",
                                "flags": 768,
                                "start": 76,
                                "end": 77
                            },
                            "flags": 256,
                            "start": 69,
                            "end": 78
                        }
                    ],
                    "flags": 256,
                    "start": 69,
                    "end": 79
                },
                "flags": 256,
                "start": 69,
                "end": 79
            },
            "flags": 128,
            "start": 69,
            "end": 80
        }
    ],
    "isModule": false,
    "text": "(a[b]);\n(a[{}]);\n(a[[]]);\n(a[1]);\n\n(x, a[b]);\n(x, a[{}]);\n(x, a[[]]);\n(x, a[1]);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 80
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```

