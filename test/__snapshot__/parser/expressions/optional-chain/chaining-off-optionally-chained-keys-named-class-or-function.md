# Kataw parser test case

## Input

`````js
foo?.class.bar
foo?.function.bar
foo?.bar?.class.bar
foo?.function?.bar
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
                    "start": 3,
                    "end": 5
                },
                "member": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 0,
                    "end": 3
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
                                "text": "class",
                                "rawText": "class",
                                "flags": 96,
                                "start": 5,
                                "end": 10
                            },
                            "flags": 32,
                            "start": 5,
                            "end": 10
                        },
                        "flags": 32,
                        "start": 5,
                        "end": 10
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "start": 11,
                        "end": 14
                    },
                    "flags": 32,
                    "start": 10,
                    "end": 14
                },
                "flags": 32,
                "start": 0,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "start": 18,
                    "end": 20
                },
                "member": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 14,
                    "end": 18
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
                                "text": "function",
                                "rawText": "function",
                                "flags": 96,
                                "start": 20,
                                "end": 28
                            },
                            "flags": 32,
                            "start": 20,
                            "end": 28
                        },
                        "flags": 32,
                        "start": 20,
                        "end": 28
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "start": 29,
                        "end": 32
                    },
                    "flags": 32,
                    "start": 28,
                    "end": 32
                },
                "flags": 32,
                "start": 14,
                "end": 32
            },
            "flags": 16,
            "start": 14,
            "end": 32
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "start": 41,
                    "end": 43
                },
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 36,
                        "end": 38
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 32,
                        "end": 36
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 536871114,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "start": 38,
                                "end": 41
                            },
                            "flags": 32,
                            "start": 38,
                            "end": 41
                        },
                        "flags": 32,
                        "start": 38,
                        "end": 41
                    },
                    "flags": 32,
                    "start": 32,
                    "end": 41
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
                                "text": "class",
                                "rawText": "class",
                                "flags": 96,
                                "start": 43,
                                "end": 48
                            },
                            "flags": 32,
                            "start": 43,
                            "end": 48
                        },
                        "flags": 32,
                        "start": 43,
                        "end": 48
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "start": 49,
                        "end": 52
                    },
                    "flags": 32,
                    "start": 48,
                    "end": 52
                },
                "flags": 32,
                "start": 32,
                "end": 52
            },
            "flags": 16,
            "start": 32,
            "end": 52
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "start": 66,
                    "end": 68
                },
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 56,
                        "end": 58
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 52,
                        "end": 56
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 536871114,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "function",
                                "rawText": "function",
                                "flags": 96,
                                "start": 58,
                                "end": 66
                            },
                            "flags": 32,
                            "start": 58,
                            "end": 66
                        },
                        "flags": 32,
                        "start": 58,
                        "end": 66
                    },
                    "flags": 32,
                    "start": 52,
                    "end": 66
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 536871114,
                        "chain": null,
                        "expression": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "start": 68,
                            "end": 71
                        },
                        "flags": 32,
                        "start": 68,
                        "end": 71
                    },
                    "flags": 32,
                    "start": 68,
                    "end": 71
                },
                "flags": 32,
                "start": 52,
                "end": 71
            },
            "flags": 16,
            "start": 52,
            "end": 71
        }
    ],
    "isModule": false,
    "source": "foo?.class.bar\nfoo?.function.bar\nfoo?.bar?.class.bar\nfoo?.function?.bar",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 71
}
```

### Printed

```javascript

foo?.;
foo?.;
?.;
?.;
```

### Diagnostics

```javascript
✔ No errors
```

