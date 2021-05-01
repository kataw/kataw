# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import * as a from "y"
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
                "kind": 256,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 0,
                    "start": 13,
                    "end": 18
                },
                "from": {
                    "kind": 201392131,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 18,
                    "end": 22
                },
                "flags": 0,
                "start": 13,
                "end": 22
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": null,
                "nameSpaceImport": {
                    "kind": 255,
                    "asteriskToken": {
                        "kind": 67143222,
                        "flags": 0,
                        "start": 6,
                        "end": 8
                    },
                    "asKeyword": null,
                    "binding": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 11,
                        "end": 13
                    },
                    "flags": 16,
                    "start": 6,
                    "end": 13
                },
                "namedImports": null,
                "flags": 16,
                "start": 6,
                "end": 13
            },
            "flags": 16,
            "start": 6,
            "end": 22
        }
    ],
    "isModule": true,
    "source": "import * as a from \"y\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
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

