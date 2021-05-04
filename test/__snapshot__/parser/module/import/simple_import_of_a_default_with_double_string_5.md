# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import {x,} from "y"
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
                "kind": 256,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 0,
                    "start": 11,
                    "end": 16
                },
                "from": {
                    "kind": 201392131,
                    "text": "y",
                    "rawText": "\"y\"",
                    "flags": 96,
                    "start": 16,
                    "end": 20
                },
                "flags": 0,
                "start": 11,
                "end": 20
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
                        "end": 10
                    },
                    "flags": 16,
                    "start": 6,
                    "end": 11
                },
                "flags": 16,
                "start": 6,
                "end": 11
            },
            "flags": 16,
            "start": 6,
            "end": 20
        }
    ],
    "isModule": true,
    "source": "import {x,} from \"y\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
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

