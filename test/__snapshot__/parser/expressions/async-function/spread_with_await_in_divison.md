# Kataw parser test case

## Input

`````js
[.../x//yield]
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
                            "kind": 223,
                            "argument": {
                                "kind": 198,
                                "left": {
                                    "kind": 221,
                                    "text": "/x/",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 4,
                                    "end": 7
                                },
                                "operatorToken": {
                                    "kind": 35640,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 7,
                                    "end": 8
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "yield",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 8,
                                    "end": 13
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 4,
                                "end": 13
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 1,
                            "end": 13
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 13
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 14
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "text": "[.../x//yield]",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

