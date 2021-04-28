# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import {x as z,} from "y"
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
                "text": "y",
                "rawText": "y",
                "flags": 768,
                "start": 21,
                "end": 25
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
                                    "flags": 768,
                                    "start": 8,
                                    "end": 9
                                },
                                "binding": {
                                    "kind": 134299649,
                                    "text": "z",
                                    "rawText": "z",
                                    "flags": 768,
                                    "start": 12,
                                    "end": 14
                                },
                                "flags": 128,
                                "start": 8,
                                "end": 14
                            }
                        ],
                        "flags": 0,
                        "start": 8,
                        "end": 15
                    },
                    "flags": 128,
                    "start": 6,
                    "end": 16
                },
                "flags": 128,
                "start": 6,
                "end": 16
            },
            "flags": 128,
            "start": 6,
            "end": 25
        }
    ],
    "isModule": true,
    "text": "import {x as z,} from \"y\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
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

