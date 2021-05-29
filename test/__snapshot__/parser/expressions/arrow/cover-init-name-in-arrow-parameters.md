# Kataw parser test case

## Input

`````js
({a = 1}, {b = 2}, {c = 3}) => {};
({a = 1} = {}, {b = 2}, {c = 3}) => {};
({a = 1} = {}, {b = 2} = {}, {c = 3}) => {};
({a = 1} = {}, {b = 2} = {}, {c = 3} = {}) => {};
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
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 27,
                    "end": 30
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 205,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 2,
                                            "end": 3
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 5,
                                            "end": 7
                                        },
                                        "flags": 32,
                                        "start": 2,
                                        "end": 7
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 2,
                                "end": 7
                            },
                            "flags": 48,
                            "start": 1,
                            "end": 8
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 205,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 11,
                                            "end": 12
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 96,
                                            "start": 14,
                                            "end": 16
                                        },
                                        "flags": 32,
                                        "start": 11,
                                        "end": 16
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 11,
                                "end": 16
                            },
                            "flags": 48,
                            "start": 9,
                            "end": 17
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 205,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "start": 20,
                                            "end": 21
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 96,
                                            "start": 23,
                                            "end": 25
                                        },
                                        "flags": 32,
                                        "start": 20,
                                        "end": 25
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 20,
                                "end": 25
                            },
                            "flags": 48,
                            "start": 18,
                            "end": 26
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 32,
                        "end": 32
                    },
                    "flags": 32,
                    "start": 30,
                    "end": 33
                },
                "flags": 34,
                "start": 0,
                "end": 33
            },
            "flags": 16,
            "start": 0,
            "end": 34
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 67,
                    "end": 70
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 125,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 205,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 37,
                                                "end": 38
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "start": 40,
                                                "end": 42
                                            },
                                            "flags": 32,
                                            "start": 37,
                                            "end": 42
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 37,
                                    "end": 42
                                },
                                "flags": 48,
                                "start": 36,
                                "end": 43
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 43,
                                "end": 45
                            },
                            "right": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 47,
                                    "end": 47
                                },
                                "flags": 48,
                                "start": 45,
                                "end": 48
                            },
                            "flags": 32,
                            "start": 36,
                            "end": 48
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 205,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 51,
                                            "end": 52
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 96,
                                            "start": 54,
                                            "end": 56
                                        },
                                        "flags": 32,
                                        "start": 51,
                                        "end": 56
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 51,
                                "end": 56
                            },
                            "flags": 48,
                            "start": 49,
                            "end": 57
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 205,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "start": 60,
                                            "end": 61
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 96,
                                            "start": 63,
                                            "end": 65
                                        },
                                        "flags": 32,
                                        "start": 60,
                                        "end": 65
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 60,
                                "end": 65
                            },
                            "flags": 48,
                            "start": 58,
                            "end": 66
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 72,
                        "end": 72
                    },
                    "flags": 32,
                    "start": 70,
                    "end": 73
                },
                "flags": 34,
                "start": 34,
                "end": 73
            },
            "flags": 16,
            "start": 34,
            "end": 74
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 112,
                    "end": 115
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 125,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 205,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 77,
                                                "end": 78
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "start": 80,
                                                "end": 82
                                            },
                                            "flags": 32,
                                            "start": 77,
                                            "end": 82
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 77,
                                    "end": 82
                                },
                                "flags": 48,
                                "start": 76,
                                "end": 83
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 83,
                                "end": 85
                            },
                            "right": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 87,
                                    "end": 87
                                },
                                "flags": 48,
                                "start": 85,
                                "end": 88
                            },
                            "flags": 32,
                            "start": 76,
                            "end": 88
                        },
                        {
                            "kind": 125,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 205,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 91,
                                                "end": 92
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 2,
                                                "rawText": "2",
                                                "flags": 96,
                                                "start": 94,
                                                "end": 96
                                            },
                                            "flags": 32,
                                            "start": 91,
                                            "end": 96
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 91,
                                    "end": 96
                                },
                                "flags": 48,
                                "start": 89,
                                "end": 97
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 97,
                                "end": 99
                            },
                            "right": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 101,
                                    "end": 101
                                },
                                "flags": 48,
                                "start": 99,
                                "end": 102
                            },
                            "flags": 32,
                            "start": 89,
                            "end": 102
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 205,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "start": 105,
                                            "end": 106
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 96,
                                            "start": 108,
                                            "end": 110
                                        },
                                        "flags": 32,
                                        "start": 105,
                                        "end": 110
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 105,
                                "end": 110
                            },
                            "flags": 48,
                            "start": 103,
                            "end": 111
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 117,
                        "end": 117
                    },
                    "flags": 32,
                    "start": 115,
                    "end": 118
                },
                "flags": 34,
                "start": 74,
                "end": 118
            },
            "flags": 16,
            "start": 74,
            "end": 119
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 162,
                    "end": 165
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 125,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 205,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 122,
                                                "end": 123
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "start": 125,
                                                "end": 127
                                            },
                                            "flags": 32,
                                            "start": 122,
                                            "end": 127
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 122,
                                    "end": 127
                                },
                                "flags": 48,
                                "start": 121,
                                "end": 128
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 128,
                                "end": 130
                            },
                            "right": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 132,
                                    "end": 132
                                },
                                "flags": 48,
                                "start": 130,
                                "end": 133
                            },
                            "flags": 32,
                            "start": 121,
                            "end": 133
                        },
                        {
                            "kind": 125,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 205,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 136,
                                                "end": 137
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 2,
                                                "rawText": "2",
                                                "flags": 96,
                                                "start": 139,
                                                "end": 141
                                            },
                                            "flags": 32,
                                            "start": 136,
                                            "end": 141
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 136,
                                    "end": 141
                                },
                                "flags": 48,
                                "start": 134,
                                "end": 142
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 142,
                                "end": 144
                            },
                            "right": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 146,
                                    "end": 146
                                },
                                "flags": 48,
                                "start": 144,
                                "end": 147
                            },
                            "flags": 32,
                            "start": 134,
                            "end": 147
                        },
                        {
                            "kind": 125,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 205,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 96,
                                                "start": 150,
                                                "end": 151
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 3,
                                                "rawText": "3",
                                                "flags": 96,
                                                "start": 153,
                                                "end": 155
                                            },
                                            "flags": 32,
                                            "start": 150,
                                            "end": 155
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 150,
                                    "end": 155
                                },
                                "flags": 48,
                                "start": 148,
                                "end": 156
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 156,
                                "end": 158
                            },
                            "right": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 160,
                                    "end": 160
                                },
                                "flags": 48,
                                "start": 158,
                                "end": 161
                            },
                            "flags": 32,
                            "start": 148,
                            "end": 161
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 167,
                        "end": 167
                    },
                    "flags": 32,
                    "start": 165,
                    "end": 168
                },
                "flags": 34,
                "start": 119,
                "end": 168
            },
            "flags": 16,
            "start": 119,
            "end": 169
        }
    ],
    "isModule": false,
    "source": "({a = 1}, {b = 2}, {c = 3}) => {};\n({a = 1} = {}, {b = 2}, {c = 3}) => {};\n({a = 1} = {}, {b = 2} = {}, {c = 3}) => {};\n({a = 1} = {}, {b = 2} = {}, {c = 3} = {}) => {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 169
}
```

### Printed

```javascript

() =>  {};
() =>  {};
() =>  {};
() =>  {};
```

### Diagnostics

```javascript
✔ No errors
```

