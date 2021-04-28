# Kataw parser test case

## Input

`````js
`X${a => b + {}}Y`
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
                "kind": 226,
                "member": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 0,
                    "end": 0
                },
                "template": {
                    "kind": 227,
                    "spans": [
                        {
                            "kind": 228,
                            "rawText": "X",
                            "text": "X",
                            "expression": {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 0,
                                    "start": 5,
                                    "end": 8
                                },
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 4,
                                    "end": 5
                                },
                                "asyncToken": null,
                                "returnType": null,
                                "contents": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 768,
                                        "start": 8,
                                        "end": 10
                                    },
                                    "operatorToken": {
                                        "kind": 34098,
                                        "flags": 512,
                                        "start": 10,
                                        "end": 12
                                    },
                                    "right": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "start": 14,
                                            "end": 14
                                        },
                                        "flags": 256,
                                        "start": 12,
                                        "end": 15
                                    },
                                    "flags": 256,
                                    "start": 8,
                                    "end": 15
                                },
                                "flags": 256,
                                "start": 4,
                                "end": 15
                            },
                            "flags": 256,
                            "start": 0,
                            "end": 15
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": "Y",
                        "rawText": "Y",
                        "flags": 768,
                        "start": 15,
                        "end": 18
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 18
                },
                "flags": 256,
                "start": 0,
                "end": 18
            },
            "flags": 128,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "text": "`X${a => b + {}}Y`",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 0, end: 4

```

