# Kataw parser test case

## Input

`````js
a?.[++x] // short-circuiting.
a?.b.c(++x).d; // long short-circuiting.

undefined?.[++x] // short-circuiting.
undefined?.b.c(++x).d; // long short-circuiting.

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
                "kind": 129,
                "member": {
                    "kind": 131,
                    "expression": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 31,
                            "start": 0,
                            "end": 33
                        },
                        "member": {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 1,
                                "start": 0,
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
                                "kind": 202,
                                "chain": {
                                    "kind": 206,
                                    "chain": {
                                        "kind": 203,
                                        "chain": null,
                                        "expression": {
                                            "kind": 128,
                                            "operandToken": {
                                                "kind": 196635,
                                                "flags": 4,
                                                "start": 512,
                                                "end": 6
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 768,
                                                "start": 6,
                                                "end": 7
                                            },
                                            "flags": 256,
                                            "start": 4,
                                            "end": 7
                                        },
                                        "flags": 256,
                                        "start": 3,
                                        "end": 7
                                    },
                                    "flags": 256,
                                    "start": 3,
                                    "end": 8
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 8,
                                    "end": 31
                                },
                                "flags": 256,
                                "start": 8,
                                "end": 31
                            },
                            "flags": 256,
                            "start": 0,
                            "end": 31
                        },
                        "chain": {
                            "kind": 202,
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
                                        "start": 33,
                                        "end": 34
                                    },
                                    "flags": 256,
                                    "start": 33,
                                    "end": 34
                                },
                                "flags": 256,
                                "start": 33,
                                "end": 34
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 768,
                                "start": 35,
                                "end": 36
                            },
                            "flags": 256,
                            "start": 34,
                            "end": 36
                        },
                        "flags": 256,
                        "start": 0,
                        "end": 36
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 128,
                                "operandToken": {
                                    "kind": 196635,
                                    "flags": 37,
                                    "start": 512,
                                    "end": 39
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 39,
                                    "end": 40
                                },
                                "flags": 256,
                                "start": 37,
                                "end": 40
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 37,
                        "end": 40
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 41
                },
                "expression": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 768,
                    "start": 42,
                    "end": 43
                },
                "flags": 256,
                "start": 0,
                "end": 43
            },
            "flags": 128,
            "start": 0,
            "end": 44
        },
        {
            "kind": 120,
            "expression": {
                "kind": 129,
                "member": {
                    "kind": 131,
                    "expression": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 119,
                            "start": 0,
                            "end": 121
                        },
                        "member": {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 81,
                                "start": 0,
                                "end": 83
                            },
                            "member": {
                                "kind": 134299649,
                                "text": "undefined",
                                "rawText": "undefined",
                                "flags": 768,
                                "start": 44,
                                "end": 81
                            },
                            "chain": {
                                "kind": 202,
                                "chain": {
                                    "kind": 206,
                                    "chain": {
                                        "kind": 203,
                                        "chain": null,
                                        "expression": {
                                            "kind": 128,
                                            "operandToken": {
                                                "kind": 196635,
                                                "flags": 84,
                                                "start": 512,
                                                "end": 86
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 768,
                                                "start": 86,
                                                "end": 87
                                            },
                                            "flags": 256,
                                            "start": 84,
                                            "end": 87
                                        },
                                        "flags": 256,
                                        "start": 83,
                                        "end": 87
                                    },
                                    "flags": 256,
                                    "start": 83,
                                    "end": 88
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "undefined",
                                    "rawText": "undefined",
                                    "flags": 768,
                                    "start": 88,
                                    "end": 119
                                },
                                "flags": 256,
                                "start": 88,
                                "end": 119
                            },
                            "flags": 256,
                            "start": 44,
                            "end": 119
                        },
                        "chain": {
                            "kind": 202,
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
                                        "start": 121,
                                        "end": 122
                                    },
                                    "flags": 256,
                                    "start": 121,
                                    "end": 122
                                },
                                "flags": 256,
                                "start": 121,
                                "end": 122
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 768,
                                "start": 123,
                                "end": 124
                            },
                            "flags": 256,
                            "start": 122,
                            "end": 124
                        },
                        "flags": 256,
                        "start": 44,
                        "end": 124
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 128,
                                "operandToken": {
                                    "kind": 196635,
                                    "flags": 125,
                                    "start": 512,
                                    "end": 127
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 127,
                                    "end": 128
                                },
                                "flags": 256,
                                "start": 125,
                                "end": 128
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 125,
                        "end": 128
                    },
                    "flags": 256,
                    "start": 44,
                    "end": 129
                },
                "expression": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 768,
                    "start": 130,
                    "end": 131
                },
                "flags": 256,
                "start": 44,
                "end": 131
            },
            "flags": 128,
            "start": 44,
            "end": 132
        }
    ],
    "isModule": false,
    "text": "a?.[++x] // short-circuiting.\na?.b.c(++x).d; // long short-circuiting.\n\nundefined?.[++x] // short-circuiting.\nundefined?.b.c(++x).d; // long short-circuiting.\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 159
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

