# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import x, * as a from "y"
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
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "start": 21,
                "end": 25
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 6,
                    "end": 8
                },
                "nameSpaceImport": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 14,
                    "end": 16
                },
                "namedImports": null,
                "flags": 16,
                "start": 6,
                "end": 16
            },
            "flags": 16,
            "start": 6,
            "end": 25
        }
    ],
    "isModule": true,
    "text": "import x, * as a from \"y\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
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

