# Kataw parser test case

## Input

`````js
x0 - x1 === x2 | x3 ** x4 * x5 ^ x6 || x7 && x8 >= x9 & x10 >> x

typeof x;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "x0 - x1 === x2 | x3 ** x4 * x5 ^ x6 || x7 && x8 >= x9 & x10 >> x\n\ntypeof x;",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65563,
                "left": {
                    "kind": 65563,
                    "left": {
                        "kind": 65563,
                        "left": {
                            "kind": 65563,
                            "left": {
                                "kind": 196712,
                                "text": "x0",
                                "rawText": "x0",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 0,
                                "end": 2
                            },
                            "operator": "-",
                            "right": {
                                "kind": 196712,
                                "text": "x1",
                                "rawText": "x1",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 4,
                                "end": 7
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 7
                        },
                        "operator": "===",
                        "right": {
                            "kind": 196712,
                            "text": "x2",
                            "rawText": "x2",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 14
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 14
                    },
                    "operator": "|",
                    "right": {
                        "kind": 65563,
                        "left": {
                            "kind": 65563,
                            "left": {
                                "kind": 65563,
                                "left": {
                                    "kind": 196712,
                                    "text": "x3",
                                    "rawText": "x3",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 19
                                },
                                "operator": "**",
                                "right": {
                                    "kind": 196712,
                                    "text": "x4",
                                    "rawText": "x4",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 25
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2,
                                "start": 19,
                                "end": 25
                            },
                            "operator": "*",
                            "right": {
                                "kind": 196712,
                                "text": "x5",
                                "rawText": "x5",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 30
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 30
                        },
                        "operator": "^",
                        "right": {
                            "kind": 196712,
                            "text": "x6",
                            "rawText": "x6",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 35
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 35
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 35
                },
                "operator": "||",
                "right": {
                    "kind": 65563,
                    "left": {
                        "kind": 196712,
                        "text": "x7",
                        "rawText": "x7",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 38,
                        "end": 41
                    },
                    "operator": "&&",
                    "right": {
                        "kind": 65563,
                        "left": {
                            "kind": 65563,
                            "left": {
                                "kind": 196712,
                                "text": "x8",
                                "rawText": "x8",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 44,
                                "end": 47
                            },
                            "operator": ">=",
                            "right": {
                                "kind": 196712,
                                "text": "x9",
                                "rawText": "x9",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 50,
                                "end": 53
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 47,
                            "end": 53
                        },
                        "operator": "&",
                        "right": {
                            "kind": 65563,
                            "left": {
                                "kind": 196712,
                                "text": "x10",
                                "rawText": "x10",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 55,
                                "end": 59
                            },
                            "operator": ">>",
                            "right": {
                                "kind": 196712,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 62,
                                "end": 64
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 59,
                            "end": 64
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 47,
                        "end": 64
                    },
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 41,
                    "end": 64
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 64
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 64
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65774,
                "operator": "typeof",
                "operand": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 72,
                    "end": 74
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 64,
                "end": 74
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 64,
            "end": 75
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 75
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

