# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true, allowTypes: true }
`````

## Input

`````js
import type { foo25, bar1 } from "baz";

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
            "typeKeyword": {
                "kind": 24775,
                "flags": 64,
                "start": 6,
                "end": 11
            },
            "typeofKeyword": null,
            "fromClause": {
                "kind": 325,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "start": 27,
                    "end": 32
                },
                "from": {
                    "kind": 201392131,
                    "text": "baz",
                    "rawText": "\"baz\"",
                    "flags": 96,
                    "start": 32,
                    "end": 38
                },
                "flags": 0,
                "start": 27,
                "end": 38
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": {
                    "kind": 134299649,
                    "text": "type",
                    "rawText": "type",
                    "flags": 96,
                    "start": 6,
                    "end": 11
                },
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
                                    "text": "foo25",
                                    "rawText": "foo25",
                                    "flags": 96,
                                    "start": 13,
                                    "end": 19
                                },
                                "flags": 16,
                                "start": 13,
                                "end": 19
                            },
                            {
                                "kind": 264,
                                "typeKeyword": null,
                                "moduleExportName": null,
                                "name": null,
                                "asKeyword": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "bar1",
                                    "rawText": "bar1",
                                    "flags": 96,
                                    "start": 20,
                                    "end": 25
                                },
                                "flags": 16,
                                "start": 20,
                                "end": 25
                            }
                        ],
                        "flags": 0,
                        "start": 13,
                        "end": 25
                    },
                    "flags": 16,
                    "start": 11,
                    "end": 27
                },
                "flags": 16,
                "start": 0,
                "end": 27
            },
            "flags": 80,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": true,
    "source": "import type { foo25, bar1 } from \"baz\";\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

import type type{  foo25,  bar1, } from '"baz"';

```

### Diagnostics

```javascript
✔ No errors
```

