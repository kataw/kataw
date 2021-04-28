# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js

import);

import();

import(;

import);

import();

import('x;

import('x'];

import['x');

import = x;

import(x,,);

import(x));

import(x,));

import(x,());

import(x,y,,);

import(x,y,z);

import(x,y;

import(x,y,;

import(x,y(;

import[;

import[];

import];

import[x];

import{;

import{x;

import{x};

import(x, y);

import(...y);

import(x,);

import(,);

import(,y);

import(;);

[import];

{import};

import+;

import = 1;

import.wat;

import(x,,);

import(x));

import(x,));

import(x,());

import(x,y,,);

import(x,y,z);

import(x,y;

import(x,y,;

import(x,y(;

new import(x);
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 768,
                "start": 0,
                "end": 7
            },
            "fromClause": null,
            "moduleSpecifier": null,
            "importClause": null,
            "flags": 128,
            "start": 7,
            "end": 7
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
                "kind": 206,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 768,
                    "start": 9,
                    "end": 17
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 17,
                    "end": 18
                },
                "flags": 256,
                "start": 17,
                "end": 19
            },
            "flags": 128,
            "start": 17,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 206,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 768,
                    "start": 20,
                    "end": 28
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 29,
                    "end": 29
                },
                "flags": 256,
                "start": 28,
                "end": 29
            },
            "flags": 128,
            "start": 28,
            "end": 30
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 768,
                "start": 30,
                "end": 38
            },
            "fromClause": null,
            "moduleSpecifier": null,
            "importClause": null,
            "flags": 128,
            "start": 38,
            "end": 38
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 39,
            "end": 40
        },
        {
            "kind": 120,
            "expression": {
                "kind": 206,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 768,
                    "start": 40,
                    "end": 48
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 48,
                    "end": 49
                },
                "flags": 256,
                "start": 48,
                "end": 50
            },
            "flags": 128,
            "start": 48,
            "end": 51
        },
        {
            "kind": 120,
            "expression": {
                "kind": 206,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 768,
                    "start": 51,
                    "end": 59
                },
                "expression": {
                    "kind": 201392131,
                    "text": "x;",
                    "rawText": "'x;",
                    "flags": 100664064,
                    "start": 60,
                    "end": 63
                },
                "flags": 256,
                "start": 59,
                "end": 63
            },
            "flags": 128,
            "start": 59,
            "end": 63
        },
        {
            "kind": 120,
            "expression": {
                "kind": 206,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 768,
                    "start": 63,
                    "end": 71
                },
                "expression": {
                    "kind": 201392131,
                    "text": "x",
                    "rawText": "x",
                    "flags": 67109632,
                    "start": 72,
                    "end": 75
                },
                "flags": 256,
                "start": 71,
                "end": 75
            },
            "flags": 128,
            "start": 71,
            "end": 75
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 76,
            "end": 77
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 768,
                "start": 77,
                "end": 85
            },
            "fromClause": null,
            "moduleSpecifier": null,
            "importClause": null,
            "flags": 128,
            "start": 85,
            "end": 85
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 201392131,
                            "text": "x",
                            "rawText": "x",
                            "flags": 67109632,
                            "start": 86,
                            "end": 89
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 86,
                    "end": 89
                },
                "flags": 256,
                "start": 85,
                "end": 89
            },
            "flags": 128,
            "start": 85,
            "end": 89
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 90,
            "end": 91
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 768,
                "start": 91,
                "end": 99
            },
            "fromClause": null,
            "moduleSpecifier": null,
            "importClause": null,
            "flags": 128,
            "start": 99,
            "end": 99
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 101,
                "end": 103
            },
            "flags": 128,
            "start": 101,
            "end": 104
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 206,
                        "importKeyword": {
                            "kind": 37814364,
                            "flags": 768,
                            "start": 104,
                            "end": 112
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 113,
                            "end": 114
                        },
                        "flags": 256,
                        "start": 112,
                        "end": 114
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 115,
                        "end": 115
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 116,
                        "end": 116
                    }
                ],
                "flags": 256,
                "start": 112,
                "end": 116
            },
            "flags": 128,
            "start": 112,
            "end": 116
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 117,
            "end": 118
        },
        {
            "kind": 120,
            "expression": {
                "kind": 206,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 768,
                    "start": 118,
                    "end": 126
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 127,
                    "end": 128
                },
                "flags": 256,
                "start": 126,
                "end": 129
            },
            "flags": 128,
            "start": 126,
            "end": 129
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 130,
            "end": 131
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 206,
                        "importKeyword": {
                            "kind": 37814364,
                            "flags": 768,
                            "start": 131,
                            "end": 139
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 140,
                            "end": 141
                        },
                        "flags": 256,
                        "start": 139,
                        "end": 141
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 142,
                        "end": 142
                    }
                ],
                "flags": 256,
                "start": 139,
                "end": 142
            },
            "flags": 128,
            "start": 139,
            "end": 142
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 144,
            "end": 145
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 206,
                        "importKeyword": {
                            "kind": 37814364,
                            "flags": 768,
                            "start": 145,
                            "end": 153
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 154,
                            "end": 155
                        },
                        "flags": 256,
                        "start": 153,
                        "end": 155
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 156,
                        "end": 156
                    }
                ],
                "flags": 256,
                "start": 153,
                "end": 158
            },
            "flags": 128,
            "start": 153,
            "end": 158
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 159,
            "end": 160
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 206,
                        "importKeyword": {
                            "kind": 37814364,
                            "flags": 768,
                            "start": 160,
                            "end": 168
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 169,
                            "end": 170
                        },
                        "flags": 256,
                        "start": 168,
                        "end": 170
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 768,
                        "start": 171,
                        "end": 172
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 173,
                        "end": 173
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 174,
                        "end": 174
                    }
                ],
                "flags": 256,
                "start": 168,
                "end": 174
            },
            "flags": 128,
            "start": 168,
            "end": 174
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 175,
            "end": 176
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 206,
                        "importKeyword": {
                            "kind": 37814364,
                            "flags": 768,
                            "start": 176,
                            "end": 184
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 185,
                            "end": 186
                        },
                        "flags": 256,
                        "start": 184,
                        "end": 186
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 768,
                        "start": 187,
                        "end": 188
                    },
                    {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 768,
                        "start": 189,
                        "end": 190
                    }
                ],
                "flags": 256,
                "start": 184,
                "end": 190
            },
            "flags": 128,
            "start": 184,
            "end": 190
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 191,
            "end": 192
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 206,
                        "importKeyword": {
                            "kind": 37814364,
                            "flags": 768,
                            "start": 192,
                            "end": 200
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 201,
                            "end": 202
                        },
                        "flags": 256,
                        "start": 200,
                        "end": 202
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 768,
                        "start": 203,
                        "end": 204
                    }
                ],
                "flags": 256,
                "start": 200,
                "end": 204
            },
            "flags": 128,
            "start": 200,
            "end": 205
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 206,
                        "importKeyword": {
                            "kind": 37814364,
                            "flags": 768,
                            "start": 205,
                            "end": 213
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 214,
                            "end": 215
                        },
                        "flags": 256,
                        "start": 213,
                        "end": 215
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 768,
                        "start": 216,
                        "end": 217
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 218,
                        "end": 218
                    }
                ],
                "flags": 256,
                "start": 213,
                "end": 218
            },
            "flags": 128,
            "start": 213,
            "end": 219
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 206,
                        "importKeyword": {
                            "kind": 37814364,
                            "flags": 768,
                            "start": 219,
                            "end": 227
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 228,
                            "end": 229
                        },
                        "flags": 256,
                        "start": 227,
                        "end": 229
                    },
                    {
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 768,
                            "start": 230,
                            "end": 231
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 232,
                            "end": 232
                        },
                        "flags": 256,
                        "start": 230,
                        "end": 232
                    }
                ],
                "flags": 256,
                "start": 227,
                "end": 232
            },
            "flags": 128,
            "start": 227,
            "end": 233
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 768,
                "start": 233,
                "end": 241
            },
            "fromClause": null,
            "moduleSpecifier": null,
            "importClause": null,
            "flags": 128,
            "start": 241,
            "end": 241
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
                    "start": 242,
                    "end": 242
                },
                "flags": 256,
                "start": 241,
                "end": 242
            },
            "flags": 128,
            "start": 241,
            "end": 243
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 768,
                "start": 243,
                "end": 251
            },
            "fromClause": null,
            "moduleSpecifier": null,
            "importClause": null,
            "flags": 128,
            "start": 251,
            "end": 251
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
                    "start": 252,
                    "end": 252
                },
                "flags": 256,
                "start": 251,
                "end": 253
            },
            "flags": 128,
            "start": 251,
            "end": 254
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 768,
                "start": 254,
                "end": 262
            },
            "fromClause": null,
            "moduleSpecifier": null,
            "importClause": null,
            "flags": 128,
            "start": 262,
            "end": 262
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 263,
            "end": 264
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 768,
                "start": 264,
                "end": 272
            },
            "fromClause": null,
            "moduleSpecifier": null,
            "importClause": null,
            "flags": 128,
            "start": 272,
            "end": 272
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 273,
                            "end": 274
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 273,
                    "end": 274
                },
                "flags": 256,
                "start": 272,
                "end": 275
            },
            "flags": 128,
            "start": 272,
            "end": 276
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 768,
                "start": 276,
                "end": 284
            },
            "fromClause": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 285,
                "end": 285
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": null,
                "nameSpaceImport": null,
                "namedImports": {
                    "kind": 267,
                    "importsList": {
                        "kind": 265,
                        "specifiers": [],
                        "flags": 0,
                        "start": 285,
                        "end": 285
                    },
                    "flags": 128,
                    "start": 284,
                    "end": 285
                },
                "flags": 128,
                "start": 284,
                "end": 285
            },
            "flags": 128,
            "start": 284,
            "end": 286
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 768,
                "start": 286,
                "end": 294
            },
            "fromClause": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 296,
                "end": 296
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": null,
                "nameSpaceImport": null,
                "namedImports": {
                    "kind": 267,
                    "importsList": {
                        "kind": 265,
                        "specifiers": [
                            {
                                "kind": 264,
                                "moduleExportName": null,
                                "name": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 512,
                                    "start": 295,
                                    "end": 296
                                },
                                "flags": 128,
                                "start": 295,
                                "end": 296
                            }
                        ],
                        "flags": 0,
                        "start": 295,
                        "end": 296
                    },
                    "flags": 128,
                    "start": 294,
                    "end": 296
                },
                "flags": 128,
                "start": 294,
                "end": 296
            },
            "flags": 128,
            "start": 294,
            "end": 297
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 768,
                "start": 297,
                "end": 305
            },
            "fromClause": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 308,
                "end": 308
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": null,
                "nameSpaceImport": null,
                "namedImports": {
                    "kind": 267,
                    "importsList": {
                        "kind": 265,
                        "specifiers": [
                            {
                                "kind": 264,
                                "moduleExportName": null,
                                "name": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 512,
                                    "start": 306,
                                    "end": 307
                                },
                                "flags": 128,
                                "start": 306,
                                "end": 307
                            }
                        ],
                        "flags": 0,
                        "start": 306,
                        "end": 307
                    },
                    "flags": 128,
                    "start": 305,
                    "end": 308
                },
                "flags": 128,
                "start": 305,
                "end": 308
            },
            "flags": 128,
            "start": 305,
            "end": 309
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 206,
                        "importKeyword": {
                            "kind": 37814364,
                            "flags": 768,
                            "start": 309,
                            "end": 317
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 318,
                            "end": 319
                        },
                        "flags": 256,
                        "start": 317,
                        "end": 319
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 768,
                        "start": 320,
                        "end": 322
                    }
                ],
                "flags": 256,
                "start": 317,
                "end": 322
            },
            "flags": 128,
            "start": 317,
            "end": 322
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 323,
            "end": 324
        },
        {
            "kind": 120,
            "expression": {
                "kind": 206,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 768,
                    "start": 324,
                    "end": 332
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 333,
                    "end": 333
                },
                "flags": 256,
                "start": 332,
                "end": 333
            },
            "flags": 128,
            "start": 332,
            "end": 333
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 768,
                "start": 336,
                "end": 337
            },
            "flags": 128,
            "start": 336,
            "end": 337
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 338,
            "end": 339
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 206,
                        "importKeyword": {
                            "kind": 37814364,
                            "flags": 768,
                            "start": 339,
                            "end": 347
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 348,
                            "end": 349
                        },
                        "flags": 256,
                        "start": 347,
                        "end": 349
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 350,
                        "end": 350
                    }
                ],
                "flags": 256,
                "start": 347,
                "end": 350
            },
            "flags": 128,
            "start": 347,
            "end": 350
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 351,
            "end": 352
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 206,
                        "importKeyword": {
                            "kind": 37814364,
                            "flags": 768,
                            "start": 352,
                            "end": 360
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "flags": 12,
                            "start": 361,
                            "end": 361
                        },
                        "flags": 256,
                        "start": 360,
                        "end": 361
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 362,
                        "end": 362
                    }
                ],
                "flags": 256,
                "start": 360,
                "end": 362
            },
            "flags": 128,
            "start": 360,
            "end": 362
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 363,
            "end": 364
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 206,
                        "importKeyword": {
                            "kind": 37814364,
                            "flags": 768,
                            "start": 364,
                            "end": 372
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "flags": 12,
                            "start": 373,
                            "end": 373
                        },
                        "flags": 256,
                        "start": 372,
                        "end": 373
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 768,
                        "start": 374,
                        "end": 375
                    }
                ],
                "flags": 256,
                "start": 372,
                "end": 375
            },
            "flags": 128,
            "start": 372,
            "end": 375
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 376,
            "end": 377
        },
        {
            "kind": 120,
            "expression": {
                "kind": 206,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 768,
                    "start": 377,
                    "end": 385
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 386,
                    "end": 386
                },
                "flags": 256,
                "start": 385,
                "end": 386
            },
            "flags": 128,
            "start": 385,
            "end": 387
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 388,
            "end": 389
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 206,
                                "importKeyword": {
                                    "kind": 37814364,
                                    "flags": 768,
                                    "start": 392,
                                    "end": 398
                                },
                                "expression": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 12,
                                    "start": 399,
                                    "end": 399
                                },
                                "flags": 256,
                                "start": 398,
                                "end": 399
                            },
                            "flags": 128,
                            "start": 398,
                            "end": 400
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "import",
                                        "rawText": "import",
                                        "flags": 768,
                                        "start": 403,
                                        "end": 409
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 403,
                                "end": 409
                            },
                            "flags": 256,
                            "start": 400,
                            "end": 410
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 392,
                    "end": 410
                },
                "flags": 256,
                "start": 389,
                "end": 410
            },
            "flags": 128,
            "start": 389,
            "end": 411
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 768,
                "start": 411,
                "end": 419
            },
            "fromClause": null,
            "moduleSpecifier": null,
            "importClause": null,
            "flags": 128,
            "start": 419,
            "end": 419
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 34098,
                    "flags": 768,
                    "start": 419,
                    "end": 420
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 420,
                    "end": 420
                },
                "flags": 256,
                "start": 419,
                "end": 420
            },
            "flags": 128,
            "start": 419,
            "end": 421
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 768,
                "start": 421,
                "end": 429
            },
            "fromClause": null,
            "moduleSpecifier": null,
            "importClause": null,
            "flags": 128,
            "start": 429,
            "end": 429
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 768,
                "start": 431,
                "end": 433
            },
            "flags": 128,
            "start": 431,
            "end": 434
        },
        {
            "kind": 120,
            "expression": {
                "kind": 207,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 768,
                    "start": 434,
                    "end": 442
                },
                "flags": 768,
                "start": 442,
                "end": 446
            },
            "flags": 128,
            "start": 442,
            "end": 447
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 206,
                        "importKeyword": {
                            "kind": 37814364,
                            "flags": 768,
                            "start": 447,
                            "end": 455
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 456,
                            "end": 457
                        },
                        "flags": 256,
                        "start": 455,
                        "end": 457
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 458,
                        "end": 458
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 459,
                        "end": 459
                    }
                ],
                "flags": 256,
                "start": 455,
                "end": 459
            },
            "flags": 128,
            "start": 455,
            "end": 459
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 460,
            "end": 461
        },
        {
            "kind": 120,
            "expression": {
                "kind": 206,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 768,
                    "start": 461,
                    "end": 469
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 470,
                    "end": 471
                },
                "flags": 256,
                "start": 469,
                "end": 472
            },
            "flags": 128,
            "start": 469,
            "end": 472
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 473,
            "end": 474
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 206,
                        "importKeyword": {
                            "kind": 37814364,
                            "flags": 768,
                            "start": 474,
                            "end": 482
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 483,
                            "end": 484
                        },
                        "flags": 256,
                        "start": 482,
                        "end": 484
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 485,
                        "end": 485
                    }
                ],
                "flags": 256,
                "start": 482,
                "end": 485
            },
            "flags": 128,
            "start": 482,
            "end": 485
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 487,
            "end": 488
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 206,
                        "importKeyword": {
                            "kind": 37814364,
                            "flags": 768,
                            "start": 488,
                            "end": 496
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 497,
                            "end": 498
                        },
                        "flags": 256,
                        "start": 496,
                        "end": 498
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 499,
                        "end": 499
                    }
                ],
                "flags": 256,
                "start": 496,
                "end": 501
            },
            "flags": 128,
            "start": 496,
            "end": 501
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 502,
            "end": 503
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 206,
                        "importKeyword": {
                            "kind": 37814364,
                            "flags": 768,
                            "start": 503,
                            "end": 511
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 512,
                            "end": 513
                        },
                        "flags": 256,
                        "start": 511,
                        "end": 513
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 768,
                        "start": 514,
                        "end": 515
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 516,
                        "end": 516
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 517,
                        "end": 517
                    }
                ],
                "flags": 256,
                "start": 511,
                "end": 517
            },
            "flags": 128,
            "start": 511,
            "end": 517
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 518,
            "end": 519
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 206,
                        "importKeyword": {
                            "kind": 37814364,
                            "flags": 768,
                            "start": 519,
                            "end": 527
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 528,
                            "end": 529
                        },
                        "flags": 256,
                        "start": 527,
                        "end": 529
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 768,
                        "start": 530,
                        "end": 531
                    },
                    {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 768,
                        "start": 532,
                        "end": 533
                    }
                ],
                "flags": 256,
                "start": 527,
                "end": 533
            },
            "flags": 128,
            "start": 527,
            "end": 533
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 534,
            "end": 535
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 206,
                        "importKeyword": {
                            "kind": 37814364,
                            "flags": 768,
                            "start": 535,
                            "end": 543
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 544,
                            "end": 545
                        },
                        "flags": 256,
                        "start": 543,
                        "end": 545
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 768,
                        "start": 546,
                        "end": 547
                    }
                ],
                "flags": 256,
                "start": 543,
                "end": 547
            },
            "flags": 128,
            "start": 543,
            "end": 548
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 206,
                        "importKeyword": {
                            "kind": 37814364,
                            "flags": 768,
                            "start": 548,
                            "end": 556
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 557,
                            "end": 558
                        },
                        "flags": 256,
                        "start": 556,
                        "end": 558
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 768,
                        "start": 559,
                        "end": 560
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 561,
                        "end": 561
                    }
                ],
                "flags": 256,
                "start": 556,
                "end": 561
            },
            "flags": 128,
            "start": 556,
            "end": 562
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 206,
                        "importKeyword": {
                            "kind": 37814364,
                            "flags": 768,
                            "start": 562,
                            "end": 570
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 571,
                            "end": 572
                        },
                        "flags": 256,
                        "start": 570,
                        "end": 572
                    },
                    {
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 768,
                            "start": 573,
                            "end": 574
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 575,
                            "end": 575
                        },
                        "flags": 256,
                        "start": 573,
                        "end": 575
                    }
                ],
                "flags": 256,
                "start": 570,
                "end": 575
            },
            "flags": 128,
            "start": 570,
            "end": 576
        },
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 768,
                    "start": 576,
                    "end": 581
                },
                "expression": {
                    "kind": 120,
                    "expression": {
                        "kind": 206,
                        "importKeyword": {
                            "kind": 37814364,
                            "flags": 768,
                            "start": 581,
                            "end": 588
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 589,
                            "end": 590
                        },
                        "flags": 256,
                        "start": 588,
                        "end": 591
                    },
                    "flags": 128,
                    "start": 588,
                    "end": 592
                },
                "argumentList": null,
                "flags": 256,
                "start": 576,
                "end": 592
            },
            "flags": 128,
            "start": 576,
            "end": 592
        }
    ],
    "isModule": true,
    "text": "\nimport);\n\nimport();\n\nimport(;\n\nimport);\n\nimport();\n\nimport('x;\n\nimport('x'];\n\nimport['x');\n\nimport = x;\n\nimport(x,,);\n\nimport(x));\n\nimport(x,));\n\nimport(x,());\n\nimport(x,y,,);\n\nimport(x,y,z);\n\nimport(x,y;\n\nimport(x,y,;\n\nimport(x,y(;\n\nimport[;\n\nimport[];\n\nimport];\n\nimport[x];\n\nimport{;\n\nimport{x;\n\nimport{x};\n\nimport(x, y);\n\nimport(...y);\n\nimport(x,);\n\nimport(,);\n\nimport(,y);\n\nimport(;);\n\n[import];\n\n{import};\n\nimport+;\n\nimport = 1;\n\nimport.wat;\n\nimport(x,,);\n\nimport(x));\n\nimport(x,));\n\nimport(x,());\n\nimport(x,y,,);\n\nimport(x,y,z);\n\nimport(x,y;\n\nimport(x,y,;\n\nimport(x,y(;\n\nnew import(x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 592
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 7, end: 8
@{x2716}@ Statement expected - start: 7, end: 8
@{x2716}@ Import Call should take at least one argument - start: 18, end: 19
@{x2716}@ Expression expected - start: 29, end: 30
@{x2716}@ Unexpected token. - start: 38, end: 39
@{x2716}@ Statement expected - start: 38, end: 39
@{x2716}@ Import Call should take at least one argument - start: 49, end: 50
@{x2716}@ Unterminated string literal - start: 60, end: 63
@{x2716}@ Statement expected - start: 75, end: 76
@{x2716}@ Unexpected token. - start: 85, end: 86
@{x2716}@ ',' expected - start: 89, end: 90
@{x2716}@ Statement expected - start: 89, end: 90
@{x2716}@ Unexpected token. - start: 99, end: 101
@{x2716}@ Statement expected - start: 99, end: 101
@{x2716}@ Expression expected - start: 115, end: 116
@{x2716}@ Expression expected - start: 116, end: 117
@{x2716}@ Statement expected - start: 116, end: 117
@{x2716}@ Statement expected - start: 129, end: 130
@{x2716}@ Expression expected - start: 142, end: 143
@{x2716}@ Statement expected - start: 142, end: 143
@{x2716}@ Statement expected - start: 143, end: 144
@{x2716}@ Expression expected - start: 158, end: 159
@{x2716}@ Statement expected - start: 158, end: 159
@{x2716}@ Expression expected - start: 173, end: 174
@{x2716}@ Expression expected - start: 174, end: 175
@{x2716}@ Statement expected - start: 174, end: 175
@{x2716}@ Statement expected - start: 190, end: 191
@{x2716}@ Expression expected - start: 218, end: 219
@{x2716}@ Unexpected token. - start: 241, end: 242
@{x2716}@ Unexpected token. - start: 251, end: 252
@{x2716}@ Unexpected token. - start: 262, end: 263
@{x2716}@ Statement expected - start: 262, end: 263
@{x2716}@ Unexpected token. - start: 272, end: 273
@{x2716}@ Expression expected - start: 285, end: 286
@{x2716}@ Expression expected - start: 296, end: 297
@{x2716}@ Expression expected - start: 308, end: 309
@{x2716}@ Statement expected - start: 322, end: 323
@{x2716}@ Expression expected - start: 333, end: 336
@{x2716}@ Statement expected - start: 333, end: 336
@{x2716}@ Statement expected - start: 337, end: 338
@{x2716}@ Expression expected - start: 350, end: 351
@{x2716}@ Statement expected - start: 350, end: 351
@{x2716}@ Expression expected - start: 361, end: 362
@{x2716}@ Expression expected - start: 362, end: 363
@{x2716}@ Statement expected - start: 362, end: 363
@{x2716}@ Expression expected - start: 373, end: 374
@{x2716}@ Statement expected - start: 375, end: 376
@{x2716}@ Expression expected - start: 386, end: 387
@{x2716}@ Statement expected - start: 387, end: 388
@{x2716}@ Expression expected - start: 399, end: 400
@{x2716}@ ',' expected - start: 400, end: 403
@{x2716}@ ',' expected - start: 410, end: 411
@{x2716}@ Unexpected token. - start: 419, end: 420
@{x2716}@ Expression expected - start: 420, end: 421
@{x2716}@ Unexpected token. - start: 429, end: 431
@{x2716}@ Statement expected - start: 429, end: 431
@{x2716}@ 'import.meta' must not contain escaped characters - start: 443, end: 446
@{x2716}@ Expression expected - start: 458, end: 459
@{x2716}@ Expression expected - start: 459, end: 460
@{x2716}@ Statement expected - start: 459, end: 460
@{x2716}@ Statement expected - start: 472, end: 473
@{x2716}@ Expression expected - start: 485, end: 486
@{x2716}@ Statement expected - start: 485, end: 486
@{x2716}@ Statement expected - start: 486, end: 487
@{x2716}@ Expression expected - start: 501, end: 502
@{x2716}@ Statement expected - start: 501, end: 502
@{x2716}@ Expression expected - start: 516, end: 517
@{x2716}@ Expression expected - start: 517, end: 518
@{x2716}@ Statement expected - start: 517, end: 518
@{x2716}@ Statement expected - start: 533, end: 534
@{x2716}@ Expression expected - start: 561, end: 562
@{x2716}@ Cannot use new with import(...) - start: 581, end: 588

```

