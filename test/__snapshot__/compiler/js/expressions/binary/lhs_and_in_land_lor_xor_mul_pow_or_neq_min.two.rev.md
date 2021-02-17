# Kataw parser test case

## Input

`````js
x0 << x1 & x2 in x3 && x4 || x5 ^ x6 * x7 ** x8 | x9 != x10 - x

`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "x0 << x1 & x2 in x3 && x4 || x5 ^ x6 * x7 ** x8 | x9 != x10 - x\n",
    "filename": "",
    "scriptBody": {
        "kind": 197,
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
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 0,
                                    "end": 2
                                },
                                "operator": "<<",
                                "right": {
                                    "kind": 196712,
                                    "text": "x1",
                                    "rawText": "x1",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 5,
                                    "end": 8
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 0,
                                "end": 8
                            },
                            "operator": "&",
                            "right": {
                                "kind": 65563,
                                "left": {
                                    "kind": 196712,
                                    "text": "x2",
                                    "rawText": "x2",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 10,
                                    "end": 13
                                },
                                "operator": "in",
                                "right": {
                                    "kind": 196712,
                                    "text": "x3",
                                    "rawText": "x3",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 16,
                                    "end": 19
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 13,
                                "end": 19
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 0,
                            "end": 19
                        },
                        "operator": "&&",
                        "right": {
                            "kind": 196712,
                            "text": "x4",
                            "rawText": "x4",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 22,
                            "end": 25
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 0,
                        "end": 25
                    },
                    "operator": "||",
                    "right": {
                        "kind": 65563,
                        "left": {
                            "kind": 65563,
                            "left": {
                                "kind": 196712,
                                "text": "x5",
                                "rawText": "x5",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 28,
                                "end": 31
                            },
                            "operator": "^",
                            "right": {
                                "kind": 65563,
                                "left": {
                                    "kind": 196712,
                                    "text": "x6",
                                    "rawText": "x6",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 33,
                                    "end": 36
                                },
                                "operator": "*",
                                "right": {
                                    "kind": 65563,
                                    "left": {
                                        "kind": 196712,
                                        "text": "x7",
                                        "rawText": "x7",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 38,
                                        "end": 41
                                    },
                                    "operator": "**",
                                    "right": {
                                        "kind": 196712,
                                        "text": "x8",
                                        "rawText": "x8",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 44,
                                        "end": 47
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 41,
                                    "end": 47
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 36,
                                "end": 47
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 31,
                            "end": 47
                        },
                        "operator": "|",
                        "right": {
                            "kind": 65563,
                            "left": {
                                "kind": 196712,
                                "text": "x9",
                                "rawText": "x9",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 49,
                                "end": 52
                            },
                            "operator": "!=",
                            "right": {
                                "kind": 65563,
                                "left": {
                                    "kind": 196712,
                                    "text": "x10",
                                    "rawText": "x10",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 55,
                                    "end": 59
                                },
                                "operator": "-",
                                "right": {
                                    "kind": 196712,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 61,
                                    "end": 63
                                },
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 59,
                                "end": 63
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 52,
                            "end": 63
                        },
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 31,
                        "end": 63
                    },
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 0,
                    "end": 63
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 63
            }
        ],
        "transformFlags": 0,
        "flags": 16384,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 63
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 64
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

