# Kataw parser test case

## Input

`````js
=> 0;
=>;
() =>;
=> {};
) => {};
, => {};
(,) => {};
return => {};
() => {'value': 42};

// Check that the early return introduced in ParsePrimaryExpression
// does not accept stray closing parentheses.
);
) => 0;
foo[()];
();

// Parameter lists with extra parens should be recognized as errors.
(()) => 0;
((x)) => 0;
((x, y)) => 0;
(x, (y)) => 0;
((x, y, z)) => 0;
(x, (y, z)) => 0;
((x, y), z) => 0;

// Arrow function formal parameters are parsed as StrictFormalParameters,
// which confusingly only implies that there are no duplicates.  Words
// reserved in strict mode, and eval or arguments, are indeed valid in
// sloppy mode.
eval => { 'use strict'; 0 };
arguments => { 'use strict'; 0 };
yield => { 'use strict'; 0 };
interface => { 'use strict'; 0 };
(eval) => { 'use strict'; 0 };
(arguments) => { 'use strict'; 0 };
(yield) => { 'use strict'; 0 };
(interface) => { 'use strict'; 0 };
(eval, bar) => { 'use strict'; 0 };
(bar, eval) => { 'use strict'; 0 };
(bar, arguments) => { 'use strict'; 0 };
(bar, yield) => { 'use strict'; 0 };
(bar, interface) => { 'use strict'; 0 };
    // TODO(aperez): Detecting duplicates does not work in PreParser.
    // "(bar, bar) => {};

    // The parameter list is parsed as an expression, but only
    // a comma-separated list of identifier is valid.
32 => {};
(32) => {};
(a, 32) => {};
if => {};
(if) => {};
(a, if) => {};
a + b => {};
(a + b) => {};
(a + b, c) => {};
(a, b - c) => {};
"a" => {};
("a") => {};
("a; b) => {};
(a, "b") => {};
-a => {};
(-a) => {};
(-a, b) => {};
(a, -b) => {};
{} => {};
a++ => {};
(a++) => {};
(a++, b) => {};
(a, b++) => {};
[] => {};
(foo ? bar : baz) => {};
(a, foo ? bar : baz) => {};
(foo ? bar : baz, a) => {};
(a.b, c) => {};
(c, a.b) => {};
(a['b'], c) => {};
(c, a['b']) => {};
(...a = b) => b;

(...rest - a) => b;
(a, ...b - 10) => b;

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
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 768,
                "start": 2,
                "end": 4
            },
            "flags": 128,
            "start": 2,
            "end": 5
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 8,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 12,
                    "end": 15
                },
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 15,
                    "end": 15
                },
                "flags": 256,
                "start": 9,
                "end": 15
            },
            "flags": 128,
            "start": 9,
            "end": 16
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 21,
                "end": 21
            },
            "flags": 128,
            "start": 19,
            "end": 22
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 22,
            "end": 23
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 30,
                "end": 30
            },
            "flags": 128,
            "start": 28,
            "end": 31
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 31,
            "end": 32
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 39,
                "end": 39
            },
            "flags": 128,
            "start": 37,
            "end": 40
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 40,
            "end": 41
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 16637,
                            "text": "",
                            "flags": 12,
                            "start": 43,
                            "end": 43
                        },
                        {
                            "kind": 16637,
                            "text": "",
                            "flags": 12,
                            "start": 44,
                            "end": 44
                        }
                    ],
                    "flags": 256,
                    "start": 41,
                    "end": 44
                },
                "flags": 256,
                "start": 41,
                "end": 45
            },
            "flags": 128,
            "start": 41,
            "end": 45
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 50,
                "end": 50
            },
            "flags": 128,
            "start": 48,
            "end": 51
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 51,
            "end": 52
        },
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 768,
                "start": 52,
                "end": 59
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 59,
                "end": 59
            },
            "flags": 128,
            "start": 0,
            "end": 52
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 64,
                "end": 64
            },
            "flags": 128,
            "start": 62,
            "end": 65
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 65,
            "end": 66
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 69,
                    "end": 72
                },
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 201392131,
                                    "text": "value",
                                    "rawText": "value",
                                    "flags": 67109632,
                                    "start": 74,
                                    "end": 81
                                },
                                "flags": 128,
                                "start": 74,
                                "end": 81
                            }
                        ],
                        "multiline": false,
                        "flags": 256,
                        "start": 74,
                        "end": 81
                    },
                    "flags": 256,
                    "start": 72,
                    "end": 81
                },
                "flags": 256,
                "start": 66,
                "end": 81
            },
            "flags": 128,
            "start": 66,
            "end": 81
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 42,
                "rawText": "42",
                "flags": 768,
                "start": 82,
                "end": 85
            },
            "flags": 128,
            "start": 82,
            "end": 85
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 86,
            "end": 87
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 204,
            "end": 205
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 768,
                "start": 210,
                "end": 212
            },
            "flags": 128,
            "start": 210,
            "end": 213
        },
        {
            "kind": 120,
            "expression": {
                "kind": 130,
                "member": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 768,
                    "start": 213,
                    "end": 217
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 218,
                    "end": 218
                },
                "flags": 256,
                "start": 213,
                "end": 221
            },
            "flags": 128,
            "start": 213,
            "end": 222
        },
        {
            "kind": 120,
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 222,
                "end": 222
            },
            "flags": 128,
            "start": 222,
            "end": 226
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 298,
                    "end": 298
                },
                "flags": 256,
                "start": 226,
                "end": 301
            },
            "flags": 128,
            "start": 226,
            "end": 301
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 768,
                "start": 304,
                "end": 306
            },
            "flags": 128,
            "start": 304,
            "end": 307
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 310,
                        "end": 311
                    },
                    "flags": 256,
                    "start": 309,
                    "end": 312
                },
                "flags": 256,
                "start": 307,
                "end": 313
            },
            "flags": 128,
            "start": 307,
            "end": 313
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 768,
                "start": 316,
                "end": 318
            },
            "flags": 128,
            "start": 316,
            "end": 319
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 322,
                                "end": 323
                            },
                            {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 768,
                                "start": 324,
                                "end": 326
                            }
                        ],
                        "flags": 256,
                        "start": 321,
                        "end": 327
                    },
                    "flags": 256,
                    "start": 321,
                    "end": 327
                },
                "flags": 256,
                "start": 319,
                "end": 328
            },
            "flags": 128,
            "start": 319,
            "end": 328
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 768,
                "start": 331,
                "end": 333
            },
            "flags": 128,
            "start": 331,
            "end": 334
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 336,
                            "end": 337
                        },
                        {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 768,
                                "start": 340,
                                "end": 341
                            },
                            "flags": 256,
                            "start": 338,
                            "end": 342
                        }
                    ],
                    "flags": 256,
                    "start": 334,
                    "end": 342
                },
                "flags": 256,
                "start": 334,
                "end": 343
            },
            "flags": 128,
            "start": 334,
            "end": 343
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 768,
                "start": 346,
                "end": 348
            },
            "flags": 128,
            "start": 346,
            "end": 349
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 352,
                                "end": 353
                            },
                            {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 768,
                                "start": 354,
                                "end": 356
                            },
                            {
                                "kind": 134299649,
                                "text": "z",
                                "rawText": "z",
                                "flags": 768,
                                "start": 357,
                                "end": 359
                            }
                        ],
                        "flags": 256,
                        "start": 351,
                        "end": 360
                    },
                    "flags": 256,
                    "start": 351,
                    "end": 360
                },
                "flags": 256,
                "start": 349,
                "end": 361
            },
            "flags": 128,
            "start": 349,
            "end": 361
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 768,
                "start": 364,
                "end": 366
            },
            "flags": 128,
            "start": 364,
            "end": 367
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 369,
                            "end": 370
                        },
                        {
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "expressions": [
                                    {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 768,
                                        "start": 373,
                                        "end": 374
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 768,
                                        "start": 375,
                                        "end": 377
                                    }
                                ],
                                "flags": 256,
                                "start": 371,
                                "end": 378
                            },
                            "flags": 256,
                            "start": 371,
                            "end": 378
                        }
                    ],
                    "flags": 256,
                    "start": 367,
                    "end": 378
                },
                "flags": 256,
                "start": 367,
                "end": 379
            },
            "flags": 128,
            "start": 367,
            "end": 379
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 768,
                "start": 382,
                "end": 384
            },
            "flags": 128,
            "start": 382,
            "end": 385
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "expressions": [
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 388,
                                        "end": 389
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 768,
                                        "start": 390,
                                        "end": 392
                                    }
                                ],
                                "flags": 256,
                                "start": 387,
                                "end": 393
                            },
                            "flags": 256,
                            "start": 387,
                            "end": 393
                        },
                        {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 768,
                            "start": 394,
                            "end": 396
                        }
                    ],
                    "flags": 256,
                    "start": 385,
                    "end": 396
                },
                "flags": 256,
                "start": 385,
                "end": 397
            },
            "flags": 128,
            "start": 385,
            "end": 397
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 768,
                "start": 400,
                "end": 402
            },
            "flags": 128,
            "start": 400,
            "end": 403
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 641,
                    "end": 644
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "eval",
                    "rawText": "eval",
                    "flags": 768,
                    "start": 403,
                    "end": 641
                },
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [
                            {
                                "kind": 201392131,
                                "text": "use strict",
                                "rawText": "use strict",
                                "flags": 67109632,
                                "start": 646,
                                "end": 659
                            }
                        ],
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 660,
                                    "end": 662
                                },
                                "flags": 128,
                                "start": 660,
                                "end": 662
                            }
                        ],
                        "multiline": false,
                        "flags": 256,
                        "start": 646,
                        "end": 662
                    },
                    "flags": 256,
                    "start": 644,
                    "end": 664
                },
                "flags": 256,
                "start": 403,
                "end": 664
            },
            "flags": 128,
            "start": 403,
            "end": 665
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 675,
                    "end": 678
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "arguments",
                    "rawText": "arguments",
                    "flags": 768,
                    "start": 665,
                    "end": 675
                },
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [
                            {
                                "kind": 201392131,
                                "text": "use strict",
                                "rawText": "use strict",
                                "flags": 67109632,
                                "start": 680,
                                "end": 693
                            }
                        ],
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 694,
                                    "end": 696
                                },
                                "flags": 128,
                                "start": 694,
                                "end": 696
                            }
                        ],
                        "multiline": false,
                        "flags": 256,
                        "start": 680,
                        "end": 696
                    },
                    "flags": 256,
                    "start": 678,
                    "end": 698
                },
                "flags": 256,
                "start": 665,
                "end": 698
            },
            "flags": 128,
            "start": 665,
            "end": 699
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 705,
                    "end": 708
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 768,
                    "start": 699,
                    "end": 705
                },
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [
                            {
                                "kind": 201392131,
                                "text": "use strict",
                                "rawText": "use strict",
                                "flags": 67109632,
                                "start": 710,
                                "end": 723
                            }
                        ],
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 724,
                                    "end": 726
                                },
                                "flags": 128,
                                "start": 724,
                                "end": 726
                            }
                        ],
                        "multiline": false,
                        "flags": 256,
                        "start": 710,
                        "end": 726
                    },
                    "flags": 256,
                    "start": 708,
                    "end": 728
                },
                "flags": 256,
                "start": 699,
                "end": 728
            },
            "flags": 128,
            "start": 699,
            "end": 729
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 739,
                    "end": 742
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "interface",
                    "rawText": "interface",
                    "flags": 768,
                    "start": 729,
                    "end": 739
                },
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [
                            {
                                "kind": 201392131,
                                "text": "use strict",
                                "rawText": "use strict",
                                "flags": 67109632,
                                "start": 744,
                                "end": 757
                            }
                        ],
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 758,
                                    "end": 760
                                },
                                "flags": 128,
                                "start": 758,
                                "end": 760
                            }
                        ],
                        "multiline": false,
                        "flags": 256,
                        "start": 744,
                        "end": 760
                    },
                    "flags": 256,
                    "start": 742,
                    "end": 762
                },
                "flags": 256,
                "start": 729,
                "end": 762
            },
            "flags": 128,
            "start": 729,
            "end": 763
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 770,
                    "end": 773
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "eval",
                        "rawText": "eval",
                        "flags": 768,
                        "start": 765,
                        "end": 769
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [
                            {
                                "kind": 201392131,
                                "text": "use strict",
                                "rawText": "use strict",
                                "flags": 67109632,
                                "start": 775,
                                "end": 788
                            }
                        ],
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 789,
                                    "end": 791
                                },
                                "flags": 128,
                                "start": 789,
                                "end": 791
                            }
                        ],
                        "multiline": false,
                        "flags": 256,
                        "start": 775,
                        "end": 791
                    },
                    "flags": 256,
                    "start": 773,
                    "end": 793
                },
                "flags": 256,
                "start": 763,
                "end": 793
            },
            "flags": 128,
            "start": 763,
            "end": 794
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 806,
                    "end": 809
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "arguments",
                        "rawText": "arguments",
                        "flags": 768,
                        "start": 796,
                        "end": 805
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [
                            {
                                "kind": 201392131,
                                "text": "use strict",
                                "rawText": "use strict",
                                "flags": 67109632,
                                "start": 811,
                                "end": 824
                            }
                        ],
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 825,
                                    "end": 827
                                },
                                "flags": 128,
                                "start": 825,
                                "end": 827
                            }
                        ],
                        "multiline": false,
                        "flags": 256,
                        "start": 811,
                        "end": 827
                    },
                    "flags": 256,
                    "start": 809,
                    "end": 829
                },
                "flags": 256,
                "start": 794,
                "end": 829
            },
            "flags": 128,
            "start": 794,
            "end": 830
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 838,
                    "end": 841
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "yield",
                        "rawText": "yield",
                        "flags": 768,
                        "start": 832,
                        "end": 837
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [
                            {
                                "kind": 201392131,
                                "text": "use strict",
                                "rawText": "use strict",
                                "flags": 67109632,
                                "start": 843,
                                "end": 856
                            }
                        ],
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 857,
                                    "end": 859
                                },
                                "flags": 128,
                                "start": 857,
                                "end": 859
                            }
                        ],
                        "multiline": false,
                        "flags": 256,
                        "start": 843,
                        "end": 859
                    },
                    "flags": 256,
                    "start": 841,
                    "end": 861
                },
                "flags": 256,
                "start": 830,
                "end": 861
            },
            "flags": 128,
            "start": 830,
            "end": 862
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 874,
                    "end": 877
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "interface",
                        "rawText": "interface",
                        "flags": 768,
                        "start": 864,
                        "end": 873
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [
                            {
                                "kind": 201392131,
                                "text": "use strict",
                                "rawText": "use strict",
                                "flags": 67109632,
                                "start": 879,
                                "end": 892
                            }
                        ],
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 893,
                                    "end": 895
                                },
                                "flags": 128,
                                "start": 893,
                                "end": 895
                            }
                        ],
                        "multiline": false,
                        "flags": 256,
                        "start": 879,
                        "end": 895
                    },
                    "flags": 256,
                    "start": 877,
                    "end": 897
                },
                "flags": 256,
                "start": 862,
                "end": 897
            },
            "flags": 128,
            "start": 862,
            "end": 898
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 910,
                    "end": 913
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "eval",
                            "rawText": "eval",
                            "flags": 768,
                            "start": 900,
                            "end": 904
                        },
                        {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 768,
                            "start": 905,
                            "end": 909
                        }
                    ]
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [
                            {
                                "kind": 201392131,
                                "text": "use strict",
                                "rawText": "use strict",
                                "flags": 67109632,
                                "start": 915,
                                "end": 928
                            }
                        ],
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 929,
                                    "end": 931
                                },
                                "flags": 128,
                                "start": 929,
                                "end": 931
                            }
                        ],
                        "multiline": false,
                        "flags": 256,
                        "start": 915,
                        "end": 931
                    },
                    "flags": 256,
                    "start": 913,
                    "end": 933
                },
                "flags": 256,
                "start": 898,
                "end": 933
            },
            "flags": 128,
            "start": 898,
            "end": 934
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 946,
                    "end": 949
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 768,
                            "start": 936,
                            "end": 939
                        },
                        {
                            "kind": 134299649,
                            "text": "eval",
                            "rawText": "eval",
                            "flags": 768,
                            "start": 940,
                            "end": 945
                        }
                    ]
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [
                            {
                                "kind": 201392131,
                                "text": "use strict",
                                "rawText": "use strict",
                                "flags": 67109632,
                                "start": 951,
                                "end": 964
                            }
                        ],
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 965,
                                    "end": 967
                                },
                                "flags": 128,
                                "start": 965,
                                "end": 967
                            }
                        ],
                        "multiline": false,
                        "flags": 256,
                        "start": 951,
                        "end": 967
                    },
                    "flags": 256,
                    "start": 949,
                    "end": 969
                },
                "flags": 256,
                "start": 934,
                "end": 969
            },
            "flags": 128,
            "start": 934,
            "end": 970
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 987,
                    "end": 990
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 768,
                            "start": 972,
                            "end": 975
                        },
                        {
                            "kind": 134299649,
                            "text": "arguments",
                            "rawText": "arguments",
                            "flags": 768,
                            "start": 976,
                            "end": 986
                        }
                    ]
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [
                            {
                                "kind": 201392131,
                                "text": "use strict",
                                "rawText": "use strict",
                                "flags": 67109632,
                                "start": 992,
                                "end": 1005
                            }
                        ],
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 1006,
                                    "end": 1008
                                },
                                "flags": 128,
                                "start": 1006,
                                "end": 1008
                            }
                        ],
                        "multiline": false,
                        "flags": 256,
                        "start": 992,
                        "end": 1008
                    },
                    "flags": 256,
                    "start": 990,
                    "end": 1010
                },
                "flags": 256,
                "start": 970,
                "end": 1010
            },
            "flags": 128,
            "start": 970,
            "end": 1011
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 1024,
                    "end": 1027
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 768,
                            "start": 1013,
                            "end": 1016
                        },
                        {
                            "kind": 134299649,
                            "text": "yield",
                            "rawText": "yield",
                            "flags": 768,
                            "start": 1017,
                            "end": 1023
                        }
                    ]
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [
                            {
                                "kind": 201392131,
                                "text": "use strict",
                                "rawText": "use strict",
                                "flags": 67109632,
                                "start": 1029,
                                "end": 1042
                            }
                        ],
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 1043,
                                    "end": 1045
                                },
                                "flags": 128,
                                "start": 1043,
                                "end": 1045
                            }
                        ],
                        "multiline": false,
                        "flags": 256,
                        "start": 1029,
                        "end": 1045
                    },
                    "flags": 256,
                    "start": 1027,
                    "end": 1047
                },
                "flags": 256,
                "start": 1011,
                "end": 1047
            },
            "flags": 128,
            "start": 1011,
            "end": 1048
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 1065,
                    "end": 1068
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 768,
                            "start": 1050,
                            "end": 1053
                        },
                        {
                            "kind": 134299649,
                            "text": "interface",
                            "rawText": "interface",
                            "flags": 768,
                            "start": 1054,
                            "end": 1064
                        }
                    ]
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [
                            {
                                "kind": 201392131,
                                "text": "use strict",
                                "rawText": "use strict",
                                "flags": 67109632,
                                "start": 1070,
                                "end": 1083
                            }
                        ],
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 1084,
                                    "end": 1086
                                },
                                "flags": 128,
                                "start": 1084,
                                "end": 1086
                            }
                        ],
                        "multiline": false,
                        "flags": 256,
                        "start": 1070,
                        "end": 1086
                    },
                    "flags": 256,
                    "start": 1068,
                    "end": 1088
                },
                "flags": 256,
                "start": 1048,
                "end": 1088
            },
            "flags": 128,
            "start": 1048,
            "end": 1089
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 32,
                "rawText": "32",
                "flags": 769,
                "start": 1089,
                "end": 1306
            },
            "flags": 128,
            "start": 1089,
            "end": 1306
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 1311,
                "end": 1311
            },
            "flags": 128,
            "start": 1309,
            "end": 1312
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 1312,
            "end": 1313
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 201392130,
                    "text": 32,
                    "rawText": "32",
                    "flags": 768,
                    "start": 1315,
                    "end": 1317
                },
                "flags": 256,
                "start": 1313,
                "end": 1318
            },
            "flags": 128,
            "start": 1313,
            "end": 1318
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 1323,
                "end": 1323
            },
            "flags": 128,
            "start": 1321,
            "end": 1324
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 1324,
            "end": 1325
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 1327,
                            "end": 1328
                        },
                        {
                            "kind": 201392130,
                            "text": 32,
                            "rawText": "32",
                            "flags": 768,
                            "start": 1329,
                            "end": 1332
                        }
                    ],
                    "flags": 256,
                    "start": 1325,
                    "end": 1332
                },
                "flags": 256,
                "start": 1325,
                "end": 1333
            },
            "flags": 128,
            "start": 1325,
            "end": 1333
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 1338,
                "end": 1338
            },
            "flags": 128,
            "start": 1336,
            "end": 1339
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 1339,
            "end": 1340
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 768,
                "start": 1340,
                "end": 1343
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 1343,
                "end": 1343
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 1343,
                    "end": 1343
                },
                "flags": 128,
                "start": 1343,
                "end": 1343
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 128,
            "start": 1340,
            "end": 1343
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 1348,
                "end": 1348
            },
            "flags": 128,
            "start": 1346,
            "end": 1349
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 1349,
            "end": 1350
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 1352,
                    "end": 1352
                },
                "flags": 256,
                "start": 1350,
                "end": 1352
            },
            "flags": 128,
            "start": 1350,
            "end": 1352
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 768,
                "start": 1352,
                "end": 1354
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 1354,
                "end": 1354
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 1355,
                    "end": 1355
                },
                "flags": 128,
                "start": 1355,
                "end": 1355
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 128,
            "start": 1352,
            "end": 1355
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 1360,
                "end": 1360
            },
            "flags": 128,
            "start": 1358,
            "end": 1361
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 1361,
            "end": 1362
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 1364,
                            "end": 1365
                        }
                    ],
                    "flags": 256,
                    "start": 1362,
                    "end": 1366
                },
                "flags": 256,
                "start": 1362,
                "end": 1366
            },
            "flags": 128,
            "start": 1362,
            "end": 1366
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 768,
                "start": 1366,
                "end": 1369
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 1369,
                "end": 1369
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 1370,
                    "end": 1370
                },
                "flags": 128,
                "start": 1370,
                "end": 1370
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 128,
            "start": 1366,
            "end": 1370
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 1375,
                "end": 1375
            },
            "flags": 128,
            "start": 1373,
            "end": 1376
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 1376,
            "end": 1377
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 1377,
                    "end": 1379
                },
                "operatorToken": {
                    "kind": 34098,
                    "flags": 768,
                    "start": 1379,
                    "end": 1381
                },
                "right": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 768,
                        "start": 1383,
                        "end": 1386
                    },
                    "typeParameters": null,
                    "parameters": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 768,
                        "start": 1381,
                        "end": 1383
                    },
                    "asyncToken": null,
                    "returnType": null,
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "multiline": false,
                            "flags": 256,
                            "start": 1388,
                            "end": 1388
                        },
                        "flags": 256,
                        "start": 1386,
                        "end": 1389
                    },
                    "flags": 256,
                    "start": 1381,
                    "end": 1389
                },
                "flags": 256,
                "start": 1377,
                "end": 1389
            },
            "flags": 128,
            "start": 1377,
            "end": 1390
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 768,
                        "start": 1392,
                        "end": 1393
                    },
                    "operatorToken": {
                        "kind": 34098,
                        "flags": 768,
                        "start": 1393,
                        "end": 1395
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 768,
                        "start": 1395,
                        "end": 1397
                    },
                    "flags": 256,
                    "start": 1390,
                    "end": 1397
                },
                "flags": 256,
                "start": 1390,
                "end": 1398
            },
            "flags": 128,
            "start": 1390,
            "end": 1398
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 1403,
                "end": 1403
            },
            "flags": 128,
            "start": 1401,
            "end": 1404
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 1404,
            "end": 1405
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 1416,
                    "end": 1419
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 1407,
                                "end": 1408
                            },
                            "operatorToken": {
                                "kind": 34098,
                                "flags": 768,
                                "start": 1408,
                                "end": 1410
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 768,
                                "start": 1410,
                                "end": 1412
                            },
                            "flags": 256,
                            "start": 1405,
                            "end": 1412
                        },
                        {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 768,
                            "start": 1413,
                            "end": 1415
                        }
                    ]
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "multiline": false,
                        "flags": 256,
                        "start": 1421,
                        "end": 1421
                    },
                    "flags": 256,
                    "start": 1419,
                    "end": 1422
                },
                "flags": 256,
                "start": 1405,
                "end": 1422
            },
            "flags": 128,
            "start": 1405,
            "end": 1423
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 1425,
                            "end": 1426
                        },
                        {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 768,
                                "start": 1427,
                                "end": 1429
                            },
                            "operatorToken": {
                                "kind": 35379,
                                "flags": 768,
                                "start": 1429,
                                "end": 1431
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 768,
                                "start": 1431,
                                "end": 1433
                            },
                            "flags": 256,
                            "start": 1423,
                            "end": 1433
                        }
                    ],
                    "flags": 256,
                    "start": 1423,
                    "end": 1434
                },
                "flags": 256,
                "start": 1423,
                "end": 1434
            },
            "flags": 128,
            "start": 1423,
            "end": 1434
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 1439,
                "end": 1439
            },
            "flags": 128,
            "start": 1437,
            "end": 1440
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 1440,
            "end": 1441
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "a",
                "rawText": "a",
                "flags": 769,
                "start": 1441,
                "end": 1445
            },
            "flags": 128,
            "start": 1441,
            "end": 1445
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 1450,
                "end": 1450
            },
            "flags": 128,
            "start": 1448,
            "end": 1451
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 1451,
            "end": 1452
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 201392131,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 1454,
                    "end": 1457
                },
                "flags": 256,
                "start": 1452,
                "end": 1458
            },
            "flags": 128,
            "start": 1452,
            "end": 1458
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 1463,
                "end": 1463
            },
            "flags": 128,
            "start": 1461,
            "end": 1464
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 1464,
            "end": 1465
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 201392131,
                        "text": "a; b) => {};",
                        "rawText": "\"a; b) => {};",
                        "flags": 33555200,
                        "start": 1467,
                        "end": 1480
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 1482,
                                "end": 1483
                            },
                            {
                                "kind": 201392131,
                                "text": "b",
                                "rawText": "b",
                                "flags": 768,
                                "start": 1484,
                                "end": 1488
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 1482,
                        "end": 1488
                    },
                    "flags": 256,
                    "start": 1467,
                    "end": 1489
                },
                "flags": 256,
                "start": 1465,
                "end": 1489
            },
            "flags": 128,
            "start": 1465,
            "end": 1489
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 1494,
                "end": 1494
            },
            "flags": 128,
            "start": 1492,
            "end": 1495
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 1495,
            "end": 1496
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 35379,
                    "flags": 768,
                    "start": 1496,
                    "end": 1498
                },
                "expression": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 768,
                        "start": 1499,
                        "end": 1502
                    },
                    "typeParameters": null,
                    "parameters": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 768,
                        "start": 1498,
                        "end": 1499
                    },
                    "asyncToken": null,
                    "returnType": null,
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "multiline": false,
                            "flags": 256,
                            "start": 1504,
                            "end": 1504
                        },
                        "flags": 256,
                        "start": 1502,
                        "end": 1505
                    },
                    "flags": 256,
                    "start": 1498,
                    "end": 1505
                },
                "flags": 256,
                "start": 1496,
                "end": 1505
            },
            "flags": 128,
            "start": 1496,
            "end": 1506
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 35379,
                        "flags": 768,
                        "start": 1508,
                        "end": 1509
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 768,
                        "start": 1509,
                        "end": 1510
                    },
                    "flags": 256,
                    "start": 1508,
                    "end": 1510
                },
                "flags": 256,
                "start": 1506,
                "end": 1511
            },
            "flags": 128,
            "start": 1506,
            "end": 1511
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 1516,
                "end": 1516
            },
            "flags": 128,
            "start": 1514,
            "end": 1517
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 1517,
            "end": 1518
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 126,
                            "operandToken": {
                                "kind": 35379,
                                "flags": 768,
                                "start": 1520,
                                "end": 1521
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 1521,
                                "end": 1522
                            },
                            "flags": 256,
                            "start": 1520,
                            "end": 1522
                        },
                        {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 768,
                            "start": 1523,
                            "end": 1525
                        }
                    ],
                    "flags": 256,
                    "start": 1518,
                    "end": 1525
                },
                "flags": 256,
                "start": 1518,
                "end": 1526
            },
            "flags": 128,
            "start": 1518,
            "end": 1526
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 1531,
                "end": 1531
            },
            "flags": 128,
            "start": 1529,
            "end": 1532
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 1532,
            "end": 1533
        },
        {
            "kind": 120,
            "expression": {
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
                                "flags": 768,
                                "start": 1535,
                                "end": 1536
                            }
                        ],
                        "flags": 256,
                        "start": 1533,
                        "end": 1537
                    },
                    "flags": 256,
                    "start": 1533,
                    "end": 1537
                },
                "operatorToken": {
                    "kind": 35379,
                    "flags": 768,
                    "start": 1537,
                    "end": 1539
                },
                "right": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 768,
                    "start": 1539,
                    "end": 1540
                },
                "flags": 256,
                "start": 1533,
                "end": 1540
            },
            "flags": 128,
            "start": 1533,
            "end": 1540
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 1546,
                "end": 1546
            },
            "flags": 128,
            "start": 1544,
            "end": 1547
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 1547,
            "end": 1548
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 1550,
                "end": 1550
            },
            "flags": 128,
            "start": 1548,
            "end": 1551
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 1556,
                "end": 1556
            },
            "flags": 128,
            "start": 1554,
            "end": 1557
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 1557,
            "end": 1558
        },
        {
            "kind": 120,
            "expression": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 768,
                    "start": 1560,
                    "end": 1562
                },
                "expression": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 1558,
                    "end": 1560
                },
                "flags": 256,
                "start": 1558,
                "end": 1562
            },
            "flags": 128,
            "start": 1558,
            "end": 1562
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 1567,
                "end": 1567
            },
            "flags": 128,
            "start": 1565,
            "end": 1568
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 1568,
            "end": 1569
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 127,
                    "operandToken": {
                        "kind": 196635,
                        "flags": 768,
                        "start": 1572,
                        "end": 1574
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 768,
                        "start": 1571,
                        "end": 1572
                    },
                    "flags": 256,
                    "start": 1569,
                    "end": 1574
                },
                "flags": 256,
                "start": 1569,
                "end": 1575
            },
            "flags": 128,
            "start": 1569,
            "end": 1575
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 1580,
                "end": 1580
            },
            "flags": 128,
            "start": 1578,
            "end": 1581
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 1581,
            "end": 1582
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 1591,
                    "end": 1594
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 127,
                            "operandToken": {
                                "kind": 196635,
                                "flags": 768,
                                "start": 1585,
                                "end": 1587
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 1584,
                                "end": 1585
                            },
                            "flags": 256,
                            "start": 1582,
                            "end": 1587
                        },
                        {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 768,
                            "start": 1588,
                            "end": 1590
                        }
                    ]
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "multiline": false,
                        "flags": 256,
                        "start": 1596,
                        "end": 1596
                    },
                    "flags": 256,
                    "start": 1594,
                    "end": 1597
                },
                "flags": 256,
                "start": 1582,
                "end": 1597
            },
            "flags": 128,
            "start": 1582,
            "end": 1598
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 1600,
                            "end": 1601
                        },
                        {
                            "kind": 127,
                            "operandToken": {
                                "kind": 196635,
                                "flags": 768,
                                "start": 1604,
                                "end": 1606
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 768,
                                "start": 1602,
                                "end": 1604
                            },
                            "flags": 256,
                            "start": 1598,
                            "end": 1606
                        }
                    ],
                    "flags": 256,
                    "start": 1598,
                    "end": 1607
                },
                "flags": 256,
                "start": 1598,
                "end": 1607
            },
            "flags": 128,
            "start": 1598,
            "end": 1607
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 1612,
                "end": 1612
            },
            "flags": 128,
            "start": 1610,
            "end": 1613
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 1613,
            "end": 1614
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 1616,
                    "end": 1616
                },
                "flags": 256,
                "start": 1614,
                "end": 1617
            },
            "flags": 128,
            "start": 1614,
            "end": 1617
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 1622,
                "end": 1622
            },
            "flags": 128,
            "start": 1620,
            "end": 1623
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 1623,
            "end": 1624
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 197,
                    "shortCircuit": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 768,
                        "start": 1626,
                        "end": 1629
                    },
                    "questionToken": {
                        "kind": 134217750,
                        "flags": 768,
                        "start": 1629,
                        "end": 1631
                    },
                    "consequent": {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 768,
                        "start": 1631,
                        "end": 1635
                    },
                    "colonToken": {
                        "kind": 21,
                        "flags": 768,
                        "start": 1635,
                        "end": 1637
                    },
                    "alternate": {
                        "kind": 134299649,
                        "text": "baz",
                        "rawText": "baz",
                        "flags": 768,
                        "start": 1637,
                        "end": 1641
                    },
                    "flags": 256,
                    "start": 1624,
                    "end": 1641
                },
                "flags": 256,
                "start": 1624,
                "end": 1642
            },
            "flags": 128,
            "start": 1624,
            "end": 1642
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 1647,
                "end": 1647
            },
            "flags": 128,
            "start": 1645,
            "end": 1648
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 1648,
            "end": 1649
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 1651,
                            "end": 1652
                        },
                        {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 768,
                                "start": 1653,
                                "end": 1657
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 768,
                                "start": 1657,
                                "end": 1659
                            },
                            "consequent": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 768,
                                "start": 1659,
                                "end": 1663
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 768,
                                "start": 1663,
                                "end": 1665
                            },
                            "alternate": {
                                "kind": 134299649,
                                "text": "baz",
                                "rawText": "baz",
                                "flags": 768,
                                "start": 1665,
                                "end": 1669
                            },
                            "flags": 256,
                            "start": 1649,
                            "end": 1669
                        }
                    ],
                    "flags": 256,
                    "start": 1649,
                    "end": 1670
                },
                "flags": 256,
                "start": 1649,
                "end": 1670
            },
            "flags": 128,
            "start": 1649,
            "end": 1670
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 1675,
                "end": 1675
            },
            "flags": 128,
            "start": 1673,
            "end": 1676
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 1676,
            "end": 1677
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 1698,
                    "end": 1701
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 768,
                                "start": 1679,
                                "end": 1682
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 768,
                                "start": 1682,
                                "end": 1684
                            },
                            "consequent": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 768,
                                "start": 1684,
                                "end": 1688
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 768,
                                "start": 1688,
                                "end": 1690
                            },
                            "alternate": {
                                "kind": 134299649,
                                "text": "baz",
                                "rawText": "baz",
                                "flags": 768,
                                "start": 1690,
                                "end": 1694
                            },
                            "flags": 256,
                            "start": 1677,
                            "end": 1694
                        },
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 1695,
                            "end": 1697
                        }
                    ]
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "multiline": false,
                        "flags": 256,
                        "start": 1703,
                        "end": 1703
                    },
                    "flags": 256,
                    "start": 1701,
                    "end": 1704
                },
                "flags": 256,
                "start": 1677,
                "end": 1704
            },
            "flags": 128,
            "start": 1677,
            "end": 1705
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 1714,
                    "end": 1717
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 129,
                            "member": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 1707,
                                "end": 1708
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 768,
                                "start": 1709,
                                "end": 1710
                            },
                            "flags": 256,
                            "start": 1705,
                            "end": 1710
                        },
                        {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 768,
                            "start": 1711,
                            "end": 1713
                        }
                    ]
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "multiline": false,
                        "flags": 256,
                        "start": 1719,
                        "end": 1719
                    },
                    "flags": 256,
                    "start": 1717,
                    "end": 1720
                },
                "flags": 256,
                "start": 1705,
                "end": 1720
            },
            "flags": 128,
            "start": 1705,
            "end": 1721
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 768,
                            "start": 1723,
                            "end": 1724
                        },
                        {
                            "kind": 129,
                            "member": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 1725,
                                "end": 1727
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 768,
                                "start": 1728,
                                "end": 1729
                            },
                            "flags": 256,
                            "start": 1721,
                            "end": 1729
                        }
                    ],
                    "flags": 256,
                    "start": 1721,
                    "end": 1730
                },
                "flags": 256,
                "start": 1721,
                "end": 1730
            },
            "flags": 128,
            "start": 1721,
            "end": 1730
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 1735,
                "end": 1735
            },
            "flags": 128,
            "start": 1733,
            "end": 1736
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 1736,
            "end": 1737
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 1749,
                    "end": 1752
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 130,
                            "member": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 1739,
                                "end": 1740
                            },
                            "expression": {
                                "kind": 201392131,
                                "text": "b",
                                "rawText": "b",
                                "flags": 67109632,
                                "start": 1741,
                                "end": 1744
                            },
                            "flags": 256,
                            "start": 1737,
                            "end": 1745
                        },
                        {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 768,
                            "start": 1746,
                            "end": 1748
                        }
                    ]
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "multiline": false,
                        "flags": 256,
                        "start": 1754,
                        "end": 1754
                    },
                    "flags": 256,
                    "start": 1752,
                    "end": 1755
                },
                "flags": 256,
                "start": 1737,
                "end": 1755
            },
            "flags": 128,
            "start": 1737,
            "end": 1756
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 768,
                            "start": 1758,
                            "end": 1759
                        },
                        {
                            "kind": 130,
                            "member": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 1760,
                                "end": 1762
                            },
                            "expression": {
                                "kind": 201392131,
                                "text": "b",
                                "rawText": "b",
                                "flags": 67109632,
                                "start": 1763,
                                "end": 1766
                            },
                            "flags": 256,
                            "start": 1756,
                            "end": 1767
                        }
                    ],
                    "flags": 256,
                    "start": 1756,
                    "end": 1768
                },
                "flags": 256,
                "start": 1756,
                "end": 1768
            },
            "flags": 128,
            "start": 1756,
            "end": 1768
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 1773,
                "end": 1773
            },
            "flags": 128,
            "start": 1771,
            "end": 1774
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 1774,
            "end": 1775
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 1786,
                    "end": 1789
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 215,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 768,
                            "start": 1777,
                            "end": 1780
                        },
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 1780,
                            "end": 1781
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 768,
                            "start": 1783,
                            "end": 1785
                        },
                        "flags": 258,
                        "start": 1777,
                        "end": 1785
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 768,
                    "start": 1789,
                    "end": 1791
                },
                "flags": 256,
                "start": 1775,
                "end": 1791
            },
            "flags": 128,
            "start": 1775,
            "end": 1792
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "flags": 256,
                        "start": 1792,
                        "end": 1802
                    },
                    "flags": 256,
                    "start": 1792,
                    "end": 1802
                },
                "operatorToken": {
                    "kind": 35379,
                    "flags": 768,
                    "start": 1802,
                    "end": 1804
                },
                "right": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 1804,
                    "end": 1806
                },
                "flags": 256,
                "start": 1792,
                "end": 1806
            },
            "flags": 128,
            "start": 1792,
            "end": 1806
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 768,
                "start": 1810,
                "end": 1812
            },
            "flags": 128,
            "start": 1810,
            "end": 1813
        },
        {
            "kind": 120,
            "expression": {
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
                                "flags": 768,
                                "start": 1815,
                                "end": 1816
                            },
                            {
                                "kind": 215,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 768,
                                    "start": 1817,
                                    "end": 1821
                                },
                                "binding": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 768,
                                    "start": 1821,
                                    "end": 1822
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 258,
                                "start": 1817,
                                "end": 1822
                            }
                        ],
                        "flags": 256,
                        "start": 1813,
                        "end": 1822
                    },
                    "flags": 256,
                    "start": 1813,
                    "end": 1822
                },
                "operatorToken": {
                    "kind": 35379,
                    "flags": 768,
                    "start": 1822,
                    "end": 1824
                },
                "right": {
                    "kind": 201392130,
                    "text": 10,
                    "rawText": "10",
                    "flags": 768,
                    "start": 1824,
                    "end": 1827
                },
                "flags": 256,
                "start": 1813,
                "end": 1827
            },
            "flags": 128,
            "start": 1813,
            "end": 1827
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 768,
                "start": 1831,
                "end": 1833
            },
            "flags": 128,
            "start": 1831,
            "end": 1834
        }
    ],
    "isModule": false,
    "text": "=> 0;\n=>;\n() =>;\n=> {};\n) => {};\n, => {};\n(,) => {};\nreturn => {};\n() => {'value': 42};\n\n// Check that the early return introduced in ParsePrimaryExpression\n// does not accept stray closing parentheses.\n);\n) => 0;\nfoo[()];\n();\n\n// Parameter lists with extra parens should be recognized as errors.\n(()) => 0;\n((x)) => 0;\n((x, y)) => 0;\n(x, (y)) => 0;\n((x, y, z)) => 0;\n(x, (y, z)) => 0;\n((x, y), z) => 0;\n\n// Arrow function formal parameters are parsed as StrictFormalParameters,\n// which confusingly only implies that there are no duplicates.  Words\n// reserved in strict mode, and eval or arguments, are indeed valid in\n// sloppy mode.\neval => { 'use strict'; 0 };\narguments => { 'use strict'; 0 };\nyield => { 'use strict'; 0 };\ninterface => { 'use strict'; 0 };\n(eval) => { 'use strict'; 0 };\n(arguments) => { 'use strict'; 0 };\n(yield) => { 'use strict'; 0 };\n(interface) => { 'use strict'; 0 };\n(eval, bar) => { 'use strict'; 0 };\n(bar, eval) => { 'use strict'; 0 };\n(bar, arguments) => { 'use strict'; 0 };\n(bar, yield) => { 'use strict'; 0 };\n(bar, interface) => { 'use strict'; 0 };\n    // TODO(aperez): Detecting duplicates does not work in PreParser.\n    // \"(bar, bar) => {};\n\n    // The parameter list is parsed as an expression, but only\n    // a comma-separated list of identifier is valid.\n32 => {};\n(32) => {};\n(a, 32) => {};\nif => {};\n(if) => {};\n(a, if) => {};\na + b => {};\n(a + b) => {};\n(a + b, c) => {};\n(a, b - c) => {};\n\"a\" => {};\n(\"a\") => {};\n(\"a; b) => {};\n(a, \"b\") => {};\n-a => {};\n(-a) => {};\n(-a, b) => {};\n(a, -b) => {};\n{} => {};\na++ => {};\n(a++) => {};\n(a++, b) => {};\n(a, b++) => {};\n[] => {};\n(foo ? bar : baz) => {};\n(a, foo ? bar : baz) => {};\n(foo ? bar : baz, a) => {};\n(a.b, c) => {};\n(c, a.b) => {};\n(a['b'], c) => {};\n(c, a['b']) => {};\n(...a = b) => b;\n\n(...rest - a) => b;\n(a, ...b - 10) => b;\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 1835
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Statement expected - start: 0, end: 2
@{x2716}@ Statement expected - start: 5, end: 8
@{x2716}@ Expression expected - start: 15, end: 16
@{x2716}@ Statement expected - start: 16, end: 19
@{x2716}@ Statement expected - start: 23, end: 25
@{x2716}@ Statement expected - start: 25, end: 28
@{x2716}@ Statement expected - start: 32, end: 34
@{x2716}@ Statement expected - start: 34, end: 37
@{x2716}@ Expression expected - start: 43, end: 44
@{x2716}@ Expression expected - start: 44, end: 45
@{x2716}@ Statement expected - start: 45, end: 48
@{x2716}@ A return statement can only be used within a function_body - start: 52, end: 59
@{x2716}@ Expression expected - start: 59, end: 62
@{x2716}@ Statement expected - start: 59, end: 62
@{x2716}@ Statement expected - start: 81, end: 82
@{x2716}@ Statement expected - start: 85, end: 86
@{x2716}@ Statement expected - start: 87, end: 204
@{x2716}@ Statement expected - start: 205, end: 207
@{x2716}@ Statement expected - start: 207, end: 210
@{x2716}@ Expression expected - start: 220, end: 221
@{x2716}@ Expression expected - start: 225, end: 226
@{x2716}@ Expression expected - start: 300, end: 301
@{x2716}@ Statement expected - start: 301, end: 304
@{x2716}@ Statement expected - start: 313, end: 316
@{x2716}@ Statement expected - start: 328, end: 331
@{x2716}@ Statement expected - start: 343, end: 346
@{x2716}@ Statement expected - start: 361, end: 364
@{x2716}@ Statement expected - start: 379, end: 382
@{x2716}@ Statement expected - start: 397, end: 400
@{x2716}@ Statement expected - start: 1306, end: 1309
@{x2716}@ Statement expected - start: 1318, end: 1321
@{x2716}@ Statement expected - start: 1333, end: 1336
@{x2716}@ Expression expected - start: 1343, end: 1346
@{x2716}@ Expression expected - start: 1343, end: 1346
@{x2716}@ Statement expected - start: 1343, end: 1346
@{x2716}@ Expression expected - start: 1352, end: 1354
@{x2716}@ Expression expected - start: 1354, end: 1355
@{x2716}@ Expression expected - start: 1355, end: 1358
@{x2716}@ Statement expected - start: 1355, end: 1358
@{x2716}@ Expression expected - start: 1369, end: 1370
@{x2716}@ Expression expected - start: 1370, end: 1373
@{x2716}@ Statement expected - start: 1370, end: 1373
@{x2716}@ Statement expected - start: 1398, end: 1401
@{x2716}@ The left hand side of the arrow is not destructible  - start: 1416, end: 1419
@{x2716}@ Statement expected - start: 1434, end: 1437
@{x2716}@ Statement expected - start: 1445, end: 1448
@{x2716}@ Statement expected - start: 1458, end: 1461
@{x2716}@ Unterminated string literal - start: 1467, end: 1480
@{x2716}@ Statement expected - start: 1489, end: 1492
@{x2716}@ Statement expected - start: 1511, end: 1514
@{x2716}@ Statement expected - start: 1526, end: 1529
@{x2716}@ Statement expected - start: 1540, end: 1541
@{x2716}@ Statement expected - start: 1541, end: 1544
@{x2716}@ Statement expected - start: 1551, end: 1554
@{x2716}@ Statement expected - start: 1562, end: 1565
@{x2716}@ Statement expected - start: 1575, end: 1578
@{x2716}@ The left hand side of the arrow is not destructible  - start: 1591, end: 1594
@{x2716}@ Statement expected - start: 1607, end: 1610
@{x2716}@ Statement expected - start: 1617, end: 1620
@{x2716}@ Statement expected - start: 1642, end: 1645
@{x2716}@ Statement expected - start: 1670, end: 1673
@{x2716}@ The left hand side of the arrow is not destructible  - start: 1698, end: 1701
@{x2716}@ The left hand side of the arrow is not destructible  - start: 1714, end: 1717
@{x2716}@ Statement expected - start: 1730, end: 1733
@{x2716}@ The left hand side of the arrow is not destructible  - start: 1749, end: 1752
@{x2716}@ Statement expected - start: 1768, end: 1771
@{x2716}@ A rest element cannot have an initializer - start: 1781, end: 1783
@{x2716}@ Statement expected - start: 1806, end: 1807
@{x2716}@ Statement expected - start: 1807, end: 1810
@{x2716}@ Statement expected - start: 1827, end: 1828
@{x2716}@ Statement expected - start: 1828, end: 1831

```

