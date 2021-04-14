# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: switch with unclosed block
> :: case: async try while { catch }
## Input

`````js
switch {} default(x) { async try while { catch }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 768,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [],
                    "trailingComma": false,
                    "multiline": false,
                    "flags": 0,
                    "start": 8,
                    "end": 8
                },
                "flags": 256,
                "start": 6,
                "end": 9
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 170,
                        "defaultKeyword": null,
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 81921,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 18,
                                    "end": 19
                                },
                                "flags": 128,
                                "start": 18,
                                "end": 19
                            }
                        ],
                        "flags": 128,
                        "start": 9,
                        "end": 19
                    }
                ],
                "flags": 128,
                "start": 9,
                "end": 19
            },
            "flags": 128,
            "start": 0,
            "end": 19
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 81921,
                            "text": "async",
                            "rawText": "async",
                            "flags": 768,
                            "start": 22,
                            "end": 28
                        },
                        "flags": 128,
                        "start": 22,
                        "end": 28
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 22,
                "end": 28
            },
            "flags": 128,
            "start": 20,
            "end": 28
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 768,
                "start": 28,
                "end": 32
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 32,
                    "end": 32
                },
                "flags": 128,
                "start": 32,
                "end": 32
            },
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [
                        {
                            "kind": 159,
                            "tryKeyword": null,
                            "block": {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [],
                                    "multiLine": false,
                                    "flags": 128,
                                    "start": 46,
                                    "end": 46
                                },
                                "flags": 128,
                                "start": 46,
                                "end": 46
                            },
                            "catchClause": null,
                            "finallyKeyword": null,
                            "finallyBlock": {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [],
                                    "multiLine": false,
                                    "flags": 128,
                                    "start": 48,
                                    "end": 48
                                },
                                "flags": 128,
                                "start": 48,
                                "end": 48
                            },
                            "flags": 128,
                            "start": 40,
                            "end": 48
                        }
                    ],
                    "multiLine": false,
                    "flags": 128,
                    "start": 40,
                    "end": 48
                },
                "flags": 128,
                "start": 38,
                "end": 48
            },
            "flags": 128,
            "start": 28,
            "end": 48
        }
    ],
    "isModule": false,
    "text": "switch {} default(x) { async try while { catch }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 6,
            "end": 8
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 9,
            "end": 17
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 9,
            "end": 17
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 17,
            "end": 18
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 18,
            "end": 19
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19,
            "end": 20
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19,
            "end": 20
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 19,
            "end": 20
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 28,
            "end": 32
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 28,
            "end": 32
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 32,
            "end": 38
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 32,
            "end": 38
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 40,
            "end": 46
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 46,
            "end": 48
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 46,
            "end": 48
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 48,
            "end": 48
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 48,
            "end": 48
        }
    ],
    "start": 0,
    "end": 48
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: switch with unclosed block
> :: case: async try while { catch }
## Input

`````js
switch {} default(x) { async try while { catch }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: switch with unclosed block
> :: case: async try while { catch }
## Input

`````js
switch {} default(x) { async try while { catch }
`````
```

