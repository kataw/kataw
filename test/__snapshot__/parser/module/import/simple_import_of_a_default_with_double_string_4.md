# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import {x} from "y"
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
            "isType": false,
            "fromClause": {
                "kind": 256,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 80,
                    "start": 10,
                    "end": 15
                },
                "from": {
                    "kind": 201392131,
                    "text": "y",
                    "rawText": "\"y\"",
                    "flags": 96,
                    "start": 15,
                    "end": 19
                },
                "flags": 0,
                "start": 10,
                "end": 19
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
                                "isType": false,
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
                            }
                        ],
                        "flags": 0,
                        "start": 8,
                        "end": 9
                    },
                    "flags": 16,
                    "start": 6,
                    "end": 10
                },
                "flags": 16,
                "start": 0,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": true,
    "source": "import {x} from \"y\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

import { x }  ;
```

### Diagnostics

```javascript
✔ No errors
```

