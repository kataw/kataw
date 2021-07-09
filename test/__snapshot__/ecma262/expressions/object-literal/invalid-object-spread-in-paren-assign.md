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
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 2,
                                        "end": 5
                                    },
                                    "argument": {
                                        "kind": 134299649,
                                        "text": "obj1",
                                        "rawText": "obj1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 9
                                    },
                                    "flags": 1073741856,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 9
                                }
                            ],
                            "trailingComma": true,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 10
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 1,
                        "end": 11
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 13
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 17
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 1,
                    "end": 17
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 18
            },
            "flags": 16,
            "transformFlags": 4096,
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
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 23,
                                        "end": 26
                                    },
                                    "argument": {
                                        "kind": 134299649,
                                        "text": "obj1",
                                        "rawText": "obj1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 26,
                                        "end": 30
                                    },
                                    "flags": 1073741856,
                                    "transformFlags": 0,
                                    "start": 23,
                                    "end": 30
                                }
                            ],
                            "trailingComma": true,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 31
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 22,
                        "end": 32
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 34
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 34,
                        "end": 38
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 22,
                    "end": 38
                },
                "flags": 19,
                "transformFlags": 0,
                "start": 35,
                "end": 39
            },
            "flags": 16,
            "transformFlags": 4096,
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
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 44,
                                        "end": 47
                                    },
                                    "argument": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 47,
                                        "end": 48
                                    },
                                    "flags": 1073741856,
                                    "transformFlags": 0,
                                    "start": 44,
                                    "end": 48
                                }
                            ],
                            "trailingComma": true,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 44,
                            "end": 49
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 43,
                        "end": 50
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 50,
                        "end": 52
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 54,
                            "end": 54
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 52,
                        "end": 55
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 43,
                    "end": 55
                },
                "flags": 40,
                "transformFlags": 0,
                "start": 35,
                "end": 56
            },
            "flags": 16,
            "transformFlags": 4096,
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
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 61,
                                        "end": 64
                                    },
                                    "argument": {
                                        "kind": 134299649,
                                        "text": "obj1",
                                        "rawText": "obj1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 64,
                                        "end": 68
                                    },
                                    "flags": 1073741856,
                                    "transformFlags": 0,
                                    "start": 61,
                                    "end": 68
                                },
                                {
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 69,
                                        "end": 72
                                    },
                                    "argument": {
                                        "kind": 134299649,
                                        "text": "obj2",
                                        "rawText": "obj2",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 72,
                                        "end": 76
                                    },
                                    "flags": 1073741856,
                                    "transformFlags": 0,
                                    "start": 69,
                                    "end": 76
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 61,
                            "end": 76
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 60,
                        "end": 77
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 77,
                        "end": 79
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 79,
                        "end": 83
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 60,
                    "end": 83
                },
                "flags": 57,
                "transformFlags": 0,
                "start": 35,
                "end": 84
            },
            "flags": 16,
            "transformFlags": 4096,
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
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 89,
                                        "end": 92
                                    },
                                    "argument": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 93,
                                                    "end": 94
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 95,
                                                    "end": 96
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 93,
                                            "end": 96
                                        },
                                        "flags": 48,
                                        "transformFlags": 8,
                                        "start": 92,
                                        "end": 97
                                    },
                                    "flags": 1073741856,
                                    "transformFlags": 0,
                                    "start": 89,
                                    "end": 97
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 89,
                            "end": 97
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 88,
                        "end": 98
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 98,
                        "end": 100
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 100,
                        "end": 104
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 88,
                    "end": 104
                },
                "flags": 85,
                "transformFlags": 0,
                "start": 35,
                "end": 105
            },
            "flags": 16,
            "transformFlags": 4096,
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
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 110,
                                        "end": 113
                                    },
                                    "argument": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 114,
                                                    "end": 115
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 116,
                                                    "end": 117
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 114,
                                            "end": 117
                                        },
                                        "flags": 32,
                                        "transformFlags": 8,
                                        "start": 113,
                                        "end": 118
                                    },
                                    "flags": 1073741856,
                                    "transformFlags": 0,
                                    "start": 110,
                                    "end": 118
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 110,
                            "end": 118
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 109,
                        "end": 119
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 119,
                        "end": 121
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 121,
                        "end": 125
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 109,
                    "end": 125
                },
                "flags": 106,
                "transformFlags": 0,
                "start": 35,
                "end": 126
            },
            "flags": 16,
            "transformFlags": 4096,
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
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 131,
                                        "end": 134
                                    },
                                    "argument": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 135,
                                                    "end": 136
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 137,
                                                    "end": 139
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 135,
                                            "end": 139
                                        },
                                        "flags": 32,
                                        "transformFlags": 8,
                                        "start": 134,
                                        "end": 140
                                    },
                                    "flags": 1073741856,
                                    "transformFlags": 0,
                                    "start": 131,
                                    "end": 140
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 131,
                            "end": 140
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 130,
                        "end": 141
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 141,
                        "end": 143
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 143,
                        "end": 145
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 130,
                    "end": 145
                },
                "flags": 127,
                "transformFlags": 0,
                "start": 35,
                "end": 146
            },
            "flags": 16,
            "transformFlags": 4096,
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
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 151,
                                        "end": 154
                                    },
                                    "argument": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 155,
                                                    "end": 156
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 157,
                                                    "end": 159
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 155,
                                            "end": 159
                                        },
                                        "flags": 48,
                                        "transformFlags": 8,
                                        "start": 154,
                                        "end": 160
                                    },
                                    "flags": 1073741856,
                                    "transformFlags": 0,
                                    "start": 151,
                                    "end": 160
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 151,
                            "end": 160
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 150,
                        "end": 161
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 161,
                        "end": 163
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 163,
                        "end": 165
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 150,
                    "end": 165
                },
                "flags": 147,
                "transformFlags": 0,
                "start": 35,
                "end": 166
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 147,
            "end": 167
        }
    ],
    "isModule": false,
    "source": "({...obj1,} = foo);\n\n({...obj1,} = foo);\n\n({...a,} = {});\n\n({...obj1,...obj2} = foo);\n\n({...{a,b}} = foo);\n\n({...[a,b]} = foo);\n\n({...[a, b]} = x);\n\n({...{a, b}} = x);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 167
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side must be a variable or a property access. - start: 1, end: 13
✖ The left-hand side must be a variable or a property access. - start: 22, end: 34
✖ The left-hand side must be a variable or a property access. - start: 43, end: 52
✖ The left-hand side must be a variable or a property access. - start: 60, end: 79
✖ The left-hand side must be a variable or a property access. - start: 88, end: 100
✖ The left-hand side must be a variable or a property access. - start: 109, end: 121
✖ The left-hand side must be a variable or a property access. - start: 130, end: 143
✖ The left-hand side must be a variable or a property access. - start: 150, end: 163

```

