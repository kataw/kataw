# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import { x as d } from 'm.js';

import n from 'n.js';

import { y as a } from 'm.js';

import w from 'n.js';

export { z as h } from 'm.js';

import * as foo from 'bar.js';

import { q as o } from 'm.js';

import 'somemodule.js';
import { } from 'm.js';
import { a } from 'm.js';
import { a, b as d, c, } from 'm.js';
import * as thing from 'm.js';
import thing from 'm.js';
import thing, * as rest from 'm.js';
import thing, { a, b, c } from 'm.js';
import { arguments as a } from 'm.js';
import { for as f } from 'm.js';
import { yield as y } from 'm.js';
import { static as s } from 'm.js';
import { let as l } from 'm.js';

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
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": {
                "kind": 325,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 22
                },
                "from": {
                    "kind": 201392131,
                    "text": "m.js",
                    "rawText": "'m.js'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 29
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 17,
                "end": 29
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
                                "name": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 10
                                },
                                "asKeyword": {
                                    "kind": 16494,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 13
                                },
                                "binding": {
                                    "kind": 134299649,
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 15
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 15
                            }
                        ],
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 15
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 17
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 0,
                "end": 17
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
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
            "fromClause": {
                "kind": 325,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 40,
                    "end": 45
                },
                "from": {
                    "kind": 201392131,
                    "text": "n.js",
                    "rawText": "'n.js'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 45,
                    "end": 52
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 40,
                "end": 52
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": {
                    "kind": 134299649,
                    "text": "n",
                    "rawText": "n",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 38,
                    "end": 40
                },
                "nameSpaceImport": null,
                "namedImports": null,
                "flags": 16,
                "transformFlags": 0,
                "start": 30,
                "end": 40
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 30,
            "end": 53
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "transformFlags": 0,
                "start": 53,
                "end": 61
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": {
                "kind": 325,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 72,
                    "end": 77
                },
                "from": {
                    "kind": 201392131,
                    "text": "m.js",
                    "rawText": "'m.js'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 77,
                    "end": 84
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 72,
                "end": 84
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
                                "name": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 63,
                                    "end": 65
                                },
                                "asKeyword": {
                                    "kind": 16494,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 65,
                                    "end": 68
                                },
                                "binding": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 68,
                                    "end": 70
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 63,
                                "end": 70
                            }
                        ],
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 63,
                        "end": 70
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 61,
                    "end": 72
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 53,
                "end": 72
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 53,
            "end": 85
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "transformFlags": 0,
                "start": 85,
                "end": 93
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": {
                "kind": 325,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 95,
                    "end": 100
                },
                "from": {
                    "kind": 201392131,
                    "text": "n.js",
                    "rawText": "'n.js'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 100,
                    "end": 107
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 95,
                "end": 107
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": {
                    "kind": 134299649,
                    "text": "w",
                    "rawText": "w",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 93,
                    "end": 95
                },
                "nameSpaceImport": null,
                "namedImports": null,
                "flags": 16,
                "transformFlags": 0,
                "start": 85,
                "end": 95
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 85,
            "end": 108
        },
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 81,
                "transformFlags": 0,
                "start": 108,
                "end": 116
            },
            "declaration": null,
            "namedExports": {
                "kind": 266,
                "exportsList": {
                    "kind": 289,
                    "specifiers": [
                        {
                            "kind": 291,
                            "moduleExportName": null,
                            "name": {
                                "kind": 134299649,
                                "text": "z",
                                "rawText": "z",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 118,
                                "end": 120
                            },
                            "asKeyword": {
                                "kind": 16494,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 120,
                                "end": 123
                            },
                            "binding": {
                                "kind": 134299649,
                                "text": "h",
                                "rawText": "h",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 123,
                                "end": 125
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 118,
                            "end": 125
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 118,
                    "end": 125
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 116,
                "end": 127
            },
            "exportFromClause": null,
            "fromClause": {
                "kind": 325,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 127,
                    "end": 132
                },
                "from": {
                    "kind": 201392131,
                    "text": "m.js",
                    "rawText": "'m.js'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 132,
                    "end": 139
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 127,
                "end": 139
            },
            "exportKind": 0,
            "flags": 81,
            "transformFlags": 0,
            "start": 108,
            "end": 140
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "transformFlags": 0,
                "start": 140,
                "end": 148
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": {
                "kind": 325,
                "fromKeyword": null,
                "from": {
                    "kind": 198,
                    "left": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 148,
                        "end": 148
                    },
                    "operatorToken": {
                        "kind": 67143222,
                        "flags": 96,
                        "transformFlags": 32,
                        "start": 148,
                        "end": 150
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "as",
                        "rawText": "as",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 150,
                        "end": 153
                    },
                    "flags": 96,
                    "transformFlags": 5120,
                    "start": 148,
                    "end": 153
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 148,
                "end": 153
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": null,
                "nameSpaceImport": null,
                "namedImports": null,
                "flags": 16,
                "transformFlags": 0,
                "start": 140,
                "end": 148
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 140,
            "end": 153
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 153,
                "end": 157
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 153,
            "end": 157
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "from",
                "rawText": "from",
                "flags": 96,
                "transformFlags": 0,
                "start": 157,
                "end": 162
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 157,
            "end": 162
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "bar.js",
                "rawText": "'bar.js'",
                "flags": 4194400,
                "transformFlags": 0,
                "start": 162,
                "end": 171
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 162,
            "end": 172
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "transformFlags": 0,
                "start": 172,
                "end": 180
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": {
                "kind": 325,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 191,
                    "end": 196
                },
                "from": {
                    "kind": 201392131,
                    "text": "m.js",
                    "rawText": "'m.js'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 196,
                    "end": 203
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 191,
                "end": 203
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
                                "name": {
                                    "kind": 134299649,
                                    "text": "q",
                                    "rawText": "q",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 182,
                                    "end": 184
                                },
                                "asKeyword": {
                                    "kind": 16494,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 184,
                                    "end": 187
                                },
                                "binding": {
                                    "kind": 134299649,
                                    "text": "o",
                                    "rawText": "o",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 187,
                                    "end": 189
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 182,
                                "end": 189
                            }
                        ],
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 182,
                        "end": 189
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 180,
                    "end": 191
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 172,
                "end": 191
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 172,
            "end": 204
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "transformFlags": 0,
                "start": 204,
                "end": 212
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": null,
            "moduleSpecifier": {
                "kind": 201392131,
                "text": "somemodule.js",
                "rawText": "'somemodule.js'",
                "flags": 4194400,
                "transformFlags": 0,
                "start": 212,
                "end": 228
            },
            "importClause": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 204,
            "end": 229
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "transformFlags": 0,
                "start": 229,
                "end": 236
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": {
                "kind": 325,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 240,
                    "end": 245
                },
                "from": {
                    "kind": 201392131,
                    "text": "m.js",
                    "rawText": "'m.js'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 245,
                    "end": 252
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 240,
                "end": 252
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
                        "start": 238,
                        "end": 238
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 236,
                    "end": 240
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 229,
                "end": 240
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 229,
            "end": 253
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "transformFlags": 0,
                "start": 253,
                "end": 260
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": {
                "kind": 325,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 266,
                    "end": 271
                },
                "from": {
                    "kind": 201392131,
                    "text": "m.js",
                    "rawText": "'m.js'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 271,
                    "end": 278
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 266,
                "end": 278
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
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 262,
                                    "end": 264
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 262,
                                "end": 264
                            }
                        ],
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 262,
                        "end": 264
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 260,
                    "end": 266
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 253,
                "end": 266
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 253,
            "end": 279
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "transformFlags": 0,
                "start": 279,
                "end": 286
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": {
                "kind": 325,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 304,
                    "end": 309
                },
                "from": {
                    "kind": 201392131,
                    "text": "m.js",
                    "rawText": "'m.js'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 309,
                    "end": 316
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 304,
                "end": 316
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
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 288,
                                    "end": 290
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 288,
                                "end": 290
                            },
                            {
                                "kind": 264,
                                "typeKeyword": null,
                                "moduleExportName": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 291,
                                    "end": 293
                                },
                                "asKeyword": {
                                    "kind": 16494,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 293,
                                    "end": 296
                                },
                                "binding": {
                                    "kind": 134299649,
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 296,
                                    "end": 298
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 291,
                                "end": 298
                            },
                            {
                                "kind": 264,
                                "typeKeyword": null,
                                "moduleExportName": null,
                                "name": null,
                                "asKeyword": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 299,
                                    "end": 301
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 299,
                                "end": 301
                            }
                        ],
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 288,
                        "end": 302
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 286,
                    "end": 304
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 279,
                "end": 304
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 279,
            "end": 317
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "transformFlags": 0,
                "start": 317,
                "end": 324
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": {
                "kind": 325,
                "fromKeyword": null,
                "from": {
                    "kind": 198,
                    "left": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 324,
                        "end": 324
                    },
                    "operatorToken": {
                        "kind": 67143222,
                        "flags": 96,
                        "transformFlags": 32,
                        "start": 324,
                        "end": 326
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "as",
                        "rawText": "as",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 326,
                        "end": 329
                    },
                    "flags": 96,
                    "transformFlags": 5120,
                    "start": 324,
                    "end": 329
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 324,
                "end": 329
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": null,
                "nameSpaceImport": null,
                "namedImports": null,
                "flags": 16,
                "transformFlags": 0,
                "start": 317,
                "end": 324
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 317,
            "end": 329
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "thing",
                "rawText": "thing",
                "flags": 96,
                "transformFlags": 0,
                "start": 329,
                "end": 335
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 329,
            "end": 335
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "from",
                "rawText": "from",
                "flags": 96,
                "transformFlags": 0,
                "start": 335,
                "end": 340
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 335,
            "end": 340
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "m.js",
                "rawText": "'m.js'",
                "flags": 4194400,
                "transformFlags": 0,
                "start": 340,
                "end": 347
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 340,
            "end": 348
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "transformFlags": 0,
                "start": 348,
                "end": 355
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": {
                "kind": 325,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 361,
                    "end": 366
                },
                "from": {
                    "kind": 201392131,
                    "text": "m.js",
                    "rawText": "'m.js'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 366,
                    "end": 373
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 361,
                "end": 373
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": {
                    "kind": 134299649,
                    "text": "thing",
                    "rawText": "thing",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 355,
                    "end": 361
                },
                "nameSpaceImport": null,
                "namedImports": null,
                "flags": 16,
                "transformFlags": 0,
                "start": 348,
                "end": 361
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 348,
            "end": 374
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "transformFlags": 0,
                "start": 374,
                "end": 381
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": {
                "kind": 325,
                "fromKeyword": null,
                "from": {
                    "kind": 198,
                    "left": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 388,
                        "end": 388
                    },
                    "operatorToken": {
                        "kind": 67143222,
                        "flags": 96,
                        "transformFlags": 32,
                        "start": 388,
                        "end": 390
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "as",
                        "rawText": "as",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 390,
                        "end": 393
                    },
                    "flags": 96,
                    "transformFlags": 5120,
                    "start": 388,
                    "end": 393
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 388,
                "end": 393
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": {
                    "kind": 134299649,
                    "text": "thing",
                    "rawText": "thing",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 381,
                    "end": 387
                },
                "nameSpaceImport": null,
                "namedImports": null,
                "flags": 16,
                "transformFlags": 0,
                "start": 374,
                "end": 388
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 374,
            "end": 393
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "rest",
                "rawText": "rest",
                "flags": 96,
                "transformFlags": 0,
                "start": 393,
                "end": 398
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 393,
            "end": 398
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "from",
                "rawText": "from",
                "flags": 96,
                "transformFlags": 0,
                "start": 398,
                "end": 403
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 398,
            "end": 403
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "m.js",
                "rawText": "'m.js'",
                "flags": 4194400,
                "transformFlags": 0,
                "start": 403,
                "end": 410
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 403,
            "end": 411
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "transformFlags": 0,
                "start": 411,
                "end": 418
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": {
                "kind": 325,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 437,
                    "end": 442
                },
                "from": {
                    "kind": 201392131,
                    "text": "m.js",
                    "rawText": "'m.js'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 442,
                    "end": 449
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 437,
                "end": 449
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": {
                    "kind": 134299649,
                    "text": "thing",
                    "rawText": "thing",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 418,
                    "end": 424
                },
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
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 427,
                                    "end": 429
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 427,
                                "end": 429
                            },
                            {
                                "kind": 264,
                                "typeKeyword": null,
                                "moduleExportName": null,
                                "name": null,
                                "asKeyword": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 430,
                                    "end": 432
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 430,
                                "end": 432
                            },
                            {
                                "kind": 264,
                                "typeKeyword": null,
                                "moduleExportName": null,
                                "name": null,
                                "asKeyword": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 433,
                                    "end": 435
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 433,
                                "end": 435
                            }
                        ],
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 427,
                        "end": 435
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 425,
                    "end": 437
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 411,
                "end": 437
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 411,
            "end": 450
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "transformFlags": 0,
                "start": 450,
                "end": 457
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": {
                "kind": 325,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 476,
                    "end": 481
                },
                "from": {
                    "kind": 201392131,
                    "text": "m.js",
                    "rawText": "'m.js'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 481,
                    "end": 488
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 476,
                "end": 488
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
                                "name": {
                                    "kind": 134299649,
                                    "text": "arguments",
                                    "rawText": "arguments",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 459,
                                    "end": 469
                                },
                                "asKeyword": {
                                    "kind": 16494,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 469,
                                    "end": 472
                                },
                                "binding": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 472,
                                    "end": 474
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 459,
                                "end": 474
                            }
                        ],
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 459,
                        "end": 474
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 457,
                    "end": 476
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 450,
                "end": 476
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 450,
            "end": 489
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "transformFlags": 0,
                "start": 489,
                "end": 496
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": {
                "kind": 325,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 509,
                    "end": 514
                },
                "from": {
                    "kind": 201392131,
                    "text": "m.js",
                    "rawText": "'m.js'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 514,
                    "end": 521
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 509,
                "end": 521
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
                                "name": {
                                    "kind": 134299649,
                                    "text": "for",
                                    "rawText": "for",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 498,
                                    "end": 502
                                },
                                "asKeyword": {
                                    "kind": 16494,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 502,
                                    "end": 505
                                },
                                "binding": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 505,
                                    "end": 507
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 498,
                                "end": 507
                            }
                        ],
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 498,
                        "end": 507
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 496,
                    "end": 509
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 489,
                "end": 509
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 489,
            "end": 522
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "transformFlags": 0,
                "start": 522,
                "end": 529
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": {
                "kind": 325,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 544,
                    "end": 549
                },
                "from": {
                    "kind": 201392131,
                    "text": "m.js",
                    "rawText": "'m.js'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 549,
                    "end": 556
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 544,
                "end": 556
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
                                "name": {
                                    "kind": 134299649,
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 531,
                                    "end": 537
                                },
                                "asKeyword": {
                                    "kind": 16494,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 537,
                                    "end": 540
                                },
                                "binding": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 540,
                                    "end": 542
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 531,
                                "end": 542
                            }
                        ],
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 531,
                        "end": 542
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 529,
                    "end": 544
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 522,
                "end": 544
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 522,
            "end": 557
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "transformFlags": 0,
                "start": 557,
                "end": 564
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": {
                "kind": 325,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 580,
                    "end": 585
                },
                "from": {
                    "kind": 201392131,
                    "text": "m.js",
                    "rawText": "'m.js'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 585,
                    "end": 592
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 580,
                "end": 592
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
                                "name": {
                                    "kind": 134299649,
                                    "text": "static",
                                    "rawText": "static",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 566,
                                    "end": 573
                                },
                                "asKeyword": {
                                    "kind": 16494,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 573,
                                    "end": 576
                                },
                                "binding": {
                                    "kind": 134299649,
                                    "text": "s",
                                    "rawText": "s",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 576,
                                    "end": 578
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 566,
                                "end": 578
                            }
                        ],
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 566,
                        "end": 578
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 564,
                    "end": 580
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 557,
                "end": 580
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 557,
            "end": 593
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "transformFlags": 0,
                "start": 593,
                "end": 600
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": {
                "kind": 325,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 613,
                    "end": 618
                },
                "from": {
                    "kind": 201392131,
                    "text": "m.js",
                    "rawText": "'m.js'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 618,
                    "end": 625
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 613,
                "end": 625
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
                                "name": {
                                    "kind": 134299649,
                                    "text": "let",
                                    "rawText": "let",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 602,
                                    "end": 606
                                },
                                "asKeyword": {
                                    "kind": 16494,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 606,
                                    "end": 609
                                },
                                "binding": {
                                    "kind": 134299649,
                                    "text": "l",
                                    "rawText": "l",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 609,
                                    "end": 611
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 602,
                                "end": 611
                            }
                        ],
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 602,
                        "end": 611
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 600,
                    "end": 613
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 593,
                "end": 613
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 593,
            "end": 626
        }
    ],
    "isModule": true,
    "source": "import { x as d } from 'm.js';\n\nimport n from 'n.js';\n\nimport { y as a } from 'm.js';\n\nimport w from 'n.js';\n\nexport { z as h } from 'm.js';\n\nimport * as foo from 'bar.js';\n\nimport { q as o } from 'm.js';\n\nimport 'somemodule.js';\nimport { } from 'm.js';\nimport { a } from 'm.js';\nimport { a, b as d, c, } from 'm.js';\nimport * as thing from 'm.js';\nimport thing from 'm.js';\nimport thing, * as rest from 'm.js';\nimport thing, { a, b, c } from 'm.js';\nimport { arguments as a } from 'm.js';\nimport { for as f } from 'm.js';\nimport { yield as y } from 'm.js';\nimport { static as s } from 'm.js';\nimport { let as l } from 'm.js';\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 627
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 148, end: 150
✖ '; ' expected - start: 153, end: 157
✖ '; ' expected - start: 157, end: 162
✖ '; ' expected - start: 162, end: 171
✖ Duplicate identifier - start: 264, end: 266
✖ Duplicate identifier - start: 290, end: 291
✖ Duplicate identifier - start: 296, end: 298
✖ Identifier expected - start: 324, end: 326
✖ '; ' expected - start: 329, end: 335
✖ '; ' expected - start: 335, end: 340
✖ '; ' expected - start: 340, end: 347
✖ Identifier expected - start: 388, end: 390
✖ '; ' expected - start: 393, end: 398
✖ '; ' expected - start: 398, end: 403
✖ '; ' expected - start: 403, end: 410
✖ Duplicate identifier - start: 429, end: 430
✖ Duplicate identifier - start: 435, end: 437
✖ Duplicate identifier - start: 472, end: 474

```

