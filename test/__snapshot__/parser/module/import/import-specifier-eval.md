# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import {eval} from 'foo';

import {ev\u0061l} from 'foo';

import {x as eval} from 'foo';

import {x as ev\u0061l} from 'foo';

import {\u0061rguments} from 'foo';

import {eval as x} from 'foo';
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
                    "start": 13,
                    "end": 18
                },
                "from": {
                    "kind": 201392131,
                    "text": "foo",
                    "rawText": "'foo'",
                    "flags": 4194400,
                    "start": 18,
                    "end": 24
                },
                "flags": 0,
                "start": 13,
                "end": 24
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
                                "asKeyword": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "eval",
                                    "rawText": "eval",
                                    "flags": 96,
                                    "start": 8,
                                    "end": 12
                                },
                                "flags": 16,
                                "start": 8,
                                "end": 12
                            }
                        ],
                        "flags": 0,
                        "start": 8,
                        "end": 12
                    },
                    "flags": 16,
                    "start": 6,
                    "end": 13
                },
                "flags": 16,
                "start": 6,
                "end": 13
            },
            "flags": 16,
            "start": 6,
            "end": 25
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 1,
                "start": 25,
                "end": 33
            },
            "fromClause": {
                "kind": 256,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 0,
                    "start": 45,
                    "end": 50
                },
                "from": {
                    "kind": 201392131,
                    "text": "foo",
                    "rawText": "'foo'",
                    "flags": 4194400,
                    "start": 50,
                    "end": 56
                },
                "flags": 0,
                "start": 45,
                "end": 56
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
                                "asKeyword": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "eval",
                                    "rawText": "ev\\u0061l",
                                    "flags": 96,
                                    "start": 35,
                                    "end": 44
                                },
                                "flags": 16,
                                "start": 35,
                                "end": 44
                            }
                        ],
                        "flags": 0,
                        "start": 35,
                        "end": 44
                    },
                    "flags": 16,
                    "start": 33,
                    "end": 45
                },
                "flags": 16,
                "start": 33,
                "end": 45
            },
            "flags": 16,
            "start": 33,
            "end": 57
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 1,
                "start": 57,
                "end": 65
            },
            "fromClause": {
                "kind": 256,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 0,
                    "start": 77,
                    "end": 82
                },
                "from": {
                    "kind": 201392131,
                    "text": "foo",
                    "rawText": "'foo'",
                    "flags": 4194400,
                    "start": 82,
                    "end": 88
                },
                "flags": 0,
                "start": 77,
                "end": 88
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
                                    "start": 67,
                                    "end": 68
                                },
                                "asKeyword": {
                                    "kind": 16494,
                                    "flags": 64,
                                    "start": 68,
                                    "end": 71
                                },
                                "binding": {
                                    "kind": 134299649,
                                    "text": "eval",
                                    "rawText": "eval",
                                    "flags": 96,
                                    "start": 71,
                                    "end": 76
                                },
                                "flags": 16,
                                "start": 67,
                                "end": 76
                            }
                        ],
                        "flags": 0,
                        "start": 67,
                        "end": 76
                    },
                    "flags": 16,
                    "start": 65,
                    "end": 77
                },
                "flags": 16,
                "start": 65,
                "end": 77
            },
            "flags": 16,
            "start": 65,
            "end": 89
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 1,
                "start": 89,
                "end": 97
            },
            "fromClause": {
                "kind": 256,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 0,
                    "start": 114,
                    "end": 119
                },
                "from": {
                    "kind": 201392131,
                    "text": "foo",
                    "rawText": "'foo'",
                    "flags": 4194400,
                    "start": 119,
                    "end": 125
                },
                "flags": 0,
                "start": 114,
                "end": 125
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
                                    "start": 99,
                                    "end": 100
                                },
                                "asKeyword": {
                                    "kind": 16494,
                                    "flags": 64,
                                    "start": 100,
                                    "end": 103
                                },
                                "binding": {
                                    "kind": 134299649,
                                    "text": "eval",
                                    "rawText": "ev\\u0061l",
                                    "flags": 96,
                                    "start": 103,
                                    "end": 113
                                },
                                "flags": 16,
                                "start": 99,
                                "end": 113
                            }
                        ],
                        "flags": 0,
                        "start": 99,
                        "end": 113
                    },
                    "flags": 16,
                    "start": 97,
                    "end": 114
                },
                "flags": 16,
                "start": 97,
                "end": 114
            },
            "flags": 16,
            "start": 97,
            "end": 126
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 1,
                "start": 126,
                "end": 134
            },
            "fromClause": {
                "kind": 256,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 0,
                    "start": 151,
                    "end": 156
                },
                "from": {
                    "kind": 201392131,
                    "text": "foo",
                    "rawText": "'foo'",
                    "flags": 4194400,
                    "start": 156,
                    "end": 162
                },
                "flags": 0,
                "start": 151,
                "end": 162
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
                                "asKeyword": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "arguments",
                                    "rawText": "\\u0061rguments",
                                    "flags": 96,
                                    "start": 136,
                                    "end": 150
                                },
                                "flags": 16,
                                "start": 136,
                                "end": 150
                            }
                        ],
                        "flags": 0,
                        "start": 136,
                        "end": 150
                    },
                    "flags": 16,
                    "start": 134,
                    "end": 151
                },
                "flags": 16,
                "start": 134,
                "end": 151
            },
            "flags": 16,
            "start": 134,
            "end": 163
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 1,
                "start": 163,
                "end": 171
            },
            "fromClause": {
                "kind": 256,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 0,
                    "start": 183,
                    "end": 188
                },
                "from": {
                    "kind": 201392131,
                    "text": "foo",
                    "rawText": "'foo'",
                    "flags": 4194400,
                    "start": 188,
                    "end": 194
                },
                "flags": 0,
                "start": 183,
                "end": 194
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
                                    "text": "eval",
                                    "rawText": "eval",
                                    "flags": 96,
                                    "start": 173,
                                    "end": 177
                                },
                                "asKeyword": {
                                    "kind": 16494,
                                    "flags": 64,
                                    "start": 177,
                                    "end": 180
                                },
                                "binding": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 180,
                                    "end": 182
                                },
                                "flags": 16,
                                "start": 173,
                                "end": 182
                            }
                        ],
                        "flags": 0,
                        "start": 173,
                        "end": 182
                    },
                    "flags": 16,
                    "start": 171,
                    "end": 183
                },
                "flags": 16,
                "start": 171,
                "end": 183
            },
            "flags": 16,
            "start": 171,
            "end": 195
        }
    ],
    "isModule": true,
    "source": "import {eval} from 'foo';\n\nimport {ev\\u0061l} from 'foo';\n\nimport {x as eval} from 'foo';\n\nimport {x as ev\\u0061l} from 'foo';\n\nimport {\\u0061rguments} from 'foo';\n\nimport {eval as x} from 'foo';",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 195
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'eval' and 'arguments' cannot be used as an identifier here - start: 12, end: 13
✖ 'eval' and 'arguments' cannot contain escape characters - start: 44, end: 45
✖ 'eval' and 'arguments' cannot contain escape characters - start: 150, end: 151

```

