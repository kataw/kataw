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
                "kind": 256,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 0,
                    "start": 8,
                    "end": 13
                },
                "from": {
                    "kind": 201392131,
                    "text": "y",
                    "rawText": "'y'",
                    "flags": 4194400,
                    "start": 13,
                    "end": 17
                },
                "flags": 0,
                "start": 8,
                "end": 17
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
                "nameSpaceImport": null,
                "namedImports": null,
                "flags": 16,
                "start": 6,
                "end": 8
            },
            "flags": 16,
            "start": 6,
            "end": 17
        }
    ],
    "isModule": true,
    "source": "import x from 'y'",
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

