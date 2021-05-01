# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import { a as b } from 'm.js';

import n from 'n.js';

import { a as b } from 'm.js';

import n from 'n.js';

export { a as b } from 'm.js';

import * as foo from 'bar.js';

import { a as b } from 'm.js';

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
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "fromClause": {
                "kind": 256,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 0,
                    "start": 17,
                    "end": 22
                },
                "from": {
                    "kind": 201392131,
                    "text": "m.js",
                    "rawText": "m.js",
                    "flags": 4194400,
                    "start": 22,
                    "end": 29
                },
                "flags": 0,
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
                                "moduleExportName": null,
                                "name": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 64,
                                    "start": 8,
                                    "end": 10
                                },
                                "flags": 16,
                                "start": 8,
                                "end": 10
                            },
                            {
                                "kind": 264,
                                "moduleExportName": null,
                                "name": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "as",
                                    "rawText": "as",
                                    "flags": 64,
                                    "start": 10,
                                    "end": 13
                                },
                                "flags": 16,
                                "start": 10,
                                "end": 13
                            },
                            {
                                "kind": 264,
                                "moduleExportName": null,
                                "name": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 64,
                                    "start": 13,
                                    "end": 15
                                },
                                "flags": 16,
                                "start": 13,
                                "end": 15
                            }
                        ],
                        "flags": 0,
                        "start": 8,
                        "end": 15
                    },
                    "flags": 16,
                    "start": 6,
                    "end": 17
                },
                "flags": 16,
                "start": 6,
                "end": 17
            },
            "flags": 16,
            "start": 6,
            "end": 30
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 1,
                "start": 30,
                "end": 38
            },
            "fromClause": {
                "kind": 256,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 0,
                    "start": 40,
                    "end": 45
                },
                "from": {
                    "kind": 201392131,
                    "text": "n.js",
                    "rawText": "n.js",
                    "flags": 4194400,
                    "start": 45,
                    "end": 52
                },
                "flags": 0,
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
                    "start": 38,
                    "end": 40
                },
                "nameSpaceImport": null,
                "namedImports": null,
                "flags": 16,
                "start": 38,
                "end": 40
            },
            "flags": 16,
            "start": 38,
            "end": 53
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 1,
                "start": 53,
                "end": 61
            },
            "fromClause": {
                "kind": 256,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 0,
                    "start": 72,
                    "end": 77
                },
                "from": {
                    "kind": 201392131,
                    "text": "m.js",
                    "rawText": "m.js",
                    "flags": 4194400,
                    "start": 77,
                    "end": 84
                },
                "flags": 0,
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
                                "moduleExportName": null,
                                "name": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 64,
                                    "start": 63,
                                    "end": 65
                                },
                                "flags": 16,
                                "start": 63,
                                "end": 65
                            },
                            {
                                "kind": 264,
                                "moduleExportName": null,
                                "name": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "as",
                                    "rawText": "as",
                                    "flags": 64,
                                    "start": 65,
                                    "end": 68
                                },
                                "flags": 16,
                                "start": 65,
                                "end": 68
                            },
                            {
                                "kind": 264,
                                "moduleExportName": null,
                                "name": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 64,
                                    "start": 68,
                                    "end": 70
                                },
                                "flags": 16,
                                "start": 68,
                                "end": 70
                            }
                        ],
                        "flags": 0,
                        "start": 63,
                        "end": 70
                    },
                    "flags": 16,
                    "start": 61,
                    "end": 72
                },
                "flags": 16,
                "start": 61,
                "end": 72
            },
            "flags": 16,
            "start": 61,
            "end": 85
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 1,
                "start": 85,
                "end": 93
            },
            "fromClause": {
                "kind": 256,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 0,
                    "start": 95,
                    "end": 100
                },
                "from": {
                    "kind": 201392131,
                    "text": "n.js",
                    "rawText": "n.js",
                    "flags": 4194400,
                    "start": 100,
                    "end": 107
                },
                "flags": 0,
                "start": 95,
                "end": 107
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": {
                    "kind": 134299649,
                    "text": "n",
                    "rawText": "n",
                    "flags": 96,
                    "start": 93,
                    "end": 95
                },
                "nameSpaceImport": null,
                "namedImports": null,
                "flags": 16,
                "start": 93,
                "end": 95
            },
            "flags": 16,
            "start": 93,
            "end": 108
        },
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 1,
                "start": 108,
                "end": 116
            },
            "declaration": null,
            "namedExports": {
                "kind": 266,
                "exportsList": {
                    "kind": 261,
                    "specifiers": [
                        {
                            "kind": 260,
                            "moduleExportName": null,
                            "name": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 118,
                                "end": 120
                            },
                            "asKeyword": null,
                            "binding": null,
                            "flags": 16,
                            "start": 118,
                            "end": 120
                        },
                        {
                            "kind": 260,
                            "moduleExportName": null,
                            "name": {
                                "kind": 134299649,
                                "text": "as",
                                "rawText": "as",
                                "flags": 96,
                                "start": 120,
                                "end": 123
                            },
                            "asKeyword": null,
                            "binding": null,
                            "flags": 16,
                            "start": 120,
                            "end": 123
                        },
                        {
                            "kind": 260,
                            "moduleExportName": null,
                            "name": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 123,
                                "end": 125
                            },
                            "asKeyword": null,
                            "binding": null,
                            "flags": 16,
                            "start": 123,
                            "end": 125
                        }
                    ],
                    "flags": 16,
                    "start": 118,
                    "end": 125
                },
                "flags": 0,
                "start": 116,
                "end": 127
            },
            "exportFromClause": null,
            "fromClause": {
                "kind": 256,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 0,
                    "start": 127,
                    "end": 132
                },
                "from": {
                    "kind": 201392131,
                    "text": "m.js",
                    "rawText": "m.js",
                    "flags": 4194400,
                    "start": 132,
                    "end": 139
                },
                "flags": 0,
                "start": 127,
                "end": 139
            },
            "flags": 16,
            "start": 108,
            "end": 140
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 1,
                "start": 140,
                "end": 148
            },
            "fromClause": {
                "kind": 256,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 0,
                    "start": 157,
                    "end": 162
                },
                "from": {
                    "kind": 201392131,
                    "text": "bar.js",
                    "rawText": "bar.js",
                    "flags": 4194400,
                    "start": 162,
                    "end": 171
                },
                "flags": 0,
                "start": 157,
                "end": 171
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": null,
                "nameSpaceImport": {
                    "kind": 255,
                    "asteriskToken": {
                        "kind": 67143222,
                        "flags": 0,
                        "start": 148,
                        "end": 150
                    },
                    "asKeyword": null,
                    "binding": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 153,
                        "end": 157
                    },
                    "flags": 16,
                    "start": 148,
                    "end": 157
                },
                "namedImports": null,
                "flags": 16,
                "start": 148,
                "end": 157
            },
            "flags": 16,
            "start": 148,
            "end": 172
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 1,
                "start": 172,
                "end": 180
            },
            "fromClause": {
                "kind": 256,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 0,
                    "start": 191,
                    "end": 196
                },
                "from": {
                    "kind": 201392131,
                    "text": "m.js",
                    "rawText": "m.js",
                    "flags": 4194400,
                    "start": 196,
                    "end": 203
                },
                "flags": 0,
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
                                "moduleExportName": null,
                                "name": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 64,
                                    "start": 182,
                                    "end": 184
                                },
                                "flags": 16,
                                "start": 182,
                                "end": 184
                            },
                            {
                                "kind": 264,
                                "moduleExportName": null,
                                "name": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "as",
                                    "rawText": "as",
                                    "flags": 64,
                                    "start": 184,
                                    "end": 187
                                },
                                "flags": 16,
                                "start": 184,
                                "end": 187
                            },
                            {
                                "kind": 264,
                                "moduleExportName": null,
                                "name": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 64,
                                    "start": 187,
                                    "end": 189
                                },
                                "flags": 16,
                                "start": 187,
                                "end": 189
                            }
                        ],
                        "flags": 0,
                        "start": 182,
                        "end": 189
                    },
                    "flags": 16,
                    "start": 180,
                    "end": 191
                },
                "flags": 16,
                "start": 180,
                "end": 191
            },
            "flags": 16,
            "start": 180,
            "end": 204
        }
    ],
    "isModule": true,
    "source": "import { a as b } from 'm.js';\n\nimport n from 'n.js';\n\nimport { a as b } from 'm.js';\n\nimport n from 'n.js';\n\nexport { a as b } from 'm.js';\n\nimport * as foo from 'bar.js';\n\nimport { a as b } from 'm.js';\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 205
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

