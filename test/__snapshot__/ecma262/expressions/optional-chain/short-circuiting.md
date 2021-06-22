# Kataw parser test case

## Input

`````js
a?.[++x] // short-circuiting.
a?.b.c(++x).d; // long short-circuiting.

undefined?.[++x] // short-circuiting.
undefined?.b.c(++x).d; // long short-circuiting.

`````

## Output

### CST

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
                            "flags": 64,
                            "start": 31,
                            "end": 33
                        },
                        "member": {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "start": 1,
                                "end": 3
                            },
                            "member": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 0,
                                "end": 1
                            },
                            "chain": {
                                "kind": 536871114,
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 203,
                                        "chain": null,
                                        "expression": {
                                            "kind": 128,
                                            "operandToken": {
                                                "kind": 196635,
                                                "flags": 96,
                                                "start": 4,
                                                "end": 6
                                            },
                                            "operand": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 6,
                                                "end": 7
                                            },
                                            "flags": 32,
                                            "start": 4,
                                            "end": 7
                                        },
                                        "flags": 536870944,
                                        "start": 3,
                                        "end": 7
                                    },
                                    "flags": 32,
                                    "start": 3,
                                    "end": 8
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 8,
                                    "end": 31
                                },
                                "flags": 32,
                                "start": 8,
                                "end": 31
                            },
                            "flags": 32,
                            "start": 0,
                            "end": 31
                        },
                        "chain": {
                            "kind": 536871114,
                            "chain": {
                                "kind": 302,
                                "chain": {
                                    "kind": 536871114,
                                    "chain": null,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 33,
                                        "end": 34
                                    },
                                    "flags": 32,
                                    "start": 33,
                                    "end": 34
                                },
                                "flags": 32,
                                "start": 33,
                                "end": 34
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 35,
                                "end": 36
                            },
                            "flags": 32,
                            "start": 34,
                            "end": 36
                        },
                        "flags": 32,
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
                                    "flags": 96,
                                    "start": 37,
                                    "end": 39
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 39,
                                    "end": 40
                                },
                                "flags": 32,
                                "start": 37,
                                "end": 40
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 37,
                        "end": 40
                    },
                    "flags": 268435488,
                    "start": 0,
                    "end": 41
                },
                "expression": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 96,
                    "start": 42,
                    "end": 43
                },
                "flags": 536870944,
                "start": 0,
                "end": 43
            },
            "flags": 16,
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
                            "flags": 64,
                            "start": 119,
                            "end": 121
                        },
                        "member": {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "start": 81,
                                "end": 83
                            },
                            "member": {
                                "kind": 134299649,
                                "text": "undefined",
                                "rawText": "undefined",
                                "flags": 96,
                                "start": 44,
                                "end": 81
                            },
                            "chain": {
                                "kind": 536871114,
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 203,
                                        "chain": null,
                                        "expression": {
                                            "kind": 128,
                                            "operandToken": {
                                                "kind": 196635,
                                                "flags": 96,
                                                "start": 84,
                                                "end": 86
                                            },
                                            "operand": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 86,
                                                "end": 87
                                            },
                                            "flags": 32,
                                            "start": 84,
                                            "end": 87
                                        },
                                        "flags": 536870944,
                                        "start": 83,
                                        "end": 87
                                    },
                                    "flags": 32,
                                    "start": 83,
                                    "end": 88
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "undefined",
                                    "rawText": "undefined",
                                    "flags": 96,
                                    "start": 88,
                                    "end": 119
                                },
                                "flags": 32,
                                "start": 88,
                                "end": 119
                            },
                            "flags": 32,
                            "start": 44,
                            "end": 119
                        },
                        "chain": {
                            "kind": 536871114,
                            "chain": {
                                "kind": 302,
                                "chain": {
                                    "kind": 536871114,
                                    "chain": null,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 121,
                                        "end": 122
                                    },
                                    "flags": 32,
                                    "start": 121,
                                    "end": 122
                                },
                                "flags": 32,
                                "start": 121,
                                "end": 122
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 123,
                                "end": 124
                            },
                            "flags": 32,
                            "start": 122,
                            "end": 124
                        },
                        "flags": 32,
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
                                    "flags": 96,
                                    "start": 125,
                                    "end": 127
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 127,
                                    "end": 128
                                },
                                "flags": 32,
                                "start": 125,
                                "end": 128
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 125,
                        "end": 128
                    },
                    "flags": 268435488,
                    "start": 44,
                    "end": 129
                },
                "expression": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 96,
                    "start": 130,
                    "end": 131
                },
                "flags": 536870944,
                "start": 44,
                "end": 131
            },
            "flags": 16,
            "start": 44,
            "end": 132
        }
    ],
    "isModule": false,
    "source": "a?.[++x] // short-circuiting.\na?.b.c(++x).d; // long short-circuiting.\n\nundefined?.[++x] // short-circuiting.\nundefined?.b.c(++x).d; // long short-circuiting.\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 159
}
```

### Printed

```javascript

(++x).d; // long short-circuiting.

(++x).d; // long short-circuiting.

```

### Diagnostics

```javascript
✔ No errors
```

