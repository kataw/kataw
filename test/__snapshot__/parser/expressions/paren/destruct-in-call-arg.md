# Kataw parser test case

## Input

`````js
[y<t]({}=y)
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
                "kind": 131,
                "expression": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 198,
                                "left": {
                                    "kind": 81921,
                                    "value": "y",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 1,
                                    "end": 2
                                },
                                "operatorToken": {
                                    "kind": 536905794,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 2,
                                    "end": 3
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "t",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 3,
                                    "end": 4
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 1,
                                "end": 4
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 4
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 5
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 125,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 7,
                                    "end": 7
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 6,
                                "end": 8
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "autofix": 0,
                                "flags": 0,
                                "start": 8,
                                "end": 9
                            },
                            "right": {
                                "kind": 81921,
                                "value": "y",
                                "autofix": 0,
                                "flags": 768,
                                "start": 9,
                                "end": 10
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 6,
                            "end": 10
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 6,
                    "end": 10
                },
                "flags": 256,
                "start": 0,
                "end": 11
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "text": "[y<t]({}=y)",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 11
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

