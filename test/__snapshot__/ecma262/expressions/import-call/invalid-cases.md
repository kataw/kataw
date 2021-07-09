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

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "transformFlags": 0,
                "start": 0,
                "end": 7
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": null,
            "moduleSpecifier": null,
            "importClause": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 0,
            "end": 7
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 8,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 206,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 81,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 17
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 18
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 17,
                "end": 19
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 9,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 206,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 81,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 28
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 29,
                    "end": 29
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 28,
                "end": 29
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 20,
            "end": 30
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "transformFlags": 0,
                "start": 30,
                "end": 38
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": null,
            "moduleSpecifier": null,
            "importClause": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 30,
            "end": 38
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 39,
            "end": 40
        },
        {
            "kind": 120,
            "expression": {
                "kind": 206,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 81,
                    "transformFlags": 0,
                    "start": 40,
                    "end": 48
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 49,
                    "end": 49
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 48,
                "end": 50
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 40,
            "end": 51
        },
        {
            "kind": 120,
            "expression": {
                "kind": 206,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 81,
                    "transformFlags": 0,
                    "start": 51,
                    "end": 59
                },
                "expression": {
                    "kind": 201392131,
                    "text": "x;",
                    "rawText": "'x;",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 60,
                    "end": 63
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 59,
                "end": 63
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 51,
            "end": 63
        },
        {
            "kind": 120,
            "expression": {
                "kind": 206,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 81,
                    "transformFlags": 0,
                    "start": 63,
                    "end": 71
                },
                "expression": {
                    "kind": 201392131,
                    "text": "x",
                    "rawText": "'x'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 72,
                    "end": 75
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 71,
                "end": 75
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 63,
            "end": 75
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 76,
            "end": 77
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "transformFlags": 0,
                "start": 77,
                "end": 85
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": null,
            "moduleSpecifier": null,
            "importClause": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 77,
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
                            "rawText": "'x'",
                            "flags": 4194400,
                            "transformFlags": 0,
                            "start": 86,
                            "end": 89
                        }
                    ],
                    "trailingComma": false,
                    "flags": 4194336,
                    "transformFlags": 0,
                    "start": 86,
                    "end": 89
                },
                "flags": 32,
                "transformFlags": 8,
                "start": 85,
                "end": 89
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 85,
            "end": 89
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 90,
            "end": 91
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "transformFlags": 0,
                "start": 91,
                "end": 99
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": null,
            "moduleSpecifier": null,
            "importClause": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 91,
            "end": 99
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 101,
                "end": 103
            },
            "flags": 16,
            "transformFlags": 4096,
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
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 104,
                            "end": 112
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 113,
                            "end": 114
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 112,
                        "end": 114
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 115,
                        "end": 115
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 116,
                        "end": 116
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 104,
                "end": 116
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 104,
            "end": 116
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 117,
            "end": 118
        },
        {
            "kind": 120,
            "expression": {
                "kind": 206,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 81,
                    "transformFlags": 0,
                    "start": 118,
                    "end": 126
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 127,
                    "end": 128
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 126,
                "end": 129
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 118,
            "end": 129
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
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
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 131,
                            "end": 139
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 140,
                            "end": 141
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 139,
                        "end": 141
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 142,
                        "end": 142
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 131,
                "end": 142
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 131,
            "end": 142
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
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
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 145,
                            "end": 153
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 154,
                            "end": 155
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 153,
                        "end": 155
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 156,
                        "end": 156
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 145,
                "end": 158
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 145,
            "end": 158
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
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
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 160,
                            "end": 168
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 169,
                            "end": 170
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 168,
                        "end": 170
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 171,
                        "end": 172
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 173,
                        "end": 173
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 174,
                        "end": 174
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 160,
                "end": 174
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 160,
            "end": 174
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
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
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 176,
                            "end": 184
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 185,
                            "end": 186
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 184,
                        "end": 186
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 187,
                        "end": 188
                    },
                    {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 189,
                        "end": 190
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 176,
                "end": 190
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 176,
            "end": 190
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
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
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 192,
                            "end": 200
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 201,
                            "end": 202
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 200,
                        "end": 202
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 203,
                        "end": 204
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 192,
                "end": 204
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 192,
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
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 205,
                            "end": 213
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 214,
                            "end": 215
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 213,
                        "end": 215
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 216,
                        "end": 217
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 218,
                        "end": 218
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 205,
                "end": 218
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 205,
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
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 219,
                            "end": 227
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 228,
                            "end": 229
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 227,
                        "end": 229
                    },
                    {
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 230,
                            "end": 231
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 232,
                            "end": 232
                        },
                        "flags": 268435488,
                        "transformFlags": 1,
                        "start": 230,
                        "end": 232
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 219,
                "end": 232
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 219,
            "end": 233
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "transformFlags": 0,
                "start": 233,
                "end": 241
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": null,
            "moduleSpecifier": null,
            "importClause": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 233,
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
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 242,
                    "end": 242
                },
                "flags": 32,
                "transformFlags": 8,
                "start": 241,
                "end": 242
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 241,
            "end": 243
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "transformFlags": 0,
                "start": 243,
                "end": 251
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": null,
            "moduleSpecifier": null,
            "importClause": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 243,
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
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 252,
                    "end": 252
                },
                "flags": 32,
                "transformFlags": 8,
                "start": 251,
                "end": 253
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 251,
            "end": 254
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "transformFlags": 0,
                "start": 254,
                "end": 262
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": null,
            "moduleSpecifier": null,
            "importClause": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 254,
            "end": 262
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 263,
            "end": 264
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "transformFlags": 0,
                "start": 264,
                "end": 272
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": null,
            "moduleSpecifier": null,
            "importClause": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 264,
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
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 273,
                            "end": 274
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 273,
                    "end": 274
                },
                "flags": 32,
                "transformFlags": 8,
                "start": 272,
                "end": 275
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 272,
            "end": 276
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "transformFlags": 0,
                "start": 276,
                "end": 284
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": {
                "kind": 325,
                "fromKeyword": null,
                "from": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 285,
                    "end": 285
                },
                "flags": 0,
                "transformFlags": 0,
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
                        "transformFlags": 0,
                        "start": 285,
                        "end": 285
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 284,
                    "end": 285
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 276,
                "end": 285
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 276,
            "end": 286
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "transformFlags": 0,
                "start": 286,
                "end": 294
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": {
                "kind": 325,
                "fromKeyword": null,
                "from": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 296,
                    "end": 296
                },
                "flags": 0,
                "transformFlags": 0,
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
                                "typeKeyword": null,
                                "moduleExportName": null,
                                "name": null,
                                "asKeyword": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 295,
                                    "end": 296
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 295,
                                "end": 296
                            }
                        ],
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 295,
                        "end": 296
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 294,
                    "end": 296
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 286,
                "end": 296
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 286,
            "end": 297
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "transformFlags": 0,
                "start": 297,
                "end": 305
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": {
                "kind": 325,
                "fromKeyword": null,
                "from": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 308,
                    "end": 308
                },
                "flags": 0,
                "transformFlags": 0,
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
                                "typeKeyword": null,
                                "moduleExportName": null,
                                "name": null,
                                "asKeyword": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 306,
                                    "end": 307
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 306,
                                "end": 307
                            }
                        ],
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 306,
                        "end": 307
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 305,
                    "end": 308
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 297,
                "end": 308
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 297,
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
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 309,
                            "end": 317
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 318,
                            "end": 319
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 317,
                        "end": 319
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 320,
                        "end": 322
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 309,
                "end": 322
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 309,
            "end": 322
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 323,
            "end": 324
        },
        {
            "kind": 120,
            "expression": {
                "kind": 206,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 81,
                    "transformFlags": 0,
                    "start": 324,
                    "end": 332
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 333,
                    "end": 333
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 332,
                "end": 333
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 324,
            "end": 333
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "transformFlags": 0,
                "start": 336,
                "end": 337
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 336,
            "end": 337
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
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
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 339,
                            "end": 347
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 348,
                            "end": 349
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 347,
                        "end": 349
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 350,
                        "end": 350
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 339,
                "end": 350
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 339,
            "end": 350
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
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
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 352,
                            "end": 360
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 361,
                            "end": 361
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 360,
                        "end": 361
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 362,
                        "end": 362
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 352,
                "end": 362
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 352,
            "end": 362
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
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
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 364,
                            "end": 372
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 373,
                            "end": 373
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 372,
                        "end": 373
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 374,
                        "end": 375
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 364,
                "end": 375
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 364,
            "end": 375
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 376,
            "end": 377
        },
        {
            "kind": 120,
            "expression": {
                "kind": 206,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 81,
                    "transformFlags": 0,
                    "start": 377,
                    "end": 385
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 386,
                    "end": 386
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 385,
                "end": 386
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 377,
            "end": 387
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
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
                            "kind": 206,
                            "importKeyword": {
                                "kind": 37814364,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 392,
                                "end": 398
                            },
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "rawText": "",
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 399,
                                "end": 399
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 398,
                            "end": 399
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 392,
                    "end": 399
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 389,
                "end": 399
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 389,
            "end": 400
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 263,
                        "importKeyword": {
                            "kind": 37814364,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 403,
                            "end": 409
                        },
                        "typeKeyword": null,
                        "typeofKeyword": null,
                        "fromClause": null,
                        "moduleSpecifier": null,
                        "importClause": null,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 403,
                        "end": 409
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 403,
                "end": 409
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 400,
            "end": 410
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 410,
            "end": 411
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "transformFlags": 0,
                "start": 411,
                "end": 419
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": null,
            "moduleSpecifier": null,
            "importClause": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 411,
            "end": 419
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 99634,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 419,
                    "end": 420
                },
                "operand": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 420,
                    "end": 420
                },
                "flags": 32,
                "transformFlags": 1024,
                "start": 419,
                "end": 420
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 419,
            "end": 421
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "transformFlags": 0,
                "start": 421,
                "end": 429
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": null,
            "moduleSpecifier": null,
            "importClause": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 421,
            "end": 429
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 96,
                "transformFlags": 0,
                "start": 431,
                "end": 433
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 431,
            "end": 434
        },
        {
            "kind": 120,
            "expression": {
                "kind": 299,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 81,
                    "transformFlags": 0,
                    "start": 434,
                    "end": 442
                },
                "metaIdentifier": null,
                "flags": 442,
                "transformFlags": 0,
                "start": 96,
                "end": 443
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 434,
            "end": 443
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "wat",
                "rawText": "wat",
                "flags": 96,
                "transformFlags": 0,
                "start": 443,
                "end": 446
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 443,
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
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 447,
                            "end": 455
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 456,
                            "end": 457
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 455,
                        "end": 457
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 458,
                        "end": 458
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 459,
                        "end": 459
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 447,
                "end": 459
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 447,
            "end": 459
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 460,
            "end": 461
        },
        {
            "kind": 120,
            "expression": {
                "kind": 206,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 81,
                    "transformFlags": 0,
                    "start": 461,
                    "end": 469
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 470,
                    "end": 471
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 469,
                "end": 472
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 461,
            "end": 472
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
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
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 474,
                            "end": 482
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 483,
                            "end": 484
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 482,
                        "end": 484
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 485,
                        "end": 485
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 474,
                "end": 485
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 474,
            "end": 485
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
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
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 488,
                            "end": 496
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 497,
                            "end": 498
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 496,
                        "end": 498
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 499,
                        "end": 499
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 488,
                "end": 501
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 488,
            "end": 501
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
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
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 503,
                            "end": 511
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 512,
                            "end": 513
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 511,
                        "end": 513
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 514,
                        "end": 515
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 516,
                        "end": 516
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 517,
                        "end": 517
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 503,
                "end": 517
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 503,
            "end": 517
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
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
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 519,
                            "end": 527
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 528,
                            "end": 529
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 527,
                        "end": 529
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 530,
                        "end": 531
                    },
                    {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 532,
                        "end": 533
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 519,
                "end": 533
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 519,
            "end": 533
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
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
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 535,
                            "end": 543
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 544,
                            "end": 545
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 543,
                        "end": 545
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 546,
                        "end": 547
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 535,
                "end": 547
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 535,
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
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 548,
                            "end": 556
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 557,
                            "end": 558
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 556,
                        "end": 558
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 559,
                        "end": 560
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 561,
                        "end": 561
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 548,
                "end": 561
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 548,
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
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 562,
                            "end": 570
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 571,
                            "end": 572
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 570,
                        "end": 572
                    },
                    {
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 573,
                            "end": 574
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 575,
                            "end": 575
                        },
                        "flags": 268435488,
                        "transformFlags": 1,
                        "start": 573,
                        "end": 575
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 562,
                "end": 575
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 562,
            "end": 576
        },
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 576,
                    "end": 581
                },
                "expression": {
                    "kind": 206,
                    "importKeyword": {
                        "kind": 37814364,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 581,
                        "end": 588
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 589,
                        "end": 590
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 588,
                    "end": 591
                },
                "argumentList": null,
                "flags": 97,
                "transformFlags": 2048,
                "start": 576,
                "end": 591
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 576,
            "end": 592
        }
    ],
    "isModule": true,
    "source": "\nimport);\n\nimport();\n\nimport(;\n\nimport);\n\nimport();\n\nimport('x;\n\nimport('x'];\n\nimport['x');\n\nimport = x;\n\nimport(x,,);\n\nimport(x));\n\nimport(x,));\n\nimport(x,());\n\nimport(x,y,,);\n\nimport(x,y,z);\n\nimport(x,y;\n\nimport(x,y,;\n\nimport(x,y(;\n\nimport[;\n\nimport[];\n\nimport];\n\nimport[x];\n\nimport{;\n\nimport{x;\n\nimport{x};\n\nimport(x, y);\n\nimport(...y);\n\nimport(x,);\n\nimport(,);\n\nimport(,y);\n\nimport(;);\n\n[import];\n\n{import};\n\nimport+;\n\nimport = 1;\n\nimport.wat;\n\nimport(x,,);\n\nimport(x));\n\nimport(x,));\n\nimport(x,());\n\nimport(x,y,,);\n\nimport(x,y,z);\n\nimport(x,y;\n\nimport(x,y,;\n\nimport(x,y(;\n\nnew import(x);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 592
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 7, end: 8
✖ Expected a `;` - start: 7, end: 8
✖ Import Call should take at least one argument - start: 18, end: 19
✖ Identifier expected - start: 29, end: 30
✖ Declaration or statement expected - start: 38, end: 39
✖ Expected a `;` - start: 38, end: 39
✖ Import Call should take at least one argument - start: 49, end: 50
✖ Unterminated string literal - start: 60, end: 63
✖ Expected a ')' to match the '(' token here - start: 65, end: 71
✖ Expected a ')' to match the '(' token here - start: 75, end: 76
✖ Declaration or statement expected - start: 85, end: 86
✖ Expected a `;` - start: 85, end: 86
✖ ',' expected - start: 89, end: 90
✖ Declaration or statement expected - start: 99, end: 101
✖ Expected a `;` - start: 99, end: 101
✖ Dynamic import must have one specifier as an argument. - start: 114, end: 115
✖ Identifier expected - start: 115, end: 116
✖ Identifier expected - start: 116, end: 117
✖ Expected a `;` - start: 129, end: 130
✖ Dynamic import must have one specifier as an argument. - start: 141, end: 142
✖ Identifier expected - start: 142, end: 143
✖ Declaration or statement expected - start: 143, end: 144
✖ Dynamic import must have one specifier as an argument. - start: 155, end: 156
✖ Expression expected - start: 158, end: 159
✖ Dynamic import must have one specifier as an argument. - start: 170, end: 171
✖ Identifier expected - start: 173, end: 174
✖ Identifier expected - start: 174, end: 175
✖ Dynamic import must have one specifier as an argument. - start: 186, end: 187
✖ Expected a `;` - start: 190, end: 191
✖ Dynamic import must have one specifier as an argument. - start: 202, end: 203
✖ Dynamic import must have one specifier as an argument. - start: 215, end: 216
✖ Identifier expected - start: 218, end: 219
✖ Dynamic import must have one specifier as an argument. - start: 229, end: 230
✖ Expected a ')' to match the '(' token here - start: 232, end: 233
✖ Declaration or statement expected - start: 241, end: 242
✖ Expected a `;` - start: 241, end: 242
✖ Did you forgot a ']' to match the `[` token? - start: 242, end: 243
✖ Declaration or statement expected - start: 251, end: 252
✖ Expected a `;` - start: 251, end: 252
✖ Declaration or statement expected - start: 262, end: 263
✖ Expected a `;` - start: 262, end: 263
✖ Declaration or statement expected - start: 272, end: 273
✖ Expected a `;` - start: 272, end: 273
✖ The parser expected to find a '}' to match the '{' token here - start: 285, end: 286
✖ ',' expected - start: 296, end: 297
✖ Duplicate identifier - start: 307, end: 308
✖ Identifier expected - start: 308, end: 309
✖ Dynamic import must have one specifier as an argument. - start: 319, end: 320
✖ Expected a `;` - start: 322, end: 323
✖ Identifier expected - start: 333, end: 336
✖ Expected a `;` - start: 337, end: 338
✖ Dynamic import must have one specifier as an argument. - start: 349, end: 350
✖ Identifier expected - start: 350, end: 351
✖ Identifier expected - start: 361, end: 362
✖ Dynamic import must have one specifier as an argument. - start: 361, end: 362
✖ Identifier expected - start: 362, end: 363
✖ Identifier expected - start: 373, end: 374
✖ Dynamic import must have one specifier as an argument. - start: 373, end: 374
✖ Expected a `;` - start: 375, end: 376
✖ Identifier expected - start: 386, end: 387
✖ Declaration or statement expected - start: 387, end: 388
✖ Identifier expected - start: 399, end: 400
✖ The `import` keyword can only be used with the module goal - start: 403, end: 410
✖ Declaration or statement expected - start: 409, end: 410
✖ Declaration or statement expected - start: 419, end: 420
✖ Expected a `;` - start: 419, end: 420
✖ Identifier expected - start: 420, end: 421
✖ Declaration or statement expected - start: 429, end: 431
✖ Expected a `;` - start: 429, end: 431
✖ 'import.meta' is the only valid meta property for import - start: 442, end: 446
✖ Dynamic import must have one specifier as an argument. - start: 457, end: 458
✖ Identifier expected - start: 458, end: 459
✖ Identifier expected - start: 459, end: 460
✖ Expected a `;` - start: 472, end: 473
✖ Dynamic import must have one specifier as an argument. - start: 484, end: 485
✖ Identifier expected - start: 485, end: 486
✖ Declaration or statement expected - start: 486, end: 487
✖ Dynamic import must have one specifier as an argument. - start: 498, end: 499
✖ Expression expected - start: 501, end: 502
✖ Dynamic import must have one specifier as an argument. - start: 513, end: 514
✖ Identifier expected - start: 516, end: 517
✖ Identifier expected - start: 517, end: 518
✖ Dynamic import must have one specifier as an argument. - start: 529, end: 530
✖ Expected a `;` - start: 533, end: 534
✖ Dynamic import must have one specifier as an argument. - start: 545, end: 546
✖ Dynamic import must have one specifier as an argument. - start: 558, end: 559
✖ Identifier expected - start: 561, end: 562
✖ Dynamic import must have one specifier as an argument. - start: 572, end: 573
✖ Expected a ')' to match the '(' token here - start: 575, end: 576
✖ Cannot use new with import(...) - start: 581, end: 588

```

