# Kataw parser test case

## Input

`````js
a?.b?.c?.(d)?.[e].f?.g

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
                    "transformFlags": 0,
                    "start": 19,
                    "end": 21
                },
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 14
                    },
                    "member": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 9
                        },
                        "member": {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 4,
                                "end": 6
                            },
                            "member": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 1,
                                    "end": 3
                                },
                                "member": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 0,
                                    "end": 1
                                },
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 202,
                                        "chain": null,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 3,
                                            "end": 4
                                        },
                                        "flags": 536870944,
                                        "transformFlags": 2,
                                        "start": 3,
                                        "end": 4
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 3,
                                    "end": 4
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 0,
                                "end": 4
                            },
                            "chain": {
                                "kind": 302,
                                "chain": {
                                    "kind": 202,
                                    "chain": null,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 6,
                                        "end": 7
                                    },
                                    "flags": 536870944,
                                    "transformFlags": 2,
                                    "start": 6,
                                    "end": 7
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 7
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 7
                        },
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 204,
                                "chain": null,
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "d",
                                            "rawText": "d",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 10,
                                            "end": 11
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 11
                                },
                                "flags": 268435488,
                                "transformFlags": 1,
                                "start": 9,
                                "end": 12
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 12
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 12
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
                                    "text": "e",
                                    "rawText": "e",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 16
                                },
                                "flags": 536870944,
                                "transformFlags": 4,
                                "start": 14,
                                "end": 16
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 17
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 19
                        },
                        "flags": 536870944,
                        "transformFlags": 2,
                        "start": 17,
                        "end": 19
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 19
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 202,
                        "chain": null,
                        "expression": {
                            "kind": 134299649,
                            "text": "g",
                            "rawText": "g",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 22
                        },
                        "flags": 536870944,
                        "transformFlags": 2,
                        "start": 21,
                        "end": 22
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 22
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "a?.b?.c?.(d)?.[e].f?.g\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
a?.b?.c?.(d)?.[e].f?.g;
```

### Diagnostics

```javascript
✔ No errors
```

