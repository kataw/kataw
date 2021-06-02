# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true, allowTypes: true }
`````

## Input

`````js
import type foo24 from "bar";
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
                "kind": 256,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "start": 17,
                    "end": 22
                },
                "from": {
                    "kind": 201392131,
                    "text": "bar",
                    "rawText": "\"bar\"",
                    "flags": 96,
                    "start": 22,
                    "end": 28
                },
                "flags": 0,
                "start": 17,
                "end": 28
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": {
                    "kind": 134299649,
                    "text": "foo24",
                    "rawText": "foo24",
                    "flags": 96,
                    "start": 11,
                    "end": 17
                },
                "nameSpaceImport": null,
                "namedImports": null,
                "flags": 16,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": true,
    "source": "import type foo24 from \"bar\";",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

import foo24  ;
```

### Diagnostics

```javascript
✔ No errors
```

