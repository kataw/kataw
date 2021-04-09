# Kataw parser test case

## Input

`````js
y/[]=x
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
                "kind": 198,
                "left": {
                    "kind": 81921,
                    "value": "y",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 35640,
                    "autofix": 0,
                    "flags": 0,
                    "start": 1,
                    "end": 2
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 3,
                            "end": 3
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 2,
                        "end": 4
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 4,
                        "end": 5
                    },
                    "right": {
                        "kind": 81921,
                        "value": "x",
                        "autofix": 0,
                        "flags": 768,
                        "start": 5,
                        "end": 6
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 2,
                    "end": 6
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 6
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 6
        }
    ],
    "isModule": false,
    "text": "y/[]=x",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 6
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

