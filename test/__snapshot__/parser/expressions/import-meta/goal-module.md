# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import.meta;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 207,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 0,
                    "start": 0,
                    "end": 6
                },
                "metaIdentifier": {
                    "kind": 16595,
                    "flags": 0,
                    "start": 7,
                    "end": 11
                },
                "flags": 6,
                "start": 96,
                "end": 11
            },
            "flags": 16,
            "start": 6,
            "end": 12
        }
    ],
    "isModule": true,
    "source": "import.meta;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript

import.meta;
```

### Diagnostics

```javascript
✔ No errors
```

