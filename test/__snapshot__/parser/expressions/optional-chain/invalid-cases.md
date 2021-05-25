# Kataw parser test case

## Input

`````js
x?.#[] = 0;

x?.[] = 0;

x?.x?.[ = 0;

x?.x?.] = 0;

x?.x?. = 0;

x?.[] = 0;

x?.x?.x?.x?.x?.x?.x?.[] = 0;

x?.x?.x?.x?.x?.x?.x?.] = 0;

x?.x?.[] = 0;

x?.x?.x?.x?.x?.x?.x?.x?.[] = 0;

x?.x = 0;

x?.x?.x?.x = 0;

x?.x?.x?.x /= 0;

x?.x?. = 0;

#x?.x?. = 0;

#x?.#x?. = 0;

x?.#x?. = 0;

x?.()x?. = 0;

x?.(x?. = 0;

x?.)x?. = 0;

x?.()?. = 0;

x?.y = 0;
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
                "kind": 125,
                "left": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 0,
                        "start": 1,
                        "end": 3
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 0,
                        "end": 1
                    },
                    "chain": {
                        "kind": 206,
                        "chain": {
                            "kind": 536871114,
                            "chain": null,
                            "expression": {
                                "kind": 67174651,
                                "text": "#",
                                "flags": 96,
                                "start": 3,
                                "end": 4
                            },
                            "flags": 32,
                            "start": 3,
                            "end": 4
                        },
                        "flags": 32,
                        "start": 3,
                        "end": 4
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 6,
                    "end": 8
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 8,
                    "end": 10
                },
                "flags": 32,
                "start": 0,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 0,
                        "start": 14,
                        "end": 16
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 11,
                        "end": 14
                    },
                    "chain": {
                        "kind": 206,
                        "chain": null,
                        "flags": 32,
                        "start": 16,
                        "end": 18
                    },
                    "flags": 32,
                    "start": 11,
                    "end": 18
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 18,
                    "end": 20
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 20,
                    "end": 22
                },
                "flags": 32,
                "start": 11,
                "end": 22
            },
            "flags": 16,
            "start": 11,
            "end": 23
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 0,
                    "start": 29,
                    "end": 31
                },
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 0,
                        "start": 26,
                        "end": 28
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 23,
                        "end": 26
                    },
                    "chain": {
                        "kind": 206,
                        "chain": {
                            "kind": 536871114,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 28,
                                "end": 29
                            },
                            "flags": 32,
                            "start": 28,
                            "end": 29
                        },
                        "flags": 32,
                        "start": 28,
                        "end": 29
                    },
                    "flags": 32,
                    "start": 23,
                    "end": 29
                },
                "chain": {
                    "kind": 206,
                    "chain": {
                        "kind": 203,
                        "chain": null,
                        "expression": {
                            "kind": 125,
                            "left": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 32,
                                "end": 32
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 32,
                                "end": 34
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 34,
                                "end": 36
                            },
                            "flags": 32,
                            "start": 32,
                            "end": 36
                        },
                        "flags": 536870944,
                        "start": 31,
                        "end": 36
                    },
                    "flags": 32,
                    "start": 31,
                    "end": 36
                },
                "flags": 32,
                "start": 23,
                "end": 36
            },
            "flags": 16,
            "start": 23,
            "end": 37
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 0,
                    "start": 43,
                    "end": 45
                },
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 0,
                        "start": 40,
                        "end": 42
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 37,
                        "end": 40
                    },
                    "chain": {
                        "kind": 206,
                        "chain": {
                            "kind": 536871114,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 42,
                                "end": 43
                            },
                            "flags": 32,
                            "start": 42,
                            "end": 43
                        },
                        "flags": 32,
                        "start": 42,
                        "end": 43
                    },
                    "flags": 32,
                    "start": 37,
                    "end": 43
                },
                "chain": {
                    "kind": 206,
                    "chain": {
                        "kind": 226,
                        "member": null,
                        "template": {
                            "kind": 227,
                            "spans": [
                                {
                                    "kind": 65764,
                                    "rawText": "x",
                                    "text": "x",
                                    "expression": {
                                        "kind": 16637,
                                        "text": "",
                                        "flags": 64,
                                        "start": 45,
                                        "end": 45
                                    },
                                    "flags": 32,
                                    "start": 45,
                                    "end": 45
                                }
                            ],
                            "tail": {
                                "kind": 458761,
                                "text": " = 0;\n\nx?.x?. = 0;\n\nx?.[] = 0;\n\nx?.x?.x?.x?.x?.x?.x?.[] = 0;\n\nx?.x?.x?.x?.x?.x?.x?.] = 0;\n\nx?.x?.[] = 0;\n\nx?.x?.x?.x?.x?.x?.x?.x?.[] = 0;\n\nx?.x = 0;\n\nx?.x?.x?.x = 0;\n\nx?.x?.x?.x /= 0;\n\nx?.x?. = 0;\n\n#x?.x?. = 0;\n\n#x?.#x?. = 0;\n\nx?.#x?. = 0;\n\nx?.()x?. = 0;\n\nx?.(x?. = 0;\n\nx?.)x?. = 0;\n\nx?.()?. = 0;\n\nx?.y = 0;",
                                "rawText": "x",
                                "flags": 96,
                                "start": 45,
                                "end": 353
                            },
                            "flags": 32,
                            "start": 45,
                            "end": 353
                        },
                        "flags": 32,
                        "start": 45,
                        "end": 353
                    },
                    "flags": 32,
                    "start": 45,
                    "end": 353
                },
                "flags": 32,
                "start": 37,
                "end": 353
            },
            "flags": 16,
            "start": 37,
            "end": 353
        }
    ],
    "isModule": false,
    "source": "x?.#[] = 0;\n\nx?.[] = 0;\n\nx?.x?.[ = 0;\n\nx?.x?.] = 0;\n\nx?.x?. = 0;\n\nx?.[] = 0;\n\nx?.x?.x?.x?.x?.x?.x?.[] = 0;\n\nx?.x?.x?.x?.x?.x?.x?.] = 0;\n\nx?.x?.[] = 0;\n\nx?.x?.x?.x?.x?.x?.x?.x?.[] = 0;\n\nx?.x = 0;\n\nx?.x?.x?.x = 0;\n\nx?.x?.x?.x /= 0;\n\nx?.x?. = 0;\n\n#x?.x?. = 0;\n\n#x?.#x?. = 0;\n\nx?.#x?. = 0;\n\nx?.()x?. = 0;\n\nx?.(x?. = 0;\n\nx?.)x?. = 0;\n\nx?.()?. = 0;\n\nx?.y = 0;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 353
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Invalid character - start: 3, end: 4
✖ Private identifiers are not allowed outside class_bodies - start: 3, end: 4
✖ An member access expression should take an argument. - start: 5, end: 6
✖ The left-hand side of an assignment expression may not be an optional property access - start: 4, end: 8
✖ An member access expression should take an argument. - start: 17, end: 18
✖ The left-hand side of an assignment expression may not be an optional property access - start: 16, end: 20
✖ Expression expected - start: 32, end: 34
✖ Tagged template expressions are not permitted in an optional chain. - start: 45, end: 46
✖ Expression expected - start: 45, end: 46
✖ Unterminated template literal - start: 45, end: 353

```

