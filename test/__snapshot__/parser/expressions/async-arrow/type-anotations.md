# Kataw parser test case

## Input

`````js
async (x?: string) => {};

async ([x]: string, a) => {};

async ([x]: string, a) => {};

async ([x]: string, a: number) => {};

async ([x]?: string, a) => {};

async ([x]?: string, a?) => {};

async (...x: string) => {};

async (...x?: string) => {};

async (...[x]?: string, a?) => {};
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 18,
                "end": 21
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 215,
                    "ellipsisToken": null,
                    "binding": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 7,
                        "end": 8
                    },
                    "optionalToken": {
                        "kind": 134217750,
                        "flags": 64,
                        "start": 8,
                        "end": 9
                    },
                    "type": {
                        "kind": 139,
                        "type": {
                            "kind": 134234347,
                            "flags": 64,
                            "start": 10,
                            "end": 17
                        },
                        "flags": 0,
                        "start": 9,
                        "end": 17
                    },
                    "initializer": null,
                    "flags": 32,
                    "start": 7,
                    "end": 17
                }
            ],
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "returnType": null,
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 23,
                    "end": 23
                },
                "flags": 32,
                "start": 21,
                "end": 24
            },
            "flags": 288,
            "start": 0,
            "end": 24
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 24,
            "end": 25
        },
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 49,
                "end": 52
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 215,
                    "ellipsisToken": null,
                    "binding": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 35,
                                    "end": 36
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 35,
                            "end": 36
                        },
                        "flags": 32,
                        "start": 34,
                        "end": 37
                    },
                    "optionalToken": null,
                    "type": {
                        "kind": 139,
                        "type": {
                            "kind": 134234347,
                            "flags": 64,
                            "start": 38,
                            "end": 45
                        },
                        "flags": 0,
                        "start": 37,
                        "end": 45
                    },
                    "initializer": null,
                    "flags": 32,
                    "start": 34,
                    "end": 45
                },
                {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 46,
                    "end": 48
                }
            ],
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 25,
                "end": 32
            },
            "returnType": null,
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 54,
                    "end": 54
                },
                "flags": 32,
                "start": 52,
                "end": 55
            },
            "flags": 290,
            "start": 25,
            "end": 55
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 55,
            "end": 56
        },
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 80,
                "end": 83
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 215,
                    "ellipsisToken": null,
                    "binding": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 66,
                                    "end": 67
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 66,
                            "end": 67
                        },
                        "flags": 32,
                        "start": 65,
                        "end": 68
                    },
                    "optionalToken": null,
                    "type": {
                        "kind": 139,
                        "type": {
                            "kind": 134234347,
                            "flags": 64,
                            "start": 69,
                            "end": 76
                        },
                        "flags": 0,
                        "start": 68,
                        "end": 76
                    },
                    "initializer": null,
                    "flags": 32,
                    "start": 65,
                    "end": 76
                },
                {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 77,
                    "end": 79
                }
            ],
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 56,
                "end": 63
            },
            "returnType": null,
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 85,
                    "end": 85
                },
                "flags": 32,
                "start": 83,
                "end": 86
            },
            "flags": 290,
            "start": 56,
            "end": 86
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 86,
            "end": 87
        },
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 119,
                "end": 122
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 215,
                    "ellipsisToken": null,
                    "binding": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 97,
                                    "end": 98
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 97,
                            "end": 98
                        },
                        "flags": 32,
                        "start": 96,
                        "end": 99
                    },
                    "optionalToken": null,
                    "type": {
                        "kind": 139,
                        "type": {
                            "kind": 134234347,
                            "flags": 64,
                            "start": 100,
                            "end": 107
                        },
                        "flags": 0,
                        "start": 99,
                        "end": 107
                    },
                    "initializer": null,
                    "flags": 32,
                    "start": 96,
                    "end": 107
                },
                {
                    "kind": 215,
                    "ellipsisToken": null,
                    "binding": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 108,
                        "end": 110
                    },
                    "optionalToken": null,
                    "type": {
                        "kind": 139,
                        "type": {
                            "kind": 134234345,
                            "flags": 64,
                            "start": 111,
                            "end": 118
                        },
                        "flags": 0,
                        "start": 110,
                        "end": 118
                    },
                    "initializer": null,
                    "flags": 32,
                    "start": 108,
                    "end": 118
                }
            ],
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 87,
                "end": 94
            },
            "returnType": null,
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 124,
                    "end": 124
                },
                "flags": 32,
                "start": 122,
                "end": 125
            },
            "flags": 290,
            "start": 87,
            "end": 125
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 125,
            "end": 126
        },
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 151,
                "end": 154
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 215,
                    "ellipsisToken": null,
                    "binding": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 136,
                                    "end": 137
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 136,
                            "end": 137
                        },
                        "flags": 32,
                        "start": 135,
                        "end": 138
                    },
                    "optionalToken": {
                        "kind": 134217750,
                        "flags": 64,
                        "start": 138,
                        "end": 139
                    },
                    "type": {
                        "kind": 139,
                        "type": {
                            "kind": 134234347,
                            "flags": 64,
                            "start": 140,
                            "end": 147
                        },
                        "flags": 0,
                        "start": 139,
                        "end": 147
                    },
                    "initializer": null,
                    "flags": 32,
                    "start": 135,
                    "end": 147
                },
                {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 148,
                    "end": 150
                }
            ],
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 126,
                "end": 133
            },
            "returnType": null,
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 156,
                    "end": 156
                },
                "flags": 32,
                "start": 154,
                "end": 157
            },
            "flags": 290,
            "start": 126,
            "end": 157
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 157,
            "end": 158
        },
        {
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
                    "kind": 215,
                    "ellipsisToken": null,
                    "binding": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 168,
                                    "end": 169
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 168,
                            "end": 169
                        },
                        "flags": 32,
                        "start": 167,
                        "end": 170
                    },
                    "optionalToken": {
                        "kind": 134217750,
                        "flags": 64,
                        "start": 170,
                        "end": 171
                    },
                    "type": {
                        "kind": 139,
                        "type": {
                            "kind": 134234347,
                            "flags": 64,
                            "start": 172,
                            "end": 179
                        },
                        "flags": 0,
                        "start": 171,
                        "end": 179
                    },
                    "initializer": null,
                    "flags": 32,
                    "start": 167,
                    "end": 179
                },
                {
                    "kind": 215,
                    "ellipsisToken": null,
                    "binding": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 180,
                        "end": 182
                    },
                    "optionalToken": {
                        "kind": 134217750,
                        "flags": 64,
                        "start": 182,
                        "end": 183
                    },
                    "type": null,
                    "initializer": null,
                    "flags": 32,
                    "start": 180,
                    "end": 183
                }
            ],
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 158,
                "end": 165
            },
            "returnType": null,
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 189,
                    "end": 189
                },
                "flags": 32,
                "start": 187,
                "end": 190
            },
            "flags": 290,
            "start": 158,
            "end": 190
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 190,
            "end": 191
        },
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 213,
                "end": 216
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 223,
                    "ellipsisToken": {
                        "kind": 524302,
                        "flags": 0,
                        "start": 200,
                        "end": 203
                    },
                    "flags": 32,
                    "start": 200,
                    "end": 212
                }
            ],
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 191,
                "end": 198
            },
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
                "start": 216,
                "end": 219
            },
            "flags": 290,
            "start": 191,
            "end": 219
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 219,
            "end": 220
        },
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 243,
                "end": 246
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 223,
                    "ellipsisToken": {
                        "kind": 524302,
                        "flags": 0,
                        "start": 229,
                        "end": 232
                    },
                    "flags": 32,
                    "start": 229,
                    "end": 242
                }
            ],
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 220,
                "end": 227
            },
            "returnType": null,
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 248,
                    "end": 248
                },
                "flags": 32,
                "start": 246,
                "end": 249
            },
            "flags": 290,
            "start": 220,
            "end": 249
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 249,
            "end": 250
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 250,
                "end": 257
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 223,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 0,
                            "start": 259,
                            "end": 262
                        },
                        "argument": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 263,
                                        "end": 264
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 263,
                                "end": 264
                            },
                            "flags": 32,
                            "start": 262,
                            "end": 265
                        },
                        "flags": 32,
                        "start": 259,
                        "end": 274
                    },
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 275,
                            "end": 277
                        },
                        "optionalToken": {
                            "kind": 134217750,
                            "flags": 64,
                            "start": 277,
                            "end": 278
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 275,
                        "end": 278
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 250,
                "end": 250
            },
            "flags": 268435488,
            "start": 250,
            "end": 279
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 284,
                "end": 284
            },
            "flags": 16,
            "start": 282,
            "end": 285
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 285,
            "end": 286
        }
    ],
    "isModule": false,
    "source": "async (x?: string) => {};\n\nasync ([x]: string, a) => {};\n\nasync ([x]: string, a) => {};\n\nasync ([x]: string, a: number) => {};\n\nasync ([x]?: string, a) => {};\n\nasync ([x]?: string, a?) => {};\n\nasync (...x: string) => {};\n\nasync (...x?: string) => {};\n\nasync (...[x]?: string, a?) => {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 286
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 279, end: 282

```

