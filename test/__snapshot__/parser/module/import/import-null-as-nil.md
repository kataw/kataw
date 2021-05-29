# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import { null as nil } from "bar"
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
                    "flags": 64,
                    "start": 22,
                    "end": 27
                },
                "from": {
                    "kind": 201392131,
                    "text": "bar",
                    "rawText": "\"bar\"",
                    "flags": 96,
                    "start": 27,
                    "end": 33
                },
                "flags": 0,
                "start": 22,
                "end": 33
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
                                    "text": "null",
                                    "rawText": "null",
                                    "flags": 96,
                                    "start": 8,
                                    "end": 13
                                },
                                "asKeyword": {
                                    "kind": 16494,
                                    "flags": 64,
                                    "start": 13,
                                    "end": 16
                                },
                                "binding": {
                                    "kind": 134299649,
                                    "text": "nil",
                                    "rawText": "nil",
                                    "flags": 96,
                                    "start": 16,
                                    "end": 20
                                },
                                "flags": 16,
                                "start": 8,
                                "end": 20
                            }
                        ],
                        "flags": 0,
                        "start": 8,
                        "end": 20
                    },
                    "flags": 16,
                    "start": 6,
                    "end": 22
                },
                "flags": 16,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": true,
    "source": "import { null as nil } from \"bar\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

import { null asnil }  ;
```

### Diagnostics

```javascript
✔ No errors
```

