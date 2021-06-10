# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import {x, z,} from "y"
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
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": {
                "kind": 256,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "start": 14,
                    "end": 19
                },
                "from": {
                    "kind": 201392131,
                    "text": "y",
                    "rawText": "\"y\"",
                    "flags": 96,
                    "start": 19,
                    "end": 23
                },
                "flags": 0,
                "start": 14,
                "end": 23
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
                                    "start": 8,
                                    "end": 9
                                },
                                "flags": 16,
                                "start": 8,
                                "end": 9
                            },
                            {
                                "kind": 264,
                                "typeKeyword": null,
                                "moduleExportName": null,
                                "name": null,
                                "asKeyword": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "z",
                                    "rawText": "z",
                                    "flags": 96,
                                    "start": 10,
                                    "end": 12
                                },
                                "flags": 16,
                                "start": 10,
                                "end": 12
                            }
                        ],
                        "flags": 0,
                        "start": 8,
                        "end": 13
                    },
                    "flags": 16,
                    "start": 6,
                    "end": 14
                },
                "flags": 16,
                "start": 0,
                "end": 14
            },
            "flags": 80,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": true,
    "source": "import {x, z,} from \"y\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

import { x, z }  ;
```

### Diagnostics

```javascript
✔ No errors
```

