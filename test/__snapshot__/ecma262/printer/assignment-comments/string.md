# Kataw parser test case

## Input

`````js
fnString =
  // Comment
  'some' + 'long' + 'string';

fnString =
  // Comment

  'some' + 'long' + 'string';

fnString =

  // Comment

  'some' + 'long' + 'string';

fnString =
  /* comment */
  'some' + 'long' + 'string';

fnString =
  /**
   * multi-line
   */
  'some' + 'long' + 'string';

fnString =
  /* inline */ 'some' + 'long' + 'string' + 'some' + 'long' + 'string' + 'some' + 'long' + 'string' + 'some' + 'long' + 'string';

fnString = // Comment0
  // Comment1
  'some' + 'long' + 'string';

fnString = // Comment
  'some' + 'long' + 'string';

fnString =
  // Comment
  'some' + 'long' + 'string';

var fnString =
  // Comment

  'some' + 'long' + 'string';

var fnString =

  // Comment

  'some' + 'long' + 'string';

var fnString =
  /* comment */
  'some' + 'long' + 'string';

var fnString =
  /**
   * multi-line
   */
  'some' + 'long' + 'string';

var fnString =
  /* inline */ 'some' + 'long' + 'string' + 'some' + 'long' + 'string' + 'some' + 'long' + 'string' + 'some' + 'long' + 'string';

var fnString = // Comment0
  // Comment1
  'some' + 'long' + 'string';

var fnString = // Comment
  'some' + 'long' + 'string';
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "fnString",
                    "rawText": "fnString",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 8
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 10
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 201392131,
                            "text": "some",
                            "rawText": "'some'",
                            "flags": 4194401,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 32
                        },
                        "operatorToken": {
                            "kind": 99634,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 34
                        },
                        "right": {
                            "kind": 201392131,
                            "text": "long",
                            "rawText": "'long'",
                            "flags": 4194400,
                            "transformFlags": 0,
                            "start": 34,
                            "end": 41
                        },
                        "flags": 4194401,
                        "transformFlags": 1024,
                        "start": 10,
                        "end": 41
                    },
                    "operatorToken": {
                        "kind": 99634,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 41,
                        "end": 43
                    },
                    "right": {
                        "kind": 201392131,
                        "text": "string",
                        "rawText": "'string'",
                        "flags": 4194400,
                        "transformFlags": 0,
                        "start": 43,
                        "end": 52
                    },
                    "flags": 4194401,
                    "transformFlags": 1024,
                    "start": 10,
                    "end": 52
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 52
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 53
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "fnString",
                    "rawText": "fnString",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 53,
                    "end": 63
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 63,
                    "end": 65
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 201392131,
                            "text": "some",
                            "rawText": "'some'",
                            "flags": 4194401,
                            "transformFlags": 0,
                            "start": 65,
                            "end": 88
                        },
                        "operatorToken": {
                            "kind": 99634,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 88,
                            "end": 90
                        },
                        "right": {
                            "kind": 201392131,
                            "text": "long",
                            "rawText": "'long'",
                            "flags": 4194400,
                            "transformFlags": 0,
                            "start": 90,
                            "end": 97
                        },
                        "flags": 4194401,
                        "transformFlags": 1024,
                        "start": 65,
                        "end": 97
                    },
                    "operatorToken": {
                        "kind": 99634,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 97,
                        "end": 99
                    },
                    "right": {
                        "kind": 201392131,
                        "text": "string",
                        "rawText": "'string'",
                        "flags": 4194400,
                        "transformFlags": 0,
                        "start": 99,
                        "end": 108
                    },
                    "flags": 4194401,
                    "transformFlags": 1024,
                    "start": 65,
                    "end": 108
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 53,
                "end": 108
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 53,
            "end": 109
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "fnString",
                    "rawText": "fnString",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 109,
                    "end": 119
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 119,
                    "end": 121
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 201392131,
                            "text": "some",
                            "rawText": "'some'",
                            "flags": 4194401,
                            "transformFlags": 0,
                            "start": 121,
                            "end": 145
                        },
                        "operatorToken": {
                            "kind": 99634,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 145,
                            "end": 147
                        },
                        "right": {
                            "kind": 201392131,
                            "text": "long",
                            "rawText": "'long'",
                            "flags": 4194400,
                            "transformFlags": 0,
                            "start": 147,
                            "end": 154
                        },
                        "flags": 4194401,
                        "transformFlags": 1024,
                        "start": 121,
                        "end": 154
                    },
                    "operatorToken": {
                        "kind": 99634,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 154,
                        "end": 156
                    },
                    "right": {
                        "kind": 201392131,
                        "text": "string",
                        "rawText": "'string'",
                        "flags": 4194400,
                        "transformFlags": 0,
                        "start": 156,
                        "end": 165
                    },
                    "flags": 4194401,
                    "transformFlags": 1024,
                    "start": 121,
                    "end": 165
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 109,
                "end": 165
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 109,
            "end": 166
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "fnString",
                    "rawText": "fnString",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 166,
                    "end": 176
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 176,
                    "end": 178
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 201392131,
                            "text": "some",
                            "rawText": "'some'",
                            "flags": 4194401,
                            "transformFlags": 0,
                            "start": 178,
                            "end": 203
                        },
                        "operatorToken": {
                            "kind": 99634,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 203,
                            "end": 205
                        },
                        "right": {
                            "kind": 201392131,
                            "text": "long",
                            "rawText": "'long'",
                            "flags": 4194400,
                            "transformFlags": 0,
                            "start": 205,
                            "end": 212
                        },
                        "flags": 4194401,
                        "transformFlags": 1024,
                        "start": 178,
                        "end": 212
                    },
                    "operatorToken": {
                        "kind": 99634,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 212,
                        "end": 214
                    },
                    "right": {
                        "kind": 201392131,
                        "text": "string",
                        "rawText": "'string'",
                        "flags": 4194400,
                        "transformFlags": 0,
                        "start": 214,
                        "end": 223
                    },
                    "flags": 4194401,
                    "transformFlags": 1024,
                    "start": 178,
                    "end": 223
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 166,
                "end": 223
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 166,
            "end": 224
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "fnString",
                    "rawText": "fnString",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 224,
                    "end": 234
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 234,
                    "end": 236
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 201392131,
                            "text": "some",
                            "rawText": "'some'",
                            "flags": 4194401,
                            "transformFlags": 0,
                            "start": 236,
                            "end": 273
                        },
                        "operatorToken": {
                            "kind": 99634,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 273,
                            "end": 275
                        },
                        "right": {
                            "kind": 201392131,
                            "text": "long",
                            "rawText": "'long'",
                            "flags": 4194400,
                            "transformFlags": 0,
                            "start": 275,
                            "end": 282
                        },
                        "flags": 4194401,
                        "transformFlags": 1024,
                        "start": 236,
                        "end": 282
                    },
                    "operatorToken": {
                        "kind": 99634,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 282,
                        "end": 284
                    },
                    "right": {
                        "kind": 201392131,
                        "text": "string",
                        "rawText": "'string'",
                        "flags": 4194400,
                        "transformFlags": 0,
                        "start": 284,
                        "end": 293
                    },
                    "flags": 4194401,
                    "transformFlags": 1024,
                    "start": 236,
                    "end": 293
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 224,
                "end": 293
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 224,
            "end": 294
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "fnString",
                    "rawText": "fnString",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 294,
                    "end": 304
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 304,
                    "end": 306
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 201392131,
                                                                "text": "some",
                                                                "rawText": "'some'",
                                                                "flags": 4194401,
                                                                "transformFlags": 0,
                                                                "start": 306,
                                                                "end": 328
                                                            },
                                                            "operatorToken": {
                                                                "kind": 99634,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 328,
                                                                "end": 330
                                                            },
                                                            "right": {
                                                                "kind": 201392131,
                                                                "text": "long",
                                                                "rawText": "'long'",
                                                                "flags": 4194400,
                                                                "transformFlags": 0,
                                                                "start": 330,
                                                                "end": 337
                                                            },
                                                            "flags": 4194401,
                                                            "transformFlags": 1024,
                                                            "start": 306,
                                                            "end": 337
                                                        },
                                                        "operatorToken": {
                                                            "kind": 99634,
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 337,
                                                            "end": 339
                                                        },
                                                        "right": {
                                                            "kind": 201392131,
                                                            "text": "string",
                                                            "rawText": "'string'",
                                                            "flags": 4194400,
                                                            "transformFlags": 0,
                                                            "start": 339,
                                                            "end": 348
                                                        },
                                                        "flags": 4194401,
                                                        "transformFlags": 1024,
                                                        "start": 306,
                                                        "end": 348
                                                    },
                                                    "operatorToken": {
                                                        "kind": 99634,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 348,
                                                        "end": 350
                                                    },
                                                    "right": {
                                                        "kind": 201392131,
                                                        "text": "some",
                                                        "rawText": "'some'",
                                                        "flags": 4194400,
                                                        "transformFlags": 0,
                                                        "start": 350,
                                                        "end": 357
                                                    },
                                                    "flags": 4194401,
                                                    "transformFlags": 1024,
                                                    "start": 306,
                                                    "end": 357
                                                },
                                                "operatorToken": {
                                                    "kind": 99634,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 357,
                                                    "end": 359
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "long",
                                                    "rawText": "'long'",
                                                    "flags": 4194400,
                                                    "transformFlags": 0,
                                                    "start": 359,
                                                    "end": 366
                                                },
                                                "flags": 4194401,
                                                "transformFlags": 1024,
                                                "start": 306,
                                                "end": 366
                                            },
                                            "operatorToken": {
                                                "kind": 99634,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 366,
                                                "end": 368
                                            },
                                            "right": {
                                                "kind": 201392131,
                                                "text": "string",
                                                "rawText": "'string'",
                                                "flags": 4194400,
                                                "transformFlags": 0,
                                                "start": 368,
                                                "end": 377
                                            },
                                            "flags": 4194401,
                                            "transformFlags": 1024,
                                            "start": 306,
                                            "end": 377
                                        },
                                        "operatorToken": {
                                            "kind": 99634,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 377,
                                            "end": 379
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "some",
                                            "rawText": "'some'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 379,
                                            "end": 386
                                        },
                                        "flags": 4194401,
                                        "transformFlags": 1024,
                                        "start": 306,
                                        "end": 386
                                    },
                                    "operatorToken": {
                                        "kind": 99634,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 386,
                                        "end": 388
                                    },
                                    "right": {
                                        "kind": 201392131,
                                        "text": "long",
                                        "rawText": "'long'",
                                        "flags": 4194400,
                                        "transformFlags": 0,
                                        "start": 388,
                                        "end": 395
                                    },
                                    "flags": 4194401,
                                    "transformFlags": 1024,
                                    "start": 306,
                                    "end": 395
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 395,
                                    "end": 397
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "string",
                                    "rawText": "'string'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 397,
                                    "end": 406
                                },
                                "flags": 4194401,
                                "transformFlags": 1024,
                                "start": 306,
                                "end": 406
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 406,
                                "end": 408
                            },
                            "right": {
                                "kind": 201392131,
                                "text": "some",
                                "rawText": "'some'",
                                "flags": 4194400,
                                "transformFlags": 0,
                                "start": 408,
                                "end": 415
                            },
                            "flags": 4194401,
                            "transformFlags": 1024,
                            "start": 306,
                            "end": 415
                        },
                        "operatorToken": {
                            "kind": 99634,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 415,
                            "end": 417
                        },
                        "right": {
                            "kind": 201392131,
                            "text": "long",
                            "rawText": "'long'",
                            "flags": 4194400,
                            "transformFlags": 0,
                            "start": 417,
                            "end": 424
                        },
                        "flags": 4194401,
                        "transformFlags": 1024,
                        "start": 306,
                        "end": 424
                    },
                    "operatorToken": {
                        "kind": 99634,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 424,
                        "end": 426
                    },
                    "right": {
                        "kind": 201392131,
                        "text": "string",
                        "rawText": "'string'",
                        "flags": 4194400,
                        "transformFlags": 0,
                        "start": 426,
                        "end": 435
                    },
                    "flags": 4194401,
                    "transformFlags": 1024,
                    "start": 306,
                    "end": 435
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 294,
                "end": 435
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 294,
            "end": 436
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "fnString",
                    "rawText": "fnString",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 436,
                    "end": 446
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 446,
                    "end": 448
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 201392131,
                            "text": "some",
                            "rawText": "'some'",
                            "flags": 4194401,
                            "transformFlags": 0,
                            "start": 448,
                            "end": 483
                        },
                        "operatorToken": {
                            "kind": 99634,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 483,
                            "end": 485
                        },
                        "right": {
                            "kind": 201392131,
                            "text": "long",
                            "rawText": "'long'",
                            "flags": 4194400,
                            "transformFlags": 0,
                            "start": 485,
                            "end": 492
                        },
                        "flags": 4194401,
                        "transformFlags": 1024,
                        "start": 448,
                        "end": 492
                    },
                    "operatorToken": {
                        "kind": 99634,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 492,
                        "end": 494
                    },
                    "right": {
                        "kind": 201392131,
                        "text": "string",
                        "rawText": "'string'",
                        "flags": 4194400,
                        "transformFlags": 0,
                        "start": 494,
                        "end": 503
                    },
                    "flags": 4194401,
                    "transformFlags": 1024,
                    "start": 448,
                    "end": 503
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 436,
                "end": 503
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 436,
            "end": 504
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "fnString",
                    "rawText": "fnString",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 504,
                    "end": 514
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 514,
                    "end": 516
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 201392131,
                            "text": "some",
                            "rawText": "'some'",
                            "flags": 4194401,
                            "transformFlags": 0,
                            "start": 516,
                            "end": 536
                        },
                        "operatorToken": {
                            "kind": 99634,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 536,
                            "end": 538
                        },
                        "right": {
                            "kind": 201392131,
                            "text": "long",
                            "rawText": "'long'",
                            "flags": 4194400,
                            "transformFlags": 0,
                            "start": 538,
                            "end": 545
                        },
                        "flags": 4194401,
                        "transformFlags": 1024,
                        "start": 516,
                        "end": 545
                    },
                    "operatorToken": {
                        "kind": 99634,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 545,
                        "end": 547
                    },
                    "right": {
                        "kind": 201392131,
                        "text": "string",
                        "rawText": "'string'",
                        "flags": 4194400,
                        "transformFlags": 0,
                        "start": 547,
                        "end": 556
                    },
                    "flags": 4194401,
                    "transformFlags": 1024,
                    "start": 516,
                    "end": 556
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 504,
                "end": 556
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 504,
            "end": 557
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "fnString",
                    "rawText": "fnString",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 557,
                    "end": 567
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 567,
                    "end": 569
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 201392131,
                            "text": "some",
                            "rawText": "'some'",
                            "flags": 4194401,
                            "transformFlags": 0,
                            "start": 569,
                            "end": 591
                        },
                        "operatorToken": {
                            "kind": 99634,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 591,
                            "end": 593
                        },
                        "right": {
                            "kind": 201392131,
                            "text": "long",
                            "rawText": "'long'",
                            "flags": 4194400,
                            "transformFlags": 0,
                            "start": 593,
                            "end": 600
                        },
                        "flags": 4194401,
                        "transformFlags": 1024,
                        "start": 569,
                        "end": 600
                    },
                    "operatorToken": {
                        "kind": 99634,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 600,
                        "end": 602
                    },
                    "right": {
                        "kind": 201392131,
                        "text": "string",
                        "rawText": "'string'",
                        "flags": 4194400,
                        "transformFlags": 0,
                        "start": 602,
                        "end": 611
                    },
                    "flags": 4194401,
                    "transformFlags": 1024,
                    "start": 569,
                    "end": 611
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 557,
                "end": 611
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 557,
            "end": 612
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "transformFlags": 0,
                "start": 612,
                "end": 617
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "fnString",
                            "rawText": "fnString",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 617,
                            "end": 626
                        },
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 201392131,
                                    "text": "some",
                                    "rawText": "'some'",
                                    "flags": 4194401,
                                    "transformFlags": 0,
                                    "start": 628,
                                    "end": 651
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 651,
                                    "end": 653
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "long",
                                    "rawText": "'long'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 653,
                                    "end": 660
                                },
                                "flags": 4194401,
                                "transformFlags": 1024,
                                "start": 628,
                                "end": 660
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 660,
                                "end": 662
                            },
                            "right": {
                                "kind": 201392131,
                                "text": "string",
                                "rawText": "'string'",
                                "flags": 4194400,
                                "transformFlags": 0,
                                "start": 662,
                                "end": 671
                            },
                            "flags": 4194401,
                            "transformFlags": 1024,
                            "start": 628,
                            "end": 671
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 617,
                        "end": 671
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 617,
                "end": 671
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 612,
            "end": 672
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "transformFlags": 0,
                "start": 672,
                "end": 677
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "fnString",
                            "rawText": "fnString",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 677,
                            "end": 686
                        },
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 201392131,
                                    "text": "some",
                                    "rawText": "'some'",
                                    "flags": 4194401,
                                    "transformFlags": 0,
                                    "start": 688,
                                    "end": 712
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 712,
                                    "end": 714
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "long",
                                    "rawText": "'long'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 714,
                                    "end": 721
                                },
                                "flags": 4194401,
                                "transformFlags": 1024,
                                "start": 688,
                                "end": 721
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 721,
                                "end": 723
                            },
                            "right": {
                                "kind": 201392131,
                                "text": "string",
                                "rawText": "'string'",
                                "flags": 4194400,
                                "transformFlags": 0,
                                "start": 723,
                                "end": 732
                            },
                            "flags": 4194401,
                            "transformFlags": 1024,
                            "start": 688,
                            "end": 732
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 677,
                        "end": 732
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 677,
                "end": 732
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 672,
            "end": 733
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "transformFlags": 0,
                "start": 733,
                "end": 738
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "fnString",
                            "rawText": "fnString",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 738,
                            "end": 747
                        },
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 201392131,
                                    "text": "some",
                                    "rawText": "'some'",
                                    "flags": 4194401,
                                    "transformFlags": 0,
                                    "start": 749,
                                    "end": 774
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 774,
                                    "end": 776
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "long",
                                    "rawText": "'long'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 776,
                                    "end": 783
                                },
                                "flags": 4194401,
                                "transformFlags": 1024,
                                "start": 749,
                                "end": 783
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 783,
                                "end": 785
                            },
                            "right": {
                                "kind": 201392131,
                                "text": "string",
                                "rawText": "'string'",
                                "flags": 4194400,
                                "transformFlags": 0,
                                "start": 785,
                                "end": 794
                            },
                            "flags": 4194401,
                            "transformFlags": 1024,
                            "start": 749,
                            "end": 794
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 738,
                        "end": 794
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 738,
                "end": 794
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 733,
            "end": 795
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "transformFlags": 0,
                "start": 795,
                "end": 800
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "fnString",
                            "rawText": "fnString",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 800,
                            "end": 809
                        },
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 201392131,
                                    "text": "some",
                                    "rawText": "'some'",
                                    "flags": 4194401,
                                    "transformFlags": 0,
                                    "start": 811,
                                    "end": 848
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 848,
                                    "end": 850
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "long",
                                    "rawText": "'long'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 850,
                                    "end": 857
                                },
                                "flags": 4194401,
                                "transformFlags": 1024,
                                "start": 811,
                                "end": 857
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 857,
                                "end": 859
                            },
                            "right": {
                                "kind": 201392131,
                                "text": "string",
                                "rawText": "'string'",
                                "flags": 4194400,
                                "transformFlags": 0,
                                "start": 859,
                                "end": 868
                            },
                            "flags": 4194401,
                            "transformFlags": 1024,
                            "start": 811,
                            "end": 868
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 800,
                        "end": 868
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 800,
                "end": 868
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 795,
            "end": 869
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "transformFlags": 0,
                "start": 869,
                "end": 874
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "fnString",
                            "rawText": "fnString",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 874,
                            "end": 883
                        },
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 198,
                                                                "left": {
                                                                    "kind": 198,
                                                                    "left": {
                                                                        "kind": 201392131,
                                                                        "text": "some",
                                                                        "rawText": "'some'",
                                                                        "flags": 4194401,
                                                                        "transformFlags": 0,
                                                                        "start": 885,
                                                                        "end": 907
                                                                    },
                                                                    "operatorToken": {
                                                                        "kind": 99634,
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 907,
                                                                        "end": 909
                                                                    },
                                                                    "right": {
                                                                        "kind": 201392131,
                                                                        "text": "long",
                                                                        "rawText": "'long'",
                                                                        "flags": 4194400,
                                                                        "transformFlags": 0,
                                                                        "start": 909,
                                                                        "end": 916
                                                                    },
                                                                    "flags": 4194401,
                                                                    "transformFlags": 1024,
                                                                    "start": 885,
                                                                    "end": 916
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 99634,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 916,
                                                                    "end": 918
                                                                },
                                                                "right": {
                                                                    "kind": 201392131,
                                                                    "text": "string",
                                                                    "rawText": "'string'",
                                                                    "flags": 4194400,
                                                                    "transformFlags": 0,
                                                                    "start": 918,
                                                                    "end": 927
                                                                },
                                                                "flags": 4194401,
                                                                "transformFlags": 1024,
                                                                "start": 885,
                                                                "end": 927
                                                            },
                                                            "operatorToken": {
                                                                "kind": 99634,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 927,
                                                                "end": 929
                                                            },
                                                            "right": {
                                                                "kind": 201392131,
                                                                "text": "some",
                                                                "rawText": "'some'",
                                                                "flags": 4194400,
                                                                "transformFlags": 0,
                                                                "start": 929,
                                                                "end": 936
                                                            },
                                                            "flags": 4194401,
                                                            "transformFlags": 1024,
                                                            "start": 885,
                                                            "end": 936
                                                        },
                                                        "operatorToken": {
                                                            "kind": 99634,
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 936,
                                                            "end": 938
                                                        },
                                                        "right": {
                                                            "kind": 201392131,
                                                            "text": "long",
                                                            "rawText": "'long'",
                                                            "flags": 4194400,
                                                            "transformFlags": 0,
                                                            "start": 938,
                                                            "end": 945
                                                        },
                                                        "flags": 4194401,
                                                        "transformFlags": 1024,
                                                        "start": 885,
                                                        "end": 945
                                                    },
                                                    "operatorToken": {
                                                        "kind": 99634,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 945,
                                                        "end": 947
                                                    },
                                                    "right": {
                                                        "kind": 201392131,
                                                        "text": "string",
                                                        "rawText": "'string'",
                                                        "flags": 4194400,
                                                        "transformFlags": 0,
                                                        "start": 947,
                                                        "end": 956
                                                    },
                                                    "flags": 4194401,
                                                    "transformFlags": 1024,
                                                    "start": 885,
                                                    "end": 956
                                                },
                                                "operatorToken": {
                                                    "kind": 99634,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 956,
                                                    "end": 958
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "some",
                                                    "rawText": "'some'",
                                                    "flags": 4194400,
                                                    "transformFlags": 0,
                                                    "start": 958,
                                                    "end": 965
                                                },
                                                "flags": 4194401,
                                                "transformFlags": 1024,
                                                "start": 885,
                                                "end": 965
                                            },
                                            "operatorToken": {
                                                "kind": 99634,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 965,
                                                "end": 967
                                            },
                                            "right": {
                                                "kind": 201392131,
                                                "text": "long",
                                                "rawText": "'long'",
                                                "flags": 4194400,
                                                "transformFlags": 0,
                                                "start": 967,
                                                "end": 974
                                            },
                                            "flags": 4194401,
                                            "transformFlags": 1024,
                                            "start": 885,
                                            "end": 974
                                        },
                                        "operatorToken": {
                                            "kind": 99634,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 974,
                                            "end": 976
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "string",
                                            "rawText": "'string'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 976,
                                            "end": 985
                                        },
                                        "flags": 4194401,
                                        "transformFlags": 1024,
                                        "start": 885,
                                        "end": 985
                                    },
                                    "operatorToken": {
                                        "kind": 99634,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 985,
                                        "end": 987
                                    },
                                    "right": {
                                        "kind": 201392131,
                                        "text": "some",
                                        "rawText": "'some'",
                                        "flags": 4194400,
                                        "transformFlags": 0,
                                        "start": 987,
                                        "end": 994
                                    },
                                    "flags": 4194401,
                                    "transformFlags": 1024,
                                    "start": 885,
                                    "end": 994
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 994,
                                    "end": 996
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "long",
                                    "rawText": "'long'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 996,
                                    "end": 1003
                                },
                                "flags": 4194401,
                                "transformFlags": 1024,
                                "start": 885,
                                "end": 1003
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1003,
                                "end": 1005
                            },
                            "right": {
                                "kind": 201392131,
                                "text": "string",
                                "rawText": "'string'",
                                "flags": 4194400,
                                "transformFlags": 0,
                                "start": 1005,
                                "end": 1014
                            },
                            "flags": 4194401,
                            "transformFlags": 1024,
                            "start": 885,
                            "end": 1014
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 874,
                        "end": 1014
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 874,
                "end": 1014
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 869,
            "end": 1015
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "transformFlags": 0,
                "start": 1015,
                "end": 1020
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "fnString",
                            "rawText": "fnString",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1020,
                            "end": 1029
                        },
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 201392131,
                                    "text": "some",
                                    "rawText": "'some'",
                                    "flags": 4194401,
                                    "transformFlags": 0,
                                    "start": 1031,
                                    "end": 1066
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1066,
                                    "end": 1068
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "long",
                                    "rawText": "'long'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 1068,
                                    "end": 1075
                                },
                                "flags": 4194401,
                                "transformFlags": 1024,
                                "start": 1031,
                                "end": 1075
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1075,
                                "end": 1077
                            },
                            "right": {
                                "kind": 201392131,
                                "text": "string",
                                "rawText": "'string'",
                                "flags": 4194400,
                                "transformFlags": 0,
                                "start": 1077,
                                "end": 1086
                            },
                            "flags": 4194401,
                            "transformFlags": 1024,
                            "start": 1031,
                            "end": 1086
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 1020,
                        "end": 1086
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1020,
                "end": 1086
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 1015,
            "end": 1087
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "transformFlags": 0,
                "start": 1087,
                "end": 1092
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "fnString",
                            "rawText": "fnString",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1092,
                            "end": 1101
                        },
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 201392131,
                                    "text": "some",
                                    "rawText": "'some'",
                                    "flags": 4194401,
                                    "transformFlags": 0,
                                    "start": 1103,
                                    "end": 1123
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1123,
                                    "end": 1125
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "long",
                                    "rawText": "'long'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 1125,
                                    "end": 1132
                                },
                                "flags": 4194401,
                                "transformFlags": 1024,
                                "start": 1103,
                                "end": 1132
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1132,
                                "end": 1134
                            },
                            "right": {
                                "kind": 201392131,
                                "text": "string",
                                "rawText": "'string'",
                                "flags": 4194400,
                                "transformFlags": 0,
                                "start": 1134,
                                "end": 1143
                            },
                            "flags": 4194401,
                            "transformFlags": 1024,
                            "start": 1103,
                            "end": 1143
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 1092,
                        "end": 1143
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1092,
                "end": 1143
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 1087,
            "end": 1144
        }
    ],
    "isModule": false,
    "source": "fnString =\n  // Comment\n  'some' + 'long' + 'string';\n\nfnString =\n  // Comment\n\n  'some' + 'long' + 'string';\n\nfnString =\n\n  // Comment\n\n  'some' + 'long' + 'string';\n\nfnString =\n  /* comment */\n  'some' + 'long' + 'string';\n\nfnString =\n  /**\n   * multi-line\n   */\n  'some' + 'long' + 'string';\n\nfnString =\n  /* inline */ 'some' + 'long' + 'string' + 'some' + 'long' + 'string' + 'some' + 'long' + 'string' + 'some' + 'long' + 'string';\n\nfnString = // Comment0\n  // Comment1\n  'some' + 'long' + 'string';\n\nfnString = // Comment\n  'some' + 'long' + 'string';\n\nfnString =\n  // Comment\n  'some' + 'long' + 'string';\n\nvar fnString =\n  // Comment\n\n  'some' + 'long' + 'string';\n\nvar fnString =\n\n  // Comment\n\n  'some' + 'long' + 'string';\n\nvar fnString =\n  /* comment */\n  'some' + 'long' + 'string';\n\nvar fnString =\n  /**\n   * multi-line\n   */\n  'some' + 'long' + 'string';\n\nvar fnString =\n  /* inline */ 'some' + 'long' + 'string' + 'some' + 'long' + 'string' + 'some' + 'long' + 'string' + 'some' + 'long' + 'string';\n\nvar fnString = // Comment0\n  // Comment1\n  'some' + 'long' + 'string';\n\nvar fnString = // Comment\n  'some' + 'long' + 'string';",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 1144
}
```

