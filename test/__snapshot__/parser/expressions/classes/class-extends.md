# Kataw parser test case

## Input

`````js
(class name {});
(class extends F {});
(class name extends F {});
(class extends (F, G) {});
(class name extends (F, G) {});
(class extends class {} {});
(class name extends class {} {});
(class extends class base {} {});
(class name extends class base {} {});

'use strict'; { class name extends F {} };
'use strict'; { class name extends (F, G) {} };
'use strict'; { class name extends class {} {} };
'use strict'; { class name extends class base {} {} };
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
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 0,
                        "start": 1,
                        "end": 6
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "name",
                        "rawText": "name",
                        "flags": 96,
                        "start": 6,
                        "end": 11
                    },
                    "typeParameters": null,
                    "members": {
                        "kind": 277,
                        "classHeritage": null,
                        "elements": [],
                        "flags": 32,
                        "start": 13,
                        "end": 14
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 14
                },
                "flags": 32,
                "start": 0,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 0,
                        "start": 18,
                        "end": 23
                    },
                    "name": null,
                    "typeParameters": null,
                    "members": {
                        "kind": 277,
                        "classHeritage": null,
                        "elements": [],
                        "flags": 32,
                        "start": 18,
                        "end": 18
                    },
                    "flags": 32,
                    "start": 18,
                    "end": 23
                },
                "flags": 32,
                "start": 16,
                "end": 23
            },
            "flags": 16,
            "start": 16,
            "end": 23
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "F",
                "rawText": "F",
                "flags": 96,
                "start": 31,
                "end": 33
            },
            "flags": 16,
            "start": 31,
            "end": 33
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 35,
                "end": 35
            },
            "flags": 16,
            "start": 33,
            "end": 36
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 37,
            "end": 38
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 0,
                        "start": 40,
                        "end": 45
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "name",
                        "rawText": "name",
                        "flags": 96,
                        "start": 45,
                        "end": 50
                    },
                    "typeParameters": null,
                    "members": {
                        "kind": 277,
                        "classHeritage": null,
                        "elements": [],
                        "flags": 32,
                        "start": 40,
                        "end": 40
                    },
                    "flags": 32,
                    "start": 40,
                    "end": 50
                },
                "flags": 32,
                "start": 38,
                "end": 50
            },
            "flags": 16,
            "start": 38,
            "end": 50
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "F",
                "rawText": "F",
                "flags": 96,
                "start": 58,
                "end": 60
            },
            "flags": 16,
            "start": 58,
            "end": 60
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 62,
                "end": 62
            },
            "flags": 16,
            "start": 60,
            "end": 63
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 64,
            "end": 65
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 0,
                        "start": 67,
                        "end": 72
                    },
                    "name": null,
                    "typeParameters": null,
                    "members": {
                        "kind": 277,
                        "classHeritage": null,
                        "elements": [],
                        "flags": 32,
                        "start": 67,
                        "end": 67
                    },
                    "flags": 32,
                    "start": 67,
                    "end": 72
                },
                "flags": 32,
                "start": 65,
                "end": 72
            },
            "flags": 16,
            "start": 65,
            "end": 72
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
                            "text": "F",
                            "rawText": "F",
                            "flags": 96,
                            "start": 82,
                            "end": 83
                        },
                        {
                            "kind": 134299649,
                            "text": "G",
                            "rawText": "G",
                            "flags": 96,
                            "start": 84,
                            "end": 86
                        }
                    ],
                    "flags": 32,
                    "start": 80,
                    "end": 87
                },
                "flags": 32,
                "start": 80,
                "end": 87
            },
            "flags": 16,
            "start": 80,
            "end": 87
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 89,
                "end": 89
            },
            "flags": 16,
            "start": 87,
            "end": 90
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 91,
            "end": 92
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 0,
                        "start": 94,
                        "end": 99
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "name",
                        "rawText": "name",
                        "flags": 96,
                        "start": 99,
                        "end": 104
                    },
                    "typeParameters": null,
                    "members": {
                        "kind": 277,
                        "classHeritage": null,
                        "elements": [],
                        "flags": 32,
                        "start": 94,
                        "end": 94
                    },
                    "flags": 32,
                    "start": 94,
                    "end": 104
                },
                "flags": 32,
                "start": 92,
                "end": 104
            },
            "flags": 16,
            "start": 92,
            "end": 104
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
                            "text": "F",
                            "rawText": "F",
                            "flags": 96,
                            "start": 114,
                            "end": 115
                        },
                        {
                            "kind": 134299649,
                            "text": "G",
                            "rawText": "G",
                            "flags": 96,
                            "start": 116,
                            "end": 118
                        }
                    ],
                    "flags": 32,
                    "start": 112,
                    "end": 119
                },
                "flags": 32,
                "start": 112,
                "end": 119
            },
            "flags": 16,
            "start": 112,
            "end": 119
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 121,
                "end": 121
            },
            "flags": 16,
            "start": 119,
            "end": 122
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 123,
            "end": 124
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 0,
                        "start": 126,
                        "end": 131
                    },
                    "name": null,
                    "typeParameters": null,
                    "members": {
                        "kind": 277,
                        "classHeritage": null,
                        "elements": [],
                        "flags": 32,
                        "start": 126,
                        "end": 126
                    },
                    "flags": 32,
                    "start": 126,
                    "end": 131
                },
                "flags": 32,
                "start": 124,
                "end": 131
            },
            "flags": 16,
            "start": 124,
            "end": 131
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 0,
                "start": 139,
                "end": 145
            },
            "name": null,
            "typeParameters": null,
            "members": {
                "kind": 277,
                "classHeritage": null,
                "elements": [],
                "flags": 32,
                "start": 147,
                "end": 148
            },
            "flags": 16,
            "start": 139,
            "end": 148
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 150,
                "end": 150
            },
            "flags": 16,
            "start": 148,
            "end": 151
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 152,
            "end": 153
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 0,
                        "start": 155,
                        "end": 160
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "name",
                        "rawText": "name",
                        "flags": 96,
                        "start": 160,
                        "end": 165
                    },
                    "typeParameters": null,
                    "members": {
                        "kind": 277,
                        "classHeritage": null,
                        "elements": [],
                        "flags": 32,
                        "start": 155,
                        "end": 155
                    },
                    "flags": 32,
                    "start": 155,
                    "end": 165
                },
                "flags": 32,
                "start": 153,
                "end": 165
            },
            "flags": 16,
            "start": 153,
            "end": 165
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 0,
                "start": 173,
                "end": 179
            },
            "name": null,
            "typeParameters": null,
            "members": {
                "kind": 277,
                "classHeritage": null,
                "elements": [],
                "flags": 32,
                "start": 181,
                "end": 182
            },
            "flags": 16,
            "start": 173,
            "end": 182
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 184,
                "end": 184
            },
            "flags": 16,
            "start": 182,
            "end": 185
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 186,
            "end": 187
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 0,
                        "start": 189,
                        "end": 194
                    },
                    "name": null,
                    "typeParameters": null,
                    "members": {
                        "kind": 277,
                        "classHeritage": null,
                        "elements": [],
                        "flags": 32,
                        "start": 189,
                        "end": 189
                    },
                    "flags": 32,
                    "start": 189,
                    "end": 194
                },
                "flags": 32,
                "start": 187,
                "end": 194
            },
            "flags": 16,
            "start": 187,
            "end": 194
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 0,
                "start": 202,
                "end": 208
            },
            "name": {
                "kind": 134299649,
                "text": "base",
                "rawText": "base",
                "flags": 96,
                "start": 208,
                "end": 213
            },
            "typeParameters": null,
            "members": {
                "kind": 277,
                "classHeritage": null,
                "elements": [],
                "flags": 32,
                "start": 215,
                "end": 216
            },
            "flags": 16,
            "start": 202,
            "end": 216
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 218,
                "end": 218
            },
            "flags": 16,
            "start": 216,
            "end": 219
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 220,
            "end": 221
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 0,
                        "start": 223,
                        "end": 228
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "name",
                        "rawText": "name",
                        "flags": 96,
                        "start": 228,
                        "end": 233
                    },
                    "typeParameters": null,
                    "members": {
                        "kind": 277,
                        "classHeritage": null,
                        "elements": [],
                        "flags": 32,
                        "start": 223,
                        "end": 223
                    },
                    "flags": 32,
                    "start": 223,
                    "end": 233
                },
                "flags": 32,
                "start": 221,
                "end": 233
            },
            "flags": 16,
            "start": 221,
            "end": 233
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 0,
                "start": 241,
                "end": 247
            },
            "name": {
                "kind": 134299649,
                "text": "base",
                "rawText": "base",
                "flags": 96,
                "start": 247,
                "end": 252
            },
            "typeParameters": null,
            "members": {
                "kind": 277,
                "classHeritage": null,
                "elements": [],
                "flags": 32,
                "start": 254,
                "end": 255
            },
            "flags": 16,
            "start": 241,
            "end": 255
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 257,
                "end": 257
            },
            "flags": 16,
            "start": 255,
            "end": 258
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 259,
            "end": 260
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "'use strict'",
                "flags": 4194401,
                "start": 260,
                "end": 274
            },
            "flags": 16,
            "start": 260,
            "end": 275
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 178,
                        "declareKeyword": null,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 0,
                            "start": 277,
                            "end": 283
                        },
                        "name": {
                            "kind": 134299649,
                            "text": "name",
                            "rawText": "name",
                            "flags": 96,
                            "start": 283,
                            "end": 288
                        },
                        "typeParameters": null,
                        "members": {
                            "kind": 277,
                            "classHeritage": null,
                            "elements": [],
                            "flags": 32,
                            "start": 277,
                            "end": 277
                        },
                        "flags": 16,
                        "start": 277,
                        "end": 288
                    }
                ],
                "flags": 16,
                "start": 277,
                "end": 288
            },
            "flags": 16,
            "start": 275,
            "end": 288
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "F",
                "rawText": "F",
                "flags": 96,
                "start": 296,
                "end": 298
            },
            "flags": 16,
            "start": 296,
            "end": 298
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 300,
                "end": 300
            },
            "flags": 16,
            "start": 298,
            "end": 301
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 303,
            "end": 304
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "'use strict'",
                "flags": 4194401,
                "start": 304,
                "end": 317
            },
            "flags": 16,
            "start": 304,
            "end": 318
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 178,
                        "declareKeyword": null,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 0,
                            "start": 320,
                            "end": 326
                        },
                        "name": {
                            "kind": 134299649,
                            "text": "name",
                            "rawText": "name",
                            "flags": 96,
                            "start": 326,
                            "end": 331
                        },
                        "typeParameters": null,
                        "members": {
                            "kind": 277,
                            "classHeritage": null,
                            "elements": [],
                            "flags": 32,
                            "start": 320,
                            "end": 320
                        },
                        "flags": 16,
                        "start": 320,
                        "end": 331
                    }
                ],
                "flags": 16,
                "start": 320,
                "end": 331
            },
            "flags": 16,
            "start": 318,
            "end": 331
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
                            "text": "F",
                            "rawText": "F",
                            "flags": 96,
                            "start": 341,
                            "end": 342
                        },
                        {
                            "kind": 134299649,
                            "text": "G",
                            "rawText": "G",
                            "flags": 96,
                            "start": 343,
                            "end": 345
                        }
                    ],
                    "flags": 32,
                    "start": 339,
                    "end": 346
                },
                "flags": 32,
                "start": 339,
                "end": 346
            },
            "flags": 16,
            "start": 339,
            "end": 346
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 348,
                "end": 348
            },
            "flags": 16,
            "start": 346,
            "end": 349
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 351,
            "end": 352
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "'use strict'",
                "flags": 4194401,
                "start": 352,
                "end": 365
            },
            "flags": 16,
            "start": 352,
            "end": 366
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 178,
                        "declareKeyword": null,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 0,
                            "start": 368,
                            "end": 374
                        },
                        "name": {
                            "kind": 134299649,
                            "text": "name",
                            "rawText": "name",
                            "flags": 96,
                            "start": 374,
                            "end": 379
                        },
                        "typeParameters": null,
                        "members": {
                            "kind": 277,
                            "classHeritage": null,
                            "elements": [],
                            "flags": 32,
                            "start": 368,
                            "end": 368
                        },
                        "flags": 16,
                        "start": 368,
                        "end": 379
                    }
                ],
                "flags": 16,
                "start": 368,
                "end": 379
            },
            "flags": 16,
            "start": 366,
            "end": 379
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 0,
                "start": 387,
                "end": 393
            },
            "name": null,
            "typeParameters": null,
            "members": {
                "kind": 277,
                "classHeritage": null,
                "elements": [],
                "flags": 32,
                "start": 395,
                "end": 396
            },
            "flags": 16,
            "start": 387,
            "end": 396
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 398,
                "end": 398
            },
            "flags": 16,
            "start": 396,
            "end": 399
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 401,
            "end": 402
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "'use strict'",
                "flags": 4194401,
                "start": 402,
                "end": 415
            },
            "flags": 16,
            "start": 402,
            "end": 416
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 178,
                        "declareKeyword": null,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 0,
                            "start": 418,
                            "end": 424
                        },
                        "name": {
                            "kind": 134299649,
                            "text": "name",
                            "rawText": "name",
                            "flags": 96,
                            "start": 424,
                            "end": 429
                        },
                        "typeParameters": null,
                        "members": {
                            "kind": 277,
                            "classHeritage": null,
                            "elements": [],
                            "flags": 32,
                            "start": 418,
                            "end": 418
                        },
                        "flags": 16,
                        "start": 418,
                        "end": 429
                    }
                ],
                "flags": 16,
                "start": 418,
                "end": 429
            },
            "flags": 16,
            "start": 416,
            "end": 429
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 0,
                "start": 437,
                "end": 443
            },
            "name": {
                "kind": 134299649,
                "text": "base",
                "rawText": "base",
                "flags": 96,
                "start": 443,
                "end": 448
            },
            "typeParameters": null,
            "members": {
                "kind": 277,
                "classHeritage": null,
                "elements": [],
                "flags": 32,
                "start": 450,
                "end": 451
            },
            "flags": 16,
            "start": 437,
            "end": 451
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 453,
                "end": 453
            },
            "flags": 16,
            "start": 451,
            "end": 454
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 456,
            "end": 457
        }
    ],
    "isModule": false,
    "source": "(class name {});\n(class extends F {});\n(class name extends F {});\n(class extends (F, G) {});\n(class name extends (F, G) {});\n(class extends class {} {});\n(class name extends class {} {});\n(class extends class base {} {});\n(class name extends class base {} {});\n\n'use strict'; { class name extends F {} };\n'use strict'; { class name extends (F, G) {} };\n'use strict'; { class name extends class {} {} };\n'use strict'; { class name extends class base {} {} };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 457
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 23, end: 31
✖ Expected a `;` - start: 33, end: 35
✖ Declaration or statement expected - start: 36, end: 37
✖ Expected a ')' to match the '(' token here - start: 50, end: 58
✖ Expected a `;` - start: 60, end: 62
✖ Declaration or statement expected - start: 63, end: 64
✖ Expected a ')' to match the '(' token here - start: 72, end: 80
✖ Expected a `;` - start: 87, end: 89
✖ Declaration or statement expected - start: 90, end: 91
✖ Expected a ')' to match the '(' token here - start: 104, end: 112
✖ Expected a `;` - start: 119, end: 121
✖ Declaration or statement expected - start: 122, end: 123
✖ Expected a ')' to match the '(' token here - start: 131, end: 139
✖ A class declaration without the 'default' modifier must have a name. - start: 145, end: 147
✖ Declaration or statement expected - start: 151, end: 152
✖ Expected a ')' to match the '(' token here - start: 165, end: 173
✖ A class declaration without the 'default' modifier must have a name. - start: 179, end: 181
✖ Declaration or statement expected - start: 185, end: 186
✖ Expected a ')' to match the '(' token here - start: 194, end: 202
✖ Declaration or statement expected - start: 219, end: 220
✖ Expected a ')' to match the '(' token here - start: 233, end: 241
✖ Declaration or statement expected - start: 258, end: 259
✖ The parser expected to find a '}' to match the '{' token here - start: 288, end: 296
✖ Expected a `;` - start: 298, end: 300
✖ Declaration or statement expected - start: 301, end: 303
✖ The parser expected to find a '}' to match the '{' token here - start: 331, end: 339
✖ Expected a `;` - start: 346, end: 348
✖ Declaration or statement expected - start: 349, end: 351
✖ The parser expected to find a '}' to match the '{' token here - start: 379, end: 387
✖ A class declaration without the 'default' modifier must have a name. - start: 393, end: 395
✖ Declaration or statement expected - start: 399, end: 401
✖ The parser expected to find a '}' to match the '{' token here - start: 429, end: 437
✖ Declaration or statement expected - start: 454, end: 456

```

