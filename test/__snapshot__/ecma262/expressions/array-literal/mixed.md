# Kataw parser test case

## Input

`````js
[ , , /* 1 */ ,,]
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
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 230,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 1
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 3
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 5
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 15
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 16
                },
                "flags": 32,
                "transformFlags": 8,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "[ , , /* 1 */ ,,]",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
[, , , ,];
```

### Diagnostics

```javascript
✔ No errors
```

