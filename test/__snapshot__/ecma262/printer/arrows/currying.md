# Kataw parser test case

## Input

`````js
const fn = b => c => d => {
  return 3;
};

const foo = (a, b) => c => d => {
  return 3;
};

const bar = a => b => c => a + b + c

const mw = store => next => action => {
  return next(action)
}

const middleware = options => (req, res, next) => {
  // ...
};

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "fn",
                            "rawText": "fn",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 8
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 12
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 15
                            },
                            "contents": {
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 17
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 17,
                                    "end": 20
                                },
                                "contents": {
                                    "kind": 271,
                                    "asyncKeyword": null,
                                    "typeParameters": null,
                                    "arrowPatameterList": {
                                        "kind": 134299649,
                                        "text": "d",
                                        "rawText": "d",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 20,
                                        "end": 22
                                    },
                                    "returnType": null,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 22,
                                        "end": 25
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
                                                        "transformFlags": 0,
                                                        "start": 27,
                                                        "end": 36
                                                    },
                                                    "expression": {
                                                        "kind": 201392130,
                                                        "text": 3,
                                                        "rawText": "3",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 36,
                                                        "end": 38
                                                    },
                                                    "flags": 81,
                                                    "transformFlags": 256,
                                                    "start": 27,
                                                    "end": 39
                                                }
                                            ],
                                            "flags": 33,
                                            "transformFlags": 0,
                                            "start": 27,
                                            "end": 39
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 25,
                                        "end": 41
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 41
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 41
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 41
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 5,
                        "end": 41
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 5,
                "end": 41
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 42
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 42,
                "end": 49
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 49,
                            "end": 53
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 57,
                                        "end": 58
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 59,
                                        "end": 61
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 57,
                                "end": 62
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 62,
                                "end": 65
                            },
                            "contents": {
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 65,
                                    "end": 67
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 67,
                                    "end": 70
                                },
                                "contents": {
                                    "kind": 271,
                                    "asyncKeyword": null,
                                    "typeParameters": null,
                                    "arrowPatameterList": {
                                        "kind": 134299649,
                                        "text": "d",
                                        "rawText": "d",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 70,
                                        "end": 72
                                    },
                                    "returnType": null,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 72,
                                        "end": 75
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
                                                        "transformFlags": 0,
                                                        "start": 77,
                                                        "end": 86
                                                    },
                                                    "expression": {
                                                        "kind": 201392130,
                                                        "text": 3,
                                                        "rawText": "3",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 86,
                                                        "end": 88
                                                    },
                                                    "flags": 81,
                                                    "transformFlags": 256,
                                                    "start": 77,
                                                    "end": 89
                                                }
                                            ],
                                            "flags": 33,
                                            "transformFlags": 0,
                                            "start": 77,
                                            "end": 89
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 75,
                                        "end": 91
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 70,
                                    "end": 91
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 65,
                                "end": 91
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 55,
                            "end": 91
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 49,
                        "end": 91
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 49,
                "end": 91
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 42,
            "end": 92
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 92,
                "end": 99
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 99,
                            "end": 103
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 105,
                                "end": 107
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 107,
                                "end": 110
                            },
                            "contents": {
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 110,
                                    "end": 112
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 112,
                                    "end": 115
                                },
                                "contents": {
                                    "kind": 271,
                                    "asyncKeyword": null,
                                    "typeParameters": null,
                                    "arrowPatameterList": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 115,
                                        "end": 117
                                    },
                                    "returnType": null,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 117,
                                        "end": 120
                                    },
                                    "contents": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 120,
                                                "end": 122
                                            },
                                            "operatorToken": {
                                                "kind": 99634,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 122,
                                                "end": 124
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 124,
                                                "end": 126
                                            },
                                            "flags": 96,
                                            "transformFlags": 5120,
                                            "start": 120,
                                            "end": 126
                                        },
                                        "operatorToken": {
                                            "kind": 99634,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 126,
                                            "end": 128
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 128,
                                            "end": 130
                                        },
                                        "flags": 96,
                                        "transformFlags": 5120,
                                        "start": 120,
                                        "end": 130
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 115,
                                    "end": 130
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 110,
                                "end": 130
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 105,
                            "end": 130
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 99,
                        "end": 130
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 99,
                "end": 130
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 92,
            "end": 130
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 130,
                "end": 137
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "mw",
                            "rawText": "mw",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 137,
                            "end": 140
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 134299649,
                                "text": "store",
                                "rawText": "store",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 142,
                                "end": 148
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 148,
                                "end": 151
                            },
                            "contents": {
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 134299649,
                                    "text": "next",
                                    "rawText": "next",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 151,
                                    "end": 156
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 156,
                                    "end": 159
                                },
                                "contents": {
                                    "kind": 271,
                                    "asyncKeyword": null,
                                    "typeParameters": null,
                                    "arrowPatameterList": {
                                        "kind": 134299649,
                                        "text": "action",
                                        "rawText": "action",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 159,
                                        "end": 166
                                    },
                                    "returnType": null,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 166,
                                        "end": 169
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
                                                        "transformFlags": 0,
                                                        "start": 171,
                                                        "end": 180
                                                    },
                                                    "expression": {
                                                        "kind": 131,
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "next",
                                                            "rawText": "next",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 180,
                                                            "end": 185
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "action",
                                                                    "rawText": "action",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 186,
                                                                    "end": 192
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 186,
                                                            "end": 192
                                                        },
                                                        "flags": 268435488,
                                                        "transformFlags": 1,
                                                        "start": 180,
                                                        "end": 193
                                                    },
                                                    "flags": 81,
                                                    "transformFlags": 256,
                                                    "start": 171,
                                                    "end": 193
                                                }
                                            ],
                                            "flags": 33,
                                            "transformFlags": 0,
                                            "start": 171,
                                            "end": 193
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 169,
                                        "end": 195
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 159,
                                    "end": 195
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 151,
                                "end": 195
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 142,
                            "end": 195
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 137,
                        "end": 195
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 137,
                "end": 195
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 130,
            "end": 195
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 195,
                "end": 202
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "middleware",
                            "rawText": "middleware",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 202,
                            "end": 213
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 134299649,
                                "text": "options",
                                "rawText": "options",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 215,
                                "end": 223
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 223,
                                "end": 226
                            },
                            "contents": {
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 342,
                                    "parameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "req",
                                            "rawText": "req",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 228,
                                            "end": 231
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "res",
                                            "rawText": "res",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 232,
                                            "end": 236
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "next",
                                            "rawText": "next",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 237,
                                            "end": 242
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 228,
                                    "end": 243
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 243,
                                    "end": 246
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 248,
                                        "end": 248
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 246,
                                    "end": 259
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 226,
                                "end": 259
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 215,
                            "end": 259
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 202,
                        "end": 259
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 202,
                "end": 259
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 195,
            "end": 260
        }
    ],
    "isModule": false,
    "source": "const fn = b => c => d => {\n  return 3;\n};\n\nconst foo = (a, b) => c => d => {\n  return 3;\n};\n\nconst bar = a => b => c => a + b + c\n\nconst mw = store => next => action => {\n  return next(action)\n}\n\nconst middleware = options => (req, res, next) => {\n  // ...\n};\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 261
}
```

### Printed

```javascript
const fn = b => c => d => {
    return 3;
  };
const foo = (a, b) => c => d => {
    return 3;
  };

const bar = a => b => c => a + b + c;

const mw = store => next => action => {
    return next(action);
  };

const middleware = options => (req, res, next) => {// ...
  };

```

### Diagnostics

```javascript
✔ No errors
```

