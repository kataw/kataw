# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import {bar, baz,} from "foo";
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
                    "start": 18,
                    "end": 23
                },
                "from": {
                    "kind": 201392131,
                    "text": "foo",
                    "rawText": " \"foo\"",
                    "flags": 96,
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
                                "moduleExportName": null,
                                "name": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 64,
                                    "start": 8,
                                    "end": 11
                                },
                                "flags": 16,
                                "start": 8,
                                "end": 11
                            },
                            {
                                "kind": 264,
                                "moduleExportName": null,
                                "name": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "baz",
                                    "rawText": "baz",
                                    "flags": 64,
                                    "start": 12,
                                    "end": 16
                                },
                                "flags": 16,
                                "start": 12,
                                "end": 16
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
                "start": 6,
                "end": 18
            },
            "flags": 16,
            "start": 6,
            "end": 30
        }
    ],
    "isModule": true,
    "source": "import {bar, baz,} from \"foo\";",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
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

