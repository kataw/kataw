# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import {default as foo} from "foo";
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
                "flags": 96,
                "start": 28,
                "end": 34
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
                                    "text": "default",
                                    "rawText": "default",
                                    "flags": 64,
                                    "start": 8,
                                    "end": 15
                                },
                                "flags": 16,
                                "start": 8,
                                "end": 15
                            },
                            {
                                "kind": 264,
                                "moduleExportName": null,
                                "name": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "as",
                                    "rawText": "as",
                                    "flags": 64,
                                    "start": 15,
                                    "end": 18
                                },
                                "flags": 16,
                                "start": 15,
                                "end": 18
                            },
                            {
                                "kind": 264,
                                "moduleExportName": null,
                                "name": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 64,
                                    "start": 18,
                                    "end": 22
                                },
                                "flags": 16,
                                "start": 18,
                                "end": 22
                            }
                        ],
                        "flags": 0,
                        "start": 8,
                        "end": 22
                    },
                    "flags": 16,
                    "start": 6,
                    "end": 23
                },
                "flags": 16,
                "start": 6,
                "end": 23
            },
            "flags": 16,
            "start": 6,
            "end": 35
        }
    ],
    "isModule": true,
    "source": "import {default as foo} from \"foo\";",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
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

