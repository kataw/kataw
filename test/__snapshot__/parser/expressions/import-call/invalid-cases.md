# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
import(;

import);

import();

import('x;

import('x'];

import['x');

import = x;

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
            "kind": 120,
            "expression": {
                "kind": 206,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 768,
                    "start": 0,
                    "end": 6
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 7,
                    "end": 7
                },
                "flags": 256,
                "start": 6,
                "end": 7
            },
            "flags": 128,
            "start": 6,
            "end": 8
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 768,
                "start": 8,
                "end": 16
            },
            "fromClause": null,
            "moduleSpecifier": null,
            "importClause": null,
            "flags": 128,
            "start": 16,
            "end": 16
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 17,
            "end": 18
        },
        {
            "kind": 120,
            "expression": {
                "kind": 206,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 768,
                    "start": 18,
                    "end": 26
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 26,
                    "end": 27
                },
                "flags": 256,
                "start": 26,
                "end": 28
            },
            "flags": 128,
            "start": 26,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 206,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 768,
                    "start": 29,
                    "end": 37
                },
                "expression": {
                    "kind": 201392131,
                    "text": "x;",
                    "rawText": "'x;",
                    "flags": 100664064,
                    "start": 38,
                    "end": 41
                },
                "flags": 256,
                "start": 37,
                "end": 41
            },
            "flags": 128,
            "start": 37,
            "end": 41
        },
        {
            "kind": 120,
            "expression": {
                "kind": 206,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 768,
                    "start": 41,
                    "end": 49
                },
                "expression": {
                    "kind": 201392131,
                    "text": "x",
                    "rawText": "x",
                    "flags": 67109632,
                    "start": 50,
                    "end": 53
                },
                "flags": 256,
                "start": 49,
                "end": 53
            },
            "flags": 128,
            "start": 49,
            "end": 53
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 54,
            "end": 55
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 768,
                "start": 55,
                "end": 63
            },
            "fromClause": null,
            "moduleSpecifier": null,
            "importClause": null,
            "flags": 128,
            "start": 63,
            "end": 63
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
                            "start": 64,
                            "end": 67
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 64,
                    "end": 67
                },
                "flags": 256,
                "start": 63,
                "end": 67
            },
            "flags": 128,
            "start": 63,
            "end": 67
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 68,
            "end": 69
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 768,
                "start": 69,
                "end": 77
            },
            "fromClause": null,
            "moduleSpecifier": null,
            "importClause": null,
            "flags": 128,
            "start": 77,
            "end": 77
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 79,
                "end": 81
            },
            "flags": 128,
            "start": 79,
            "end": 82
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 768,
                "start": 82,
                "end": 90
            },
            "fromClause": null,
            "moduleSpecifier": null,
            "importClause": null,
            "flags": 128,
            "start": 90,
            "end": 90
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
                    "start": 91,
                    "end": 91
                },
                "flags": 256,
                "start": 90,
                "end": 91
            },
            "flags": 128,
            "start": 90,
            "end": 92
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 768,
                "start": 92,
                "end": 100
            },
            "fromClause": null,
            "moduleSpecifier": null,
            "importClause": null,
            "flags": 128,
            "start": 100,
            "end": 100
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
                    "start": 101,
                    "end": 101
                },
                "flags": 256,
                "start": 100,
                "end": 102
            },
            "flags": 128,
            "start": 100,
            "end": 103
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 768,
                "start": 103,
                "end": 111
            },
            "fromClause": null,
            "moduleSpecifier": null,
            "importClause": null,
            "flags": 128,
            "start": 111,
            "end": 111
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 112,
            "end": 113
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 768,
                "start": 113,
                "end": 121
            },
            "fromClause": null,
            "moduleSpecifier": null,
            "importClause": null,
            "flags": 128,
            "start": 121,
            "end": 121
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
                            "start": 122,
                            "end": 123
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 122,
                    "end": 123
                },
                "flags": 256,
                "start": 121,
                "end": 124
            },
            "flags": 128,
            "start": 121,
            "end": 125
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 768,
                "start": 125,
                "end": 133
            },
            "fromClause": {
                "kind": 16637,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 134,
                "end": 134
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
                        "autofix": 0,
                        "flags": 0,
                        "start": 134,
                        "end": 134
                    },
                    "autofix": 0,
                    "flags": 128,
                    "start": 133,
                    "end": 134
                },
                "autofix": 0,
                "flags": 128,
                "start": 133,
                "end": 134
            },
            "flags": 128,
            "start": 133,
            "end": 135
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 768,
                "start": 135,
                "end": 143
            },
            "fromClause": {
                "kind": 16637,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 145,
                "end": 145
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
                                    "start": 144,
                                    "end": 145
                                },
                                "flags": 128,
                                "autofix": 0,
                                "start": 144,
                                "end": 145
                            }
                        ],
                        "autofix": 0,
                        "flags": 0,
                        "start": 144,
                        "end": 145
                    },
                    "autofix": 0,
                    "flags": 128,
                    "start": 143,
                    "end": 145
                },
                "autofix": 0,
                "flags": 128,
                "start": 143,
                "end": 145
            },
            "flags": 128,
            "start": 143,
            "end": 146
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 768,
                "start": 146,
                "end": 154
            },
            "fromClause": {
                "kind": 16637,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 157,
                "end": 157
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
                                    "start": 155,
                                    "end": 156
                                },
                                "flags": 128,
                                "autofix": 0,
                                "start": 155,
                                "end": 156
                            }
                        ],
                        "autofix": 0,
                        "flags": 0,
                        "start": 155,
                        "end": 156
                    },
                    "autofix": 0,
                    "flags": 128,
                    "start": 154,
                    "end": 157
                },
                "autofix": 0,
                "flags": 128,
                "start": 154,
                "end": 157
            },
            "flags": 128,
            "start": 154,
            "end": 158
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
                            "start": 158,
                            "end": 166
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 167,
                            "end": 168
                        },
                        "flags": 256,
                        "start": 166,
                        "end": 168
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 768,
                        "start": 169,
                        "end": 171
                    }
                ],
                "flags": 256,
                "start": 166,
                "end": 171
            },
            "flags": 128,
            "start": 166,
            "end": 171
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 172,
            "end": 173
        },
        {
            "kind": 120,
            "expression": {
                "kind": 206,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 768,
                    "start": 173,
                    "end": 181
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 182,
                    "end": 182
                },
                "flags": 256,
                "start": 181,
                "end": 182
            },
            "flags": 128,
            "start": 181,
            "end": 182
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 768,
                "start": 185,
                "end": 186
            },
            "flags": 128,
            "start": 185,
            "end": 186
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 187,
            "end": 188
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
                            "start": 188,
                            "end": 196
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 197,
                            "end": 198
                        },
                        "flags": 256,
                        "start": 196,
                        "end": 198
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "autofix": 0,
                        "flags": 12,
                        "start": 199,
                        "end": 199
                    }
                ],
                "flags": 256,
                "start": 196,
                "end": 199
            },
            "flags": 128,
            "start": 196,
            "end": 199
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 200,
            "end": 201
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
                            "start": 201,
                            "end": 209
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "autofix": 0,
                            "flags": 12,
                            "start": 210,
                            "end": 210
                        },
                        "flags": 256,
                        "start": 209,
                        "end": 210
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "autofix": 0,
                        "flags": 12,
                        "start": 211,
                        "end": 211
                    }
                ],
                "flags": 256,
                "start": 209,
                "end": 211
            },
            "flags": 128,
            "start": 209,
            "end": 211
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 212,
            "end": 213
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
                            "start": 213,
                            "end": 221
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "autofix": 0,
                            "flags": 12,
                            "start": 222,
                            "end": 222
                        },
                        "flags": 256,
                        "start": 221,
                        "end": 222
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 768,
                        "start": 223,
                        "end": 224
                    }
                ],
                "flags": 256,
                "start": 221,
                "end": 224
            },
            "flags": 128,
            "start": 221,
            "end": 224
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 225,
            "end": 226
        },
        {
            "kind": 120,
            "expression": {
                "kind": 206,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 768,
                    "start": 226,
                    "end": 234
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 235,
                    "end": 235
                },
                "flags": 256,
                "start": 234,
                "end": 235
            },
            "flags": 128,
            "start": 234,
            "end": 236
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 237,
            "end": 238
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
                                    "start": 241,
                                    "end": 247
                                },
                                "expression": {
                                    "kind": 16637,
                                    "text": "",
                                    "autofix": 0,
                                    "flags": 12,
                                    "start": 248,
                                    "end": 248
                                },
                                "flags": 256,
                                "start": 247,
                                "end": 248
                            },
                            "flags": 128,
                            "start": 247,
                            "end": 249
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
                                        "start": 252,
                                        "end": 258
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 252,
                                "end": 258
                            },
                            "flags": 256,
                            "start": 249,
                            "end": 259
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 241,
                    "end": 259
                },
                "flags": 256,
                "start": 238,
                "end": 259
            },
            "flags": 128,
            "start": 238,
            "end": 260
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 768,
                "start": 260,
                "end": 268
            },
            "fromClause": null,
            "moduleSpecifier": null,
            "importClause": null,
            "flags": 128,
            "start": 268,
            "end": 268
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 34098,
                    "flags": 768,
                    "start": 268,
                    "end": 269
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 269,
                    "end": 269
                },
                "flags": 256,
                "start": 268,
                "end": 269
            },
            "flags": 128,
            "start": 268,
            "end": 270
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 768,
                "start": 270,
                "end": 278
            },
            "fromClause": null,
            "moduleSpecifier": null,
            "importClause": null,
            "flags": 128,
            "start": 278,
            "end": 278
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 768,
                "start": 280,
                "end": 282
            },
            "flags": 128,
            "start": 280,
            "end": 283
        },
        {
            "kind": 120,
            "expression": {
                "kind": 207,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 768,
                    "start": 283,
                    "end": 291
                },
                "flags": 768,
                "start": 291,
                "end": 295
            },
            "flags": 128,
            "start": 291,
            "end": 296
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
                            "start": 296,
                            "end": 304
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 305,
                            "end": 306
                        },
                        "flags": 256,
                        "start": 304,
                        "end": 306
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "autofix": 0,
                        "flags": 12,
                        "start": 307,
                        "end": 307
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "autofix": 0,
                        "flags": 12,
                        "start": 308,
                        "end": 308
                    }
                ],
                "flags": 256,
                "start": 304,
                "end": 308
            },
            "flags": 128,
            "start": 304,
            "end": 308
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 309,
            "end": 310
        },
        {
            "kind": 120,
            "expression": {
                "kind": 206,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 768,
                    "start": 310,
                    "end": 318
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 319,
                    "end": 320
                },
                "flags": 256,
                "start": 318,
                "end": 321
            },
            "flags": 128,
            "start": 318,
            "end": 321
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 322,
            "end": 323
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
                            "start": 323,
                            "end": 331
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 332,
                            "end": 333
                        },
                        "flags": 256,
                        "start": 331,
                        "end": 333
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "autofix": 0,
                        "flags": 12,
                        "start": 334,
                        "end": 334
                    }
                ],
                "flags": 256,
                "start": 331,
                "end": 334
            },
            "flags": 128,
            "start": 331,
            "end": 334
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 336,
            "end": 337
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
                            "start": 337,
                            "end": 345
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 346,
                            "end": 347
                        },
                        "flags": 256,
                        "start": 345,
                        "end": 347
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "autofix": 0,
                        "flags": 12,
                        "start": 348,
                        "end": 348
                    }
                ],
                "flags": 256,
                "start": 345,
                "end": 350
            },
            "flags": 128,
            "start": 345,
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
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 361,
                            "end": 362
                        },
                        "flags": 256,
                        "start": 360,
                        "end": 362
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 768,
                        "start": 363,
                        "end": 364
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "autofix": 0,
                        "flags": 12,
                        "start": 365,
                        "end": 365
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "autofix": 0,
                        "flags": 12,
                        "start": 366,
                        "end": 366
                    }
                ],
                "flags": 256,
                "start": 360,
                "end": 366
            },
            "flags": 128,
            "start": 360,
            "end": 366
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 367,
            "end": 368
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
                            "start": 368,
                            "end": 376
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 377,
                            "end": 378
                        },
                        "flags": 256,
                        "start": 376,
                        "end": 378
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 768,
                        "start": 379,
                        "end": 380
                    },
                    {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 768,
                        "start": 381,
                        "end": 382
                    }
                ],
                "flags": 256,
                "start": 376,
                "end": 382
            },
            "flags": 128,
            "start": 376,
            "end": 382
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 383,
            "end": 384
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
                            "start": 384,
                            "end": 392
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 393,
                            "end": 394
                        },
                        "flags": 256,
                        "start": 392,
                        "end": 394
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 768,
                        "start": 395,
                        "end": 396
                    }
                ],
                "flags": 256,
                "start": 392,
                "end": 396
            },
            "flags": 128,
            "start": 392,
            "end": 397
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
                            "start": 397,
                            "end": 405
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 406,
                            "end": 407
                        },
                        "flags": 256,
                        "start": 405,
                        "end": 407
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 768,
                        "start": 408,
                        "end": 409
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "autofix": 0,
                        "flags": 12,
                        "start": 410,
                        "end": 410
                    }
                ],
                "flags": 256,
                "start": 405,
                "end": 410
            },
            "flags": 128,
            "start": 405,
            "end": 411
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
                            "start": 411,
                            "end": 419
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 420,
                            "end": 421
                        },
                        "flags": 256,
                        "start": 419,
                        "end": 421
                    },
                    {
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 768,
                            "start": 422,
                            "end": 423
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 424,
                            "end": 424
                        },
                        "flags": 256,
                        "start": 422,
                        "end": 424
                    }
                ],
                "flags": 256,
                "start": 419,
                "end": 424
            },
            "flags": 128,
            "start": 419,
            "end": 425
        },
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 768,
                    "start": 425,
                    "end": 430
                },
                "expression": {
                    "kind": 120,
                    "expression": {
                        "kind": 206,
                        "importKeyword": {
                            "kind": 37814364,
                            "flags": 768,
                            "start": 430,
                            "end": 437
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 438,
                            "end": 439
                        },
                        "flags": 256,
                        "start": 437,
                        "end": 440
                    },
                    "flags": 128,
                    "start": 437,
                    "end": 441
                },
                "argumentList": null,
                "flags": 256,
                "start": 425,
                "end": 441
            },
            "flags": 128,
            "start": 425,
            "end": 441
        }
    ],
    "isModule": true,
    "text": "import(;\n\nimport);\n\nimport();\n\nimport('x;\n\nimport('x'];\n\nimport['x');\n\nimport = x;\n\nimport[;\n\nimport[];\n\nimport];\n\nimport[x];\n\nimport{;\n\nimport{x;\n\nimport{x};\n\nimport(x, y);\n\nimport(...y);\n\nimport(x,);\n\nimport(,);\n\nimport(,y);\n\nimport(;);\n\n[import];\n\n{import};\n\nimport+;\n\nimport = 1;\n\nimport.wat;\n\nimport(x,,);\n\nimport(x));\n\nimport(x,));\n\nimport(x,());\n\nimport(x,y,,);\n\nimport(x,y,z);\n\nimport(x,y;\n\nimport(x,y,;\n\nimport(x,y(;\n\nnew import(x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 441
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Expression expected - start: 7, end: 8
@{x2716}@ Unexpected token. - start: 7, end: 8
@{x2716}@ Unexpected token. - start: 16, end: 17
@{x2716}@ Unexpected token. - start: 16, end: 17
@{x2716}@ Statement expected - start: 16, end: 17
@{x2716}@ Import Call should take at least one argument - start: 27, end: 28
@{x2716}@ Unterminated string literal - start: 38, end: 41
@{x2716}@ Unexpected token. - start: 41, end: 49
@{x2716}@ Unexpected token. - start: 53, end: 54
@{x2716}@ Unexpected token. - start: 53, end: 54
@{x2716}@ Statement expected - start: 53, end: 54
@{x2716}@ Unexpected token. - start: 63, end: 64
@{x2716}@ Unexpected token. - start: 63, end: 64
@{x2716}@ ',' expected - start: 67, end: 68
@{x2716}@ Unexpected token. - start: 67, end: 68
@{x2716}@ Unexpected token. - start: 67, end: 68
@{x2716}@ Statement expected - start: 67, end: 68
@{x2716}@ Unexpected token. - start: 77, end: 79
@{x2716}@ Unexpected token. - start: 77, end: 79
@{x2716}@ Statement expected - start: 77, end: 79
@{x2716}@ Unexpected token. - start: 90, end: 91
@{x2716}@ Unexpected token. - start: 90, end: 91
@{x2716}@ Unexpected token. - start: 91, end: 92
@{x2716}@ Unexpected token. - start: 100, end: 101
@{x2716}@ Unexpected token. - start: 100, end: 101
@{x2716}@ Unexpected token. - start: 111, end: 112
@{x2716}@ Unexpected token. - start: 111, end: 112
@{x2716}@ Statement expected - start: 111, end: 112
@{x2716}@ Unexpected token. - start: 121, end: 122
@{x2716}@ Unexpected token. - start: 121, end: 122
@{x2716}@ Unexpected token. - start: 134, end: 135
@{x2716}@ Unexpected token. - start: 134, end: 135
@{x2716}@ Expression expected - start: 134, end: 135
@{x2716}@ Unexpected token. - start: 145, end: 146
@{x2716}@ Unexpected token. - start: 145, end: 146
@{x2716}@ Unexpected token. - start: 145, end: 146
@{x2716}@ Expression expected - start: 145, end: 146
@{x2716}@ Unexpected token. - start: 157, end: 158
@{x2716}@ Expression expected - start: 157, end: 158
@{x2716}@ Unexpected token. - start: 168, end: 169
@{x2716}@ Unexpected token. - start: 171, end: 172
@{x2716}@ Statement expected - start: 171, end: 172
@{x2716}@ Expression expected - start: 182, end: 185
@{x2716}@ Unexpected token. - start: 182, end: 185
@{x2716}@ Unexpected token. - start: 182, end: 185
@{x2716}@ Statement expected - start: 182, end: 185
@{x2716}@ Unexpected token. - start: 186, end: 187
@{x2716}@ Statement expected - start: 186, end: 187
@{x2716}@ Unexpected token. - start: 198, end: 199
@{x2716}@ Expression expected - start: 199, end: 200
@{x2716}@ Unexpected token. - start: 199, end: 200
@{x2716}@ Statement expected - start: 199, end: 200
@{x2716}@ Expression expected - start: 210, end: 211
@{x2716}@ Unexpected token. - start: 210, end: 211
@{x2716}@ Expression expected - start: 211, end: 212
@{x2716}@ Unexpected token. - start: 211, end: 212
@{x2716}@ Statement expected - start: 211, end: 212
@{x2716}@ Expression expected - start: 222, end: 223
@{x2716}@ Unexpected token. - start: 222, end: 223
@{x2716}@ Unexpected token. - start: 224, end: 225
@{x2716}@ Statement expected - start: 224, end: 225
@{x2716}@ Expression expected - start: 235, end: 236
@{x2716}@ Unexpected token. - start: 235, end: 236
@{x2716}@ Statement expected - start: 236, end: 237
@{x2716}@ Expression expected - start: 248, end: 249
@{x2716}@ Unexpected token. - start: 248, end: 249
@{x2716}@ ',' expected - start: 249, end: 252
@{x2716}@ ',' expected - start: 259, end: 260
@{x2716}@ Unexpected token. - start: 259, end: 260
@{x2716}@ Unexpected token. - start: 268, end: 269
@{x2716}@ Unexpected token. - start: 268, end: 269
@{x2716}@ Expression expected - start: 269, end: 270
@{x2716}@ Unexpected token. - start: 278, end: 280
@{x2716}@ Unexpected token. - start: 278, end: 280
@{x2716}@ Statement expected - start: 278, end: 280
@{x2716}@ Unexpected token. - start: 306, end: 307
@{x2716}@ Expression expected - start: 307, end: 308
@{x2716}@ Expression expected - start: 308, end: 309
@{x2716}@ Unexpected token. - start: 308, end: 309
@{x2716}@ Statement expected - start: 308, end: 309
@{x2716}@ Unexpected token. - start: 321, end: 322
@{x2716}@ Statement expected - start: 321, end: 322
@{x2716}@ Unexpected token. - start: 333, end: 334
@{x2716}@ Expression expected - start: 334, end: 335
@{x2716}@ Unexpected token. - start: 334, end: 335
@{x2716}@ Statement expected - start: 334, end: 335
@{x2716}@ Statement expected - start: 335, end: 336
@{x2716}@ Unexpected token. - start: 347, end: 348
@{x2716}@ Expression expected - start: 350, end: 351
@{x2716}@ Unexpected token. - start: 350, end: 351
@{x2716}@ Statement expected - start: 350, end: 351
@{x2716}@ Unexpected token. - start: 362, end: 363
@{x2716}@ Expression expected - start: 365, end: 366
@{x2716}@ Expression expected - start: 366, end: 367
@{x2716}@ Unexpected token. - start: 366, end: 367
@{x2716}@ Statement expected - start: 366, end: 367
@{x2716}@ Unexpected token. - start: 378, end: 379
@{x2716}@ Unexpected token. - start: 382, end: 383
@{x2716}@ Statement expected - start: 382, end: 383
@{x2716}@ Unexpected token. - start: 394, end: 395
@{x2716}@ Unexpected token. - start: 407, end: 408
@{x2716}@ Expression expected - start: 410, end: 411
@{x2716}@ Unexpected token. - start: 421, end: 422
@{x2716}@ Unexpected token. - start: 424, end: 425
@{x2716}@ Cannot use new with import(...) - start: 430, end: 437

```

