# Kataw parser test case

## Input

`````js
[(x())[y],] = z;
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
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 130,
                                "member": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 2,
                                            "end": 3
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 4,
                                            "end": 4
                                        },
                                        "flags": 256,
                                        "start": 1,
                                        "end": 5
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 1,
                                    "end": 6
                                },
                                "expression": {
                                    "kind": 81921,
                                    "value": "y",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 7,
                                    "end": 8
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 1,
                                "end": 9
                            }
                        ],
                        "trailingComma": true,
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 10
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 11
                },
                "operatorToken": {
                    "kind": 4125,
                    "autofix": 0,
                    "flags": 0,
                    "start": 11,
                    "end": 13
                },
                "right": {
                    "kind": 81921,
                    "value": "z",
                    "autofix": 0,
                    "flags": 768,
                    "start": 13,
                    "end": 15
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 15
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "[(x())[y],] = z;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

