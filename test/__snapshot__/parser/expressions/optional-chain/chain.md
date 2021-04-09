# Kataw parser test case

## Input

`````js
a?.b?.c?.(d)?.[e].f?.g

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
                "kind": 205,
                "member": {
                    "kind": 205,
                    "member": {
                        "kind": 205,
                        "member": {
                            "kind": 205,
                            "member": {
                                "kind": 205,
                                "member": {
                                    "kind": 81921,
                                    "value": "a",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 0,
                                    "end": 1
                                },
                                "chain": {
                                    "kind": 206,
                                    "chain": {
                                        "kind": 202,
                                        "chain": null,
                                        "expression": {
                                            "kind": 81921,
                                            "value": "b",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 3,
                                            "end": 4
                                        },
                                        "flags": 256,
                                        "start": 3,
                                        "end": 4
                                    },
                                    "flags": 256,
                                    "start": 3,
                                    "end": 4
                                },
                                "flags": 256,
                                "start": 0,
                                "end": 4
                            },
                            "chain": {
                                "kind": 206,
                                "chain": {
                                    "kind": 202,
                                    "chain": null,
                                    "expression": {
                                        "kind": 81921,
                                        "value": "c",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 6,
                                        "end": 7
                                    },
                                    "flags": 256,
                                    "start": 6,
                                    "end": 7
                                },
                                "flags": 256,
                                "start": 6,
                                "end": 7
                            },
                            "flags": 256,
                            "start": 0,
                            "end": 7
                        },
                        "chain": {
                            "kind": 206,
                            "chain": {
                                "kind": 204,
                                "chain": null,
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 81921,
                                            "value": "d",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 10,
                                            "end": 11
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 10,
                                    "end": 11
                                },
                                "flags": 256,
                                "start": 9,
                                "end": 12
                            },
                            "flags": 256,
                            "start": 9,
                            "end": 12
                        },
                        "flags": 256,
                        "start": 0,
                        "end": 12
                    },
                    "chain": {
                        "kind": 202,
                        "chain": {
                            "kind": 206,
                            "chain": {
                                "kind": 203,
                                "chain": null,
                                "expression": {
                                    "kind": 81921,
                                    "value": "e",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 15,
                                    "end": 16
                                },
                                "flags": 256,
                                "start": 14,
                                "end": 16
                            },
                            "flags": 256,
                            "start": 14,
                            "end": 17
                        },
                        "expression": {
                            "kind": 81921,
                            "value": "f",
                            "autofix": 0,
                            "flags": 768,
                            "start": 18,
                            "end": 19
                        },
                        "flags": 256,
                        "start": 17,
                        "end": 19
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 19
                },
                "chain": {
                    "kind": 206,
                    "chain": {
                        "kind": 202,
                        "chain": null,
                        "expression": {
                            "kind": 81921,
                            "value": "g",
                            "autofix": 0,
                            "flags": 768,
                            "start": 21,
                            "end": 22
                        },
                        "flags": 256,
                        "start": 21,
                        "end": 22
                    },
                    "flags": 256,
                    "start": 21,
                    "end": 22
                },
                "flags": 256,
                "start": 0,
                "end": 22
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "a?.b?.c?.(d)?.[e].f?.g\n",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

