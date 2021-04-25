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
                "flags": 768,
                "start": 0,
                "end": 6
            },
            "fromClause": {
                "kind": 201392131,
                "text": "y",
                "rawText": "y",
                "flags": 768,
                "start": 15,
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
                                "moduleExportName": null,
                                "name": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 512,
                                    "start": 8,
                                    "end": 9
                                },
                                "flags": 128,
                                "autofix": 0,
                                "start": 8,
                                "end": 9
                            }
                        ],
                        "autofix": 0,
                        "flags": 0,
                        "start": 8,
                        "end": 9
                    },
                    "autofix": 0,
                    "flags": 128,
                    "start": 6,
                    "end": 10
                },
                "autofix": 0,
                "flags": 128,
                "start": 6,
                "end": 10
            },
            "flags": 128,
            "start": 6,
            "end": 19
        }
    ],
    "isModule": true,
    "text": "import {x} from \"y\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```

