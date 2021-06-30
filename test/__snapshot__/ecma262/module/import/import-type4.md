# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true, allowTypes: true }
`````

## Input

`````js
import type a * from "b";
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
                "fromKeyword": null,
                "from": {
                    "kind": 201392131,
                    "text": "b",
                    "rawText": "\"b\"",
                    "flags": 96,
                    "start": 20,
                    "end": 24
                },
                "flags": 0,
                "start": 20,
                "end": 24
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 11,
                    "end": 13
                },
                "nameSpaceImport": {
                    "kind": 255,
                    "asteriskToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 13,
                        "end": 15
                    },
                    "asKeyword": null,
                    "binding": {
                        "kind": 134299649,
                        "text": "from",
                        "rawText": "from",
                        "flags": 96,
                        "start": 15,
                        "end": 20
                    },
                    "flags": 16,
                    "start": 13,
                    "end": 20
                },
                "namedImports": null,
                "flags": 16,
                "start": 0,
                "end": 20
            },
            "flags": 80,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": true,
    "source": "import type a * from \"b\";",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

import type a * from "\"b\"";

```

### Diagnostics

```javascript
✔ No errors
```

