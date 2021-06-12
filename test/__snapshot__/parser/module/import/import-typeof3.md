# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true, allowTypes: true }
`````

## Input

`````js
import { typeof Foo12 } from "bar";
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
                "kind": 256,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "start": 23,
                    "end": 28
                },
                "from": {
                    "kind": 201392131,
                    "text": "bar",
                    "rawText": "\"bar\"",
                    "flags": 96,
                    "start": 28,
                    "end": 34
                },
                "flags": 0,
                "start": 23,
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
                                "typeKeyword": null,
                                "moduleExportName": null,
                                "name": null,
                                "asKeyword": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "typeof",
                                    "rawText": "typeof",
                                    "flags": 96,
                                    "start": 8,
                                    "end": 15
                                },
                                "flags": 16,
                                "start": 8,
                                "end": 15
                            },
                            {
                                "kind": 264,
                                "typeKeyword": null,
                                "moduleExportName": null,
                                "name": null,
                                "asKeyword": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "Foo12",
                                    "rawText": "Foo12",
                                    "flags": 96,
                                    "start": 15,
                                    "end": 21
                                },
                                "flags": 16,
                                "start": 15,
                                "end": 21
                            }
                        ],
                        "flags": 0,
                        "start": 8,
                        "end": 21
                    },
                    "flags": 16,
                    "start": 6,
                    "end": 23
                },
                "flags": 16,
                "start": 0,
                "end": 23
            },
            "flags": 80,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": true,
    "source": "import { typeof Foo12 } from \"bar\";",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 16, end: 21

```

