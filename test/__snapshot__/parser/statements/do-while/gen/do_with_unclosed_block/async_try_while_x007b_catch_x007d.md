# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: do with unclosed block
> :: case: async try while { catch }
## Input

`````js
do {} while (x) { async try while { catch }
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
                "kind": 81921,
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 13,
                "end": 14
            },
            "statement": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "autofix": 0,
                    "flags": 128,
                    "start": 4,
                    "end": 4
                },
                "autofix": 0,
                "flags": 128,
                "start": 2,
                "end": 5
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 15
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
                            "value": "async",
                            "autofix": 0,
                            "flags": 768,
                            "start": 17,
                            "end": 23
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 17,
                        "end": 23
                    }
                ],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 17,
                "end": 23
            },
            "autofix": 0,
            "flags": 128,
            "start": 15,
            "end": 23
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
                    "start": 27,
                    "end": 27
                },
                "autofix": 0,
                "flags": 128,
                "start": 27,
                "end": 27
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
                    "start": 27,
                    "end": 27
                },
                "autofix": 0,
                "flags": 128,
                "start": 27,
                "end": 27
            },
            "autofix": 0,
            "flags": 128,
            "start": 23,
            "end": 27
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
                            "start": 35,
                            "end": 41
                        }
                    ],
                    "trailingComma": false,
                    "multiline": false,
                    "autofix": 0,
                    "flags": 0,
                    "start": 35,
                    "end": 41
                },
                "autofix": 0,
                "flags": 256,
                "start": 33,
                "end": 43
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 253,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 43,
                    "end": 43
                },
                "autofix": 0,
                "flags": 128,
                "start": 43,
                "end": 43
            },
            "autofix": 0,
            "flags": 128,
            "start": 27,
            "end": 43
        }
    ],
    "isModule": false,
    "text": "do {} while (x) { async try while { catch }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 23,
            "end": 27
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 23,
            "end": 27
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 27,
            "end": 33
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 27,
            "end": 33
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 27,
            "end": 33
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 33,
            "end": 35
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 43,
            "end": 43
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 43,
            "end": 43
        }
    ],
    "start": 0,
    "end": 43
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: do with unclosed block
> :: case: async try while { catch }
## Input

`````js
do {} while (x) { async try while { catch }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: do with unclosed block
> :: case: async try while { catch }
## Input

`````js
do {} while (x) { async try while { catch }
`````
```

