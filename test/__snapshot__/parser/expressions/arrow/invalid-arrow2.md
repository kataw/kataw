# Kataw parser test case

## Input

`````js
(a['b'], c) => {};
(c, a['b']) => {};
(...a = b) => b;
(...rest - a) => b;
({x: this})  => {};
({x: y.z} = a) => b;
([x].length) => y;
(z, [x].length) => y;
({}.length) => y;
(z, {}.length) => y;
({x: y}.length) => y;
(z, {x: y}.length) => y;
({get a(){}}) => 0;;
(...[ 5 ]) => {};
({x: const}) => null;
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
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 130,
                            "member": {
                                "kind": 81921,
                                "value": "a",
                                "autofix": 0,
                                "flags": 768,
                                "start": 1,
                                "end": 2
                            },
                            "expression": {
                                "kind": 67174403,
                                "value": "b",
                                "autofix": 0,
                                "flags": 768,
                                "start": 3,
                                "end": 6
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 0,
                            "end": 7
                        },
                        {
                            "kind": 81921,
                            "value": "c",
                            "autofix": 0,
                            "flags": 768,
                            "start": 8,
                            "end": 10
                        }
                    ]
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 16,
                        "end": 16
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 14,
                    "end": 17
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 17
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 18
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 81921,
                            "value": "c",
                            "autofix": 0,
                            "flags": 768,
                            "start": 20,
                            "end": 21
                        },
                        {
                            "kind": 130,
                            "member": {
                                "kind": 81921,
                                "value": "a",
                                "autofix": 0,
                                "flags": 768,
                                "start": 22,
                                "end": 24
                            },
                            "expression": {
                                "kind": 67174403,
                                "value": "b",
                                "autofix": 0,
                                "flags": 768,
                                "start": 25,
                                "end": 28
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 29
                        }
                    ],
                    "autofix": 0,
                    "flags": 256,
                    "start": 18,
                    "end": 30
                },
                "autofix": 0,
                "flags": 256,
                "start": 18,
                "end": 30
            },
            "autofix": 0,
            "flags": 128,
            "start": 18,
            "end": 30
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 35,
                "end": 35
            },
            "autofix": 0,
            "flags": 128,
            "start": 33,
            "end": 36
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
            "start": 36,
            "end": 37
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 215,
                        "ellipsisToken": {
                            "kind": 524302,
                            "autofix": 0,
                            "flags": 0,
                            "start": 39,
                            "end": 42
                        },
                        "binding": {
                            "kind": 81921,
                            "value": "a",
                            "autofix": 0,
                            "flags": 768,
                            "start": 42,
                            "end": 43
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 81921,
                            "value": "b",
                            "autofix": 0,
                            "flags": 768,
                            "start": 45,
                            "end": 47
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 39,
                        "end": 47
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": "b",
                    "autofix": 0,
                    "flags": 768,
                    "start": 51,
                    "end": 53
                },
                "autofix": 0,
                "flags": 256,
                "start": 37,
                "end": 53
            },
            "autofix": 0,
            "flags": 128,
            "start": 37,
            "end": 54
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "autofix": 0,
                        "flags": 256,
                        "start": 54,
                        "end": 63
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 54,
                    "end": 63
                },
                "operatorToken": {
                    "kind": 35379,
                    "autofix": 0,
                    "flags": 0,
                    "start": 63,
                    "end": 65
                },
                "right": {
                    "kind": 81921,
                    "value": "a",
                    "autofix": 0,
                    "flags": 768,
                    "start": 65,
                    "end": 67
                },
                "autofix": 0,
                "flags": 256,
                "start": 54,
                "end": 67
            },
            "autofix": 0,
            "flags": 128,
            "start": 54,
            "end": 67
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "b",
                "autofix": 0,
                "flags": 768,
                "start": 71,
                "end": 73
            },
            "autofix": 0,
            "flags": 128,
            "start": 71,
            "end": 74
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
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
                                        "kind": 135,
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 79,
                                        "end": 84
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 77,
                                        "end": 78
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 77,
                                    "end": 84
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 77,
                            "end": 84
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 76,
                        "end": 85
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 92,
                        "end": 92
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 90,
                    "end": 93
                },
                "autofix": 0,
                "flags": 256,
                "start": 74,
                "end": 93
            },
            "autofix": 0,
            "flags": 128,
            "start": 74,
            "end": 94
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
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
                                        "left": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 81921,
                                                "value": "y",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 99,
                                                "end": 101
                                            },
                                            "expression": {
                                                "kind": 81921,
                                                "value": "z",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 102,
                                                "end": 103
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 97,
                                            "end": 103
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 97,
                                            "end": 98
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 97,
                                        "end": 103
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 97,
                                "end": 103
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 96,
                            "end": 104
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "autofix": 0,
                            "flags": 0,
                            "start": 104,
                            "end": 106
                        },
                        "right": {
                            "kind": 81921,
                            "value": "a",
                            "autofix": 0,
                            "flags": 768,
                            "start": 106,
                            "end": 108
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 96,
                        "end": 108
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": "b",
                    "autofix": 0,
                    "flags": 768,
                    "start": 112,
                    "end": 114
                },
                "autofix": 0,
                "flags": 256,
                "start": 94,
                "end": 114
            },
            "autofix": 0,
            "flags": 128,
            "start": 94,
            "end": 115
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 118,
                                    "end": 119
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 118,
                            "end": 119
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 117,
                        "end": 120
                    },
                    "expression": {
                        "kind": 81921,
                        "value": "length",
                        "autofix": 0,
                        "flags": 768,
                        "start": 121,
                        "end": 127
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 115,
                    "end": 127
                },
                "autofix": 0,
                "flags": 256,
                "start": 115,
                "end": 128
            },
            "autofix": 0,
            "flags": 128,
            "start": 115,
            "end": 128
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "y",
                "autofix": 0,
                "flags": 768,
                "start": 131,
                "end": 133
            },
            "autofix": 0,
            "flags": 128,
            "start": 131,
            "end": 134
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 81921,
                            "value": "z",
                            "autofix": 0,
                            "flags": 768,
                            "start": 136,
                            "end": 137
                        },
                        {
                            "kind": 129,
                            "member": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 140,
                                            "end": 141
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 140,
                                    "end": 141
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 138,
                                "end": 142
                            },
                            "expression": {
                                "kind": 81921,
                                "value": "length",
                                "autofix": 0,
                                "flags": 768,
                                "start": 143,
                                "end": 149
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 134,
                            "end": 149
                        }
                    ],
                    "autofix": 0,
                    "flags": 256,
                    "start": 134,
                    "end": 150
                },
                "autofix": 0,
                "flags": 256,
                "start": 134,
                "end": 150
            },
            "autofix": 0,
            "flags": 128,
            "start": 134,
            "end": 150
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "y",
                "autofix": 0,
                "flags": 768,
                "start": 153,
                "end": 155
            },
            "autofix": 0,
            "flags": 128,
            "start": 153,
            "end": 156
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 159,
                            "end": 159
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 158,
                        "end": 160
                    },
                    "expression": {
                        "kind": 81921,
                        "value": "length",
                        "autofix": 0,
                        "flags": 768,
                        "start": 161,
                        "end": 167
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 156,
                    "end": 167
                },
                "autofix": 0,
                "flags": 256,
                "start": 156,
                "end": 168
            },
            "autofix": 0,
            "flags": 128,
            "start": 156,
            "end": 168
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "y",
                "autofix": 0,
                "flags": 768,
                "start": 171,
                "end": 173
            },
            "autofix": 0,
            "flags": 128,
            "start": 171,
            "end": 174
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 81921,
                            "value": "z",
                            "autofix": 0,
                            "flags": 768,
                            "start": 176,
                            "end": 177
                        },
                        {
                            "kind": 129,
                            "member": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 180,
                                    "end": 180
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 178,
                                "end": 181
                            },
                            "expression": {
                                "kind": 81921,
                                "value": "length",
                                "autofix": 0,
                                "flags": 768,
                                "start": 182,
                                "end": 188
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 174,
                            "end": 188
                        }
                    ],
                    "autofix": 0,
                    "flags": 256,
                    "start": 174,
                    "end": 189
                },
                "autofix": 0,
                "flags": 256,
                "start": 174,
                "end": 189
            },
            "autofix": 0,
            "flags": 128,
            "start": 174,
            "end": 189
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "y",
                "autofix": 0,
                "flags": 768,
                "start": 192,
                "end": 194
            },
            "autofix": 0,
            "flags": 128,
            "start": 192,
            "end": 195
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 81921,
                                        "value": "y",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 200,
                                        "end": 202
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 198,
                                        "end": 199
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 198,
                                    "end": 202
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 198,
                            "end": 202
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 197,
                        "end": 203
                    },
                    "expression": {
                        "kind": 81921,
                        "value": "length",
                        "autofix": 0,
                        "flags": 768,
                        "start": 204,
                        "end": 210
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 195,
                    "end": 210
                },
                "autofix": 0,
                "flags": 256,
                "start": 195,
                "end": 211
            },
            "autofix": 0,
            "flags": 128,
            "start": 195,
            "end": 211
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "y",
                "autofix": 0,
                "flags": 768,
                "start": 214,
                "end": 216
            },
            "autofix": 0,
            "flags": 128,
            "start": 214,
            "end": 217
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 81921,
                            "value": "z",
                            "autofix": 0,
                            "flags": 768,
                            "start": 219,
                            "end": 220
                        },
                        {
                            "kind": 129,
                            "member": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "left": {
                                                "kind": 81921,
                                                "value": "y",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 225,
                                                "end": 227
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": "x",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 223,
                                                "end": 224
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 223,
                                            "end": 227
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 223,
                                    "end": 227
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 221,
                                "end": 228
                            },
                            "expression": {
                                "kind": 81921,
                                "value": "length",
                                "autofix": 0,
                                "flags": 768,
                                "start": 229,
                                "end": 235
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 217,
                            "end": 235
                        }
                    ],
                    "autofix": 0,
                    "flags": 256,
                    "start": 217,
                    "end": 236
                },
                "autofix": 0,
                "flags": 256,
                "start": 217,
                "end": 236
            },
            "autofix": 0,
            "flags": 128,
            "start": 217,
            "end": 236
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "y",
                "autofix": 0,
                "flags": 768,
                "start": 239,
                "end": 241
            },
            "autofix": 0,
            "flags": 128,
            "start": 239,
            "end": 242
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 209,
                                    "name": {
                                        "kind": 81921,
                                        "value": "a",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 248,
                                        "end": 250
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 251,
                                        "end": 252
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "statements": [],
                                            "multiline": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 253,
                                            "end": 253
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 252,
                                        "end": 254
                                    },
                                    "autofix": 0,
                                    "flags": 8448,
                                    "start": 250,
                                    "end": 254
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 245,
                            "end": 254
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 244,
                        "end": 255
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": 0,
                    "autofix": 0,
                    "flags": 768,
                    "start": 259,
                    "end": 261
                },
                "autofix": 0,
                "flags": 256,
                "start": 242,
                "end": 261
            },
            "autofix": 0,
            "flags": 128,
            "start": 242,
            "end": 262
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
            "start": 262,
            "end": 263
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "autofix": 0,
                    "flags": 256,
                    "start": 263,
                    "end": 269
                },
                "autofix": 0,
                "flags": 256,
                "start": 263,
                "end": 269
            },
            "autofix": 0,
            "flags": 128,
            "start": 263,
            "end": 269
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 5,
                "autofix": 0,
                "flags": 768,
                "start": 269,
                "end": 271
            },
            "autofix": 0,
            "flags": 128,
            "start": 269,
            "end": 271
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 279,
                "end": 279
            },
            "autofix": 0,
            "flags": 128,
            "start": 277,
            "end": 280
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
            "start": 280,
            "end": 281
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
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
                                        "kind": 253,
                                        "text": "",
                                        "autofix": 0,
                                        "flags": 12,
                                        "start": 286,
                                        "end": 286
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 284,
                                        "end": 285
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 284,
                                    "end": 286
                                },
                                {
                                    "kind": 81921,
                                    "value": "const",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 286,
                                    "end": 292
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 284,
                            "end": 292
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 283,
                        "end": 293
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 269,
                    "value": null,
                    "autofix": 0,
                    "flags": 768,
                    "start": 297,
                    "end": 302
                },
                "autofix": 0,
                "flags": 256,
                "start": 281,
                "end": 302
            },
            "autofix": 0,
            "flags": 128,
            "start": 281,
            "end": 303
        }
    ],
    "isModule": false,
    "text": "(a['b'], c) => {};\n(c, a['b']) => {};\n(...a = b) => b;\n(...rest - a) => b;\n({x: this})  => {};\n({x: y.z} = a) => b;\n([x].length) => y;\n(z, [x].length) => y;\n({}.length) => y;\n(z, {}.length) => y;\n({x: y}.length) => y;\n(z, {x: y}.length) => y;\n({get a(){}}) => 0;;\n(...[ 5 ]) => {};\n({x: const}) => null;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 31,
            "error": "The left hand side of the arrow is not destructible ",
            "start": 11,
            "end": 14
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 30,
            "end": 33
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 30,
            "end": 33
        },
        {
            "kind": 2,
            "source": 2,
            "code": 18,
            "error": "A rest element cannot have an initializer",
            "start": 43,
            "end": 45
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 63,
            "end": 65
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 67,
            "end": 68
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 67,
            "end": 68
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 68,
            "end": 71
        },
        {
            "kind": 2,
            "source": 2,
            "code": 31,
            "error": "The left hand side of the arrow is not destructible ",
            "start": 86,
            "end": 90
        },
        {
            "kind": 2,
            "source": 2,
            "code": 31,
            "error": "The left hand side of the arrow is not destructible ",
            "start": 109,
            "end": 112
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 128,
            "end": 131
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 128,
            "end": 131
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 150,
            "end": 153
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 150,
            "end": 153
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 168,
            "end": 171
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 168,
            "end": 171
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 189,
            "end": 192
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 189,
            "end": 192
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 211,
            "end": 214
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 211,
            "end": 214
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 236,
            "end": 239
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 236,
            "end": 239
        },
        {
            "kind": 2,
            "source": 2,
            "code": 31,
            "error": "The left hand side of the arrow is not destructible ",
            "start": 256,
            "end": 259
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 269,
            "end": 271
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 269,
            "end": 271
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 269,
            "end": 271
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 271,
            "end": 273
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 271,
            "end": 273
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 273,
            "end": 274
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 274,
            "end": 277
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 286,
            "end": 292
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 286,
            "end": 292
        },
        {
            "kind": 2,
            "source": 2,
            "code": 31,
            "error": "The left hand side of the arrow is not destructible ",
            "start": 294,
            "end": 297
        }
    ],
    "start": 0,
    "end": 303
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

