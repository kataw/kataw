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
                "kind": 201392131,
                "text": "m.js",
                "rawText": "m.js",
                "flags": 67109632,
                "start": 22,
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
                                "name": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 8,
                                    "end": 10
                                },
                                "binding": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 768,
                                    "start": 13,
                                    "end": 15
                                },
                                "flags": 128,
                                "start": 8,
                                "end": 15
                            }
                        ],
                        "flags": 0,
                        "start": 8,
                        "end": 15
                    },
                    "flags": 128,
                    "start": 6,
                    "end": 17
                },
                "flags": 128,
                "start": 6,
                "end": 17
            },
            "flags": 128,
            "start": 6,
            "end": 30
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 30,
                "start": 1,
                "end": 38
            },
            "fromClause": {
                "kind": 201392131,
                "text": "n.js",
                "rawText": "n.js",
                "flags": 67109632,
                "start": 45,
                "end": 52
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": {
                    "kind": 134299649,
                    "text": "n",
                    "rawText": "n",
                    "flags": 768,
                    "start": 38,
                    "end": 40
                },
                "nameSpaceImport": null,
                "namedImports": null,
                "flags": 128,
                "start": 38,
                "end": 40
            },
            "flags": 128,
            "start": 38,
            "end": 53
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 53,
                "start": 1,
                "end": 61
            },
            "fromClause": {
                "kind": 201392131,
                "text": "m.js",
                "rawText": "m.js",
                "flags": 67109632,
                "start": 77,
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
                                "name": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 63,
                                    "end": 65
                                },
                                "binding": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 768,
                                    "start": 68,
                                    "end": 70
                                },
                                "flags": 128,
                                "start": 63,
                                "end": 70
                            }
                        ],
                        "flags": 0,
                        "start": 63,
                        "end": 70
                    },
                    "flags": 128,
                    "start": 61,
                    "end": 72
                },
                "flags": 128,
                "start": 61,
                "end": 72
            },
            "flags": 128,
            "start": 61,
            "end": 85
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 85,
                "start": 1,
                "end": 93
            },
            "fromClause": {
                "kind": 201392131,
                "text": "n.js",
                "rawText": "n.js",
                "flags": 67109632,
                "start": 100,
                "end": 107
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": {
                    "kind": 134299649,
                    "text": "n",
                    "rawText": "n",
                    "flags": 768,
                    "start": 93,
                    "end": 95
                },
                "nameSpaceImport": null,
                "namedImports": null,
                "flags": 128,
                "start": 93,
                "end": 95
            },
            "flags": 128,
            "start": 93,
            "end": 108
        },
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 108,
                "start": 1,
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
                                "flags": 768,
                                "start": 118,
                                "end": 120
                            },
                            "binding": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 768,
                                "start": 123,
                                "end": 125
                            },
                            "flags": 128,
                            "start": 118,
                            "end": 125
                        }
                    ],
                    "flags": 128,
                    "start": 118,
                    "end": 125
                },
                "flags": 0,
                "start": 116,
                "end": 127
            },
            "exportFromClause": null,
            "fromClause": {
                "kind": 201392131,
                "text": "m.js",
                "rawText": "m.js",
                "flags": 67109632,
                "start": 132,
                "end": 139
            },
            "flags": 128,
            "start": 108,
            "end": 140
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 140,
                "start": 1,
                "end": 148
            },
            "fromClause": {
                "kind": 201392131,
                "text": "bar.js",
                "rawText": "bar.js",
                "flags": 67109632,
                "start": 162,
                "end": 171
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": null,
                "nameSpaceImport": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 768,
                    "start": 153,
                    "end": 157
                },
                "namedImports": null,
                "flags": 128,
                "start": 148,
                "end": 157
            },
            "flags": 128,
            "start": 148,
            "end": 172
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 172,
                "start": 1,
                "end": 180
            },
            "fromClause": {
                "kind": 201392131,
                "text": "m.js",
                "rawText": "m.js",
                "flags": 67109632,
                "start": 196,
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
                                "name": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 182,
                                    "end": 184
                                },
                                "binding": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 768,
                                    "start": 187,
                                    "end": 189
                                },
                                "flags": 128,
                                "start": 182,
                                "end": 189
                            }
                        ],
                        "flags": 0,
                        "start": 182,
                        "end": 189
                    },
                    "flags": 128,
                    "start": 180,
                    "end": 191
                },
                "flags": 128,
                "start": 180,
                "end": 191
            },
            "flags": 128,
            "start": 180,
            "end": 204
        }
    ],
    "isModule": true,
    "text": "import { a as b } from 'm.js';\n\nimport n from 'n.js';\n\nimport { a as b } from 'm.js';\n\nimport n from 'n.js';\n\nexport { a as b } from 'm.js';\n\nimport * as foo from 'bar.js';\n\nimport { a as b } from 'm.js';\n",
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

