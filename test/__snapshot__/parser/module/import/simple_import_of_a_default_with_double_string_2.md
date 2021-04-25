# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import {} from "y"
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
                "flags": 768,
                "start": 0,
                "end": 6
            },
            "fromClause": {
                "kind": 201392131,
                "text": "y",
                "rawText": "y",
                "flags": 768,
                "start": 14,
                "end": 18
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
                        "specifiers": [],
                        "autofix": 0,
                        "flags": 0,
                        "start": 8,
                        "end": 8
                    },
                    "autofix": 0,
                    "flags": 128,
                    "start": 6,
                    "end": 9
                },
                "autofix": 0,
                "flags": 128,
                "start": 6,
                "end": 9
            },
            "flags": 128,
            "start": 6,
            "end": 18
        }
    ],
    "isModule": true,
    "text": "import {} from \"y\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```

