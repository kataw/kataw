# Kataw parser test case

## Input

`````js
({a:b[0]}) => x;

([{x: y.z} = a]) => b;

([{x: y.z}]) => b;

([{x: y.z}] = a) => b;

([{"foo": y.z} = a]) => b;

({"foo": y.z} = a) => b;

([{"foo": y.z}]) => b;

([{"foo": y.z}] = a) => b;

([a, b] => 42);

([a, b] = [] => 42);

(if) => {};

(a, if) => {};

(q, a + b) => {};

(q, a + b, c) => {};

(...a => 42);
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
                    "flags": 0,
                    "start": 10,
                    "end": 13
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 4,
                                            "end": 5
                                        },
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "start": 6,
                                            "end": 7
                                        },
                                        "flags": 32,
                                        "start": 2,
                                        "end": 8
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 2,
                                        "end": 3
                                    },
                                    "flags": 32,
                                    "start": 2,
                                    "end": 8
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 2,
                            "end": 8
                        },
                        "flags": 32,
                        "start": 1,
                        "end": 9
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 13,
                    "end": 15
                },
                "flags": 34,
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
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 34,
                    "end": 37
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
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
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 96,
                                                            "start": 23,
                                                            "end": 25
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "z",
                                                            "rawText": "z",
                                                            "flags": 96,
                                                            "start": 26,
                                                            "end": 27
                                                        },
                                                        "flags": 32,
                                                        "start": 21,
                                                        "end": 27
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 21,
                                                        "end": 22
                                                    },
                                                    "flags": 32,
                                                    "start": 21,
                                                    "end": 27
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 21,
                                            "end": 27
                                        },
                                        "flags": 32,
                                        "start": 20,
                                        "end": 28
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 64,
                                        "start": 28,
                                        "end": 30
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 30,
                                        "end": 32
                                    },
                                    "flags": 32,
                                    "start": 20,
                                    "end": 32
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 20,
                            "end": 32
                        },
                        "flags": 32,
                        "start": 19,
                        "end": 33
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 37,
                    "end": 39
                },
                "flags": 34,
                "start": 16,
                "end": 39
            },
            "flags": 16,
            "start": 16,
            "end": 40
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 54,
                    "end": 57
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "generatorToken": null,
                                                "left": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "start": 47,
                                                        "end": 49
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "z",
                                                        "rawText": "z",
                                                        "flags": 96,
                                                        "start": 50,
                                                        "end": 51
                                                    },
                                                    "flags": 32,
                                                    "start": 45,
                                                    "end": 51
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 45,
                                                    "end": 46
                                                },
                                                "flags": 32,
                                                "start": 45,
                                                "end": 51
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 45,
                                        "end": 51
                                    },
                                    "flags": 32,
                                    "start": 44,
                                    "end": 52
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 44,
                            "end": 52
                        },
                        "flags": 32,
                        "start": 43,
                        "end": 53
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 57,
                    "end": 59
                },
                "flags": 34,
                "start": 40,
                "end": 59
            },
            "flags": 16,
            "start": 40,
            "end": 60
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 78,
                    "end": 81
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 125,
                        "left": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 219,
                                                    "generatorToken": null,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 96,
                                                            "start": 67,
                                                            "end": 69
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "z",
                                                            "rawText": "z",
                                                            "flags": 96,
                                                            "start": 70,
                                                            "end": 71
                                                        },
                                                        "flags": 32,
                                                        "start": 65,
                                                        "end": 71
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 65,
                                                        "end": 66
                                                    },
                                                    "flags": 32,
                                                    "start": 65,
                                                    "end": 71
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 65,
                                            "end": 71
                                        },
                                        "flags": 32,
                                        "start": 64,
                                        "end": 72
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 64,
                                "end": 72
                            },
                            "flags": 32,
                            "start": 63,
                            "end": 73
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
                            "start": 73,
                            "end": 75
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 75,
                            "end": 77
                        },
                        "flags": 32,
                        "start": 63,
                        "end": 77
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 81,
                    "end": 83
                },
                "flags": 34,
                "start": 60,
                "end": 83
            },
            "flags": 16,
            "start": 60,
            "end": 84
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 106,
                    "end": 109
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
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
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 96,
                                                            "start": 95,
                                                            "end": 97
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "z",
                                                            "rawText": "z",
                                                            "flags": 96,
                                                            "start": 98,
                                                            "end": 99
                                                        },
                                                        "flags": 32,
                                                        "start": 89,
                                                        "end": 99
                                                    },
                                                    "right": {
                                                        "kind": 201392131,
                                                        "text": "foo",
                                                        "rawText": "\"foo\"",
                                                        "flags": 96,
                                                        "start": 89,
                                                        "end": 94
                                                    },
                                                    "flags": 32,
                                                    "start": 89,
                                                    "end": 99
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 89,
                                            "end": 99
                                        },
                                        "flags": 32,
                                        "start": 88,
                                        "end": 100
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 64,
                                        "start": 100,
                                        "end": 102
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 102,
                                        "end": 104
                                    },
                                    "flags": 32,
                                    "start": 88,
                                    "end": 104
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 88,
                            "end": 104
                        },
                        "flags": 32,
                        "start": 87,
                        "end": 105
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 109,
                    "end": 111
                },
                "flags": 34,
                "start": 84,
                "end": 111
            },
            "flags": 16,
            "start": 84,
            "end": 112
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 132,
                    "end": 135
                },
                "typeParameters": null,
                "parameters": [
                    {
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
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 122,
                                                "end": 124
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "z",
                                                "rawText": "z",
                                                "flags": 96,
                                                "start": 125,
                                                "end": 126
                                            },
                                            "flags": 32,
                                            "start": 116,
                                            "end": 126
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "foo",
                                            "rawText": "\"foo\"",
                                            "flags": 96,
                                            "start": 116,
                                            "end": 121
                                        },
                                        "flags": 32,
                                        "start": 116,
                                        "end": 126
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 116,
                                "end": 126
                            },
                            "flags": 32,
                            "start": 115,
                            "end": 127
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
                            "start": 127,
                            "end": 129
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 129,
                            "end": 131
                        },
                        "flags": 32,
                        "start": 115,
                        "end": 131
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 135,
                    "end": 137
                },
                "flags": 34,
                "start": 112,
                "end": 137
            },
            "flags": 16,
            "start": 112,
            "end": 138
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 156,
                    "end": 159
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "generatorToken": null,
                                                "left": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "start": 149,
                                                        "end": 151
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "z",
                                                        "rawText": "z",
                                                        "flags": 96,
                                                        "start": 152,
                                                        "end": 153
                                                    },
                                                    "flags": 32,
                                                    "start": 143,
                                                    "end": 153
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "foo",
                                                    "rawText": "\"foo\"",
                                                    "flags": 96,
                                                    "start": 143,
                                                    "end": 148
                                                },
                                                "flags": 32,
                                                "start": 143,
                                                "end": 153
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 143,
                                        "end": 153
                                    },
                                    "flags": 32,
                                    "start": 142,
                                    "end": 154
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 142,
                            "end": 154
                        },
                        "flags": 32,
                        "start": 141,
                        "end": 155
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 159,
                    "end": 161
                },
                "flags": 34,
                "start": 138,
                "end": 161
            },
            "flags": 16,
            "start": 138,
            "end": 162
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 184,
                    "end": 187
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 125,
                        "left": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 219,
                                                    "generatorToken": null,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 96,
                                                            "start": 173,
                                                            "end": 175
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "z",
                                                            "rawText": "z",
                                                            "flags": 96,
                                                            "start": 176,
                                                            "end": 177
                                                        },
                                                        "flags": 32,
                                                        "start": 167,
                                                        "end": 177
                                                    },
                                                    "right": {
                                                        "kind": 201392131,
                                                        "text": "foo",
                                                        "rawText": "\"foo\"",
                                                        "flags": 96,
                                                        "start": 167,
                                                        "end": 172
                                                    },
                                                    "flags": 32,
                                                    "start": 167,
                                                    "end": 177
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 167,
                                            "end": 177
                                        },
                                        "flags": 32,
                                        "start": 166,
                                        "end": 178
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 166,
                                "end": 178
                            },
                            "flags": 32,
                            "start": 165,
                            "end": 179
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
                            "start": 179,
                            "end": 181
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 181,
                            "end": 183
                        },
                        "flags": 32,
                        "start": 165,
                        "end": 183
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 187,
                    "end": 189
                },
                "flags": 34,
                "start": 162,
                "end": 189
            },
            "flags": 16,
            "start": 162,
            "end": 190
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 199,
                    "end": 202
                },
                "typeParameters": null,
                "parameters": [
                    null
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 201392130,
                    "text": 42,
                    "rawText": "42",
                    "flags": 96,
                    "start": 202,
                    "end": 205
                },
                "flags": 34,
                "start": 190,
                "end": 205
            },
            "flags": 16,
            "start": 190,
            "end": 205
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 206,
            "end": 207
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 221,
                    "end": 224
                },
                "typeParameters": null,
                "parameters": [
                    null
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 201392130,
                    "text": 42,
                    "rawText": "42",
                    "flags": 96,
                    "start": 224,
                    "end": 227
                },
                "flags": 34,
                "start": 207,
                "end": 227
            },
            "flags": 16,
            "start": 207,
            "end": 227
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 228,
            "end": 229
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 232,
                    "end": 232
                },
                "flags": 32,
                "start": 229,
                "end": 232
            },
            "flags": 16,
            "start": 229,
            "end": 232
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 0,
                "start": 232,
                "end": 234
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 234,
                "end": 234
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 235,
                    "end": 235
                },
                "flags": 16,
                "start": 235,
                "end": 235
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 16,
            "start": 232,
            "end": 235
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 240,
                "end": 240
            },
            "flags": 16,
            "start": 238,
            "end": 241
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 241,
            "end": 242
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
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 245,
                            "end": 246
                        }
                    ],
                    "flags": 32,
                    "start": 242,
                    "end": 247
                },
                "flags": 32,
                "start": 242,
                "end": 247
            },
            "flags": 16,
            "start": 242,
            "end": 247
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 0,
                "start": 247,
                "end": 250
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 250,
                "end": 250
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 251,
                    "end": 251
                },
                "flags": 16,
                "start": 251,
                "end": 251
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 16,
            "start": 247,
            "end": 251
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 256,
                "end": 256
            },
            "flags": 16,
            "start": 254,
            "end": 257
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 257,
            "end": 258
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
                            "text": "q",
                            "rawText": "q",
                            "flags": 96,
                            "start": 261,
                            "end": 262
                        },
                        {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 263,
                                "end": 265
                            },
                            "operatorToken": {
                                "kind": 34098,
                                "flags": 64,
                                "start": 265,
                                "end": 267
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 267,
                                "end": 269
                            },
                            "flags": 32,
                            "start": 258,
                            "end": 269
                        }
                    ],
                    "flags": 32,
                    "start": 258,
                    "end": 270
                },
                "flags": 32,
                "start": 258,
                "end": 270
            },
            "flags": 16,
            "start": 258,
            "end": 270
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 275,
                "end": 275
            },
            "flags": 16,
            "start": 273,
            "end": 276
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 276,
            "end": 277
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 292,
                    "end": 295
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "q",
                            "rawText": "q",
                            "flags": 96,
                            "start": 280,
                            "end": 281
                        },
                        {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 282,
                                "end": 284
                            },
                            "operatorToken": {
                                "kind": 34098,
                                "flags": 64,
                                "start": 284,
                                "end": 286
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 286,
                                "end": 288
                            },
                            "flags": 32,
                            "start": 277,
                            "end": 288
                        },
                        {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 289,
                            "end": 291
                        }
                    ]
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 297,
                        "end": 297
                    },
                    "flags": 32,
                    "start": 295,
                    "end": 298
                },
                "flags": 32,
                "start": 277,
                "end": 298
            },
            "flags": 16,
            "start": 277,
            "end": 299
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 306,
                    "end": 309
                },
                "typeParameters": null,
                "parameters": [
                    null
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 201392130,
                    "text": 42,
                    "rawText": "42",
                    "flags": 96,
                    "start": 309,
                    "end": 312
                },
                "flags": 32,
                "start": 299,
                "end": 312
            },
            "flags": 16,
            "start": 299,
            "end": 312
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 313,
            "end": 314
        }
    ],
    "isModule": false,
    "source": "({a:b[0]}) => x;\n\n([{x: y.z} = a]) => b;\n\n([{x: y.z}]) => b;\n\n([{x: y.z}] = a) => b;\n\n([{\"foo\": y.z} = a]) => b;\n\n({\"foo\": y.z} = a) => b;\n\n([{\"foo\": y.z}]) => b;\n\n([{\"foo\": y.z}] = a) => b;\n\n([a, b] => 42);\n\n([a, b] = [] => 42);\n\n(if) => {};\n\n(a, if) => {};\n\n(q, a + b) => {};\n\n(q, a + b, c) => {};\n\n(...a => 42);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 314
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left hand side of the arrow is not destructible  - start: 10, end: 13
✖ The left hand side of the arrow is not destructible  - start: 34, end: 37
✖ The left hand side of the arrow is not destructible  - start: 54, end: 57
✖ The left hand side of the arrow is not destructible  - start: 78, end: 81
✖ The left hand side of the arrow is not destructible  - start: 106, end: 109
✖ The left hand side of the arrow is not destructible  - start: 132, end: 135
✖ The left hand side of the arrow is not destructible  - start: 156, end: 159
✖ The left hand side of the arrow is not destructible  - start: 184, end: 187
✖ Expected a ')' to match the '(' token here - start: 199, end: 202
✖ The left hand side of the arrow is not destructible  - start: 199, end: 202
✖ Expected a `;` - start: 205, end: 206
✖ Expected a ')' to match the '(' token here - start: 221, end: 224
✖ The left hand side of the arrow is not destructible  - start: 221, end: 224
✖ Expected a `;` - start: 227, end: 228
✖ Expression expected - start: 232, end: 234
✖ Expression expected - start: 234, end: 235
✖ Expression expected - start: 235, end: 238
✖ Expected a ')' to match the '(' token here - start: 247, end: 250
✖ Expression expected - start: 250, end: 251
✖ Expression expected - start: 251, end: 254
✖ Expected a `;` - start: 270, end: 273
✖ The left hand side of the arrow is not destructible  - start: 292, end: 295
✖ Expected a ')' to match the '(' token here - start: 306, end: 309
✖ Expected a `;` - start: 312, end: 313

```

