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
                        "flags": 64,
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
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [],
                            "flags": 32,
                            "start": 13,
                            "end": 13
                        },
                        "flags": 11,
                        "start": 32,
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
                        "flags": 64,
                        "start": 18,
                        "end": 23
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": {
                            "kind": 279,
                            "extendsKeyword": {
                                "kind": 4194391,
                                "flags": 80,
                                "start": 23,
                                "end": 31
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "F",
                                "rawText": "F",
                                "flags": 96,
                                "start": 31,
                                "end": 33
                            },
                            "typeParameter": null,
                            "flags": 16,
                            "start": 31,
                            "end": 33
                        },
                        "body": {
                            "kind": 303,
                            "elements": [],
                            "flags": 32,
                            "start": 35,
                            "end": 35
                        },
                        "flags": 23,
                        "start": 32,
                        "end": 36
                    },
                    "flags": 32,
                    "start": 18,
                    "end": 36
                },
                "flags": 32,
                "start": 16,
                "end": 37
            },
            "flags": 16,
            "start": 16,
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
                        "flags": 64,
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
                    "tail": {
                        "kind": 277,
                        "classHeritage": {
                            "kind": 279,
                            "extendsKeyword": {
                                "kind": 4194391,
                                "flags": 80,
                                "start": 50,
                                "end": 58
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "F",
                                "rawText": "F",
                                "flags": 96,
                                "start": 58,
                                "end": 60
                            },
                            "typeParameter": null,
                            "flags": 16,
                            "start": 58,
                            "end": 60
                        },
                        "body": {
                            "kind": 303,
                            "elements": [],
                            "flags": 32,
                            "start": 62,
                            "end": 62
                        },
                        "flags": 50,
                        "start": 32,
                        "end": 63
                    },
                    "flags": 32,
                    "start": 40,
                    "end": 63
                },
                "flags": 32,
                "start": 38,
                "end": 64
            },
            "flags": 16,
            "start": 38,
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
                        "flags": 64,
                        "start": 67,
                        "end": 72
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": {
                            "kind": 279,
                            "extendsKeyword": {
                                "kind": 4194391,
                                "flags": 80,
                                "start": 72,
                                "end": 80
                            },
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
                            "typeParameter": null,
                            "flags": 16,
                            "start": 80,
                            "end": 87
                        },
                        "body": {
                            "kind": 303,
                            "elements": [],
                            "flags": 32,
                            "start": 89,
                            "end": 89
                        },
                        "flags": 72,
                        "start": 32,
                        "end": 90
                    },
                    "flags": 32,
                    "start": 67,
                    "end": 90
                },
                "flags": 32,
                "start": 65,
                "end": 91
            },
            "flags": 16,
            "start": 65,
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
                        "flags": 64,
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
                    "tail": {
                        "kind": 277,
                        "classHeritage": {
                            "kind": 279,
                            "extendsKeyword": {
                                "kind": 4194391,
                                "flags": 80,
                                "start": 104,
                                "end": 112
                            },
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
                            "typeParameter": null,
                            "flags": 16,
                            "start": 112,
                            "end": 119
                        },
                        "body": {
                            "kind": 303,
                            "elements": [],
                            "flags": 32,
                            "start": 121,
                            "end": 121
                        },
                        "flags": 104,
                        "start": 32,
                        "end": 122
                    },
                    "flags": 32,
                    "start": 94,
                    "end": 122
                },
                "flags": 32,
                "start": 92,
                "end": 123
            },
            "flags": 16,
            "start": 92,
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
                        "flags": 64,
                        "start": 126,
                        "end": 131
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": {
                            "kind": 279,
                            "extendsKeyword": {
                                "kind": 4194391,
                                "flags": 80,
                                "start": 131,
                                "end": 139
                            },
                            "expression": {
                                "kind": 189,
                                "decorators": null,
                                "classKeyword": {
                                    "kind": 37822544,
                                    "flags": 64,
                                    "start": 139,
                                    "end": 145
                                },
                                "name": null,
                                "typeParameters": null,
                                "tail": {
                                    "kind": 277,
                                    "classHeritage": null,
                                    "body": {
                                        "kind": 303,
                                        "elements": [],
                                        "flags": 32,
                                        "start": 147,
                                        "end": 147
                                    },
                                    "flags": 145,
                                    "start": 32,
                                    "end": 148
                                },
                                "flags": 32,
                                "start": 139,
                                "end": 148
                            },
                            "typeParameter": null,
                            "flags": 16,
                            "start": 139,
                            "end": 148
                        },
                        "body": {
                            "kind": 303,
                            "elements": [],
                            "flags": 32,
                            "start": 150,
                            "end": 150
                        },
                        "flags": 131,
                        "start": 32,
                        "end": 151
                    },
                    "flags": 32,
                    "start": 126,
                    "end": 151
                },
                "flags": 32,
                "start": 124,
                "end": 152
            },
            "flags": 16,
            "start": 124,
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
                        "flags": 64,
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
                    "tail": {
                        "kind": 277,
                        "classHeritage": {
                            "kind": 279,
                            "extendsKeyword": {
                                "kind": 4194391,
                                "flags": 80,
                                "start": 165,
                                "end": 173
                            },
                            "expression": {
                                "kind": 189,
                                "decorators": null,
                                "classKeyword": {
                                    "kind": 37822544,
                                    "flags": 64,
                                    "start": 173,
                                    "end": 179
                                },
                                "name": null,
                                "typeParameters": null,
                                "tail": {
                                    "kind": 277,
                                    "classHeritage": null,
                                    "body": {
                                        "kind": 303,
                                        "elements": [],
                                        "flags": 32,
                                        "start": 181,
                                        "end": 181
                                    },
                                    "flags": 179,
                                    "start": 32,
                                    "end": 182
                                },
                                "flags": 32,
                                "start": 173,
                                "end": 182
                            },
                            "typeParameter": null,
                            "flags": 16,
                            "start": 173,
                            "end": 182
                        },
                        "body": {
                            "kind": 303,
                            "elements": [],
                            "flags": 32,
                            "start": 184,
                            "end": 184
                        },
                        "flags": 165,
                        "start": 32,
                        "end": 185
                    },
                    "flags": 32,
                    "start": 155,
                    "end": 185
                },
                "flags": 32,
                "start": 153,
                "end": 186
            },
            "flags": 16,
            "start": 153,
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
                        "flags": 64,
                        "start": 189,
                        "end": 194
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": {
                            "kind": 279,
                            "extendsKeyword": {
                                "kind": 4194391,
                                "flags": 80,
                                "start": 194,
                                "end": 202
                            },
                            "expression": {
                                "kind": 189,
                                "decorators": null,
                                "classKeyword": {
                                    "kind": 37822544,
                                    "flags": 64,
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
                                "tail": {
                                    "kind": 277,
                                    "classHeritage": null,
                                    "body": {
                                        "kind": 303,
                                        "elements": [],
                                        "flags": 32,
                                        "start": 215,
                                        "end": 215
                                    },
                                    "flags": 213,
                                    "start": 32,
                                    "end": 216
                                },
                                "flags": 32,
                                "start": 202,
                                "end": 216
                            },
                            "typeParameter": null,
                            "flags": 16,
                            "start": 202,
                            "end": 216
                        },
                        "body": {
                            "kind": 303,
                            "elements": [],
                            "flags": 32,
                            "start": 218,
                            "end": 218
                        },
                        "flags": 194,
                        "start": 32,
                        "end": 219
                    },
                    "flags": 32,
                    "start": 189,
                    "end": 219
                },
                "flags": 32,
                "start": 187,
                "end": 220
            },
            "flags": 16,
            "start": 187,
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
                        "flags": 64,
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
                    "tail": {
                        "kind": 277,
                        "classHeritage": {
                            "kind": 279,
                            "extendsKeyword": {
                                "kind": 4194391,
                                "flags": 80,
                                "start": 233,
                                "end": 241
                            },
                            "expression": {
                                "kind": 189,
                                "decorators": null,
                                "classKeyword": {
                                    "kind": 37822544,
                                    "flags": 64,
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
                                "tail": {
                                    "kind": 277,
                                    "classHeritage": null,
                                    "body": {
                                        "kind": 303,
                                        "elements": [],
                                        "flags": 32,
                                        "start": 254,
                                        "end": 254
                                    },
                                    "flags": 252,
                                    "start": 32,
                                    "end": 255
                                },
                                "flags": 32,
                                "start": 241,
                                "end": 255
                            },
                            "typeParameter": null,
                            "flags": 16,
                            "start": 241,
                            "end": 255
                        },
                        "body": {
                            "kind": 303,
                            "elements": [],
                            "flags": 32,
                            "start": 257,
                            "end": 257
                        },
                        "flags": 233,
                        "start": 32,
                        "end": 258
                    },
                    "flags": 32,
                    "start": 223,
                    "end": 258
                },
                "flags": 32,
                "start": 221,
                "end": 259
            },
            "flags": 16,
            "start": 221,
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
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 178,
                        "declareKeyword": null,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 80,
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
                        "tail": {
                            "kind": 277,
                            "classHeritage": {
                                "kind": 279,
                                "extendsKeyword": {
                                    "kind": 4194391,
                                    "flags": 80,
                                    "start": 288,
                                    "end": 296
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "F",
                                    "rawText": "F",
                                    "flags": 96,
                                    "start": 296,
                                    "end": 298
                                },
                                "typeParameter": null,
                                "flags": 16,
                                "start": 296,
                                "end": 298
                            },
                            "body": {
                                "kind": 303,
                                "elements": [],
                                "flags": 32,
                                "start": 300,
                                "end": 300
                            },
                            "flags": 288,
                            "start": 32,
                            "end": 301
                        },
                        "flags": 16,
                        "start": 277,
                        "end": 301
                    }
                ],
                "flags": 16,
                "start": 277,
                "end": 301
            },
            "flags": 16,
            "start": 275,
            "end": 303
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
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 178,
                        "declareKeyword": null,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 80,
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
                        "tail": {
                            "kind": 277,
                            "classHeritage": {
                                "kind": 279,
                                "extendsKeyword": {
                                    "kind": 4194391,
                                    "flags": 80,
                                    "start": 331,
                                    "end": 339
                                },
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
                                "typeParameter": null,
                                "flags": 16,
                                "start": 339,
                                "end": 346
                            },
                            "body": {
                                "kind": 303,
                                "elements": [],
                                "flags": 32,
                                "start": 348,
                                "end": 348
                            },
                            "flags": 331,
                            "start": 32,
                            "end": 349
                        },
                        "flags": 16,
                        "start": 320,
                        "end": 349
                    }
                ],
                "flags": 16,
                "start": 320,
                "end": 349
            },
            "flags": 16,
            "start": 318,
            "end": 351
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
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 178,
                        "declareKeyword": null,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 80,
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
                        "tail": {
                            "kind": 277,
                            "classHeritage": {
                                "kind": 279,
                                "extendsKeyword": {
                                    "kind": 4194391,
                                    "flags": 80,
                                    "start": 379,
                                    "end": 387
                                },
                                "expression": {
                                    "kind": 189,
                                    "decorators": null,
                                    "classKeyword": {
                                        "kind": 37822544,
                                        "flags": 64,
                                        "start": 387,
                                        "end": 393
                                    },
                                    "name": null,
                                    "typeParameters": null,
                                    "tail": {
                                        "kind": 277,
                                        "classHeritage": null,
                                        "body": {
                                            "kind": 303,
                                            "elements": [],
                                            "flags": 32,
                                            "start": 395,
                                            "end": 395
                                        },
                                        "flags": 393,
                                        "start": 32,
                                        "end": 396
                                    },
                                    "flags": 32,
                                    "start": 387,
                                    "end": 396
                                },
                                "typeParameter": null,
                                "flags": 16,
                                "start": 387,
                                "end": 396
                            },
                            "body": {
                                "kind": 303,
                                "elements": [],
                                "flags": 32,
                                "start": 398,
                                "end": 398
                            },
                            "flags": 379,
                            "start": 32,
                            "end": 399
                        },
                        "flags": 16,
                        "start": 368,
                        "end": 399
                    }
                ],
                "flags": 16,
                "start": 368,
                "end": 399
            },
            "flags": 16,
            "start": 366,
            "end": 401
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
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 178,
                        "declareKeyword": null,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 80,
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
                        "tail": {
                            "kind": 277,
                            "classHeritage": {
                                "kind": 279,
                                "extendsKeyword": {
                                    "kind": 4194391,
                                    "flags": 80,
                                    "start": 429,
                                    "end": 437
                                },
                                "expression": {
                                    "kind": 189,
                                    "decorators": null,
                                    "classKeyword": {
                                        "kind": 37822544,
                                        "flags": 64,
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
                                    "tail": {
                                        "kind": 277,
                                        "classHeritage": null,
                                        "body": {
                                            "kind": 303,
                                            "elements": [],
                                            "flags": 32,
                                            "start": 450,
                                            "end": 450
                                        },
                                        "flags": 448,
                                        "start": 32,
                                        "end": 451
                                    },
                                    "flags": 32,
                                    "start": 437,
                                    "end": 451
                                },
                                "typeParameter": null,
                                "flags": 16,
                                "start": 437,
                                "end": 451
                            },
                            "body": {
                                "kind": 303,
                                "elements": [],
                                "flags": 32,
                                "start": 453,
                                "end": 453
                            },
                            "flags": 429,
                            "start": 32,
                            "end": 454
                        },
                        "flags": 16,
                        "start": 418,
                        "end": 454
                    }
                ],
                "flags": 16,
                "start": 418,
                "end": 454
            },
            "flags": 16,
            "start": 416,
            "end": 456
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

  (class name {
  });
  (class extends F {
  });
  (class name extends F {
  });
  (class extends (F, G) {
  });
  (class name extends (F, G) {
  });
  (class extends class {
  } {
  });
  (class name extends class {
  } {
  });
  (class extends class base {
  } {
  });
  (class name extends class base {
  } {
  });
  "'use strict'";
  {
    class name extends F {
    }
  }
  ;
  "'use strict'";
  {
    class name extends (F, G) {
    }
  }
  ;
  "'use strict'";
  {
    class name extends class {
    } {
    }
  }
  ;
  "'use strict'";
  {
    class name extends class base {
    } {
    }
  }
  ;

```

### Diagnostics

```javascript
✔ No errors
```

