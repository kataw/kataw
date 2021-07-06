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

import {xy as ev\u0061l} from 'foo';

import {\u0061rguments} from 'foo';

import {eval as o} from 'foo';
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
                    "start": 13,
                    "end": 18
                },
                "from": {
                    "kind": 201392131,
                    "text": "foo",
                    "rawText": "'foo'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 24
                },
                "flags": 0,
                "transformFlags": 0,
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
                                "typeKeyword": null,
                                "moduleExportName": null,
                                "name": null,
                                "asKeyword": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "eval",
                                    "rawText": "eval",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 12
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 12
                            }
                        ],
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 12
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 13
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 0,
                "end": 13
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 25
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "transformFlags": 0,
                "start": 25,
                "end": 33
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": {
                "kind": 325,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 45,
                    "end": 50
                },
                "from": {
                    "kind": 201392131,
                    "text": "foo",
                    "rawText": "'foo'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 50,
                    "end": 56
                },
                "flags": 0,
                "transformFlags": 0,
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
                                "typeKeyword": null,
                                "moduleExportName": null,
                                "name": null,
                                "asKeyword": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "eval",
                                    "rawText": "ev\\u0061l",
                                    "flags": 16480,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 44
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 44
                            }
                        ],
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 35,
                        "end": 44
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 45
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 25,
                "end": 45
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 25,
            "end": 57
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "transformFlags": 0,
                "start": 57,
                "end": 65
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": {
                "kind": 325,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 77,
                    "end": 82
                },
                "from": {
                    "kind": 201392131,
                    "text": "foo",
                    "rawText": "'foo'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 82,
                    "end": 88
                },
                "flags": 0,
                "transformFlags": 0,
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
                                "typeKeyword": null,
                                "moduleExportName": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 67,
                                    "end": 68
                                },
                                "asKeyword": {
                                    "kind": 16494,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 68,
                                    "end": 71
                                },
                                "binding": {
                                    "kind": 134299649,
                                    "text": "eval",
                                    "rawText": "eval",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 71,
                                    "end": 76
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 67,
                                "end": 76
                            }
                        ],
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 67,
                        "end": 76
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 65,
                    "end": 77
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 57,
                "end": 77
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 57,
            "end": 89
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "transformFlags": 0,
                "start": 89,
                "end": 97
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": {
                "kind": 325,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 115,
                    "end": 120
                },
                "from": {
                    "kind": 201392131,
                    "text": "foo",
                    "rawText": "'foo'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 120,
                    "end": 126
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 115,
                "end": 126
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
                                    "text": "xy",
                                    "rawText": "xy",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 99,
                                    "end": 101
                                },
                                "asKeyword": {
                                    "kind": 16494,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 101,
                                    "end": 104
                                },
                                "binding": {
                                    "kind": 134299649,
                                    "text": "eval",
                                    "rawText": "ev\\u0061l",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 104,
                                    "end": 114
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 99,
                                "end": 114
                            }
                        ],
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 99,
                        "end": 114
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 97,
                    "end": 115
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 89,
                "end": 115
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 89,
            "end": 127
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "transformFlags": 0,
                "start": 127,
                "end": 135
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": {
                "kind": 325,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 152,
                    "end": 157
                },
                "from": {
                    "kind": 201392131,
                    "text": "foo",
                    "rawText": "'foo'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 157,
                    "end": 163
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 152,
                "end": 163
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
                                    "text": "arguments",
                                    "rawText": "\\u0061rguments",
                                    "flags": 16480,
                                    "transformFlags": 0,
                                    "start": 137,
                                    "end": 151
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 137,
                                "end": 151
                            }
                        ],
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 137,
                        "end": 151
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 135,
                    "end": 152
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 127,
                "end": 152
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 127,
            "end": 164
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "transformFlags": 0,
                "start": 164,
                "end": 172
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": {
                "kind": 325,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 184,
                    "end": 189
                },
                "from": {
                    "kind": 201392131,
                    "text": "foo",
                    "rawText": "'foo'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 189,
                    "end": 195
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 184,
                "end": 195
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
                                    "text": "eval",
                                    "rawText": "eval",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 174,
                                    "end": 178
                                },
                                "asKeyword": {
                                    "kind": 16494,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 178,
                                    "end": 181
                                },
                                "binding": {
                                    "kind": 134299649,
                                    "text": "o",
                                    "rawText": "o",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 181,
                                    "end": 183
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 174,
                                "end": 183
                            }
                        ],
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 174,
                        "end": 183
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 172,
                    "end": 184
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 164,
                "end": 184
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 164,
            "end": 196
        }
    ],
    "isModule": true,
    "source": "import {eval} from 'foo';\n\nimport {ev\\u0061l} from 'foo';\n\nimport {x as eval} from 'foo';\n\nimport {xy as ev\\u0061l} from 'foo';\n\nimport {\\u0061rguments} from 'foo';\n\nimport {eval as o} from 'foo';",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 196
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'eval' and 'arguments' cannot be used as an identifier here - start: 8, end: 13
✖ 'eval' and 'arguments' cannot contain escape characters - start: 35, end: 45
✖ Duplicate identifier - start: 44, end: 45
✖ Duplicate identifier - start: 71, end: 76
✖ Duplicate identifier - start: 104, end: 114
✖ 'eval' and 'arguments' cannot contain escape characters - start: 137, end: 152

```

