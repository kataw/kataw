# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
const veryVeryVeryVeryVeryVeryVeryLong = doc.expandedStates[doc.expandedStates.length - 1];
const small = doc.expandedStates[doc.expandedStates.length - 1];

const promises = [
  promise.resolve().then(console.log).catch(err => {
    console.log(err)
    return null
  }),
  redis.fetch(),
  other.fetch(),
];

const promises2 = [
  promise.resolve().veryLongFunctionCall().veryLongFunctionCall().then(console.log).catch(err => {
    console.log(err)
    return null
  }),
  redis.fetch(),
  other.fetch(),
];

window.FooClient.setVars({
  locale: getFooLocale({ page }),
  authorizationToken: data.token
}).initVerify("foo_container");

window.something.FooClient.setVars({
  locale: getFooLocale({ page }),
  authorizationToken: data.token
}).initVerify("foo_container");

window.FooClient.something.setVars({
  locale: getFooLocale({ page }),
  authorizationToken: data.token
}).initVerify("foo_container");
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
                            "text": "veryVeryVeryVeryVeryVeryVeryLong",
                            "rawText": "veryVeryVeryVeryVeryVeryVeryLong",
                            "flags": 96,
                            "start": 5,
                            "end": 38
                        },
                        "type": null,
                        "initializer": {
                            "kind": 130,
                            "member": {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "doc",
                                    "rawText": "doc",
                                    "flags": 96,
                                    "start": 40,
                                    "end": 44
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "expandedStates",
                                    "rawText": "expandedStates",
                                    "flags": 96,
                                    "start": 45,
                                    "end": 59
                                },
                                "flags": 96,
                                "start": 40,
                                "end": 59
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "doc",
                                            "rawText": "doc",
                                            "flags": 96,
                                            "start": 60,
                                            "end": 63
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "expandedStates",
                                            "rawText": "expandedStates",
                                            "flags": 96,
                                            "start": 64,
                                            "end": 78
                                        },
                                        "flags": 96,
                                        "start": 60,
                                        "end": 78
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "length",
                                        "rawText": "length",
                                        "flags": 96,
                                        "start": 79,
                                        "end": 85
                                    },
                                    "flags": 96,
                                    "start": 60,
                                    "end": 85
                                },
                                "operatorToken": {
                                    "kind": 134318643,
                                    "flags": 96,
                                    "start": 85,
                                    "end": 87
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 87,
                                    "end": 89
                                },
                                "flags": 96,
                                "start": 60,
                                "end": 89
                            },
                            "flags": 536870944,
                            "start": 40,
                            "end": 90
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 90
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 90
            },
            "flags": 33554448,
            "start": 0,
            "end": 91
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 91,
                "end": 97
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "small",
                            "rawText": "small",
                            "flags": 96,
                            "start": 97,
                            "end": 103
                        },
                        "type": null,
                        "initializer": {
                            "kind": 130,
                            "member": {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "doc",
                                    "rawText": "doc",
                                    "flags": 96,
                                    "start": 105,
                                    "end": 109
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "expandedStates",
                                    "rawText": "expandedStates",
                                    "flags": 96,
                                    "start": 110,
                                    "end": 124
                                },
                                "flags": 96,
                                "start": 105,
                                "end": 124
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "doc",
                                            "rawText": "doc",
                                            "flags": 96,
                                            "start": 125,
                                            "end": 128
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "expandedStates",
                                            "rawText": "expandedStates",
                                            "flags": 96,
                                            "start": 129,
                                            "end": 143
                                        },
                                        "flags": 96,
                                        "start": 125,
                                        "end": 143
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "length",
                                        "rawText": "length",
                                        "flags": 96,
                                        "start": 144,
                                        "end": 150
                                    },
                                    "flags": 96,
                                    "start": 125,
                                    "end": 150
                                },
                                "operatorToken": {
                                    "kind": 134318643,
                                    "flags": 96,
                                    "start": 150,
                                    "end": 152
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 152,
                                    "end": 154
                                },
                                "flags": 96,
                                "start": 125,
                                "end": 154
                            },
                            "flags": 536870944,
                            "start": 105,
                            "end": 155
                        },
                        "flags": 16,
                        "start": 97,
                        "end": 155
                    }
                ],
                "flags": 16777232,
                "start": 97,
                "end": 155
            },
            "flags": 33554448,
            "start": 91,
            "end": 156
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 156,
                "end": 163
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "promises",
                            "rawText": "promises",
                            "flags": 96,
                            "start": 163,
                            "end": 172
                        },
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 131,
                                                        "expression": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "promise",
                                                                "rawText": "promise",
                                                                "flags": 97,
                                                                "start": 176,
                                                                "end": 186
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "resolve",
                                                                "rawText": "resolve",
                                                                "flags": 96,
                                                                "start": 187,
                                                                "end": 194
                                                            },
                                                            "flags": 97,
                                                            "start": 176,
                                                            "end": 194
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 195,
                                                            "end": 195
                                                        },
                                                        "flags": 268435488,
                                                        "start": 176,
                                                        "end": 196
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "then",
                                                        "rawText": "then",
                                                        "flags": 96,
                                                        "start": 197,
                                                        "end": 201
                                                    },
                                                    "flags": 268435488,
                                                    "start": 176,
                                                    "end": 201
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "console",
                                                                "rawText": "console",
                                                                "flags": 96,
                                                                "start": 202,
                                                                "end": 209
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "log",
                                                                "rawText": "log",
                                                                "flags": 96,
                                                                "start": 210,
                                                                "end": 213
                                                            },
                                                            "flags": 96,
                                                            "start": 202,
                                                            "end": 213
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 202,
                                                    "end": 213
                                                },
                                                "flags": 268435488,
                                                "start": 176,
                                                "end": 214
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "catch",
                                                "rawText": "catch",
                                                "flags": 96,
                                                "start": 215,
                                                "end": 220
                                            },
                                            "flags": 268435488,
                                            "start": 176,
                                            "end": 220
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [
                                                {
                                                    "kind": 271,
                                                    "asyncKeyword": null,
                                                    "typeParameters": null,
                                                    "arrowPatameterList": {
                                                        "kind": 134299649,
                                                        "text": "err",
                                                        "rawText": "err",
                                                        "flags": 96,
                                                        "start": 221,
                                                        "end": 224
                                                    },
                                                    "returnType": null,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 224,
                                                        "end": 227
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
                                                                        "kind": 131,
                                                                        "expression": {
                                                                            "kind": 129,
                                                                            "member": {
                                                                                "kind": 134299649,
                                                                                "text": "console",
                                                                                "rawText": "console",
                                                                                "flags": 97,
                                                                                "start": 229,
                                                                                "end": 241
                                                                            },
                                                                            "expression": {
                                                                                "kind": 134299649,
                                                                                "text": "log",
                                                                                "rawText": "log",
                                                                                "flags": 96,
                                                                                "start": 242,
                                                                                "end": 245
                                                                            },
                                                                            "flags": 97,
                                                                            "start": 229,
                                                                            "end": 245
                                                                        },
                                                                        "argumentList": {
                                                                            "kind": 256,
                                                                            "elements": [
                                                                                {
                                                                                    "kind": 134299649,
                                                                                    "text": "err",
                                                                                    "rawText": "err",
                                                                                    "flags": 96,
                                                                                    "start": 246,
                                                                                    "end": 249
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 32,
                                                                            "start": 246,
                                                                            "end": 249
                                                                        },
                                                                        "flags": 268435488,
                                                                        "start": 229,
                                                                        "end": 250
                                                                    },
                                                                    "flags": 16,
                                                                    "start": 229,
                                                                    "end": 250
                                                                },
                                                                {
                                                                    "kind": 161,
                                                                    "returnKeyword": {
                                                                        "kind": 37757022,
                                                                        "flags": 81,
                                                                        "start": 250,
                                                                        "end": 261
                                                                    },
                                                                    "expression": {
                                                                        "kind": 138477575,
                                                                        "flags": 96,
                                                                        "start": 261,
                                                                        "end": 266
                                                                    },
                                                                    "flags": 81,
                                                                    "start": 250,
                                                                    "end": 266
                                                                }
                                                            ],
                                                            "flags": 33,
                                                            "start": 229,
                                                            "end": 266
                                                        },
                                                        "flags": 32,
                                                        "start": 227,
                                                        "end": 270
                                                    },
                                                    "flags": 32,
                                                    "start": 221,
                                                    "end": 270
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 221,
                                            "end": 270
                                        },
                                        "flags": 268435488,
                                        "start": 176,
                                        "end": 271
                                    },
                                    {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "redis",
                                                "rawText": "redis",
                                                "flags": 97,
                                                "start": 272,
                                                "end": 280
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "fetch",
                                                "rawText": "fetch",
                                                "flags": 96,
                                                "start": 281,
                                                "end": 286
                                            },
                                            "flags": 97,
                                            "start": 272,
                                            "end": 286
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 287,
                                            "end": 287
                                        },
                                        "flags": 268435488,
                                        "start": 272,
                                        "end": 288
                                    },
                                    {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "other",
                                                "rawText": "other",
                                                "flags": 97,
                                                "start": 289,
                                                "end": 297
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "fetch",
                                                "rawText": "fetch",
                                                "flags": 96,
                                                "start": 298,
                                                "end": 303
                                            },
                                            "flags": 97,
                                            "start": 289,
                                            "end": 303
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 304,
                                            "end": 304
                                        },
                                        "flags": 268435488,
                                        "start": 289,
                                        "end": 305
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 33,
                                "start": 176,
                                "end": 306
                            },
                            "flags": 32,
                            "start": 174,
                            "end": 308
                        },
                        "flags": 16,
                        "start": 163,
                        "end": 308
                    }
                ],
                "flags": 16777232,
                "start": 163,
                "end": 308
            },
            "flags": 33554448,
            "start": 156,
            "end": 309
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 309,
                "end": 316
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "promises2",
                            "rawText": "promises2",
                            "flags": 96,
                            "start": 316,
                            "end": 326
                        },
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 131,
                                                        "expression": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 131,
                                                                "expression": {
                                                                    "kind": 129,
                                                                    "member": {
                                                                        "kind": 131,
                                                                        "expression": {
                                                                            "kind": 129,
                                                                            "member": {
                                                                                "kind": 134299649,
                                                                                "text": "promise",
                                                                                "rawText": "promise",
                                                                                "flags": 97,
                                                                                "start": 330,
                                                                                "end": 340
                                                                            },
                                                                            "expression": {
                                                                                "kind": 134299649,
                                                                                "text": "resolve",
                                                                                "rawText": "resolve",
                                                                                "flags": 96,
                                                                                "start": 341,
                                                                                "end": 348
                                                                            },
                                                                            "flags": 97,
                                                                            "start": 330,
                                                                            "end": 348
                                                                        },
                                                                        "argumentList": {
                                                                            "kind": 256,
                                                                            "elements": [],
                                                                            "trailingComma": false,
                                                                            "flags": 32,
                                                                            "start": 349,
                                                                            "end": 349
                                                                        },
                                                                        "flags": 268435488,
                                                                        "start": 330,
                                                                        "end": 350
                                                                    },
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "veryLongFunctionCall",
                                                                        "rawText": "veryLongFunctionCall",
                                                                        "flags": 96,
                                                                        "start": 351,
                                                                        "end": 371
                                                                    },
                                                                    "flags": 268435488,
                                                                    "start": 330,
                                                                    "end": 371
                                                                },
                                                                "argumentList": {
                                                                    "kind": 256,
                                                                    "elements": [],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 372,
                                                                    "end": 372
                                                                },
                                                                "flags": 268435488,
                                                                "start": 330,
                                                                "end": 373
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "veryLongFunctionCall",
                                                                "rawText": "veryLongFunctionCall",
                                                                "flags": 96,
                                                                "start": 374,
                                                                "end": 394
                                                            },
                                                            "flags": 268435488,
                                                            "start": 330,
                                                            "end": 394
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 395,
                                                            "end": 395
                                                        },
                                                        "flags": 268435488,
                                                        "start": 330,
                                                        "end": 396
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "then",
                                                        "rawText": "then",
                                                        "flags": 96,
                                                        "start": 397,
                                                        "end": 401
                                                    },
                                                    "flags": 268435488,
                                                    "start": 330,
                                                    "end": 401
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "console",
                                                                "rawText": "console",
                                                                "flags": 96,
                                                                "start": 402,
                                                                "end": 409
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "log",
                                                                "rawText": "log",
                                                                "flags": 96,
                                                                "start": 410,
                                                                "end": 413
                                                            },
                                                            "flags": 96,
                                                            "start": 402,
                                                            "end": 413
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 402,
                                                    "end": 413
                                                },
                                                "flags": 268435488,
                                                "start": 330,
                                                "end": 414
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "catch",
                                                "rawText": "catch",
                                                "flags": 96,
                                                "start": 415,
                                                "end": 420
                                            },
                                            "flags": 268435488,
                                            "start": 330,
                                            "end": 420
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [
                                                {
                                                    "kind": 271,
                                                    "asyncKeyword": null,
                                                    "typeParameters": null,
                                                    "arrowPatameterList": {
                                                        "kind": 134299649,
                                                        "text": "err",
                                                        "rawText": "err",
                                                        "flags": 96,
                                                        "start": 421,
                                                        "end": 424
                                                    },
                                                    "returnType": null,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 424,
                                                        "end": 427
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
                                                                        "kind": 131,
                                                                        "expression": {
                                                                            "kind": 129,
                                                                            "member": {
                                                                                "kind": 134299649,
                                                                                "text": "console",
                                                                                "rawText": "console",
                                                                                "flags": 97,
                                                                                "start": 429,
                                                                                "end": 441
                                                                            },
                                                                            "expression": {
                                                                                "kind": 134299649,
                                                                                "text": "log",
                                                                                "rawText": "log",
                                                                                "flags": 96,
                                                                                "start": 442,
                                                                                "end": 445
                                                                            },
                                                                            "flags": 97,
                                                                            "start": 429,
                                                                            "end": 445
                                                                        },
                                                                        "argumentList": {
                                                                            "kind": 256,
                                                                            "elements": [
                                                                                {
                                                                                    "kind": 134299649,
                                                                                    "text": "err",
                                                                                    "rawText": "err",
                                                                                    "flags": 96,
                                                                                    "start": 446,
                                                                                    "end": 449
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 32,
                                                                            "start": 446,
                                                                            "end": 449
                                                                        },
                                                                        "flags": 268435488,
                                                                        "start": 429,
                                                                        "end": 450
                                                                    },
                                                                    "flags": 16,
                                                                    "start": 429,
                                                                    "end": 450
                                                                },
                                                                {
                                                                    "kind": 161,
                                                                    "returnKeyword": {
                                                                        "kind": 37757022,
                                                                        "flags": 81,
                                                                        "start": 450,
                                                                        "end": 461
                                                                    },
                                                                    "expression": {
                                                                        "kind": 138477575,
                                                                        "flags": 96,
                                                                        "start": 461,
                                                                        "end": 466
                                                                    },
                                                                    "flags": 81,
                                                                    "start": 450,
                                                                    "end": 466
                                                                }
                                                            ],
                                                            "flags": 33,
                                                            "start": 429,
                                                            "end": 466
                                                        },
                                                        "flags": 32,
                                                        "start": 427,
                                                        "end": 470
                                                    },
                                                    "flags": 32,
                                                    "start": 421,
                                                    "end": 470
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 421,
                                            "end": 470
                                        },
                                        "flags": 268435488,
                                        "start": 330,
                                        "end": 471
                                    },
                                    {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "redis",
                                                "rawText": "redis",
                                                "flags": 97,
                                                "start": 472,
                                                "end": 480
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "fetch",
                                                "rawText": "fetch",
                                                "flags": 96,
                                                "start": 481,
                                                "end": 486
                                            },
                                            "flags": 97,
                                            "start": 472,
                                            "end": 486
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 487,
                                            "end": 487
                                        },
                                        "flags": 268435488,
                                        "start": 472,
                                        "end": 488
                                    },
                                    {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "other",
                                                "rawText": "other",
                                                "flags": 97,
                                                "start": 489,
                                                "end": 497
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "fetch",
                                                "rawText": "fetch",
                                                "flags": 96,
                                                "start": 498,
                                                "end": 503
                                            },
                                            "flags": 97,
                                            "start": 489,
                                            "end": 503
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 504,
                                            "end": 504
                                        },
                                        "flags": 268435488,
                                        "start": 489,
                                        "end": 505
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 33,
                                "start": 330,
                                "end": 506
                            },
                            "flags": 32,
                            "start": 328,
                            "end": 508
                        },
                        "flags": 16,
                        "start": 316,
                        "end": 508
                    }
                ],
                "flags": 16777232,
                "start": 316,
                "end": 508
            },
            "flags": 33554448,
            "start": 309,
            "end": 509
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
                            "kind": 129,
                            "member": {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "window",
                                    "rawText": "window",
                                    "flags": 97,
                                    "start": 509,
                                    "end": 517
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "FooClient",
                                    "rawText": "FooClient",
                                    "flags": 96,
                                    "start": 518,
                                    "end": 527
                                },
                                "flags": 97,
                                "start": 509,
                                "end": 527
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "setVars",
                                "rawText": "setVars",
                                "flags": 96,
                                "start": 528,
                                "end": 535
                            },
                            "flags": 97,
                            "start": 509,
                            "end": 535
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "asteriskToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "locale",
                                                    "rawText": "locale",
                                                    "flags": 97,
                                                    "start": 537,
                                                    "end": 546
                                                },
                                                "right": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "getFooLocale",
                                                        "rawText": "getFooLocale",
                                                        "flags": 96,
                                                        "start": 547,
                                                        "end": 560
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 220,
                                                                "propertyList": {
                                                                    "kind": 218,
                                                                    "properties": [
                                                                        {
                                                                            "kind": 134299649,
                                                                            "text": "page",
                                                                            "rawText": "page",
                                                                            "flags": 96,
                                                                            "start": 562,
                                                                            "end": 567
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 16,
                                                                    "start": 562,
                                                                    "end": 567
                                                                },
                                                                "flags": 48,
                                                                "start": 561,
                                                                "end": 569
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 561,
                                                        "end": 569
                                                    },
                                                    "flags": 268435488,
                                                    "start": 537,
                                                    "end": 570
                                                },
                                                "flags": 33,
                                                "start": 537,
                                                "end": 570
                                            },
                                            {
                                                "kind": 219,
                                                "asteriskToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "authorizationToken",
                                                    "rawText": "authorizationToken",
                                                    "flags": 97,
                                                    "start": 571,
                                                    "end": 592
                                                },
                                                "right": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 134299649,
                                                        "text": "data",
                                                        "rawText": "data",
                                                        "flags": 96,
                                                        "start": 593,
                                                        "end": 598
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "token",
                                                        "rawText": "token",
                                                        "flags": 96,
                                                        "start": 599,
                                                        "end": 604
                                                    },
                                                    "flags": 96,
                                                    "start": 571,
                                                    "end": 604
                                                },
                                                "flags": 33,
                                                "start": 571,
                                                "end": 604
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 17,
                                        "start": 537,
                                        "end": 604
                                    },
                                    "flags": 49,
                                    "start": 536,
                                    "end": 606
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 536,
                            "end": 606
                        },
                        "flags": 268435488,
                        "start": 509,
                        "end": 607
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "initVerify",
                        "rawText": "initVerify",
                        "flags": 96,
                        "start": 608,
                        "end": 618
                    },
                    "flags": 268435488,
                    "start": 509,
                    "end": 618
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 201392131,
                            "text": "foo_container",
                            "rawText": "\"foo_container\"",
                            "flags": 96,
                            "start": 619,
                            "end": 634
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 619,
                    "end": 634
                },
                "flags": 268435488,
                "start": 509,
                "end": 635
            },
            "flags": 16,
            "start": 509,
            "end": 636
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
                            "kind": 129,
                            "member": {
                                "kind": 129,
                                "member": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "window",
                                        "rawText": "window",
                                        "flags": 97,
                                        "start": 636,
                                        "end": 644
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "something",
                                        "rawText": "something",
                                        "flags": 96,
                                        "start": 645,
                                        "end": 654
                                    },
                                    "flags": 97,
                                    "start": 636,
                                    "end": 654
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "FooClient",
                                    "rawText": "FooClient",
                                    "flags": 96,
                                    "start": 655,
                                    "end": 664
                                },
                                "flags": 97,
                                "start": 636,
                                "end": 664
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "setVars",
                                "rawText": "setVars",
                                "flags": 96,
                                "start": 665,
                                "end": 672
                            },
                            "flags": 97,
                            "start": 636,
                            "end": 672
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "asteriskToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "locale",
                                                    "rawText": "locale",
                                                    "flags": 97,
                                                    "start": 674,
                                                    "end": 683
                                                },
                                                "right": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "getFooLocale",
                                                        "rawText": "getFooLocale",
                                                        "flags": 96,
                                                        "start": 684,
                                                        "end": 697
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 220,
                                                                "propertyList": {
                                                                    "kind": 218,
                                                                    "properties": [
                                                                        {
                                                                            "kind": 134299649,
                                                                            "text": "page",
                                                                            "rawText": "page",
                                                                            "flags": 96,
                                                                            "start": 699,
                                                                            "end": 704
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 16,
                                                                    "start": 699,
                                                                    "end": 704
                                                                },
                                                                "flags": 48,
                                                                "start": 698,
                                                                "end": 706
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 698,
                                                        "end": 706
                                                    },
                                                    "flags": 268435488,
                                                    "start": 674,
                                                    "end": 707
                                                },
                                                "flags": 33,
                                                "start": 674,
                                                "end": 707
                                            },
                                            {
                                                "kind": 219,
                                                "asteriskToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "authorizationToken",
                                                    "rawText": "authorizationToken",
                                                    "flags": 97,
                                                    "start": 708,
                                                    "end": 729
                                                },
                                                "right": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 134299649,
                                                        "text": "data",
                                                        "rawText": "data",
                                                        "flags": 96,
                                                        "start": 730,
                                                        "end": 735
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "token",
                                                        "rawText": "token",
                                                        "flags": 96,
                                                        "start": 736,
                                                        "end": 741
                                                    },
                                                    "flags": 96,
                                                    "start": 708,
                                                    "end": 741
                                                },
                                                "flags": 33,
                                                "start": 708,
                                                "end": 741
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 17,
                                        "start": 674,
                                        "end": 741
                                    },
                                    "flags": 49,
                                    "start": 673,
                                    "end": 743
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 673,
                            "end": 743
                        },
                        "flags": 268435488,
                        "start": 636,
                        "end": 744
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "initVerify",
                        "rawText": "initVerify",
                        "flags": 96,
                        "start": 745,
                        "end": 755
                    },
                    "flags": 268435488,
                    "start": 636,
                    "end": 755
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 201392131,
                            "text": "foo_container",
                            "rawText": "\"foo_container\"",
                            "flags": 96,
                            "start": 756,
                            "end": 771
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 756,
                    "end": 771
                },
                "flags": 268435488,
                "start": 636,
                "end": 772
            },
            "flags": 16,
            "start": 636,
            "end": 773
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
                            "kind": 129,
                            "member": {
                                "kind": 129,
                                "member": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "window",
                                        "rawText": "window",
                                        "flags": 97,
                                        "start": 773,
                                        "end": 781
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "FooClient",
                                        "rawText": "FooClient",
                                        "flags": 96,
                                        "start": 782,
                                        "end": 791
                                    },
                                    "flags": 97,
                                    "start": 773,
                                    "end": 791
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "something",
                                    "rawText": "something",
                                    "flags": 96,
                                    "start": 792,
                                    "end": 801
                                },
                                "flags": 97,
                                "start": 773,
                                "end": 801
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "setVars",
                                "rawText": "setVars",
                                "flags": 96,
                                "start": 802,
                                "end": 809
                            },
                            "flags": 97,
                            "start": 773,
                            "end": 809
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "asteriskToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "locale",
                                                    "rawText": "locale",
                                                    "flags": 97,
                                                    "start": 811,
                                                    "end": 820
                                                },
                                                "right": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "getFooLocale",
                                                        "rawText": "getFooLocale",
                                                        "flags": 96,
                                                        "start": 821,
                                                        "end": 834
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 220,
                                                                "propertyList": {
                                                                    "kind": 218,
                                                                    "properties": [
                                                                        {
                                                                            "kind": 134299649,
                                                                            "text": "page",
                                                                            "rawText": "page",
                                                                            "flags": 96,
                                                                            "start": 836,
                                                                            "end": 841
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 16,
                                                                    "start": 836,
                                                                    "end": 841
                                                                },
                                                                "flags": 48,
                                                                "start": 835,
                                                                "end": 843
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 835,
                                                        "end": 843
                                                    },
                                                    "flags": 268435488,
                                                    "start": 811,
                                                    "end": 844
                                                },
                                                "flags": 33,
                                                "start": 811,
                                                "end": 844
                                            },
                                            {
                                                "kind": 219,
                                                "asteriskToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "authorizationToken",
                                                    "rawText": "authorizationToken",
                                                    "flags": 97,
                                                    "start": 845,
                                                    "end": 866
                                                },
                                                "right": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 134299649,
                                                        "text": "data",
                                                        "rawText": "data",
                                                        "flags": 96,
                                                        "start": 867,
                                                        "end": 872
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "token",
                                                        "rawText": "token",
                                                        "flags": 96,
                                                        "start": 873,
                                                        "end": 878
                                                    },
                                                    "flags": 96,
                                                    "start": 845,
                                                    "end": 878
                                                },
                                                "flags": 33,
                                                "start": 845,
                                                "end": 878
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 17,
                                        "start": 811,
                                        "end": 878
                                    },
                                    "flags": 49,
                                    "start": 810,
                                    "end": 880
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 810,
                            "end": 880
                        },
                        "flags": 268435488,
                        "start": 773,
                        "end": 881
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "initVerify",
                        "rawText": "initVerify",
                        "flags": 96,
                        "start": 882,
                        "end": 892
                    },
                    "flags": 268435488,
                    "start": 773,
                    "end": 892
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 201392131,
                            "text": "foo_container",
                            "rawText": "\"foo_container\"",
                            "flags": 96,
                            "start": 893,
                            "end": 908
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 893,
                    "end": 908
                },
                "flags": 268435488,
                "start": 773,
                "end": 909
            },
            "flags": 16,
            "start": 773,
            "end": 910
        }
    ],
    "isModule": false,
    "source": "const veryVeryVeryVeryVeryVeryVeryLong = doc.expandedStates[doc.expandedStates.length - 1];\nconst small = doc.expandedStates[doc.expandedStates.length - 1];\n\nconst promises = [\n  promise.resolve().then(console.log).catch(err => {\n    console.log(err)\n    return null\n  }),\n  redis.fetch(),\n  other.fetch(),\n];\n\nconst promises2 = [\n  promise.resolve().veryLongFunctionCall().veryLongFunctionCall().then(console.log).catch(err => {\n    console.log(err)\n    return null\n  }),\n  redis.fetch(),\n  other.fetch(),\n];\n\nwindow.FooClient.setVars({\n  locale: getFooLocale({ page }),\n  authorizationToken: data.token\n}).initVerify(\"foo_container\");\n\nwindow.something.FooClient.setVars({\n  locale: getFooLocale({ page }),\n  authorizationToken: data.token\n}).initVerify(\"foo_container\");\n\nwindow.FooClient.something.setVars({\n  locale: getFooLocale({ page }),\n  authorizationToken: data.token\n}).initVerify(\"foo_container\");",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 910
}
```

### Printed

```javascript

const  veryVeryVeryVeryVeryVeryVeryLong = doc.expandedStates[doc.expandedStates.length - 1] ;
const  small = doc.expandedStates[doc.expandedStates.length - 1] ;
const  promises = [
  promise.resolve().then( console.log ).catch( err => {
    console.log( err );
    return null;
  } ),
  redis.fetch(),
  other.fetch(),
] ;
const  promises2 = [
  promise.resolve().veryLongFunctionCall().veryLongFunctionCall().then( console.log ).catch( err => {
    console.log( err );
    return null;
  } ),
  redis.fetch(),
  other.fetch(),
] ;
window.FooClient.setVars( {
  locale: getFooLocale( { page } ),
  authorizationToken: data.token
} ).initVerify( "\"foo_container\"" );
window.something.FooClient.setVars( {
  locale: getFooLocale( { page } ),
  authorizationToken: data.token
} ).initVerify( "\"foo_container\"" );
window.FooClient.something.setVars( {
  locale: getFooLocale( { page } ),
  authorizationToken: data.token
} ).initVerify( "\"foo_container\"" );

```

### Diagnostics

```javascript
✔ No errors
```

