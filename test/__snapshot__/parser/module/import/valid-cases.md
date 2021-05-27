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
                    "rawText": "'m.js'",
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
                                "name": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 8,
                                    "end": 10
                                },
                                "asKeyword": {
                                    "kind": 16494,
                                    "flags": 64,
                                    "start": 10,
                                    "end": 13
                                },
                                "binding": {
                                    "kind": 134299649,
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 96,
                                    "start": 13,
                                    "end": 15
                                },
                                "flags": 16,
                                "start": 8,
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
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "start": 0,
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
                    "rawText": "'n.js'",
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
                "start": 30,
                "end": 40
            },
            "flags": 16,
            "start": 30,
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
                    "rawText": "'m.js'",
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
                                "name": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 63,
                                    "end": 65
                                },
                                "asKeyword": {
                                    "kind": 16494,
                                    "flags": 64,
                                    "start": 65,
                                    "end": 68
                                },
                                "binding": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 68,
                                    "end": 70
                                },
                                "flags": 16,
                                "start": 63,
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
                "start": 53,
                "end": 72
            },
            "flags": 16,
            "start": 53,
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
                    "rawText": "'n.js'",
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
                    "text": "w",
                    "rawText": "w",
                    "flags": 96,
                    "start": 93,
                    "end": 95
                },
                "nameSpaceImport": null,
                "namedImports": null,
                "flags": 16,
                "start": 85,
                "end": 95
            },
            "flags": 16,
            "start": 85,
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
                                "text": "z",
                                "rawText": "z",
                                "flags": 96,
                                "start": 118,
                                "end": 120
                            },
                            "asKeyword": {
                                "kind": 16494,
                                "flags": 64,
                                "start": 120,
                                "end": 123
                            },
                            "binding": {
                                "kind": 134299649,
                                "text": "h",
                                "rawText": "h",
                                "flags": 96,
                                "start": 123,
                                "end": 125
                            },
                            "flags": 16,
                            "start": 118,
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
                    "rawText": "'m.js'",
                    "flags": 4194400,
                    "start": 132,
                    "end": 139
                },
                "flags": 0,
                "start": 127,
                "end": 139
            },
            "exportKind": 0,
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
                    "rawText": "'bar.js'",
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
                    "asKeyword": {
                        "kind": 16494,
                        "flags": 0,
                        "start": 150,
                        "end": 153
                    },
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
                "start": 140,
                "end": 157
            },
            "flags": 16,
            "start": 140,
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
                    "rawText": "'m.js'",
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
                                "name": {
                                    "kind": 134299649,
                                    "text": "q",
                                    "rawText": "q",
                                    "flags": 96,
                                    "start": 182,
                                    "end": 184
                                },
                                "asKeyword": {
                                    "kind": 16494,
                                    "flags": 64,
                                    "start": 184,
                                    "end": 187
                                },
                                "binding": {
                                    "kind": 134299649,
                                    "text": "o",
                                    "rawText": "o",
                                    "flags": 96,
                                    "start": 187,
                                    "end": 189
                                },
                                "flags": 16,
                                "start": 182,
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
                "start": 172,
                "end": 191
            },
            "flags": 16,
            "start": 172,
            "end": 204
        }
    ],
    "isModule": true,
    "source": "import { x as d } from 'm.js';\n\nimport n from 'n.js';\n\nimport { y as a } from 'm.js';\n\nimport w from 'n.js';\n\nexport { z as h } from 'm.js';\n\nimport * as foo from 'bar.js';\n\nimport { q as o } from 'm.js';\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 205
}
```

### Printed

```javascript

import  x asd }  ;
import n  ;
import  y asa }  ;
import w  ;
eport  z as h } from ;
import * as   ;
import  q aso }  ;
```

### Diagnostics

```javascript
✔ No errors
```

