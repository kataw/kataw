# Kataw parser test case

## Input

`````js
([target()[targetKey(a=b)]] = x);
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
                "kind": 121,
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
                                        "kind": 131,
                                        "expression": {
                                            "kind": 81921,
                                            "value": "target",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 2,
                                            "end": 8
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 9,
                                            "end": 9
                                        },
                                        "flags": 256,
                                        "start": 2,
                                        "end": 10
                                    },
                                    "expression": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 81921,
                                            "value": "targetKey",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 11,
                                            "end": 20
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [
                                                {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 81921,
                                                        "value": "a",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 21,
                                                        "end": 22
                                                    },
                                                    "operatorToken": {
                                                        "kind": 81921,
                                                        "autofix": 0,
                                                        "flags": 0,
                                                        "start": 21,
                                                        "end": 23
                                                    },
                                                    "right": {
                                                        "kind": 81921,
                                                        "value": "b",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 23,
                                                        "end": 24
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 21,
                                                    "end": 24
                                                }
                                            ],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 21,
                                            "end": 24
                                        },
                                        "flags": 256,
                                        "start": 11,
                                        "end": 25
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 2,
                                    "end": 26
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 2,
                            "end": 26
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 27
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 27,
                        "end": 29
                    },
                    "right": {
                        "kind": 81921,
                        "value": "x",
                        "autofix": 0,
                        "flags": 768,
                        "start": 29,
                        "end": 31
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 31
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 32
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "([target()[targetKey(a=b)]] = x);",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

