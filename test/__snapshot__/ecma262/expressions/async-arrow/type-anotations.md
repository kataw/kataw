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
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 0,
                    "end": 5
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
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
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 10,
                                    "end": 17
                                },
                                "flags": 2097152,
                                "start": 10,
                                "end": 17
                            },
                            "right": null,
                            "flags": 32,
                            "start": 7,
                            "end": 17
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 7,
                    "end": 18
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 18,
                    "end": 21
                },
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
            "flags": 16,
            "start": 0,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 25,
                    "end": 32
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
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
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 38,
                                    "end": 45
                                },
                                "flags": 2097152,
                                "start": 38,
                                "end": 45
                            },
                            "right": null,
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
                    "trailingComma": false,
                    "flags": 34,
                    "start": 34,
                    "end": 49
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 49,
                    "end": 52
                },
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
            "flags": 16,
            "start": 25,
            "end": 56
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 56,
                    "end": 63
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
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
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 69,
                                    "end": 76
                                },
                                "flags": 2097152,
                                "start": 69,
                                "end": 76
                            },
                            "right": null,
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
                    "trailingComma": false,
                    "flags": 34,
                    "start": 65,
                    "end": 80
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 80,
                    "end": 83
                },
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
            "flags": 16,
            "start": 56,
            "end": 87
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 87,
                    "end": 94
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
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
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 100,
                                    "end": 107
                                },
                                "flags": 2097152,
                                "start": 100,
                                "end": 107
                            },
                            "right": null,
                            "flags": 32,
                            "start": 96,
                            "end": 107
                        },
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
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
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 2097216,
                                    "start": 111,
                                    "end": 118
                                },
                                "flags": 2097152,
                                "start": 111,
                                "end": 118
                            },
                            "right": null,
                            "flags": 32,
                            "start": 108,
                            "end": 118
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "start": 96,
                    "end": 119
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 119,
                    "end": 122
                },
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
            "flags": 16,
            "start": 87,
            "end": 126
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 126,
                    "end": 133
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
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
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 140,
                                    "end": 147
                                },
                                "flags": 2097152,
                                "start": 140,
                                "end": 147
                            },
                            "right": null,
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
                    "trailingComma": false,
                    "flags": 34,
                    "start": 135,
                    "end": 151
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 151,
                    "end": 154
                },
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
            "flags": 16,
            "start": 126,
            "end": 158
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 158,
                    "end": 165
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
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
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 172,
                                    "end": 179
                                },
                                "flags": 2097152,
                                "start": 172,
                                "end": 179
                            },
                            "right": null,
                            "flags": 32,
                            "start": 167,
                            "end": 179
                        },
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
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
                            "right": null,
                            "flags": 32,
                            "start": 180,
                            "end": 183
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "start": 167,
                    "end": 184
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 184,
                    "end": 187
                },
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
            "flags": 16,
            "start": 158,
            "end": 191
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 191,
                    "end": 198
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 200,
                                "end": 203
                            },
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 203,
                                "end": 204
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 205,
                                    "end": 212
                                },
                                "flags": 2097152,
                                "start": 205,
                                "end": 212
                            },
                            "right": null,
                            "flags": 32,
                            "start": 200,
                            "end": 212
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "start": 200,
                    "end": 213
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 213,
                    "end": 216
                },
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
            "flags": 16,
            "start": 191,
            "end": 220
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 220,
                    "end": 227
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 229,
                                "end": 232
                            },
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 232,
                                "end": 233
                            },
                            "optionalToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 233,
                                "end": 234
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 235,
                                    "end": 242
                                },
                                "flags": 2097152,
                                "start": 235,
                                "end": 242
                            },
                            "right": null,
                            "flags": 32,
                            "start": 229,
                            "end": 242
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "start": 229,
                    "end": 243
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 243,
                    "end": 246
                },
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
            "flags": 16,
            "start": 220,
            "end": 250
        },
        {
            "kind": 120,
            "expression": {
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
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
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
                            "optionalToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 265,
                                "end": 266
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 267,
                                    "end": 274
                                },
                                "flags": 2097152,
                                "start": 267,
                                "end": 274
                            },
                            "right": null,
                            "flags": 32,
                            "start": 259,
                            "end": 274
                        },
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
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
                            "right": null,
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
                "flags": 268435490,
                "start": 250,
                "end": 279
            },
            "flags": 16,
            "start": 250,
            "end": 279
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
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
✖ Expected a `;` - start: 279, end: 282

```

