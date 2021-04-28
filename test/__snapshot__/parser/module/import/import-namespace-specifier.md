# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import * as foo from "foo";
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
                "start": 20,
                "end": 26
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": null,
                "nameSpaceImport": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 768,
                    "start": 11,
                    "end": 15
                },
                "namedImports": null,
                "flags": 128,
                "start": 6,
                "end": 15
            },
            "flags": 128,
            "start": 6,
            "end": 27
        }
    ],
    "isModule": true,
    "text": "import * as foo from \"foo\";",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
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

