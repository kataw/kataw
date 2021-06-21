# Kataw parser test case

## Input

`````js
a?.a?.<number>(y);

a?.a?.a?.a?.<number>(y);
`````

## Options

`````js
{ allowTypes : true }
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
                    "start": 4,
                    "end": 6
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
                        "kind": 302,
                        "chain": {
                            "kind": 536871114,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
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
                    "end": 4
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 204,
                        "chain": null,
                        "typeArguments": {
                            "kind": 310,
                            "typeInstantiations": {
                                "kind": 309,
                                "types": [
                                    {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134234345,
                                            "flags": 2097216,
                                            "start": 7,
                                            "end": 13
                                        },
                                        "flags": 2097152,
                                        "start": 7,
                                        "end": 13
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 7,
                                "end": 13
                            },
                            "flags": 2097152,
                            "start": 6,
                            "end": 14
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 15,
                                    "end": 16
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 15,
                            "end": 16
                        },
                        "flags": 268435488,
                        "start": 6,
                        "end": 17
                    },
                    "flags": 32,
                    "start": 6,
                    "end": 17
                },
                "flags": 32,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 18
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "start": 30,
                    "end": 32
                },
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 27,
                        "end": 29
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
                                "start": 21,
                                "end": 23
                            },
                            "member": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 18,
                                "end": 21
                            },
                            "chain": {
                                "kind": 302,
                                "chain": {
                                    "kind": 536871114,
                                    "chain": null,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 23,
                                        "end": 24
                                    },
                                    "flags": 32,
                                    "start": 23,
                                    "end": 24
                                },
                                "flags": 32,
                                "start": 23,
                                "end": 24
                            },
                            "flags": 32,
                            "start": 18,
                            "end": 24
                        },
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 536871114,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 26,
                                    "end": 27
                                },
                                "flags": 32,
                                "start": 26,
                                "end": 27
                            },
                            "flags": 32,
                            "start": 26,
                            "end": 27
                        },
                        "flags": 32,
                        "start": 18,
                        "end": 27
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 536871114,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 29,
                                "end": 30
                            },
                            "flags": 32,
                            "start": 29,
                            "end": 30
                        },
                        "flags": 32,
                        "start": 29,
                        "end": 30
                    },
                    "flags": 32,
                    "start": 18,
                    "end": 30
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 204,
                        "chain": null,
                        "typeArguments": {
                            "kind": 310,
                            "typeInstantiations": {
                                "kind": 309,
                                "types": [
                                    {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134234345,
                                            "flags": 2097216,
                                            "start": 33,
                                            "end": 39
                                        },
                                        "flags": 2097152,
                                        "start": 33,
                                        "end": 39
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 33,
                                "end": 39
                            },
                            "flags": 2097152,
                            "start": 32,
                            "end": 40
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 41,
                                    "end": 42
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 41,
                            "end": 42
                        },
                        "flags": 268435488,
                        "start": 32,
                        "end": 43
                    },
                    "flags": 32,
                    "start": 32,
                    "end": 43
                },
                "flags": 32,
                "start": 18,
                "end": 43
            },
            "flags": 16,
            "start": 18,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "a?.a?.<number>(y);\n\na?.a?.a?.a?.<number>(y);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript

 ;, ; 
```

### Diagnostics

```javascript
✔ No errors
```

