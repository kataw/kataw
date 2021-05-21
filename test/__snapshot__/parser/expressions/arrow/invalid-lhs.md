# Kataw parser test case

## Input

`````js
(...a)`template-head${c}`=>{}
(...a)?c:d=>{}=>{};
x = (...a)[1]=>{};
(a,...b)`template-head${c}`=>{}
(a,...b)`${c}template-tail`=>{};
x = (a,...b)`${c}template-tail`=>{}
()`template-head${c}template-tail`=>{}
()?c:d=>{}=>{};
x = ()[1]=>{}
x = ()[c]=>{};
x = (a,b)+c=>{};
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
                "kind": 226,
                "member": {
                    "kind": 121,
                    "expression": {
                        "kind": 215,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 1,
                            "end": 4
                        },
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 4,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 34,
                        "start": 1,
                        "end": 5
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 6
                },
                "template": {
                    "kind": 227,
                    "spans": [
                        {
                            "kind": 65764,
                            "rawText": "template-head",
                            "text": "template-head",
                            "expression": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 22,
                                "end": 23
                            },
                            "flags": 32,
                            "start": 6,
                            "end": 23
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 96,
                        "start": 23,
                        "end": 25
                    },
                    "flags": 32,
                    "start": 6,
                    "end": 25
                },
                "flags": 32,
                "start": 0,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 25
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 28,
                "end": 28
            },
            "flags": 16,
            "start": 27,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 121,
                    "expression": {
                        "kind": 215,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 31,
                            "end": 34
                        },
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 34,
                            "end": 35
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 34,
                        "start": 31,
                        "end": 35
                    },
                    "flags": 32,
                    "start": 29,
                    "end": 36
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 0,
                    "start": 36,
                    "end": 37
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 37,
                    "end": 38
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 0,
                    "start": 38,
                    "end": 39
                },
                "alternate": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 0,
                        "start": 40,
                        "end": 42
                    },
                    "typeParameters": null,
                    "parameters": {
                        "kind": 134299649,
                        "text": "d",
                        "rawText": "d",
                        "flags": 96,
                        "start": 39,
                        "end": 40
                    },
                    "asyncKeyword": null,
                    "returnType": null,
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 43,
                            "end": 43
                        },
                        "flags": 32,
                        "start": 42,
                        "end": 44
                    },
                    "flags": 32,
                    "start": 39,
                    "end": 44
                },
                "flags": 32,
                "start": 29,
                "end": 44
            },
            "flags": 16,
            "start": 29,
            "end": 44
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 47,
                "end": 47
            },
            "flags": 16,
            "start": 46,
            "end": 48
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 48,
            "end": 49
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 49,
                    "end": 51
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 51,
                    "end": 53
                },
                "right": {
                    "kind": 536871042,
                    "member": {
                        "kind": 121,
                        "expression": {
                            "kind": 215,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 55,
                                "end": 58
                            },
                            "binding": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 58,
                                "end": 59
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 34,
                            "start": 55,
                            "end": 59
                        },
                        "flags": 32,
                        "start": 53,
                        "end": 60
                    },
                    "expression": {
                        "kind": 201392130,
                        "text": 1,
                        "rawText": "1",
                        "flags": 96,
                        "start": 61,
                        "end": 62
                    },
                    "flags": 32,
                    "start": 53,
                    "end": 63
                },
                "flags": 32,
                "start": 49,
                "end": 63
            },
            "flags": 16,
            "start": 49,
            "end": 63
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 66,
                "end": 66
            },
            "flags": 16,
            "start": 65,
            "end": 67
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 67,
            "end": 68
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 70,
                                "end": 71
                            },
                            {
                                "kind": 215,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "start": 72,
                                    "end": 75
                                },
                                "binding": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 75,
                                    "end": 76
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 34,
                                "start": 72,
                                "end": 76
                            }
                        ],
                        "flags": 32,
                        "start": 68,
                        "end": 77
                    },
                    "flags": 32,
                    "start": 68,
                    "end": 77
                },
                "template": {
                    "kind": 227,
                    "spans": [
                        {
                            "kind": 65764,
                            "rawText": "template-head",
                            "text": "template-head",
                            "expression": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 93,
                                "end": 94
                            },
                            "flags": 32,
                            "start": 77,
                            "end": 94
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 96,
                        "start": 94,
                        "end": 96
                    },
                    "flags": 32,
                    "start": 77,
                    "end": 96
                },
                "flags": 32,
                "start": 68,
                "end": 96
            },
            "flags": 16,
            "start": 68,
            "end": 96
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 99,
                "end": 99
            },
            "flags": 16,
            "start": 98,
            "end": 100
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 102,
                                "end": 103
                            },
                            {
                                "kind": 215,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "start": 104,
                                    "end": 107
                                },
                                "binding": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 107,
                                    "end": 108
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 34,
                                "start": 104,
                                "end": 108
                            }
                        ],
                        "flags": 32,
                        "start": 100,
                        "end": 109
                    },
                    "flags": 32,
                    "start": 100,
                    "end": 109
                },
                "template": {
                    "kind": 227,
                    "spans": [
                        {
                            "kind": 65764,
                            "rawText": "",
                            "text": "",
                            "expression": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 112,
                                "end": 113
                            },
                            "flags": 32,
                            "start": 109,
                            "end": 113
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": "template-tail",
                        "rawText": "template-tail",
                        "flags": 96,
                        "start": 113,
                        "end": 128
                    },
                    "flags": 32,
                    "start": 109,
                    "end": 128
                },
                "flags": 32,
                "start": 100,
                "end": 128
            },
            "flags": 16,
            "start": 100,
            "end": 128
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 131,
                "end": 131
            },
            "flags": 16,
            "start": 130,
            "end": 132
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 132,
            "end": 133
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 133,
                    "end": 135
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 135,
                    "end": 137
                },
                "right": {
                    "kind": 226,
                    "member": {
                        "kind": 121,
                        "expression": {
                            "kind": 132,
                            "expressions": [
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 139,
                                    "end": 140
                                },
                                {
                                    "kind": 215,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "start": 141,
                                        "end": 144
                                    },
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 144,
                                        "end": 145
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 34,
                                    "start": 141,
                                    "end": 145
                                }
                            ],
                            "flags": 32,
                            "start": 137,
                            "end": 146
                        },
                        "flags": 32,
                        "start": 137,
                        "end": 146
                    },
                    "template": {
                        "kind": 227,
                        "spans": [
                            {
                                "kind": 65764,
                                "rawText": "",
                                "text": "",
                                "expression": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 149,
                                    "end": 150
                                },
                                "flags": 32,
                                "start": 146,
                                "end": 150
                            }
                        ],
                        "tail": {
                            "kind": 458761,
                            "text": "template-tail",
                            "rawText": "template-tail",
                            "flags": 96,
                            "start": 150,
                            "end": 165
                        },
                        "flags": 32,
                        "start": 146,
                        "end": 165
                    },
                    "flags": 32,
                    "start": 137,
                    "end": 165
                },
                "flags": 32,
                "start": 133,
                "end": 165
            },
            "flags": 16,
            "start": 133,
            "end": 165
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 168,
                "end": 168
            },
            "flags": 16,
            "start": 167,
            "end": 169
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 169,
                    "end": 169
                },
                "template": {
                    "kind": 227,
                    "spans": [
                        {
                            "kind": 65764,
                            "rawText": "template-head",
                            "text": "template-head",
                            "expression": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 188,
                                "end": 189
                            },
                            "flags": 32,
                            "start": 172,
                            "end": 189
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": "template-tail",
                        "rawText": "template-tail",
                        "flags": 96,
                        "start": 189,
                        "end": 204
                    },
                    "flags": 32,
                    "start": 172,
                    "end": 204
                },
                "flags": 32,
                "start": 169,
                "end": 204
            },
            "flags": 16,
            "start": 169,
            "end": 204
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 207,
                "end": 207
            },
            "flags": 16,
            "start": 206,
            "end": 208
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 208,
                    "end": 208
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 0,
                    "start": 211,
                    "end": 212
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 212,
                    "end": 213
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 0,
                    "start": 213,
                    "end": 214
                },
                "alternate": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 0,
                        "start": 215,
                        "end": 217
                    },
                    "typeParameters": null,
                    "parameters": {
                        "kind": 134299649,
                        "text": "d",
                        "rawText": "d",
                        "flags": 96,
                        "start": 214,
                        "end": 215
                    },
                    "asyncKeyword": null,
                    "returnType": null,
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 218,
                            "end": 218
                        },
                        "flags": 32,
                        "start": 217,
                        "end": 219
                    },
                    "flags": 32,
                    "start": 214,
                    "end": 219
                },
                "flags": 32,
                "start": 208,
                "end": 219
            },
            "flags": 16,
            "start": 208,
            "end": 219
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 222,
                "end": 222
            },
            "flags": 16,
            "start": 221,
            "end": 223
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 223,
            "end": 224
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 224,
                    "end": 226
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 226,
                    "end": 228
                },
                "right": {
                    "kind": 536871042,
                    "member": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 228,
                        "end": 228
                    },
                    "expression": {
                        "kind": 201392130,
                        "text": 1,
                        "rawText": "1",
                        "flags": 96,
                        "start": 232,
                        "end": 233
                    },
                    "flags": 32,
                    "start": 228,
                    "end": 234
                },
                "flags": 32,
                "start": 224,
                "end": 234
            },
            "flags": 16,
            "start": 224,
            "end": 234
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 237,
                "end": 237
            },
            "flags": 16,
            "start": 236,
            "end": 238
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 238,
                    "end": 240
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 240,
                    "end": 242
                },
                "right": {
                    "kind": 536871042,
                    "member": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 242,
                        "end": 242
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 246,
                        "end": 247
                    },
                    "flags": 32,
                    "start": 242,
                    "end": 248
                },
                "flags": 32,
                "start": 238,
                "end": 248
            },
            "flags": 16,
            "start": 238,
            "end": 248
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 251,
                "end": 251
            },
            "flags": 16,
            "start": 250,
            "end": 252
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 252,
            "end": 253
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 253,
                    "end": 255
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 255,
                    "end": 257
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 121,
                        "expression": {
                            "kind": 132,
                            "expressions": [
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 259,
                                    "end": 260
                                },
                                {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 261,
                                    "end": 262
                                }
                            ],
                            "flags": 32,
                            "start": 257,
                            "end": 263
                        },
                        "flags": 32,
                        "start": 257,
                        "end": 263
                    },
                    "operatorToken": {
                        "kind": 34098,
                        "flags": 64,
                        "start": 263,
                        "end": 264
                    },
                    "right": {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 0,
                            "start": 265,
                            "end": 267
                        },
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 264,
                            "end": 265
                        },
                        "asyncKeyword": null,
                        "returnType": null,
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 268,
                                "end": 268
                            },
                            "flags": 32,
                            "start": 267,
                            "end": 269
                        },
                        "flags": 32,
                        "start": 264,
                        "end": 269
                    },
                    "flags": 32,
                    "start": 257,
                    "end": 269
                },
                "flags": 32,
                "start": 253,
                "end": 269
            },
            "flags": 16,
            "start": 253,
            "end": 270
        }
    ],
    "isModule": false,
    "source": "(...a)`template-head${c}`=>{}\n(...a)?c:d=>{}=>{};\nx = (...a)[1]=>{};\n(a,...b)`template-head${c}`=>{}\n(a,...b)`${c}template-tail`=>{};\nx = (a,...b)`${c}template-tail`=>{}\n()`template-head${c}template-tail`=>{}\n()?c:d=>{}=>{};\nx = ()[1]=>{}\nx = ()[c]=>{};\nx = (a,b)+c=>{};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 270
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 25, end: 27
✖ Expected a `;` - start: 44, end: 46
✖ Expected a `;` - start: 63, end: 65
✖ Expected a `;` - start: 96, end: 98
✖ Expected a `;` - start: 128, end: 130
✖ Expected a `;` - start: 165, end: 167
✖ Expression expected - start: 172, end: 188
✖ Expected a `;` - start: 204, end: 206
✖ Expression expected - start: 211, end: 212
✖ Expected a `;` - start: 219, end: 221
✖ Expression expected - start: 231, end: 232
✖ Expected a `;` - start: 234, end: 236
✖ Expression expected - start: 245, end: 246
✖ Expected a `;` - start: 248, end: 250
✖ Expected a `;` - start: 265, end: 267

```

