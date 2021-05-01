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
                    "start": 22,
                    "end": 27
                },
                "from": {
                    "kind": 201392131,
                    "text": "bar",
                    "original": "\"bar\"",
                    "rawText": " \"bar\"",
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
                                "name": null,
                                "binding": {
                                    "kind": 134299649,
                                    "original": "null",
                                    "text": "null",
                                    "rawText": " null",
                                    "flags": 64,
                                    "start": 8,
                                    "end": 13
                                },
                                "flags": 16,
                                "start": 8,
                                "end": 13
                            },
                            {
                                "kind": 264,
                                "moduleExportName": null,
                                "name": null,
                                "binding": {
                                    "kind": 134299649,
                                    "original": "as",
                                    "text": "as",
                                    "rawText": " as",
                                    "flags": 64,
                                    "start": 13,
                                    "end": 16
                                },
                                "flags": 16,
                                "start": 13,
                                "end": 16
                            },
                            {
                                "kind": 264,
                                "moduleExportName": null,
                                "name": null,
                                "binding": {
                                    "kind": 134299649,
                                    "original": "nil",
                                    "text": "nil",
                                    "rawText": " nil",
                                    "flags": 64,
                                    "start": 16,
                                    "end": 20
                                },
                                "flags": 16,
                                "start": 16,
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
                "start": 6,
                "end": 22
            },
            "flags": 16,
            "start": 6,
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
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

