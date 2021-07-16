# Kataw parser test case

## Input

`````js
a?.b``;

a?.['b']``;

a?.()``;
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
                    "kind": 226,
                    "member": {
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
                            "flags": 32,
                            "transformFlags": 2,
                            "start": 3,
                            "end": 4
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 4
                    },
                    "template": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 134217824,
                        "transformFlags": 0,
                        "start": 4,
                        "end": 6
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 6
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 12
                },
                "member": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 10
                },
                "chain": {
                    "kind": 226,
                    "member": {
                        "kind": 302,
                        "chain": {
                            "kind": 203,
                            "chain": null,
                            "expression": {
                                "kind": 201392131,
                                "text": "b",
                                "rawText": "'b'",
                                "flags": 4194400,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 16
                            },
                            "flags": 32,
                            "transformFlags": 4,
                            "start": 12,
                            "end": 16
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 17
                    },
                    "template": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 134217824,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 19
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 19
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 7,
                "end": 19
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 7,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 25
                },
                "member": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 23
                },
                "chain": {
                    "kind": 226,
                    "member": {
                        "kind": 302,
                        "chain": {
                            "kind": 204,
                            "chain": null,
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 26,
                                "end": 26
                            },
                            "flags": 32,
                            "transformFlags": 1,
                            "start": 25,
                            "end": 27
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 25,
                        "end": 27
                    },
                    "template": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 134217824,
                        "transformFlags": 0,
                        "start": 27,
                        "end": 29
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 27,
                    "end": 29
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 20,
                "end": 29
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 20,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "a?.b``;\n\na?.['b']``;\n\na?.()``;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Tagged template expressions are not permitted in an optional chain. - start: 4, end: 6
✖ Tagged template expressions are not permitted in an optional chain. - start: 17, end: 19
✖ Tagged template expressions are not permitted in an optional chain. - start: 27, end: 29

```

