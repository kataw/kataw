# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
await []
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
                "kind": 208,
                "awaitKeyword": {
                    "kind": 82196,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "expression": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 7
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 5,
                    "end": 8
                },
                "flags": 32,
                "transformFlags": 4096,
                "start": 0,
                "end": 8
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": true,
    "source": "await []",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript
await [];
```

### Diagnostics

```javascript
✔ No errors
```

