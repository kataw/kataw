# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: return with unclosed block
> :: case: async try while { catch }
## Input

`````js
return {} return(x) { async try while { catch }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
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
            "flags": 128,
            "start": 0,
            "end": 0
        },
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 768,
                "start": 9,
                "end": 16
            },
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 81921,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 17,
                    "end": 18
                },
                "flags": 256,
                "start": 16,
                "end": 19
            },
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
                        "kind": 120,
                        "expression": {
                            "kind": 81921,
                            "text": "async",
                            "rawText": "async",
                            "flags": 768,
                            "start": 21,
                            "end": 27
                        },
                        "flags": 128,
                        "start": 21,
                        "end": 27
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 21,
                "end": 27
            },
            "flags": 128,
            "start": 19,
            "end": 27
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 768,
                "start": 27,
                "end": 31
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 31,
                    "end": 31
                },
                "flags": 128,
                "start": 31,
                "end": 31
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
                                    "start": 45,
                                    "end": 45
                                },
                                "flags": 128,
                                "start": 45,
                                "end": 45
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
                                    "start": 47,
                                    "end": 47
                                },
                                "flags": 128,
                                "start": 47,
                                "end": 47
                            },
                            "flags": 128,
                            "start": 39,
                            "end": 47
                        }
                    ],
                    "multiLine": false,
                    "flags": 128,
                    "start": 39,
                    "end": 47
                },
                "flags": 128,
                "start": 37,
                "end": 47
            },
            "flags": 128,
            "start": 27,
            "end": 47
        }
    ],
    "isModule": false,
    "text": "return {} return(x) { async try while { catch }",
    "fileName": "__root__",
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
            "end": 37
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31,
            "end": 37
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 39,
            "end": 45
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 45,
            "end": 47
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 45,
            "end": 47
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 47,
            "end": 47
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 47,
            "end": 47
        }
    ],
    "start": 0,
    "end": 47
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: return with unclosed block
> :: case: async try while { catch }
## Input

`````js
return {} return(x) { async try while { catch }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: return with unclosed block
> :: case: async try while { catch }
## Input

`````js
return {} return(x) { async try while { catch }
`````
```

