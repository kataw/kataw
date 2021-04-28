# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import {bar as baz} from "foo";
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
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 24,
                "end": 30
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
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 768,
                                    "start": 8,
                                    "end": 11
                                },
                                "binding": {
                                    "kind": 134299649,
                                    "text": "baz",
                                    "rawText": "baz",
                                    "flags": 768,
                                    "start": 14,
                                    "end": 18
                                },
                                "flags": 128,
                                "start": 8,
                                "end": 18
                            }
                        ],
                        "flags": 0,
                        "start": 8,
                        "end": 18
                    },
                    "flags": 128,
                    "start": 6,
                    "end": 19
                },
                "flags": 128,
                "start": 6,
                "end": 19
            },
            "flags": 128,
            "start": 6,
            "end": 31
        }
    ],
    "isModule": true,
    "text": "import {bar as baz} from \"foo\";",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
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

