# Kataw parser test case

## Input

`````js
obj?.[expr]

obj?.[expr]?.[other]

obj?.[true]

obj?.[true]?.[true]

obj.a?.[expr]

obj.a?.[true]
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
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "start": 89,
                    "end": 91
                },
                "member": {
                    "kind": 129,
                    "member": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "start": 74,
                            "end": 76
                        },
                        "member": {
                            "kind": 129,
                            "member": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 64,
                                    "start": 59,
                                    "end": 61
                                },
                                "member": {
                                    "kind": 205,
                                    "chainToken": {
                                        "kind": 393240,
                                        "flags": 64,
                                        "start": 51,
                                        "end": 53
                                    },
                                    "member": {
                                        "kind": 205,
                                        "chainToken": {
                                            "kind": 393240,
                                            "flags": 64,
                                            "start": 38,
                                            "end": 40
                                        },
                                        "member": {
                                            "kind": 205,
                                            "chainToken": {
                                                "kind": 393240,
                                                "flags": 64,
                                                "start": 24,
                                                "end": 26
                                            },
                                            "member": {
                                                "kind": 205,
                                                "chainToken": {
                                                    "kind": 393240,
                                                    "flags": 64,
                                                    "start": 16,
                                                    "end": 18
                                                },
                                                "member": {
                                                    "kind": 205,
                                                    "chainToken": {
                                                        "kind": 393240,
                                                        "flags": 64,
                                                        "start": 3,
                                                        "end": 5
                                                    },
                                                    "member": {
                                                        "kind": 134299649,
                                                        "text": "obj",
                                                        "rawText": "obj",
                                                        "flags": 96,
                                                        "start": 0,
                                                        "end": 3
                                                    },
                                                    "chain": {
                                                        "kind": 202,
                                                        "chain": {
                                                            "kind": 302,
                                                            "chain": {
                                                                "kind": 203,
                                                                "chain": null,
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "expr",
                                                                    "rawText": "expr",
                                                                    "flags": 96,
                                                                    "start": 6,
                                                                    "end": 10
                                                                },
                                                                "flags": 536870944,
                                                                "start": 5,
                                                                "end": 10
                                                            },
                                                            "flags": 32,
                                                            "start": 5,
                                                            "end": 11
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "obj",
                                                            "rawText": "obj",
                                                            "flags": 96,
                                                            "start": 11,
                                                            "end": 16
                                                        },
                                                        "flags": 536870944,
                                                        "start": 11,
                                                        "end": 16
                                                    },
                                                    "flags": 32,
                                                    "start": 0,
                                                    "end": 16
                                                },
                                                "chain": {
                                                    "kind": 302,
                                                    "chain": {
                                                        "kind": 203,
                                                        "chain": null,
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "expr",
                                                            "rawText": "expr",
                                                            "flags": 96,
                                                            "start": 19,
                                                            "end": 23
                                                        },
                                                        "flags": 536870944,
                                                        "start": 18,
                                                        "end": 23
                                                    },
                                                    "flags": 32,
                                                    "start": 18,
                                                    "end": 24
                                                },
                                                "flags": 32,
                                                "start": 0,
                                                "end": 24
                                            },
                                            "chain": {
                                                "kind": 202,
                                                "chain": {
                                                    "kind": 302,
                                                    "chain": {
                                                        "kind": 203,
                                                        "chain": null,
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "other",
                                                            "rawText": "other",
                                                            "flags": 96,
                                                            "start": 27,
                                                            "end": 32
                                                        },
                                                        "flags": 536870944,
                                                        "start": 26,
                                                        "end": 32
                                                    },
                                                    "flags": 32,
                                                    "start": 26,
                                                    "end": 33
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "obj",
                                                    "rawText": "obj",
                                                    "flags": 96,
                                                    "start": 33,
                                                    "end": 38
                                                },
                                                "flags": 536870944,
                                                "start": 33,
                                                "end": 38
                                            },
                                            "flags": 32,
                                            "start": 0,
                                            "end": 38
                                        },
                                        "chain": {
                                            "kind": 202,
                                            "chain": {
                                                "kind": 302,
                                                "chain": {
                                                    "kind": 203,
                                                    "chain": null,
                                                    "expression": {
                                                        "kind": 24752947,
                                                        "flags": 96,
                                                        "start": 41,
                                                        "end": 45
                                                    },
                                                    "flags": 536870944,
                                                    "start": 40,
                                                    "end": 45
                                                },
                                                "flags": 32,
                                                "start": 40,
                                                "end": 46
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "obj",
                                                "rawText": "obj",
                                                "flags": 96,
                                                "start": 46,
                                                "end": 51
                                            },
                                            "flags": 536870944,
                                            "start": 46,
                                            "end": 51
                                        },
                                        "flags": 32,
                                        "start": 0,
                                        "end": 51
                                    },
                                    "chain": {
                                        "kind": 302,
                                        "chain": {
                                            "kind": 203,
                                            "chain": null,
                                            "expression": {
                                                "kind": 24752947,
                                                "flags": 96,
                                                "start": 54,
                                                "end": 58
                                            },
                                            "flags": 536870944,
                                            "start": 53,
                                            "end": 58
                                        },
                                        "flags": 32,
                                        "start": 53,
                                        "end": 59
                                    },
                                    "flags": 32,
                                    "start": 0,
                                    "end": 59
                                },
                                "chain": {
                                    "kind": 202,
                                    "chain": {
                                        "kind": 302,
                                        "chain": {
                                            "kind": 203,
                                            "chain": null,
                                            "expression": {
                                                "kind": 24752947,
                                                "flags": 96,
                                                "start": 62,
                                                "end": 66
                                            },
                                            "flags": 536870944,
                                            "start": 61,
                                            "end": 66
                                        },
                                        "flags": 32,
                                        "start": 61,
                                        "end": 67
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "obj",
                                        "rawText": "obj",
                                        "flags": 96,
                                        "start": 67,
                                        "end": 72
                                    },
                                    "flags": 536870944,
                                    "start": 67,
                                    "end": 72
                                },
                                "flags": 32,
                                "start": 0,
                                "end": 72
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 73,
                                "end": 74
                            },
                            "flags": 536870944,
                            "start": 0,
                            "end": 74
                        },
                        "chain": {
                            "kind": 202,
                            "chain": {
                                "kind": 302,
                                "chain": {
                                    "kind": 203,
                                    "chain": null,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "expr",
                                        "rawText": "expr",
                                        "flags": 96,
                                        "start": 77,
                                        "end": 81
                                    },
                                    "flags": 536870944,
                                    "start": 76,
                                    "end": 81
                                },
                                "flags": 32,
                                "start": 76,
                                "end": 82
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "obj",
                                "rawText": "obj",
                                "flags": 96,
                                "start": 82,
                                "end": 87
                            },
                            "flags": 536870944,
                            "start": 82,
                            "end": 87
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 87
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 88,
                        "end": 89
                    },
                    "flags": 536870944,
                    "start": 0,
                    "end": 89
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 203,
                        "chain": null,
                        "expression": {
                            "kind": 24752947,
                            "flags": 96,
                            "start": 92,
                            "end": 96
                        },
                        "flags": 536870944,
                        "start": 91,
                        "end": 96
                    },
                    "flags": 32,
                    "start": 91,
                    "end": 97
                },
                "flags": 32,
                "start": 0,
                "end": 97
            },
            "flags": 16,
            "start": 0,
            "end": 97
        }
    ],
    "isModule": false,
    "source": "obj?.[expr]\n\nobj?.[expr]?.[other]\n\nobj?.[true]\n\nobj?.[true]?.[true]\n\nobj.a?.[expr]\n\nobj.a?.[true]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 97
}
```

### Printed

```javascript

.a?.[true];
```

### Diagnostics

```javascript
✔ No errors
```

