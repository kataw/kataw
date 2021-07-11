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
                "kind": 325,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "start": 19,
                    "end": 24
                },
                "from": {
                    "kind": 201392131,
                    "text": "foo",
                    "rawText": "\"foo\"",
                    "flags": 96,
                    "start": 24,
                    "end": 30
                },
                "flags": 0,
                "start": 19,
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
                                "typeKeyword": null,
                                "moduleExportName": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 96,
                                    "start": 8,
                                    "end": 11
                                },
                                "asKeyword": {
                                    "kind": 16494,
                                    "flags": 80,
                                    "start": 11,
                                    "end": 14
                                },
                                "binding": {
                                    "kind": 134299649,
                                    "text": "baz",
                                    "rawText": "baz",
                                    "flags": 96,
                                    "start": 14,
                                    "end": 18
                                },
                                "flags": 16,
                                "start": 8,
                                "end": 18
                            }
                        ],
                        "flags": 0,
                        "start": 8,
                        "end": 18
                    },
                    "flags": 16,
                    "start": 6,
                    "end": 19
                },
                "flags": 16,
                "start": 0,
                "end": 19
            },
            "flags": 80,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": true,
    "source": "import {bar as baz} from \"foo\";",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

import { bar as  baz, } from "\"foo\"";

```

### Diagnostics

```javascript
✔ No errors
```

