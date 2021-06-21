# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, next: true }
`````

## Input

`````js
class C {
  static {
    (function({test262 = fnParam = arguments}) {
      fn = arguments;
    })('function');

    (function * ({test262 = genParam = arguments}) {
      gen = arguments;
    })('generator function').next();

    (async function ({test262 = asyncFnParam = arguments}) {
      asyncFn = arguments;
    })('async function');
  }
}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 305,
                            "decorators": null,
                            "declaredKeyword": null,
                            "staticKeyword": null,
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 177,
                                                        "asyncKeyword": null,
                                                        "functionKeyword": {
                                                            "kind": 37822554,
                                                            "flags": 64,
                                                            "start": 26,
                                                            "end": 34
                                                        },
                                                        "asteriskToken": null,
                                                        "name": null,
                                                        "typeParameters": null,
                                                        "formalParameterList": {
                                                            "kind": 214,
                                                            "formalParameters": [
                                                                {
                                                                    "kind": 212,
                                                                    "propertyList": {
                                                                        "kind": 213,
                                                                        "properties": [
                                                                            {
                                                                                "kind": 281,
                                                                                "ellipsisToken": null,
                                                                                "left": {
                                                                                    "kind": 134299649,
                                                                                    "text": "test262",
                                                                                    "rawText": "test262",
                                                                                    "flags": 96,
                                                                                    "start": 36,
                                                                                    "end": 43
                                                                                },
                                                                                "optionalToken": null,
                                                                                "type": null,
                                                                                "right": {
                                                                                    "kind": 125,
                                                                                    "left": {
                                                                                        "kind": 134299649,
                                                                                        "text": "fnParam",
                                                                                        "rawText": "fnParam",
                                                                                        "flags": 96,
                                                                                        "start": 45,
                                                                                        "end": 53
                                                                                    },
                                                                                    "operatorToken": {
                                                                                        "kind": 4125,
                                                                                        "flags": 96,
                                                                                        "start": 53,
                                                                                        "end": 55
                                                                                    },
                                                                                    "right": {
                                                                                        "kind": 134299649,
                                                                                        "text": "arguments",
                                                                                        "rawText": "arguments",
                                                                                        "flags": 96,
                                                                                        "start": 55,
                                                                                        "end": 65
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "start": 45,
                                                                                    "end": 65
                                                                                },
                                                                                "flags": 0,
                                                                                "start": 36,
                                                                                "end": 65
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 36,
                                                                        "end": 65
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 35,
                                                                    "end": 66
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 34,
                                                            "end": 67
                                                        },
                                                        "contents": {
                                                            "kind": 216,
                                                            "functionStatementList": {
                                                                "kind": 217,
                                                                "directives": [],
                                                                "statements": [
                                                                    {
                                                                        "kind": 120,
                                                                        "expression": {
                                                                            "kind": 125,
                                                                            "left": {
                                                                                "kind": 134299649,
                                                                                "text": "fn",
                                                                                "rawText": "fn",
                                                                                "flags": 96,
                                                                                "start": 69,
                                                                                "end": 78
                                                                            },
                                                                            "operatorToken": {
                                                                                "kind": 4125,
                                                                                "flags": 96,
                                                                                "start": 78,
                                                                                "end": 80
                                                                            },
                                                                            "right": {
                                                                                "kind": 134299649,
                                                                                "text": "arguments",
                                                                                "rawText": "arguments",
                                                                                "flags": 96,
                                                                                "start": 80,
                                                                                "end": 90
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 69,
                                                                            "end": 90
                                                                        },
                                                                        "flags": 16,
                                                                        "start": 69,
                                                                        "end": 91
                                                                    }
                                                                ],
                                                                "flags": 33,
                                                                "start": 69,
                                                                "end": 91
                                                            },
                                                            "flags": 32,
                                                            "start": 67,
                                                            "end": 97
                                                        },
                                                        "returnType": null,
                                                        "flags": 32,
                                                        "start": 26,
                                                        "end": 97
                                                    },
                                                    "flags": 32,
                                                    "start": 20,
                                                    "end": 98
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 201392131,
                                                            "text": "function",
                                                            "rawText": "'function'",
                                                            "flags": 4194400,
                                                            "start": 99,
                                                            "end": 109
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 99,
                                                    "end": 109
                                                },
                                                "flags": 268435488,
                                                "start": 20,
                                                "end": 110
                                            },
                                            "flags": 16,
                                            "start": 20,
                                            "end": 111
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 131,
                                                        "expression": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 177,
                                                                "asyncKeyword": null,
                                                                "functionKeyword": {
                                                                    "kind": 37822554,
                                                                    "flags": 64,
                                                                    "start": 118,
                                                                    "end": 126
                                                                },
                                                                "asteriskToken": {
                                                                    "kind": 67143222,
                                                                    "flags": 64,
                                                                    "start": 126,
                                                                    "end": 128
                                                                },
                                                                "name": null,
                                                                "typeParameters": null,
                                                                "formalParameterList": {
                                                                    "kind": 214,
                                                                    "formalParameters": [
                                                                        {
                                                                            "kind": 212,
                                                                            "propertyList": {
                                                                                "kind": 213,
                                                                                "properties": [
                                                                                    {
                                                                                        "kind": 281,
                                                                                        "ellipsisToken": null,
                                                                                        "left": {
                                                                                            "kind": 134299649,
                                                                                            "text": "test262",
                                                                                            "rawText": "test262",
                                                                                            "flags": 96,
                                                                                            "start": 131,
                                                                                            "end": 138
                                                                                        },
                                                                                        "optionalToken": null,
                                                                                        "type": null,
                                                                                        "right": {
                                                                                            "kind": 125,
                                                                                            "left": {
                                                                                                "kind": 134299649,
                                                                                                "text": "genParam",
                                                                                                "rawText": "genParam",
                                                                                                "flags": 96,
                                                                                                "start": 140,
                                                                                                "end": 149
                                                                                            },
                                                                                            "operatorToken": {
                                                                                                "kind": 4125,
                                                                                                "flags": 96,
                                                                                                "start": 149,
                                                                                                "end": 151
                                                                                            },
                                                                                            "right": {
                                                                                                "kind": 134299649,
                                                                                                "text": "arguments",
                                                                                                "rawText": "arguments",
                                                                                                "flags": 96,
                                                                                                "start": 151,
                                                                                                "end": 161
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "start": 140,
                                                                                            "end": 161
                                                                                        },
                                                                                        "flags": 0,
                                                                                        "start": 131,
                                                                                        "end": 161
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 32,
                                                                                "start": 131,
                                                                                "end": 161
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 130,
                                                                            "end": 162
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 128,
                                                                    "end": 163
                                                                },
                                                                "contents": {
                                                                    "kind": 216,
                                                                    "functionStatementList": {
                                                                        "kind": 217,
                                                                        "directives": [],
                                                                        "statements": [
                                                                            {
                                                                                "kind": 120,
                                                                                "expression": {
                                                                                    "kind": 125,
                                                                                    "left": {
                                                                                        "kind": 134299649,
                                                                                        "text": "gen",
                                                                                        "rawText": "gen",
                                                                                        "flags": 96,
                                                                                        "start": 165,
                                                                                        "end": 175
                                                                                    },
                                                                                    "operatorToken": {
                                                                                        "kind": 4125,
                                                                                        "flags": 96,
                                                                                        "start": 175,
                                                                                        "end": 177
                                                                                    },
                                                                                    "right": {
                                                                                        "kind": 134299649,
                                                                                        "text": "arguments",
                                                                                        "rawText": "arguments",
                                                                                        "flags": 96,
                                                                                        "start": 177,
                                                                                        "end": 187
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "start": 165,
                                                                                    "end": 187
                                                                                },
                                                                                "flags": 16,
                                                                                "start": 165,
                                                                                "end": 188
                                                                            }
                                                                        ],
                                                                        "flags": 33,
                                                                        "start": 165,
                                                                        "end": 188
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 163,
                                                                    "end": 194
                                                                },
                                                                "returnType": null,
                                                                "flags": 288,
                                                                "start": 118,
                                                                "end": 194
                                                            },
                                                            "flags": 32,
                                                            "start": 111,
                                                            "end": 195
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [
                                                                {
                                                                    "kind": 201392131,
                                                                    "text": "generator function",
                                                                    "rawText": "'generator function'",
                                                                    "flags": 4194400,
                                                                    "start": 196,
                                                                    "end": 216
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 196,
                                                            "end": 216
                                                        },
                                                        "flags": 268435488,
                                                        "start": 111,
                                                        "end": 217
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "next",
                                                        "rawText": "next",
                                                        "flags": 96,
                                                        "start": 218,
                                                        "end": 222
                                                    },
                                                    "flags": 536870944,
                                                    "start": 111,
                                                    "end": 222
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 223,
                                                    "end": 223
                                                },
                                                "flags": 268435488,
                                                "start": 111,
                                                "end": 224
                                            },
                                            "flags": 16,
                                            "start": 111,
                                            "end": 225
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 177,
                                                        "asyncKeyword": {
                                                            "kind": 82031,
                                                            "flags": 64,
                                                            "start": 232,
                                                            "end": 237
                                                        },
                                                        "functionKeyword": {
                                                            "kind": 37822554,
                                                            "flags": 64,
                                                            "start": 237,
                                                            "end": 246
                                                        },
                                                        "asteriskToken": null,
                                                        "name": null,
                                                        "typeParameters": null,
                                                        "formalParameterList": {
                                                            "kind": 214,
                                                            "formalParameters": [
                                                                {
                                                                    "kind": 212,
                                                                    "propertyList": {
                                                                        "kind": 213,
                                                                        "properties": [
                                                                            {
                                                                                "kind": 281,
                                                                                "ellipsisToken": null,
                                                                                "left": {
                                                                                    "kind": 134299649,
                                                                                    "text": "test262",
                                                                                    "rawText": "test262",
                                                                                    "flags": 96,
                                                                                    "start": 249,
                                                                                    "end": 256
                                                                                },
                                                                                "optionalToken": null,
                                                                                "type": null,
                                                                                "right": {
                                                                                    "kind": 125,
                                                                                    "left": {
                                                                                        "kind": 134299649,
                                                                                        "text": "asyncFnParam",
                                                                                        "rawText": "asyncFnParam",
                                                                                        "flags": 96,
                                                                                        "start": 258,
                                                                                        "end": 271
                                                                                    },
                                                                                    "operatorToken": {
                                                                                        "kind": 4125,
                                                                                        "flags": 96,
                                                                                        "start": 271,
                                                                                        "end": 273
                                                                                    },
                                                                                    "right": {
                                                                                        "kind": 134299649,
                                                                                        "text": "arguments",
                                                                                        "rawText": "arguments",
                                                                                        "flags": 96,
                                                                                        "start": 273,
                                                                                        "end": 283
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "start": 258,
                                                                                    "end": 283
                                                                                },
                                                                                "flags": 0,
                                                                                "start": 249,
                                                                                "end": 283
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 249,
                                                                        "end": 283
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 248,
                                                                    "end": 284
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 246,
                                                            "end": 285
                                                        },
                                                        "contents": {
                                                            "kind": 216,
                                                            "functionStatementList": {
                                                                "kind": 217,
                                                                "directives": [],
                                                                "statements": [
                                                                    {
                                                                        "kind": 120,
                                                                        "expression": {
                                                                            "kind": 125,
                                                                            "left": {
                                                                                "kind": 134299649,
                                                                                "text": "asyncFn",
                                                                                "rawText": "asyncFn",
                                                                                "flags": 96,
                                                                                "start": 287,
                                                                                "end": 301
                                                                            },
                                                                            "operatorToken": {
                                                                                "kind": 4125,
                                                                                "flags": 96,
                                                                                "start": 301,
                                                                                "end": 303
                                                                            },
                                                                            "right": {
                                                                                "kind": 134299649,
                                                                                "text": "arguments",
                                                                                "rawText": "arguments",
                                                                                "flags": 96,
                                                                                "start": 303,
                                                                                "end": 313
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 287,
                                                                            "end": 313
                                                                        },
                                                                        "flags": 16,
                                                                        "start": 287,
                                                                        "end": 314
                                                                    }
                                                                ],
                                                                "flags": 33,
                                                                "start": 287,
                                                                "end": 314
                                                            },
                                                            "flags": 32,
                                                            "start": 285,
                                                            "end": 320
                                                        },
                                                        "returnType": null,
                                                        "flags": 160,
                                                        "start": 232,
                                                        "end": 320
                                                    },
                                                    "flags": 32,
                                                    "start": 225,
                                                    "end": 321
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 201392131,
                                                            "text": "async function",
                                                            "rawText": "'async function'",
                                                            "flags": 4194400,
                                                            "start": 322,
                                                            "end": 338
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 322,
                                                    "end": 338
                                                },
                                                "flags": 268435488,
                                                "start": 225,
                                                "end": 339
                                            },
                                            "flags": 16,
                                            "start": 225,
                                            "end": 340
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 20,
                                    "end": 340
                                },
                                "flags": 9,
                                "start": 0,
                                "end": 344
                            },
                            "flags": 32,
                            "start": 9,
                            "end": 344
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 344
                },
                "flags": 7,
                "start": 32,
                "end": 346
            },
            "flags": 16,
            "start": 0,
            "end": 346
        }
    ],
    "isModule": false,
    "source": "class C {\n  static {\n    (function({test262 = fnParam = arguments}) {\n      fn = arguments;\n    })('function');\n\n    (function * ({test262 = genParam = arguments}) {\n      gen = arguments;\n    })('generator function').next();\n\n    (async function ({test262 = asyncFnParam = arguments}) {\n      asyncFn = arguments;\n    })('async function');\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 346
}
```

### Printed

```javascript

 class C {
} 
```

### Diagnostics

```javascript
✔ No errors
```

