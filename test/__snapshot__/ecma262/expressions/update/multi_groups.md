# Kataw parser test case

## Input

`````js
(((x)));
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
                "kind": 121,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 121,
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 4
                        },
                        "flags": 2,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 5
                    },
                    "flags": 1,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 6
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 7
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": false,
    "source": "(((x)));",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript
(((x)));
```

### Diagnostics

```javascript
✔ No errors
```

