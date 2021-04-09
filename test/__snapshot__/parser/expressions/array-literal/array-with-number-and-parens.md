# Kataw parser test case

## Input

`````js
[ 1, () ]
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
                            "kind": 81921,
                            "value": 1,
                            "autofix": 0,
                            "flags": 768,
                            "start": 1,
                            "end": 3
                        },
                        {
                            "kind": 253,
                            "text": "",
                            "autofix": 0,
                            "flags": 12,
                            "start": 4,
                            "end": 4
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 7
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 9
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "text": "[ 1, () ]",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 15,
            "error": "Expression expected",
            "start": 7,
            "end": 9
        }
    ],
    "start": 0,
    "end": 9
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

