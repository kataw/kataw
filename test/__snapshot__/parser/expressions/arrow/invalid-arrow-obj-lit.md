# Kataw parser test case

## Input

`````js
({e: a.b}) => x;

([a.b]) => 0;

({...this}) => x;

([...this]) => x;

({x, ...this}) => x;

([x, ...this]) => x;

({a:b[0]}) => x;

(x, {e: a.b}) => x;

(x, [a.b]) => 0;

(x, {...this}) => x;

(x, [...this]) => x;

(x, {x, ...this}) => x;

(x, [x, ...this]) => x;

(x, {a:b[0]}) => x;

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
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 10,
                    "start": 0,
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
                                    "left": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 768,
                                            "start": 4,
                                            "end": 6
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 768,
                                            "start": 7,
                                            "end": 8
                                        },
                                        "flags": 256,
                                        "start": 2,
                                        "end": 8
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "e",
                                        "rawText": "e",
                                        "flags": 768,
                                        "start": 2,
                                        "end": 3
                                    },
                                    "flags": 256,
                                    "start": 2,
                                    "end": 8
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 2,
                            "end": 8
                        },
                        "flags": 256,
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
                    "flags": 768,
                    "start": 13,
                    "end": 15
                },
                "flags": 256,
                "start": 0,
                "end": 15
            },
            "flags": 128,
            "start": 0,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 25,
                    "start": 0,
                    "end": 28
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 129,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 20,
                                        "end": 21
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 768,
                                        "start": 22,
                                        "end": 23
                                    },
                                    "flags": 256,
                                    "start": 20,
                                    "end": 23
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 20,
                            "end": 23
                        },
                        "flags": 256,
                        "start": 19,
                        "end": 24
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 768,
                    "start": 28,
                    "end": 30
                },
                "flags": 256,
                "start": 16,
                "end": 30
            },
            "flags": 128,
            "start": 16,
            "end": 31
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 44,
                    "start": 0,
                    "end": 47
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 35,
                                        "start": 0,
                                        "end": 38
                                    },
                                    "argument": {
                                        "kind": 135,
                                        "flags": 768,
                                        "start": 38,
                                        "end": 42
                                    },
                                    "flags": 256,
                                    "start": 35,
                                    "end": 42
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 35,
                            "end": 42
                        },
                        "flags": 256,
                        "start": 34,
                        "end": 43
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 47,
                    "end": 49
                },
                "flags": 256,
                "start": 31,
                "end": 49
            },
            "flags": 128,
            "start": 31,
            "end": 50
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 63,
                    "start": 0,
                    "end": 66
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 223,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 54,
                                        "start": 0,
                                        "end": 57
                                    },
                                    "argument": {
                                        "kind": 135,
                                        "flags": 768,
                                        "start": 57,
                                        "end": 61
                                    },
                                    "flags": 256,
                                    "start": 54,
                                    "end": 61
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 54,
                            "end": 61
                        },
                        "flags": 256,
                        "start": 53,
                        "end": 62
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 66,
                    "end": 68
                },
                "flags": 256,
                "start": 50,
                "end": 68
            },
            "flags": 128,
            "start": 50,
            "end": 69
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 85,
                    "start": 0,
                    "end": 88
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 73,
                                    "end": 74
                                },
                                {
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 75,
                                        "start": 0,
                                        "end": 79
                                    },
                                    "argument": {
                                        "kind": 135,
                                        "flags": 768,
                                        "start": 79,
                                        "end": 83
                                    },
                                    "flags": 256,
                                    "start": 75,
                                    "end": 83
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 73,
                            "end": 83
                        },
                        "flags": 256,
                        "start": 72,
                        "end": 84
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 88,
                    "end": 90
                },
                "flags": 256,
                "start": 69,
                "end": 90
            },
            "flags": 128,
            "start": 69,
            "end": 91
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 107,
                    "start": 0,
                    "end": 110
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 95,
                                    "end": 96
                                },
                                {
                                    "kind": 223,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 97,
                                        "start": 0,
                                        "end": 101
                                    },
                                    "argument": {
                                        "kind": 135,
                                        "flags": 768,
                                        "start": 101,
                                        "end": 105
                                    },
                                    "flags": 256,
                                    "start": 97,
                                    "end": 105
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 95,
                            "end": 105
                        },
                        "flags": 256,
                        "start": 94,
                        "end": 106
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 110,
                    "end": 112
                },
                "flags": 256,
                "start": 91,
                "end": 112
            },
            "flags": 128,
            "start": 91,
            "end": 113
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 125,
                    "start": 0,
                    "end": 128
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
                                    "left": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 768,
                                            "start": 119,
                                            "end": 120
                                        },
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 768,
                                            "start": 121,
                                            "end": 122
                                        },
                                        "flags": 256,
                                        "start": 117,
                                        "end": 123
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 117,
                                        "end": 118
                                    },
                                    "flags": 256,
                                    "start": 117,
                                    "end": 123
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 117,
                            "end": 123
                        },
                        "flags": 256,
                        "start": 116,
                        "end": 124
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 128,
                    "end": 130
                },
                "flags": 256,
                "start": 113,
                "end": 130
            },
            "flags": 128,
            "start": 113,
            "end": 131
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 146,
                    "start": 0,
                    "end": 149
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 134,
                            "end": 135
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 768,
                                                "start": 140,
                                                "end": 142
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 768,
                                                "start": 143,
                                                "end": 144
                                            },
                                            "flags": 256,
                                            "start": 138,
                                            "end": 144
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "e",
                                            "rawText": "e",
                                            "flags": 768,
                                            "start": 138,
                                            "end": 139
                                        },
                                        "flags": 256,
                                        "start": 138,
                                        "end": 144
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 138,
                                "end": 144
                            },
                            "flags": 256,
                            "start": 136,
                            "end": 145
                        }
                    ]
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 149,
                    "end": 151
                },
                "flags": 256,
                "start": 131,
                "end": 151
            },
            "flags": 128,
            "start": 131,
            "end": 152
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 164,
                    "start": 0,
                    "end": 167
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 155,
                            "end": 156
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 768,
                                            "start": 159,
                                            "end": 160
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 768,
                                            "start": 161,
                                            "end": 162
                                        },
                                        "flags": 256,
                                        "start": 159,
                                        "end": 162
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 159,
                                "end": 162
                            },
                            "flags": 256,
                            "start": 157,
                            "end": 163
                        }
                    ]
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 768,
                    "start": 167,
                    "end": 169
                },
                "flags": 256,
                "start": 152,
                "end": 169
            },
            "flags": 128,
            "start": 152,
            "end": 170
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 186,
                    "start": 0,
                    "end": 189
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 173,
                            "end": 174
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 224,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 177,
                                            "start": 0,
                                            "end": 180
                                        },
                                        "argument": {
                                            "kind": 135,
                                            "flags": 768,
                                            "start": 180,
                                            "end": 184
                                        },
                                        "flags": 256,
                                        "start": 177,
                                        "end": 184
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 177,
                                "end": 184
                            },
                            "flags": 256,
                            "start": 175,
                            "end": 185
                        }
                    ]
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 189,
                    "end": 191
                },
                "flags": 256,
                "start": 170,
                "end": 191
            },
            "flags": 128,
            "start": 170,
            "end": 192
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 208,
                    "start": 0,
                    "end": 211
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 195,
                            "end": 196
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 199,
                                            "start": 0,
                                            "end": 202
                                        },
                                        "argument": {
                                            "kind": 135,
                                            "flags": 768,
                                            "start": 202,
                                            "end": 206
                                        },
                                        "flags": 256,
                                        "start": 199,
                                        "end": 206
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 199,
                                "end": 206
                            },
                            "flags": 256,
                            "start": 197,
                            "end": 207
                        }
                    ]
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 211,
                    "end": 213
                },
                "flags": 256,
                "start": 192,
                "end": 213
            },
            "flags": 128,
            "start": 192,
            "end": 214
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 233,
                    "start": 0,
                    "end": 236
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 217,
                            "end": 218
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 221,
                                        "end": 222
                                    },
                                    {
                                        "kind": 224,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 223,
                                            "start": 0,
                                            "end": 227
                                        },
                                        "argument": {
                                            "kind": 135,
                                            "flags": 768,
                                            "start": 227,
                                            "end": 231
                                        },
                                        "flags": 256,
                                        "start": 223,
                                        "end": 231
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 221,
                                "end": 231
                            },
                            "flags": 256,
                            "start": 219,
                            "end": 232
                        }
                    ]
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 236,
                    "end": 238
                },
                "flags": 256,
                "start": 214,
                "end": 238
            },
            "flags": 128,
            "start": 214,
            "end": 239
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 258,
                    "start": 0,
                    "end": 261
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 242,
                            "end": 243
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 246,
                                        "end": 247
                                    },
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 248,
                                            "start": 0,
                                            "end": 252
                                        },
                                        "argument": {
                                            "kind": 135,
                                            "flags": 768,
                                            "start": 252,
                                            "end": 256
                                        },
                                        "flags": 256,
                                        "start": 248,
                                        "end": 256
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 246,
                                "end": 256
                            },
                            "flags": 256,
                            "start": 244,
                            "end": 257
                        }
                    ]
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 261,
                    "end": 263
                },
                "flags": 256,
                "start": 239,
                "end": 263
            },
            "flags": 128,
            "start": 239,
            "end": 264
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 279,
                    "start": 0,
                    "end": 282
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 267,
                            "end": 268
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 130,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 768,
                                                "start": 273,
                                                "end": 274
                                            },
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 768,
                                                "start": 275,
                                                "end": 276
                                            },
                                            "flags": 256,
                                            "start": 271,
                                            "end": 277
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 768,
                                            "start": 271,
                                            "end": 272
                                        },
                                        "flags": 256,
                                        "start": 271,
                                        "end": 277
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 271,
                                "end": 277
                            },
                            "flags": 256,
                            "start": 269,
                            "end": 278
                        }
                    ]
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 282,
                    "end": 284
                },
                "flags": 256,
                "start": 264,
                "end": 284
            },
            "flags": 128,
            "start": 264,
            "end": 285
        }
    ],
    "isModule": false,
    "text": "({e: a.b}) => x;\n\n([a.b]) => 0;\n\n({...this}) => x;\n\n([...this]) => x;\n\n({x, ...this}) => x;\n\n([x, ...this]) => x;\n\n({a:b[0]}) => x;\n\n(x, {e: a.b}) => x;\n\n(x, [a.b]) => 0;\n\n(x, {...this}) => x;\n\n(x, [...this]) => x;\n\n(x, {x, ...this}) => x;\n\n(x, [x, ...this]) => x;\n\n(x, {a:b[0]}) => x;\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 286
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left hand side of the arrow is not destructible  - start: 10, end: 13
✖ The left hand side of the arrow is not destructible  - start: 25, end: 28
✖ The left hand side of the arrow is not destructible  - start: 44, end: 47
✖ The left hand side of the arrow is not destructible  - start: 63, end: 66
✖ The left hand side of the arrow is not destructible  - start: 85, end: 88
✖ The left hand side of the arrow is not destructible  - start: 107, end: 110
✖ The left hand side of the arrow is not destructible  - start: 125, end: 128
✖ The left hand side of the arrow is not destructible  - start: 146, end: 149
✖ The left hand side of the arrow is not destructible  - start: 164, end: 167
✖ The left hand side of the arrow is not destructible  - start: 186, end: 189
✖ The left hand side of the arrow is not destructible  - start: 208, end: 211
✖ The left hand side of the arrow is not destructible  - start: 233, end: 236
✖ The left hand side of the arrow is not destructible  - start: 258, end: 261
✖ The left hand side of the arrow is not destructible  - start: 279, end: 282

```

