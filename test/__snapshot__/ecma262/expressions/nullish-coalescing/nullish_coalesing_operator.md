# Kataw parser test case

## Input

`````js
obj.foo ?? "default";

const x = (foo, bar = foo ?? bar) => {};

foo ? bar ?? foo : baz;

foo ?? (bar ?? baz);
(foo ?? bar) ?? baz;

// Mixing ?? and (&& or ||) requires parens
// It's a syntax error without it.
(foo ?? baz) || baz;
foo ?? (baz || baz);

(foo ?? baz) && baz;
foo ?? (baz && baz);

(foo || baz) ?? baz;
foo || (baz ?? baz);

(foo && baz) ?? baz;
foo && (baz ?? baz);
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
                "kind": 198,
                "left": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "obj",
                        "rawText": "obj",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 3
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 4,
                        "end": 7
                    },
                    "flags": 96,
                    "transformFlags": 2,
                    "start": 0,
                    "end": 7
                },
                "operatorToken": {
                    "kind": 33047,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 10
                },
                "right": {
                    "kind": 201392131,
                    "text": "default",
                    "rawText": "\"default\"",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 20
                },
                "flags": 96,
                "transformFlags": 1024,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 21
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 21,
                "end": 28
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 28,
                            "end": 30
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
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 34,
                                        "end": 37
                                    },
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 38,
                                            "end": 42
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 44,
                                                "end": 48
                                            },
                                            "operatorToken": {
                                                "kind": 33047,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 48,
                                                "end": 51
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 51,
                                                "end": 55
                                            },
                                            "flags": 96,
                                            "transformFlags": 1024,
                                            "start": 44,
                                            "end": 55
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 55
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 56
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 56,
                                "end": 59
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 61,
                                    "end": 61
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 59,
                                "end": 62
                            },
                            "flags": 34,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 62
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 28,
                        "end": 62
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 28,
                "end": 62
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 21,
            "end": 63
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 63,
                    "end": 68
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 68,
                    "end": 70
                },
                "consequent": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 70,
                        "end": 74
                    },
                    "operatorToken": {
                        "kind": 33047,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 74,
                        "end": 77
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 77,
                        "end": 81
                    },
                    "flags": 96,
                    "transformFlags": 1024,
                    "start": 70,
                    "end": 81
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 81,
                    "end": 83
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "baz",
                    "rawText": "baz",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 83,
                    "end": 87
                },
                "flags": 97,
                "transformFlags": 0,
                "start": 63,
                "end": 87
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 63,
            "end": 88
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 88,
                    "end": 93
                },
                "operatorToken": {
                    "kind": 33047,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 93,
                    "end": 96
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 98,
                            "end": 101
                        },
                        "operatorToken": {
                            "kind": 33047,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 101,
                            "end": 104
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "baz",
                            "rawText": "baz",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 104,
                            "end": 108
                        },
                        "flags": 96,
                        "transformFlags": 1024,
                        "start": 96,
                        "end": 108
                    },
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 109
                },
                "flags": 97,
                "transformFlags": 1024,
                "start": 88,
                "end": 109
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 88,
            "end": 110
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 112,
                            "end": 115
                        },
                        "operatorToken": {
                            "kind": 33047,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 115,
                            "end": 118
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 118,
                            "end": 122
                        },
                        "flags": 96,
                        "transformFlags": 1024,
                        "start": 110,
                        "end": 122
                    },
                    "flags": 110,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 123
                },
                "operatorToken": {
                    "kind": 33047,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 123,
                    "end": 126
                },
                "right": {
                    "kind": 134299649,
                    "text": "baz",
                    "rawText": "baz",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 126,
                    "end": 130
                },
                "flags": 110,
                "transformFlags": 1024,
                "start": 110,
                "end": 130
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 110,
            "end": 131
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 213,
                            "end": 216
                        },
                        "operatorToken": {
                            "kind": 33047,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 216,
                            "end": 219
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "baz",
                            "rawText": "baz",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 219,
                            "end": 223
                        },
                        "flags": 96,
                        "transformFlags": 1024,
                        "start": 131,
                        "end": 223
                    },
                    "flags": 131,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 224
                },
                "operatorToken": {
                    "kind": 33339,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 224,
                    "end": 227
                },
                "right": {
                    "kind": 134299649,
                    "text": "baz",
                    "rawText": "baz",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 227,
                    "end": 231
                },
                "flags": 163,
                "transformFlags": 1024,
                "start": 131,
                "end": 231
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 131,
            "end": 232
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 232,
                    "end": 236
                },
                "operatorToken": {
                    "kind": 33047,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 236,
                    "end": 239
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "baz",
                            "rawText": "baz",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 241,
                            "end": 244
                        },
                        "operatorToken": {
                            "kind": 33339,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 244,
                            "end": 247
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "baz",
                            "rawText": "baz",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 247,
                            "end": 251
                        },
                        "flags": 96,
                        "transformFlags": 1024,
                        "start": 239,
                        "end": 251
                    },
                    "flags": 239,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 252
                },
                "flags": 97,
                "transformFlags": 1024,
                "start": 232,
                "end": 252
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 232,
            "end": 253
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 256,
                            "end": 259
                        },
                        "operatorToken": {
                            "kind": 33047,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 259,
                            "end": 262
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "baz",
                            "rawText": "baz",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 262,
                            "end": 266
                        },
                        "flags": 96,
                        "transformFlags": 1024,
                        "start": 253,
                        "end": 266
                    },
                    "flags": 253,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 267
                },
                "operatorToken": {
                    "kind": 33594,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 267,
                    "end": 270
                },
                "right": {
                    "kind": 134299649,
                    "text": "baz",
                    "rawText": "baz",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 270,
                    "end": 274
                },
                "flags": 253,
                "transformFlags": 1024,
                "start": 253,
                "end": 274
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 253,
            "end": 275
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 275,
                    "end": 279
                },
                "operatorToken": {
                    "kind": 33047,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 279,
                    "end": 282
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "baz",
                            "rawText": "baz",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 284,
                            "end": 287
                        },
                        "operatorToken": {
                            "kind": 33594,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 287,
                            "end": 290
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "baz",
                            "rawText": "baz",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 290,
                            "end": 294
                        },
                        "flags": 96,
                        "transformFlags": 1024,
                        "start": 282,
                        "end": 294
                    },
                    "flags": 282,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 295
                },
                "flags": 97,
                "transformFlags": 1024,
                "start": 275,
                "end": 295
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 275,
            "end": 296
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 299,
                            "end": 302
                        },
                        "operatorToken": {
                            "kind": 33339,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 302,
                            "end": 305
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "baz",
                            "rawText": "baz",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 305,
                            "end": 309
                        },
                        "flags": 96,
                        "transformFlags": 1024,
                        "start": 296,
                        "end": 309
                    },
                    "flags": 296,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 310
                },
                "operatorToken": {
                    "kind": 33047,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 310,
                    "end": 313
                },
                "right": {
                    "kind": 134299649,
                    "text": "baz",
                    "rawText": "baz",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 313,
                    "end": 317
                },
                "flags": 296,
                "transformFlags": 1024,
                "start": 296,
                "end": 317
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 296,
            "end": 318
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 318,
                    "end": 322
                },
                "operatorToken": {
                    "kind": 33339,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 322,
                    "end": 325
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "baz",
                            "rawText": "baz",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 327,
                            "end": 330
                        },
                        "operatorToken": {
                            "kind": 33047,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 330,
                            "end": 333
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "baz",
                            "rawText": "baz",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 333,
                            "end": 337
                        },
                        "flags": 96,
                        "transformFlags": 1024,
                        "start": 325,
                        "end": 337
                    },
                    "flags": 325,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 338
                },
                "flags": 97,
                "transformFlags": 1024,
                "start": 318,
                "end": 338
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 318,
            "end": 339
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 342,
                            "end": 345
                        },
                        "operatorToken": {
                            "kind": 33594,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 345,
                            "end": 348
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "baz",
                            "rawText": "baz",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 348,
                            "end": 352
                        },
                        "flags": 96,
                        "transformFlags": 1024,
                        "start": 339,
                        "end": 352
                    },
                    "flags": 339,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 353
                },
                "operatorToken": {
                    "kind": 33047,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 353,
                    "end": 356
                },
                "right": {
                    "kind": 134299649,
                    "text": "baz",
                    "rawText": "baz",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 356,
                    "end": 360
                },
                "flags": 371,
                "transformFlags": 1024,
                "start": 339,
                "end": 360
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 339,
            "end": 361
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 361,
                    "end": 365
                },
                "operatorToken": {
                    "kind": 33594,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 365,
                    "end": 368
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "baz",
                            "rawText": "baz",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 370,
                            "end": 373
                        },
                        "operatorToken": {
                            "kind": 33047,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 373,
                            "end": 376
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "baz",
                            "rawText": "baz",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 376,
                            "end": 380
                        },
                        "flags": 96,
                        "transformFlags": 1024,
                        "start": 368,
                        "end": 380
                    },
                    "flags": 368,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 381
                },
                "flags": 97,
                "transformFlags": 1024,
                "start": 361,
                "end": 381
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 361,
            "end": 382
        }
    ],
    "isModule": false,
    "source": "obj.foo ?? \"default\";\n\nconst x = (foo, bar = foo ?? bar) => {};\n\nfoo ? bar ?? foo : baz;\n\nfoo ?? (bar ?? baz);\n(foo ?? bar) ?? baz;\n\n// Mixing ?? and (&& or ||) requires parens\n// It's a syntax error without it.\n(foo ?? baz) || baz;\nfoo ?? (baz || baz);\n\n(foo ?? baz) && baz;\nfoo ?? (baz && baz);\n\n(foo || baz) ?? baz;\nfoo || (baz ?? baz);\n\n(foo && baz) ?? baz;\nfoo && (baz ?? baz);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 382
}
```

### Printed

```javascript

obj.foo ?? "\"default\"";
const x = (foo, bar = foo ?? bar) => {};

foo ? bar ?? foo : baz;

foo ?? (bar ?? baz);

(foo ?? bar) ?? baz;

(foo ?? baz) || baz;

foo ?? (baz || baz);

(foo ?? baz) && baz;

foo ?? (baz && baz);

(foo || baz) ?? baz;

foo || (baz ?? baz);

(foo && baz) ?? baz;

foo && (baz ?? baz);

```

### Diagnostics

```javascript
✔ No errors
```

