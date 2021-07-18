# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import , from 'm.js';
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
            "moduleSpecifier": null,
            "importClause": null,
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "from",
                "rawText": "from",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 13
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 8,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "m.js",
                "rawText": "'m.js'",
                "flags": 4194400,
                "transformFlags": 0,
                "start": 13,
                "end": 20
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 13,
            "end": 21
        }
    ],
    "isModule": true,
    "source": "import , from 'm.js';",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 6, end: 8
✖ ',' expected - start: 6, end: 8
✖ '; ' expected - start: 13, end: 20

```

