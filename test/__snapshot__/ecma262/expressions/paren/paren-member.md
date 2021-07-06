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
                    "kind": 130,
                    "member": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 2
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 4
                    },
                    "flags": 536870944,
                    "transformFlags": 4,
                    "start": 0,
                    "end": 5
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 6
            },
            "flags": 16,
            "transformFlags": 0,
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
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 10
                    },
                    "expression": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 12
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 11,
                        "end": 13
                    },
                    "flags": 536870944,
                    "transformFlags": 4,
                    "start": 7,
                    "end": 14
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 33,
                "end": 15
            },
            "flags": 16,
            "transformFlags": 0,
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
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 19
                    },
                    "expression": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 21
                        },
                        "flags": 32,
                        "transformFlags": 8,
                        "start": 20,
                        "end": 22
                    },
                    "flags": 536870944,
                    "transformFlags": 4,
                    "start": 16,
                    "end": 23
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 33,
                "end": 24
            },
            "flags": 16,
            "transformFlags": 0,
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
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 27,
                        "end": 28
                    },
                    "expression": {
                        "kind": 201392130,
                        "text": 1,
                        "rawText": "1",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 29,
                        "end": 30
                    },
                    "flags": 536870944,
                    "transformFlags": 4,
                    "start": 25,
                    "end": 31
                },
                "flags": 25,
                "transformFlags": 0,
                "start": 33,
                "end": 32
            },
            "flags": 16,
            "transformFlags": 0,
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
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 36,
                            "end": 37
                        },
                        {
                            "kind": 130,
                            "member": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 38,
                                "end": 40
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 41,
                                "end": 42
                            },
                            "flags": 536870944,
                            "transformFlags": 4,
                            "start": 33,
                            "end": 43
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 33,
                    "end": 44
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 33,
                "end": 44
            },
            "flags": 16,
            "transformFlags": 0,
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
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 47,
                            "end": 48
                        },
                        {
                            "kind": 130,
                            "member": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 49,
                                "end": 51
                            },
                            "expression": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 53,
                                    "end": 53
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 52,
                                "end": 54
                            },
                            "flags": 536870944,
                            "transformFlags": 4,
                            "start": 45,
                            "end": 55
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 45,
                    "end": 56
                },
                "flags": 45,
                "transformFlags": 0,
                "start": 33,
                "end": 56
            },
            "flags": 16,
            "transformFlags": 0,
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
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 59,
                            "end": 60
                        },
                        {
                            "kind": 130,
                            "member": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 61,
                                "end": 63
                            },
                            "expression": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 65,
                                    "end": 65
                                },
                                "flags": 32,
                                "transformFlags": 8,
                                "start": 64,
                                "end": 66
                            },
                            "flags": 536870944,
                            "transformFlags": 4,
                            "start": 57,
                            "end": 67
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 57,
                    "end": 68
                },
                "flags": 57,
                "transformFlags": 0,
                "start": 33,
                "end": 68
            },
            "flags": 16,
            "transformFlags": 0,
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
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 71,
                            "end": 72
                        },
                        {
                            "kind": 130,
                            "member": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 73,
                                "end": 75
                            },
                            "expression": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 76,
                                "end": 77
                            },
                            "flags": 536870944,
                            "transformFlags": 4,
                            "start": 69,
                            "end": 78
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 69,
                    "end": 79
                },
                "flags": 69,
                "transformFlags": 0,
                "start": 33,
                "end": 79
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 69,
            "end": 80
        }
    ],
    "isModule": false,
    "source": "(a[b]);\n(a[{}]);\n(a[[]]);\n(a[1]);\n\n(x, a[b]);\n(x, a[{}]);\n(x, a[[]]);\n(x, a[1]);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 80
}
```

### Printed

```javascript

(a[b]);
(a[{}]);

(a[[]]);

(a[1]);

(x, a[b]);

(x, a[{}]);

(x, a[[]]);

(x, a[1]);

```

### Diagnostics

```javascript
✔ No errors
```

