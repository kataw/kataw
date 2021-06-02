# Kataw parser test case

## Input

`````js
function a<X: $ReadOnlyArray<number>>(x: X): X {
  return [...x];
}

function b<X: $ReadOnlyArray<number>>(x: X): X {
  return [...x, ...x]; // nope, because X could be a tuple
}

function c<X: $ReadOnlyArray<number>>(x: X): X {
  return [42, ...x]; // error
}

function d<X: [number, number]>(x: X): X {
  return [...x, ...x]; // error
}
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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 38,
                            "end": 39
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "X",
                                    "rawText": "X",
                                    "flags": 96,
                                    "start": 40,
                                    "end": 42
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 40,
                                "end": 42
                            },
                            "flags": 0,
                            "start": 39,
                            "end": 42
                        },
                        "right": null,
                        "flags": 32,
                        "start": 38,
                        "end": 42
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 37,
                "end": 43
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "start": 48,
                                "end": 57
                            },
                            "expression": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 223,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 59,
                                                "end": 62
                                            },
                                            "argument": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 62,
                                                "end": 63
                                            },
                                            "flags": 32,
                                            "start": 59,
                                            "end": 63
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 59,
                                    "end": 63
                                },
                                "flags": 32,
                                "start": 57,
                                "end": 64
                            },
                            "flags": 16,
                            "start": 1,
                            "end": 48
                        }
                    ],
                    "flags": 33,
                    "start": 48,
                    "end": 65
                },
                "flags": 32,
                "start": 46,
                "end": 67
            },
            "typeParameters": {
                "kind": 265,
                "typeParameters": [
                    {
                        "kind": 146,
                        "name": {
                            "kind": 134299649,
                            "text": "X",
                            "rawText": "X",
                            "flags": 96,
                            "start": 11,
                            "end": 12
                        },
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "$ReadOnlyArray",
                                    "rawText": "$ReadOnlyArray",
                                    "flags": 96,
                                    "start": 13,
                                    "end": 28
                                },
                                "typeParameters": {
                                    "kind": 266,
                                    "parameters": [
                                        {
                                            "kind": 267,
                                            "type": {
                                                "kind": 134234345,
                                                "flags": 64,
                                                "start": 29,
                                                "end": 35
                                            },
                                            "flags": 0,
                                            "start": 29,
                                            "end": 35
                                        }
                                    ],
                                    "flags": 0,
                                    "start": 28,
                                    "end": 36
                                },
                                "flags": 0,
                                "start": 13,
                                "end": 36
                            },
                            "flags": 0,
                            "start": 12,
                            "end": 36
                        },
                        "defaultType": null,
                        "flags": 0,
                        "start": 11,
                        "end": 36
                    }
                ],
                "flags": 0,
                "start": 10,
                "end": 37
            },
            "returnType": {
                "kind": 139,
                "type": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "X",
                        "rawText": "X",
                        "flags": 96,
                        "start": 44,
                        "end": 46
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 44,
                    "end": 46
                },
                "flags": 0,
                "start": 0,
                "end": 46
            },
            "flags": 16,
            "start": 0,
            "end": 67
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 67,
                "end": 77
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 96,
                "start": 77,
                "end": 79
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 107,
                            "end": 108
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "X",
                                    "rawText": "X",
                                    "flags": 96,
                                    "start": 109,
                                    "end": 111
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 109,
                                "end": 111
                            },
                            "flags": 0,
                            "start": 108,
                            "end": 111
                        },
                        "right": null,
                        "flags": 32,
                        "start": 107,
                        "end": 111
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 106,
                "end": 112
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "start": 117,
                                "end": 126
                            },
                            "expression": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 223,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 128,
                                                "end": 131
                                            },
                                            "argument": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 131,
                                                "end": 132
                                            },
                                            "flags": 32,
                                            "start": 128,
                                            "end": 132
                                        },
                                        {
                                            "kind": 223,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 133,
                                                "end": 137
                                            },
                                            "argument": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 137,
                                                "end": 138
                                            },
                                            "flags": 32,
                                            "start": 133,
                                            "end": 138
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 128,
                                    "end": 138
                                },
                                "flags": 32,
                                "start": 126,
                                "end": 139
                            },
                            "flags": 16,
                            "start": 1,
                            "end": 117
                        }
                    ],
                    "flags": 33,
                    "start": 117,
                    "end": 140
                },
                "flags": 32,
                "start": 115,
                "end": 178
            },
            "typeParameters": {
                "kind": 265,
                "typeParameters": [
                    {
                        "kind": 146,
                        "name": {
                            "kind": 134299649,
                            "text": "X",
                            "rawText": "X",
                            "flags": 96,
                            "start": 80,
                            "end": 81
                        },
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "$ReadOnlyArray",
                                    "rawText": "$ReadOnlyArray",
                                    "flags": 96,
                                    "start": 82,
                                    "end": 97
                                },
                                "typeParameters": {
                                    "kind": 266,
                                    "parameters": [
                                        {
                                            "kind": 267,
                                            "type": {
                                                "kind": 134234345,
                                                "flags": 64,
                                                "start": 98,
                                                "end": 104
                                            },
                                            "flags": 0,
                                            "start": 98,
                                            "end": 104
                                        }
                                    ],
                                    "flags": 0,
                                    "start": 97,
                                    "end": 105
                                },
                                "flags": 0,
                                "start": 82,
                                "end": 105
                            },
                            "flags": 0,
                            "start": 81,
                            "end": 105
                        },
                        "defaultType": null,
                        "flags": 0,
                        "start": 80,
                        "end": 105
                    }
                ],
                "flags": 0,
                "start": 79,
                "end": 106
            },
            "returnType": {
                "kind": 139,
                "type": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "X",
                        "rawText": "X",
                        "flags": 96,
                        "start": 113,
                        "end": 115
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 113,
                    "end": 115
                },
                "flags": 0,
                "start": 67,
                "end": 115
            },
            "flags": 16,
            "start": 67,
            "end": 178
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 178,
                "end": 188
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "c",
                "rawText": "c",
                "flags": 96,
                "start": 188,
                "end": 190
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 218,
                            "end": 219
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "X",
                                    "rawText": "X",
                                    "flags": 96,
                                    "start": 220,
                                    "end": 222
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 220,
                                "end": 222
                            },
                            "flags": 0,
                            "start": 219,
                            "end": 222
                        },
                        "right": null,
                        "flags": 32,
                        "start": 218,
                        "end": 222
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 217,
                "end": 223
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "start": 228,
                                "end": 237
                            },
                            "expression": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 201392130,
                                            "text": 42,
                                            "rawText": "42",
                                            "flags": 96,
                                            "start": 239,
                                            "end": 241
                                        },
                                        {
                                            "kind": 223,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 242,
                                                "end": 246
                                            },
                                            "argument": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 246,
                                                "end": 247
                                            },
                                            "flags": 32,
                                            "start": 242,
                                            "end": 247
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 239,
                                    "end": 247
                                },
                                "flags": 32,
                                "start": 237,
                                "end": 248
                            },
                            "flags": 16,
                            "start": 1,
                            "end": 228
                        }
                    ],
                    "flags": 33,
                    "start": 228,
                    "end": 249
                },
                "flags": 32,
                "start": 226,
                "end": 260
            },
            "typeParameters": {
                "kind": 265,
                "typeParameters": [
                    {
                        "kind": 146,
                        "name": {
                            "kind": 134299649,
                            "text": "X",
                            "rawText": "X",
                            "flags": 96,
                            "start": 191,
                            "end": 192
                        },
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "$ReadOnlyArray",
                                    "rawText": "$ReadOnlyArray",
                                    "flags": 96,
                                    "start": 193,
                                    "end": 208
                                },
                                "typeParameters": {
                                    "kind": 266,
                                    "parameters": [
                                        {
                                            "kind": 267,
                                            "type": {
                                                "kind": 134234345,
                                                "flags": 64,
                                                "start": 209,
                                                "end": 215
                                            },
                                            "flags": 0,
                                            "start": 209,
                                            "end": 215
                                        }
                                    ],
                                    "flags": 0,
                                    "start": 208,
                                    "end": 216
                                },
                                "flags": 0,
                                "start": 193,
                                "end": 216
                            },
                            "flags": 0,
                            "start": 192,
                            "end": 216
                        },
                        "defaultType": null,
                        "flags": 0,
                        "start": 191,
                        "end": 216
                    }
                ],
                "flags": 0,
                "start": 190,
                "end": 217
            },
            "returnType": {
                "kind": 139,
                "type": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "X",
                        "rawText": "X",
                        "flags": 96,
                        "start": 224,
                        "end": 226
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 224,
                    "end": 226
                },
                "flags": 0,
                "start": 178,
                "end": 226
            },
            "flags": 16,
            "start": 178,
            "end": 260
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 260,
                "end": 270
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "d",
                "rawText": "d",
                "flags": 96,
                "start": 270,
                "end": 272
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 294,
                            "end": 295
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "X",
                                    "rawText": "X",
                                    "flags": 96,
                                    "start": 296,
                                    "end": 298
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 296,
                                "end": 298
                            },
                            "flags": 0,
                            "start": 295,
                            "end": 298
                        },
                        "right": null,
                        "flags": 32,
                        "start": 294,
                        "end": 298
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 293,
                "end": 299
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "start": 304,
                                "end": 313
                            },
                            "expression": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 223,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 315,
                                                "end": 318
                                            },
                                            "argument": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 318,
                                                "end": 319
                                            },
                                            "flags": 32,
                                            "start": 315,
                                            "end": 319
                                        },
                                        {
                                            "kind": 223,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 320,
                                                "end": 324
                                            },
                                            "argument": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 324,
                                                "end": 325
                                            },
                                            "flags": 32,
                                            "start": 320,
                                            "end": 325
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 315,
                                    "end": 325
                                },
                                "flags": 32,
                                "start": 313,
                                "end": 326
                            },
                            "flags": 16,
                            "start": 1,
                            "end": 304
                        }
                    ],
                    "flags": 33,
                    "start": 304,
                    "end": 327
                },
                "flags": 32,
                "start": 302,
                "end": 338
            },
            "typeParameters": {
                "kind": 265,
                "typeParameters": [
                    {
                        "kind": 146,
                        "name": {
                            "kind": 134299649,
                            "text": "X",
                            "rawText": "X",
                            "flags": 96,
                            "start": 273,
                            "end": 274
                        },
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 147,
                                "elementTypes": [
                                    {
                                        "kind": 134234345,
                                        "flags": 64,
                                        "start": 277,
                                        "end": 283
                                    },
                                    {
                                        "kind": 134234345,
                                        "flags": 64,
                                        "start": 284,
                                        "end": 291
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 275,
                                "end": 292
                            },
                            "flags": 0,
                            "start": 274,
                            "end": 292
                        },
                        "defaultType": null,
                        "flags": 0,
                        "start": 273,
                        "end": 292
                    }
                ],
                "flags": 0,
                "start": 272,
                "end": 293
            },
            "returnType": {
                "kind": 139,
                "type": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "X",
                        "rawText": "X",
                        "flags": 96,
                        "start": 300,
                        "end": 302
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 300,
                    "end": 302
                },
                "flags": 0,
                "start": 260,
                "end": 302
            },
            "flags": 16,
            "start": 260,
            "end": 338
        }
    ],
    "isModule": false,
    "source": "function a<X: $ReadOnlyArray<number>>(x: X): X {\n  return [...x];\n}\n\nfunction b<X: $ReadOnlyArray<number>>(x: X): X {\n  return [...x, ...x]; // nope, because X could be a tuple\n}\n\nfunction c<X: $ReadOnlyArray<number>>(x: X): X {\n  return [42, ...x]; // error\n}\n\nfunction d<X: [number, number]>(x: X): X {\n  return [...x, ...x]; // error\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 338
}
```

### Printed

```javascript

function a(x) {
  return  [...x];
}
function b(x) {
  return  [...x, ...x];
}
function c(x) {
  return  [42, ...x];
}
function d(x) {
  return  [...x, ...x];
}
```

### Diagnostics

```javascript
✔ No errors
```

