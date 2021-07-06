# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import };
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
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 8,
            "end": 9
        }
    ],
    "isModule": true,
    "source": "import };",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 6, end: 8
✖ Declaration or statement expected - start: 6, end: 8

```

