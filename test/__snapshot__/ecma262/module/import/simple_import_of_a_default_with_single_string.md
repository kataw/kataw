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
            "fromClause": {
                "kind": 325,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 13
                },
                "from": {
                    "kind": 201392131,
                    "text": "y",
                    "rawText": "'y'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 17
                },
                "flags": 0,
                "transformFlags": 0,
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
                    "transformFlags": 0,
                    "start": 6,
                    "end": 8
                },
                "nameSpaceImport": null,
                "namedImports": null,
                "flags": 16,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": true,
    "source": "import x from 'y'",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

import x from "'y'";
```

### Diagnostics

```javascript
✔ No errors
```

