# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import {'🍕' as x} from 'foo';

import {'a b' as x} from 'foo';

import {'\uD800\uDC00' as x} from 'foo';

import {'' as x} from 'foo';
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
                "start": 0,
                "end": 6
            },
            "fromClause": {
                "kind": 256,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 80,
                    "start": 18,
                    "end": 23
                },
                "from": {
                    "kind": 201392131,
                    "text": "foo",
                    "rawText": "'foo'",
                    "flags": 4194400,
                    "start": 23,
                    "end": 29
                },
                "flags": 0,
                "start": 18,
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
                                "moduleExportName": {
                                    "kind": 201392131,
                                    "text": "🍕",
                                    "rawText": "'🍕'",
                                    "flags": 4194400,
                                    "start": 8,
                                    "end": 12
                                },
                                "name": null,
                                "asKeyword": {
                                    "kind": 16494,
                                    "flags": 80,
                                    "start": 12,
                                    "end": 15
                                },
                                "binding": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 15,
                                    "end": 17
                                },
                                "flags": 16,
                                "start": 8,
                                "end": 17
                            }
                        ],
                        "flags": 0,
                        "start": 8,
                        "end": 17
                    },
                    "flags": 16,
                    "start": 6,
                    "end": 18
                },
                "flags": 16,
                "start": 0,
                "end": 18
            },
            "flags": 16,
            "start": 0,
            "end": 30
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "start": 30,
                "end": 38
            },
            "fromClause": {
                "kind": 256,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 80,
                    "start": 51,
                    "end": 56
                },
                "from": {
                    "kind": 201392131,
                    "text": "foo",
                    "rawText": "'foo'",
                    "flags": 4194400,
                    "start": 56,
                    "end": 62
                },
                "flags": 0,
                "start": 51,
                "end": 62
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
                                "moduleExportName": {
                                    "kind": 201392131,
                                    "text": "a b",
                                    "rawText": "'a b'",
                                    "flags": 4194400,
                                    "start": 40,
                                    "end": 45
                                },
                                "name": null,
                                "asKeyword": {
                                    "kind": 16494,
                                    "flags": 80,
                                    "start": 45,
                                    "end": 48
                                },
                                "binding": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 48,
                                    "end": 50
                                },
                                "flags": 16,
                                "start": 40,
                                "end": 50
                            }
                        ],
                        "flags": 0,
                        "start": 40,
                        "end": 50
                    },
                    "flags": 16,
                    "start": 38,
                    "end": 51
                },
                "flags": 16,
                "start": 30,
                "end": 51
            },
            "flags": 16,
            "start": 30,
            "end": 63
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "start": 63,
                "end": 71
            },
            "fromClause": {
                "kind": 256,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 80,
                    "start": 93,
                    "end": 98
                },
                "from": {
                    "kind": 201392131,
                    "text": "foo",
                    "rawText": "'foo'",
                    "flags": 4194400,
                    "start": 98,
                    "end": 104
                },
                "flags": 0,
                "start": 93,
                "end": 104
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
                                "moduleExportName": {
                                    "kind": 201392131,
                                    "text": "𐀀",
                                    "rawText": "'\\uD800\\uDC00'",
                                    "flags": 4210784,
                                    "start": 73,
                                    "end": 87
                                },
                                "name": null,
                                "asKeyword": {
                                    "kind": 16494,
                                    "flags": 80,
                                    "start": 87,
                                    "end": 90
                                },
                                "binding": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 90,
                                    "end": 92
                                },
                                "flags": 16,
                                "start": 73,
                                "end": 92
                            }
                        ],
                        "flags": 0,
                        "start": 73,
                        "end": 92
                    },
                    "flags": 16,
                    "start": 71,
                    "end": 93
                },
                "flags": 16,
                "start": 63,
                "end": 93
            },
            "flags": 16,
            "start": 63,
            "end": 105
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "start": 105,
                "end": 113
            },
            "fromClause": {
                "kind": 256,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 80,
                    "start": 123,
                    "end": 128
                },
                "from": {
                    "kind": 201392131,
                    "text": "foo",
                    "rawText": "'foo'",
                    "flags": 4194400,
                    "start": 128,
                    "end": 134
                },
                "flags": 0,
                "start": 123,
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
                        "specifiers": [
                            {
                                "kind": 264,
                                "moduleExportName": {
                                    "kind": 201392131,
                                    "text": "",
                                    "rawText": "''",
                                    "flags": 4194400,
                                    "start": 115,
                                    "end": 117
                                },
                                "name": null,
                                "asKeyword": {
                                    "kind": 16494,
                                    "flags": 80,
                                    "start": 117,
                                    "end": 120
                                },
                                "binding": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 120,
                                    "end": 122
                                },
                                "flags": 16,
                                "start": 115,
                                "end": 122
                            }
                        ],
                        "flags": 0,
                        "start": 115,
                        "end": 122
                    },
                    "flags": 16,
                    "start": 113,
                    "end": 123
                },
                "flags": 16,
                "start": 105,
                "end": 123
            },
            "flags": 16,
            "start": 105,
            "end": 135
        }
    ],
    "isModule": true,
    "source": "import {'🍕' as x} from 'foo';\n\nimport {'a b' as x} from 'foo';\n\nimport {'\\uD800\\uDC00' as x} from 'foo';\n\nimport {'' as x} from 'foo';",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 135
}
```

### Printed

```javascript

import { x }  ;
import { x }  ;
import { x }  ;
import { x }  ;
```

### Diagnostics

```javascript
✔ No errors
```

