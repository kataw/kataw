# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import typeof from "iteration"
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
            "typeofKeyword": {
                "kind": 138477613,
                "flags": 64,
                "transformFlags": 8192,
                "start": 6,
                "end": 13
            },
            "fromClause": {
                "kind": 325,
                "fromKeyword": null,
                "from": {
                    "kind": 201392131,
                    "text": "iteration",
                    "rawText": "\"iteration\"",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 30
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 18,
                "end": 30
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": {
                    "kind": 134299649,
                    "text": "from",
                    "rawText": "from",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 18
                },
                "nameSpaceImport": null,
                "namedImports": null,
                "flags": 16,
                "transformFlags": 0,
                "start": 0,
                "end": 18
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": true,
    "source": "import typeof from \"iteration\"",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Import declaration expected - start: 6, end: 13

```

