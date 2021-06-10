# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import foo from "foo";
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
                    "start": 10,
                    "end": 15
                },
                "from": {
                    "kind": 201392131,
                    "text": "foo",
                    "rawText": "\"foo\"",
                    "flags": 96,
                    "start": 15,
                    "end": 21
                },
                "flags": 0,
                "start": 10,
                "end": 21
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 6,
                    "end": 10
                },
                "nameSpaceImport": null,
                "namedImports": null,
                "flags": 16,
                "start": 0,
                "end": 10
            },
            "flags": 80,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": true,
    "source": "import foo from \"foo\";",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

import foo  ;
```

### Diagnostics

```javascript
✔ No errors
```

