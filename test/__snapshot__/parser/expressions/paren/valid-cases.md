# Kataw parser test case

## Input

`````js
({b, ...c} = d);

({a: b = c} = d);

({a: b.c} = d);

({x: [...a, b].x} = c);

({x: {...a, b}.x} = c);

({x = {...a, b}} = c);

({x = [...a, b]} = c);

([[]] = [[]]);
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
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 2,
                                    "end": 3
                                },
                                {
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "start": 4,
                                        "end": 8
                                    },
                                    "argument": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "start": 8,
                                        "end": 9
                                    },
                                    "flags": 32,
                                    "start": 4,
                                    "end": 9
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 2,
                            "end": 9
                        },
                        "flags": 48,
                        "start": 1,
                        "end": 10
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 10,
                        "end": 12
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "d",
                        "rawText": "d",
                        "flags": 96,
                        "start": 12,
                        "end": 14
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 14
                },
                "flags": 32,
                "start": 0,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 16
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
                                    "kind": 219,
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 20,
                                        "end": 21
                                    },
                                    "right": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 22,
                                            "end": 24
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 96,
                                            "start": 24,
                                            "end": 26
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "start": 26,
                                            "end": 28
                                        },
                                        "flags": 32,
                                        "start": 20,
                                        "end": 28
                                    },
                                    "flags": 32,
                                    "start": 20,
                                    "end": 28
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 20,
                            "end": 28
                        },
                        "flags": 48,
                        "start": 19,
                        "end": 29
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 29,
                        "end": 31
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "d",
                        "rawText": "d",
                        "flags": 96,
                        "start": 31,
                        "end": 33
                    },
                    "flags": 32,
                    "start": 19,
                    "end": 33
                },
                "flags": 32,
                "start": 16,
                "end": 34
            },
            "flags": 16,
            "start": 16,
            "end": 35
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
                                    "kind": 219,
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 39,
                                        "end": 40
                                    },
                                    "right": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 41,
                                            "end": 43
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "start": 44,
                                            "end": 45
                                        },
                                        "flags": 536870944,
                                        "start": 39,
                                        "end": 45
                                    },
                                    "flags": 32,
                                    "start": 39,
                                    "end": 45
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 39,
                            "end": 45
                        },
                        "flags": 48,
                        "start": 38,
                        "end": 46
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 46,
                        "end": 48
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "d",
                        "rawText": "d",
                        "flags": 96,
                        "start": 48,
                        "end": 50
                    },
                    "flags": 32,
                    "start": 38,
                    "end": 50
                },
                "flags": 32,
                "start": 35,
                "end": 51
            },
            "flags": 16,
            "start": 35,
            "end": 52
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
                                    "kind": 219,
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 56,
                                        "end": 57
                                    },
                                    "right": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 223,
                                                        "ellipsisToken": {
                                                            "kind": 524302,
                                                            "flags": 64,
                                                            "start": 60,
                                                            "end": 63
                                                        },
                                                        "argument": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 63,
                                                            "end": 64
                                                        },
                                                        "flags": 32,
                                                        "start": 60,
                                                        "end": 64
                                                    },
                                                    {
                                                        "kind": 134299649,
                                                        "text": "b",
                                                        "rawText": "b",
                                                        "flags": 96,
                                                        "start": 65,
                                                        "end": 67
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 60,
                                                "end": 67
                                            },
                                            "flags": 32,
                                            "start": 58,
                                            "end": 68
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 69,
                                            "end": 70
                                        },
                                        "flags": 536870944,
                                        "start": 56,
                                        "end": 70
                                    },
                                    "flags": 32,
                                    "start": 56,
                                    "end": 70
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 56,
                            "end": 70
                        },
                        "flags": 48,
                        "start": 55,
                        "end": 71
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 71,
                        "end": 73
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 73,
                        "end": 75
                    },
                    "flags": 32,
                    "start": 55,
                    "end": 75
                },
                "flags": 32,
                "start": 52,
                "end": 76
            },
            "flags": 16,
            "start": 52,
            "end": 77
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
                                    "kind": 219,
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 81,
                                        "end": 82
                                    },
                                    "right": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 224,
                                                        "ellipsisToken": {
                                                            "kind": 524302,
                                                            "flags": 64,
                                                            "start": 85,
                                                            "end": 88
                                                        },
                                                        "argument": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 88,
                                                            "end": 89
                                                        },
                                                        "flags": 32,
                                                        "start": 85,
                                                        "end": 89
                                                    },
                                                    {
                                                        "kind": 134299649,
                                                        "text": "b",
                                                        "rawText": "b",
                                                        "flags": 96,
                                                        "start": 90,
                                                        "end": 92
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 85,
                                                "end": 92
                                            },
                                            "flags": 48,
                                            "start": 83,
                                            "end": 93
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 94,
                                            "end": 95
                                        },
                                        "flags": 536870944,
                                        "start": 81,
                                        "end": 95
                                    },
                                    "flags": 32,
                                    "start": 81,
                                    "end": 95
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 81,
                            "end": 95
                        },
                        "flags": 48,
                        "start": 80,
                        "end": 96
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 96,
                        "end": 98
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 98,
                        "end": 100
                    },
                    "flags": 32,
                    "start": 80,
                    "end": 100
                },
                "flags": 32,
                "start": 77,
                "end": 101
            },
            "flags": 16,
            "start": 77,
            "end": 102
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
                                    "kind": 301,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 106,
                                        "end": 107
                                    },
                                    "right": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 224,
                                                    "ellipsisToken": {
                                                        "kind": 524302,
                                                        "flags": 64,
                                                        "start": 111,
                                                        "end": 114
                                                    },
                                                    "argument": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 114,
                                                        "end": 115
                                                    },
                                                    "flags": 32,
                                                    "start": 111,
                                                    "end": 115
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "start": 116,
                                                    "end": 118
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 111,
                                            "end": 118
                                        },
                                        "flags": 48,
                                        "start": 109,
                                        "end": 119
                                    },
                                    "flags": 32,
                                    "start": 106,
                                    "end": 119
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 106,
                            "end": 119
                        },
                        "flags": 48,
                        "start": 105,
                        "end": 120
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 120,
                        "end": 122
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 122,
                        "end": 124
                    },
                    "flags": 32,
                    "start": 105,
                    "end": 124
                },
                "flags": 32,
                "start": 102,
                "end": 125
            },
            "flags": 16,
            "start": 102,
            "end": 126
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
                                    "kind": 301,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 130,
                                        "end": 131
                                    },
                                    "right": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 223,
                                                    "ellipsisToken": {
                                                        "kind": 524302,
                                                        "flags": 64,
                                                        "start": 135,
                                                        "end": 138
                                                    },
                                                    "argument": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 138,
                                                        "end": 139
                                                    },
                                                    "flags": 32,
                                                    "start": 135,
                                                    "end": 139
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "start": 140,
                                                    "end": 142
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 135,
                                            "end": 142
                                        },
                                        "flags": 32,
                                        "start": 133,
                                        "end": 143
                                    },
                                    "flags": 32,
                                    "start": 130,
                                    "end": 143
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 130,
                            "end": 143
                        },
                        "flags": 48,
                        "start": 129,
                        "end": 144
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 144,
                        "end": 146
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 146,
                        "end": 148
                    },
                    "flags": 32,
                    "start": 129,
                    "end": 148
                },
                "flags": 32,
                "start": 126,
                "end": 149
            },
            "flags": 16,
            "start": 126,
            "end": 150
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 155,
                                        "end": 155
                                    },
                                    "flags": 32,
                                    "start": 154,
                                    "end": 156
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 154,
                            "end": 156
                        },
                        "flags": 32,
                        "start": 153,
                        "end": 157
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 157,
                        "end": 159
                    },
                    "right": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 162,
                                        "end": 162
                                    },
                                    "flags": 32,
                                    "start": 161,
                                    "end": 163
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 161,
                            "end": 163
                        },
                        "flags": 32,
                        "start": 159,
                        "end": 164
                    },
                    "flags": 32,
                    "start": 153,
                    "end": 164
                },
                "flags": 32,
                "start": 150,
                "end": 165
            },
            "flags": 16,
            "start": 150,
            "end": 166
        }
    ],
    "isModule": false,
    "source": "({b, ...c} = d);\n\n({a: b = c} = d);\n\n({a: b.c} = d);\n\n({x: [...a, b].x} = c);\n\n({x: {...a, b}.x} = c);\n\n({x = {...a, b}} = c);\n\n({x = [...a, b]} = c);\n\n([[]] = [[]]);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 166
}
```

### Printed

```javascript

({ b, ...c } = d);
({ a: b = c } = d);
({ a: b.c } = d);
({ x: [...a, b].x } = c);
({ x: { ...a, b }.x } = c);
({ x = { ...a, b } } = c);
({ x = [...a, b] } = c);
([[]] = [[]]);
```

### Diagnostics

```javascript
✔ No errors
```

