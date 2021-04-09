# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: return with unclosed block
> :: case: while try this and !foo
## Input

`````js
return {} return(x) { while try this and !foo
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 161,
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [],
                    "trailingComma": false,
                    "multiline": false,
                    "autofix": 0,
                    "flags": 0,
                    "start": 8,
                    "end": 8
                },
                "autofix": 0,
                "flags": 256,
                "start": 6,
                "end": 9
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 0
        },
        {
            "kind": 161,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 17,
                    "end": 18
                },
                "autofix": 0,
                "flags": 256,
                "start": 16,
                "end": 19
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 9
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 154,
                        "expression": {
                            "kind": 253,
                            "text": "",
                            "autofix": 0,
                            "flags": 12,
                            "start": 27,
                            "end": 27
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
                                    "start": 31,
                                    "end": 31
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 31,
                                "end": 31
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
                                    "start": 31,
                                    "end": 31
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 31,
                                "end": 31
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 27,
                            "end": 31
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 21,
                        "end": 31
                    }
                ],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 21,
                "end": 31
            },
            "autofix": 0,
            "flags": 128,
            "start": 19,
            "end": 31
        },
        {
            "kind": 120,
            "expression": {
                "kind": 135,
                "autofix": 0,
                "flags": 768,
                "start": 31,
                "end": 36
            },
            "autofix": 0,
            "flags": 128,
            "start": 31,
            "end": 36
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "and",
                "autofix": 0,
                "flags": 768,
                "start": 36,
                "end": 40
            },
            "autofix": 0,
            "flags": 128,
            "start": 36,
            "end": 40
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "autofix": 0,
                    "flags": 0,
                    "start": 40,
                    "end": 42
                },
                "expression": {
                    "kind": 81921,
                    "value": "foo",
                    "autofix": 0,
                    "flags": 768,
                    "start": 42,
                    "end": 45
                },
                "autofix": 0,
                "flags": 256,
                "start": 40,
                "end": 45
            },
            "autofix": 0,
            "flags": 128,
            "start": 40,
            "end": 45
        }
    ],
    "isModule": false,
    "text": "return {} return(x) { while try this and !foo",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 33,
            "error": "A return statement can only be used within a function_body",
            "start": 0,
            "end": 6
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 9,
            "end": 16
        },
        {
            "kind": 2,
            "source": 2,
            "code": 33,
            "error": "A return statement can only be used within a function_body",
            "start": 9,
            "end": 16
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19,
            "end": 21
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 27,
            "end": 31
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 27,
            "end": 31
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 27,
            "end": 31
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31,
            "end": 36
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31,
            "end": 36
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31,
            "end": 36
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31,
            "end": 36
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 36,
            "end": 40
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 40,
            "end": 42
        }
    ],
    "start": 0,
    "end": 45
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: return with unclosed block
> :: case: while try this and !foo
## Input

`````js
return {} return(x) { while try this and !foo
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: return with unclosed block
> :: case: while try this and !foo
## Input

`````js
return {} return(x) { while try this and !foo
`````
```

