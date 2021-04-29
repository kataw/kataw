# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import "y"
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
            "fromClause": null,
            "moduleSpecifier": {
                "kind": 201392131,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "start": 6,
                "end": 10
            },
            "importClause": null,
            "flags": 16,
            "start": 6,
            "end": 10
        }
    ],
    "isModule": true,
    "source": "import \"y\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
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

