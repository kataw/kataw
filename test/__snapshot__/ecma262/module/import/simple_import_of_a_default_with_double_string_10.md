# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import {x as a, z} from "y"
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
                "kind": 325,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "start": 18,
                    "end": 23
                },
                "from": {
                    "kind": 201392131,
                    "text": "y",
                    "rawText": "\"y\"",
                    "flags": 96,
                    "start": 23,
                    "end": 27
                },
                "flags": 0,
                "start": 18,
                "end": 27
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
                                    "start": 8,
                                    "end": 9
                                },
                                "asKeyword": {
                                    "kind": 16494,
                                    "flags": 80,
                                    "start": 9,
                                    "end": 12
                                },
                                "binding": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 12,
                                    "end": 14
                                },
                                "flags": 16,
                                "start": 8,
                                "end": 14
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
                                    "start": 15,
                                    "end": 17
                                },
                                "flags": 16,
                                "start": 15,
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
            "flags": 80,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": true,
    "source": "import {x as a, z} from \"y\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

import { x asa, z }  ;
```

### Diagnostics

```javascript
✔ No errors
```

