# Kataw parser test case

## Input

`````js
x?.['y z'];
x?.['y']();
x?.['y z']();

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
                    "kind": 302,
                    "chain": {
                        "kind": 203,
                        "chain": null,
                        "expression": {
                            "kind": 201392131,
                            "text": "y z",
                            "rawText": "'y z'",
                            "flags": 4194400,
                            "start": 4,
                            "end": 9
                        },
                        "flags": 536870944,
                        "start": 3,
                        "end": 9
                    },
                    "flags": 32,
                    "start": 3,
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
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "start": 13,
                    "end": 15
                },
                "member": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 11,
                    "end": 13
                },
                "chain": {
                    "kind": 204,
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 203,
                            "chain": null,
                            "expression": {
                                "kind": 201392131,
                                "text": "y",
                                "rawText": "'y'",
                                "flags": 4194400,
                                "start": 16,
                                "end": 19
                            },
                            "flags": 536870944,
                            "start": 15,
                            "end": 19
                        },
                        "flags": 32,
                        "start": 15,
                        "end": 20
                    },
                    "typeArguments": null,
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 21,
                        "end": 21
                    },
                    "flags": 268435488,
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
                    "flags": 64,
                    "start": 25,
                    "end": 27
                },
                "member": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 23,
                    "end": 25
                },
                "chain": {
                    "kind": 204,
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 203,
                            "chain": null,
                            "expression": {
                                "kind": 201392131,
                                "text": "y z",
                                "rawText": "'y z'",
                                "flags": 4194400,
                                "start": 28,
                                "end": 33
                            },
                            "flags": 536870944,
                            "start": 27,
                            "end": 33
                        },
                        "flags": 32,
                        "start": 27,
                        "end": 34
                    },
                    "typeArguments": null,
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 35,
                        "end": 35
                    },
                    "flags": 268435488,
                    "start": 34,
                    "end": 36
                },
                "flags": 32,
                "start": 23,
                "end": 36
            },
            "flags": 16,
            "start": 23,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "x?.['y z'];\nx?.['y']();\nx?.['y z']();\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

x?.['\'y z\''];
x?.['\'y\'']();
x?.['\'y z\'']();

```

### Diagnostics

```javascript
✔ No errors
```

