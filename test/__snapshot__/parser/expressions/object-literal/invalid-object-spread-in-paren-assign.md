# Kataw parser test case

## Input

`````js
({...obj1,} = foo);

({...obj1,} = foo);

({...a,} = {});

({...obj1,...obj2} = foo);

({...{a,b}} = foo);

({...[a,b]} = foo);

({...[a, b]} = x);

({...{a, b}} = x);
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
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 224,
                                    "argument": {
                                        "kind": 81921,
                                        "value": "obj1",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 5,
                                        "end": 9
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 2,
                                    "end": 9
                                }
                            ],
                            "trailingComma": true,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 2,
                            "end": 10
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 11
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 11,
                        "end": 13
                    },
                    "right": {
                        "kind": 81921,
                        "value": "foo",
                        "autofix": 0,
                        "flags": 768,
                        "start": 13,
                        "end": 17
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 17
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 18
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 19
        },
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
                                    "kind": 224,
                                    "argument": {
                                        "kind": 81921,
                                        "value": "obj1",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 26,
                                        "end": 30
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 23,
                                    "end": 30
                                }
                            ],
                            "trailingComma": true,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 23,
                            "end": 31
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 22,
                        "end": 32
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 32,
                        "end": 34
                    },
                    "right": {
                        "kind": 81921,
                        "value": "foo",
                        "autofix": 0,
                        "flags": 768,
                        "start": 34,
                        "end": 38
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 22,
                    "end": 38
                },
                "autofix": 0,
                "flags": 256,
                "start": 19,
                "end": 39
            },
            "autofix": 0,
            "flags": 128,
            "start": 19,
            "end": 40
        },
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
                                    "kind": 224,
                                    "argument": {
                                        "kind": 81921,
                                        "value": "a",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 47,
                                        "end": 48
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 44,
                                    "end": 48
                                }
                            ],
                            "trailingComma": true,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 44,
                            "end": 49
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 43,
                        "end": 50
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 50,
                        "end": 52
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
                            "start": 54,
                            "end": 54
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 52,
                        "end": 55
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 43,
                    "end": 55
                },
                "autofix": 0,
                "flags": 256,
                "start": 40,
                "end": 56
            },
            "autofix": 0,
            "flags": 128,
            "start": 40,
            "end": 57
        },
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
                                    "kind": 224,
                                    "argument": {
                                        "kind": 81921,
                                        "value": "obj1",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 64,
                                        "end": 68
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 61,
                                    "end": 68
                                },
                                {
                                    "kind": 224,
                                    "argument": {
                                        "kind": 81921,
                                        "value": "obj2",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 72,
                                        "end": 76
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 69,
                                    "end": 76
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 61,
                            "end": 76
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 60,
                        "end": 77
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 77,
                        "end": 79
                    },
                    "right": {
                        "kind": 81921,
                        "value": "foo",
                        "autofix": 0,
                        "flags": 768,
                        "start": 79,
                        "end": 83
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 60,
                    "end": 83
                },
                "autofix": 0,
                "flags": 256,
                "start": 57,
                "end": 84
            },
            "autofix": 0,
            "flags": 128,
            "start": 57,
            "end": 85
        },
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
                                    "kind": 224,
                                    "argument": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 81921,
                                                    "value": "a",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 93,
                                                    "end": 94
                                                },
                                                {
                                                    "kind": 81921,
                                                    "value": "b",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 95,
                                                    "end": 96
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 93,
                                            "end": 96
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 92,
                                        "end": 97
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 89,
                                    "end": 97
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 89,
                            "end": 97
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 88,
                        "end": 98
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 98,
                        "end": 100
                    },
                    "right": {
                        "kind": 81921,
                        "value": "foo",
                        "autofix": 0,
                        "flags": 768,
                        "start": 100,
                        "end": 104
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 88,
                    "end": 104
                },
                "autofix": 0,
                "flags": 256,
                "start": 85,
                "end": 105
            },
            "autofix": 0,
            "flags": 128,
            "start": 85,
            "end": 106
        },
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
                                    "kind": 224,
                                    "argument": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 81921,
                                                    "value": "a",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 114,
                                                    "end": 115
                                                },
                                                {
                                                    "kind": 81921,
                                                    "value": "b",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 116,
                                                    "end": 117
                                                }
                                            ],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 114,
                                            "end": 117
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 113,
                                        "end": 118
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 110,
                                    "end": 118
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 110,
                            "end": 118
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 109,
                        "end": 119
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 119,
                        "end": 121
                    },
                    "right": {
                        "kind": 81921,
                        "value": "foo",
                        "autofix": 0,
                        "flags": 768,
                        "start": 121,
                        "end": 125
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 109,
                    "end": 125
                },
                "autofix": 0,
                "flags": 256,
                "start": 106,
                "end": 126
            },
            "autofix": 0,
            "flags": 128,
            "start": 106,
            "end": 127
        },
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
                                    "kind": 224,
                                    "argument": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 81921,
                                                    "value": "a",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 135,
                                                    "end": 136
                                                },
                                                {
                                                    "kind": 81921,
                                                    "value": "b",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 137,
                                                    "end": 139
                                                }
                                            ],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 135,
                                            "end": 139
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 134,
                                        "end": 140
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 131,
                                    "end": 140
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 131,
                            "end": 140
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 130,
                        "end": 141
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 141,
                        "end": 143
                    },
                    "right": {
                        "kind": 81921,
                        "value": "x",
                        "autofix": 0,
                        "flags": 768,
                        "start": 143,
                        "end": 145
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 130,
                    "end": 145
                },
                "autofix": 0,
                "flags": 256,
                "start": 127,
                "end": 146
            },
            "autofix": 0,
            "flags": 128,
            "start": 127,
            "end": 147
        },
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
                                    "kind": 224,
                                    "argument": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 81921,
                                                    "value": "a",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 155,
                                                    "end": 156
                                                },
                                                {
                                                    "kind": 81921,
                                                    "value": "b",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 157,
                                                    "end": 159
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 155,
                                            "end": 159
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 154,
                                        "end": 160
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 151,
                                    "end": 160
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 151,
                            "end": 160
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 150,
                        "end": 161
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 161,
                        "end": 163
                    },
                    "right": {
                        "kind": 81921,
                        "value": "x",
                        "autofix": 0,
                        "flags": 768,
                        "start": 163,
                        "end": 165
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 150,
                    "end": 165
                },
                "autofix": 0,
                "flags": 256,
                "start": 147,
                "end": 166
            },
            "autofix": 0,
            "flags": 128,
            "start": 147,
            "end": 167
        }
    ],
    "isModule": false,
    "text": "({...obj1,} = foo);\n\n({...obj1,} = foo);\n\n({...a,} = {});\n\n({...obj1,...obj2} = foo);\n\n({...{a,b}} = foo);\n\n({...[a,b]} = foo);\n\n({...[a, b]} = x);\n\n({...{a, b}} = x);",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 11,
            "end": 13
        },
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 32,
            "end": 34
        },
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 50,
            "end": 52
        },
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 77,
            "end": 79
        },
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 98,
            "end": 100
        },
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 119,
            "end": 121
        },
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 141,
            "end": 143
        },
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 161,
            "end": 163
        }
    ],
    "start": 0,
    "end": 167
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

