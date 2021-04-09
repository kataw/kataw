# Kataw parser test case

## Input

`````js
[ , , /* 1 */ ,,]
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
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
                            "autofix": 0,
                            "flags": 768,
                            "start": 1,
                            "end": 1
                        },
                        {
                            "kind": 230,
                            "autofix": 0,
                            "flags": 768,
                            "start": 3,
                            "end": 3
                        },
                        {
                            "kind": 230,
                            "autofix": 0,
                            "flags": 768,
                            "start": 5,
                            "end": 5
                        },
                        {
                            "kind": 230,
                            "autofix": 0,
                            "flags": 768,
                            "start": 15,
                            "end": 15
                        }
                    ],
                    "trailingComma": true,
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 16
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 17
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "text": "[ , , /* 1 */ ,,]",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