### Printed

```javascript

fnString = '\'some\'' + '\'long\'' + '\'string\'';
fnString = '\'some\'' + '\'long\'' + '\'string\'';

fnString = '\'some\'' + '\'long\'' + '\'string\'';

fnString = '\'some\'' + '\'long\'' + '\'string\'';

fnString = '\'some\'' + '\'long\'' + '\'string\'';

fnString =

    '\'some\'' +
    '\'long\'' +
    '\'string\'' +
    '\'some\'' +
    '\'long\'' +
    '\'string\'' +
    '\'some\'' +
    '\'long\'' +
    '\'string\'' +
    '\'some\'' +
    '\'long\'' +
    '\'string\''
  ;

fnString = '\'some\'' + '\'long\'' + '\'string\'';

fnString = '\'some\'' + '\'long\'' + '\'string\'';

fnString = '\'some\'' + '\'long\'' + '\'string\'';

var fnString = '\'some\'' + '\'long\'' + '\'string\'';

var fnString = '\'some\'' + '\'long\'' + '\'string\'';

var fnString = '\'some\'' + '\'long\'' + '\'string\'';

var fnString = '\'some\'' + '\'long\'' + '\'string\'';

var fnString =

      '\'some\'' +
      '\'long\'' +
      '\'string\'' +
      '\'some\'' +
      '\'long\'' +
      '\'string\'' +
      '\'some\'' +
      '\'long\'' +
      '\'string\'' +
      '\'some\'' +
      '\'long\'' +
      '\'string\''
    ;

var fnString = '\'some\'' + '\'long\'' + '\'string\'';

var fnString = '\'some\'' + '\'long\'' + '\'string\'';

```

### Diagnostics

```javascript
✔ No errors
```

