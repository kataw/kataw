# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: do with invalid array
> :: case: async try while { catch }
## Input

`````js
do while [catch] async try while { catch }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 169,
            "expression": {
                "kind": 253,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 15,
                "end": 15
            },
            "statement": {
                "kind": 154,
                "expression": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 10,
                        "end": 10
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 8,
                    "end": 10
                },
                "statement": {
                    "kind": 159,
                    "block": {
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [],
                            "multiLine": false,
                            "autofix": 0,
                            "flags": 128,
                            "start": 10,
                            "end": 10
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 10,
                        "end": 10
                    },
                    "catchClause": {
                        "kind": 173,
                        "catchParameter": null,
                        "block": {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [],
                                "multiLine": false,
                                "autofix": 0,
                                "flags": 128,
                                "start": 15,
                                "end": 15
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 15,
                            "end": 15
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 10,
                        "end": 15
                    },
                    "finallyBlock": null,
                    "autofix": 0,
                    "flags": 128,
                    "start": 10,
                    "end": 15
                },
                "autofix": 0,
                "flags": 128,
                "start": 2,
                "end": 15
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "async",
                "autofix": 0,
                "flags": 768,
                "start": 16,
                "end": 22
            },
            "autofix": 0,
            "flags": 128,
            "start": 16,
            "end": 22
        },
        {
            "kind": 159,
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "autofix": 0,
                    "flags": 128,
                    "start": 26,
                    "end": 26
                },
                "autofix": 0,
                "flags": 128,
                "start": 26,
                "end": 26
            },
            "catchClause": null,
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "autofix": 0,
                    "flags": 128,
                    "start": 26,
                    "end": 26
                },
                "autofix": 0,
                "flags": 128,
                "start": 26,
                "end": 26
            },
            "autofix": 0,
            "flags": 128,
            "start": 22,
            "end": 26
        },
        {
            "kind": 154,
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [
                        {
                            "kind": 81921,
                            "value": "catch",
                            "autofix": 0,
                            "flags": 768,
                            "start": 34,
                            "end": 40
                        }
                    ],
                    "trailingComma": false,
                    "multiline": false,
                    "autofix": 0,
                    "flags": 0,
                    "start": 34,
                    "end": 40
                },
                "autofix": 0,
                "flags": 256,
                "start": 32,
                "end": 42
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 253,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 42,
                    "end": 42
                },
                "autofix": 0,
                "flags": 128,
                "start": 42,
                "end": 42
            },
            "autofix": 0,
            "flags": 128,
            "start": 26,
            "end": 42
        }
    ],
    "isModule": false,
    "text": "do while [catch] async try while { catch }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 8,
            "end": 10
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 10,
            "end": 15
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 10,
            "end": 15
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 10,
            "end": 15
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 10,
            "end": 15
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 15,
            "end": 16
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 15,
            "end": 16
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 15,
            "end": 16
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 15,
            "end": 16
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 15,
            "end": 16
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 15,
            "end": 16
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 22,
            "end": 26
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 26,
            "end": 32
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 26,
            "end": 32
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 26,
            "end": 32
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 32,
            "end": 34
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 42,
            "end": 42
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 42,
            "end": 42
        }
    ],
    "start": 0,
    "end": 42
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: do with invalid array
> :: case: async try while { catch }
## Input

`````js
do while [catch] async try while { catch }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: do with invalid array
> :: case: async try while { catch }
## Input

`````js
do while [catch] async try while { catch }
`````
```

