# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import x from 'y'
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
                "flags": 67109632,
                "start": 13,
                "end": 17
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 6,
                    "end": 8
                },
                "nameSpaceImport": null,
                "namedImports": null,
                "flags": 128,
                "start": 6,
                "end": 8
            },
            "flags": 128,
            "start": 6,
            "end": 17
        }
    ],
    "isModule": true,
    "text": "import x from 'y'",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
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

