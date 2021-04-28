# Kataw parser test case

## Input

`````js
a?.b``;

a?.['b']``;

a?.()``;
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
                    "kind": 226,
                    "member": {
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
                    "template": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 768,
                        "start": 4,
                        "end": 6
                    },
                    "flags": 256,
                    "start": 4,
                    "end": 6
                },
                "flags": 256,
                "start": 0,
                "end": 6
            },
            "flags": 128,
            "start": 0,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 10,
                    "start": 0,
                    "end": 12
                },
                "member": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 7,
                    "end": 10
                },
                "chain": {
                    "kind": 226,
                    "member": {
                        "kind": 206,
                        "chain": {
                            "kind": 203,
                            "chain": null,
                            "expression": {
                                "kind": 201392131,
                                "text": "b",
                                "rawText": "b",
                                "flags": 67109632,
                                "start": 13,
                                "end": 16
                            },
                            "flags": 256,
                            "start": 12,
                            "end": 16
                        },
                        "flags": 256,
                        "start": 12,
                        "end": 17
                    },
                    "template": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 768,
                        "start": 17,
                        "end": 19
                    },
                    "flags": 256,
                    "start": 17,
                    "end": 19
                },
                "flags": 256,
                "start": 7,
                "end": 19
            },
            "flags": 128,
            "start": 7,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 23,
                    "start": 0,
                    "end": 25
                },
                "member": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 20,
                    "end": 23
                },
                "chain": {
                    "kind": 226,
                    "member": {
                        "kind": 206,
                        "chain": {
                            "kind": 204,
                            "chain": null,
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 26,
                                "end": 26
                            },
                            "flags": 256,
                            "start": 25,
                            "end": 27
                        },
                        "flags": 256,
                        "start": 25,
                        "end": 27
                    },
                    "template": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 768,
                        "start": 27,
                        "end": 29
                    },
                    "flags": 256,
                    "start": 27,
                    "end": 29
                },
                "flags": 256,
                "start": 20,
                "end": 29
            },
            "flags": 128,
            "start": 20,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "a?.b``;\n\na?.['b']``;\n\na?.()``;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Tagged template expressions are not permitted in an optional chain. - start: 4, end: 6
✖ Tagged template expressions are not permitted in an optional chain. - start: 17, end: 19
✖ Tagged template expressions are not permitted in an optional chain. - start: 27, end: 29

```

