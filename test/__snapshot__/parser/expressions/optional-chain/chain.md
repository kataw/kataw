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
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 0,
                    "start": 19,
                    "end": 21
                },
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 0,
                        "start": 12,
                        "end": 14
                    },
                    "member": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 0,
                            "start": 7,
                            "end": 9
                        },
                        "member": {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 0,
                                "start": 4,
                                "end": 6
                            },
                            "member": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 0,
                                    "start": 1,
                                    "end": 3
                                },
                                "member": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
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
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
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
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
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
                                            "kind": 134299649,
                                            "text": "d",
                                            "rawText": "d",
                                            "flags": 768,
                                            "start": 10,
                                            "end": 11
                                        }
                                    ],
                                    "trailingComma": false,
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
                                    "kind": 134299649,
                                    "text": "e",
                                    "rawText": "e",
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
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
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
                            "kind": 134299649,
                            "text": "g",
                            "rawText": "g",
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
            "flags": 128,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "a?.b?.c?.(d)?.[e].f?.g\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

