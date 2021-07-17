# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import { x }, def from 'm.js';

import def, def2 from 'm.js';

import * as x, def from 'm.js';

import * as x, * as y from 'm.js';

import {x}, {y} from 'm.js';

import * as x, {y} from 'm.js';

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
                "fromKeyword": null,
                "from": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 12
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 12,
                "end": 12
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
                                    "start": 8,
                                    "end": 10
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 10
                            }
                        ],
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 10
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 12
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 0,
                "end": 12
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "def",
                "rawText": "def",
                "flags": 96,
                "transformFlags": 0,
                "start": 13,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 13,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "from",
                "rawText": "from",
                "flags": 96,
                "transformFlags": 0,
                "start": 17,
                "end": 22
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 17,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "m.js",
                "rawText": "'m.js'",
                "flags": 4194400,
                "transformFlags": 0,
                "start": 22,
                "end": 29
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 22,
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
                "fromKeyword": null,
                "from": {
                    "kind": 134299649,
                    "text": "def2",
                    "rawText": "def2",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 43,
                    "end": 48
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 43,
                "end": 48
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": {
                    "kind": 134299649,
                    "text": "def",
                    "rawText": "def",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 38,
                    "end": 42
                },
                "nameSpaceImport": null,
                "namedImports": null,
                "flags": 16,
                "transformFlags": 0,
                "start": 30,
                "end": 43
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 30,
            "end": 48
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "from",
                "rawText": "from",
                "flags": 96,
                "transformFlags": 0,
                "start": 48,
                "end": 53
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 48,
            "end": 53
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "m.js",
                "rawText": "'m.js'",
                "flags": 4194400,
                "transformFlags": 0,
                "start": 53,
                "end": 60
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 53,
            "end": 61
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "transformFlags": 0,
                "start": 61,
                "end": 69
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
                        "start": 69,
                        "end": 69
                    },
                    "operatorToken": {
                        "kind": 67143222,
                        "flags": 96,
                        "transformFlags": 32,
                        "start": 69,
                        "end": 71
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "as",
                        "rawText": "as",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 71,
                        "end": 74
                    },
                    "flags": 96,
                    "transformFlags": 5120,
                    "start": 69,
                    "end": 74
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 69,
                "end": 74
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": null,
                "nameSpaceImport": null,
                "namedImports": null,
                "flags": 16,
                "transformFlags": 0,
                "start": 61,
                "end": 69
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 61,
            "end": 74
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 74,
                        "end": 76
                    },
                    {
                        "kind": 134299649,
                        "text": "def",
                        "rawText": "def",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 77,
                        "end": 81
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 74,
                "end": 81
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 74,
            "end": 81
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "from",
                "rawText": "from",
                "flags": 96,
                "transformFlags": 0,
                "start": 81,
                "end": 86
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 81,
            "end": 86
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "m.js",
                "rawText": "'m.js'",
                "flags": 4194400,
                "transformFlags": 0,
                "start": 86,
                "end": 93
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 86,
            "end": 94
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "transformFlags": 0,
                "start": 94,
                "end": 102
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
                        "start": 102,
                        "end": 102
                    },
                    "operatorToken": {
                        "kind": 67143222,
                        "flags": 96,
                        "transformFlags": 32,
                        "start": 102,
                        "end": 104
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "as",
                        "rawText": "as",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 104,
                        "end": 107
                    },
                    "flags": 96,
                    "transformFlags": 5120,
                    "start": 102,
                    "end": 107
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 102,
                "end": 107
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": null,
                "nameSpaceImport": null,
                "namedImports": null,
                "flags": 16,
                "transformFlags": 0,
                "start": 94,
                "end": 102
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 94,
            "end": 107
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 107,
                        "end": 109
                    },
                    {
                        "kind": 198,
                        "left": {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 110,
                            "end": 110
                        },
                        "operatorToken": {
                            "kind": 67143222,
                            "flags": 96,
                            "transformFlags": 32,
                            "start": 110,
                            "end": 112
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "as",
                            "rawText": "as",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 112,
                            "end": 115
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 110,
                        "end": 115
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 107,
                "end": 115
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 107,
            "end": 115
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "transformFlags": 0,
                "start": 115,
                "end": 117
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 115,
            "end": 117
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "from",
                "rawText": "from",
                "flags": 96,
                "transformFlags": 0,
                "start": 117,
                "end": 122
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 117,
            "end": 122
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "m.js",
                "rawText": "'m.js'",
                "flags": 4194400,
                "transformFlags": 0,
                "start": 122,
                "end": 129
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 122,
            "end": 130
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "transformFlags": 0,
                "start": 130,
                "end": 138
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
                    "start": 142,
                    "end": 142
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 142,
                "end": 142
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
                                    "start": 140,
                                    "end": 141
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 140,
                                "end": 141
                            }
                        ],
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 140,
                        "end": 141
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 138,
                    "end": 142
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 130,
                "end": 142
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 130,
            "end": 142
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 145,
                            "end": 146
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 145,
                        "end": 146
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 145,
                "end": 146
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 143,
            "end": 147
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "from",
                "rawText": "from",
                "flags": 96,
                "transformFlags": 0,
                "start": 147,
                "end": 152
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 147,
            "end": 152
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "m.js",
                "rawText": "'m.js'",
                "flags": 4194400,
                "transformFlags": 0,
                "start": 152,
                "end": 159
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 152,
            "end": 160
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "transformFlags": 0,
                "start": 160,
                "end": 168
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
                        "start": 168,
                        "end": 168
                    },
                    "operatorToken": {
                        "kind": 67143222,
                        "flags": 96,
                        "transformFlags": 32,
                        "start": 168,
                        "end": 170
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "as",
                        "rawText": "as",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 170,
                        "end": 173
                    },
                    "flags": 96,
                    "transformFlags": 5120,
                    "start": 168,
                    "end": 173
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 168,
                "end": 173
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": null,
                "nameSpaceImport": null,
                "namedImports": null,
                "flags": 16,
                "transformFlags": 0,
                "start": 160,
                "end": 168
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 160,
            "end": 173
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 173,
                        "end": 175
                    },
                    {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 178,
                                    "end": 179
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 178,
                            "end": 179
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 176,
                        "end": 180
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 173,
                "end": 180
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 173,
            "end": 180
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "from",
                "rawText": "from",
                "flags": 96,
                "transformFlags": 0,
                "start": 180,
                "end": 185
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 180,
            "end": 185
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "m.js",
                "rawText": "'m.js'",
                "flags": 4194400,
                "transformFlags": 0,
                "start": 185,
                "end": 192
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 185,
            "end": 193
        }
    ],
    "isModule": true,
    "source": "import { x }, def from 'm.js';\n\nimport def, def2 from 'm.js';\n\nimport * as x, def from 'm.js';\n\nimport * as x, * as y from 'm.js';\n\nimport {x}, {y} from 'm.js';\n\nimport * as x, {y} from 'm.js';\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 194
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 12, end: 13
✖ '; ' expected - start: 17, end: 22
✖ '; ' expected - start: 22, end: 29
✖ Import declaration expected - start: 43, end: 48
✖ '; ' expected - start: 48, end: 53
✖ '; ' expected - start: 53, end: 60
✖ Identifier expected - start: 69, end: 71
✖ '; ' expected - start: 74, end: 76
✖ '; ' expected - start: 81, end: 86
✖ '; ' expected - start: 86, end: 93
✖ Identifier expected - start: 102, end: 104
✖ '; ' expected - start: 107, end: 109
✖ Identifier expected - start: 110, end: 112
✖ '; ' expected - start: 115, end: 117
✖ '; ' expected - start: 117, end: 122
✖ '; ' expected - start: 122, end: 129
✖ Duplicate identifier - start: 141, end: 142
✖ Identifier expected - start: 142, end: 143
✖ '; ' expected - start: 152, end: 159
✖ Identifier expected - start: 168, end: 170
✖ '; ' expected - start: 173, end: 175
✖ '; ' expected - start: 180, end: 185
✖ '; ' expected - start: 185, end: 192

```

