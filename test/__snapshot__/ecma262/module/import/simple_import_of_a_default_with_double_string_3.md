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
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": null,
            "moduleSpecifier": {
                "kind": 201392131,
                "text": "y",
                "rawText": "\"y\"",
                "flags": 96,
                "transformFlags": 0,
                "start": 6,
                "end": 10
            },
            "importClause": null,
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": true,
    "source": "import \"y\"",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript

import "\"y\""
```

### Diagnostics

```javascript
✔ No errors
```

