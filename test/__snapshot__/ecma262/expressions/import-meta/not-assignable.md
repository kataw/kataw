# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import.meta = true;
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
                "kind": 125,
                "left": {
                    "kind": 299,
                    "importKeyword": {
                        "kind": 37814364,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 6
                    },
                    "metaIdentifier": {
                        "kind": 16595,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 11
                    },
                    "flags": 6,
                    "transformFlags": 0,
                    "start": 96,
                    "end": 11
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 13
                },
                "right": {
                    "kind": 24752947,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 18
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 18
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": true,
    "source": "import.meta = true;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 11, end: 13

```

