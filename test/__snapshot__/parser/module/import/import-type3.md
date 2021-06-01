# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true, allowTypes: true }
`````

## Input

`````js
import { type Foo12 } from "bar";
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
                    "flags": 80,
                    "start": 21,
                    "end": 26
                },
                "from": {
                    "kind": 201392131,
                    "text": "bar",
                    "rawText": "\"bar\"",
                    "flags": 96,
                    "start": 26,
                    "end": 32
                },
                "flags": 0,
                "start": 21,
                "end": 32
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
                                "typeKeyword": {
                                    "kind": 24775,
                                    "flags": 64,
                                    "start": 8,
                                    "end": 13
                                },
                                "moduleExportName": null,
                                "name": null,
                                "asKeyword": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "Foo12",
                                    "rawText": "Foo12",
                                    "flags": 96,
                                    "start": 13,
                                    "end": 19
                                },
                                "flags": 16,
                                "start": 8,
                                "end": 19
                            }
                        ],
                        "flags": 0,
                        "start": 8,
                        "end": 19
                    },
                    "flags": 16,
                    "start": 6,
                    "end": 21
                },
                "flags": 16,
                "start": 0,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": true,
    "source": "import { type Foo12 } from \"bar\";",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

import { Foo12 }  ;
```

### Diagnostics

```javascript
✔ No errors
```

