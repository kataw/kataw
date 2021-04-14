# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: unclosed parens
> :: case: =! class function try while with foo!
## Input

`````js
{( =! class function try while with foo!
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 16637,
                                    "text": "",
                                    "autofix": 0,
                                    "flags": 12,
                                    "start": 2,
                                    "end": 2
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 768,
                                    "start": 2,
                                    "end": 4
                                },
                                "right": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 65584,
                                        "flags": 768,
                                        "start": 4,
                                        "end": 5
                                    },
                                    "expression": {
                                        "kind": 189,
                                        "decorators": null,
                                        "classKeyword": {
                                            "kind": 37814352,
                                            "flags": 768,
                                            "start": 5,
                                            "end": 11
                                        },
                                        "name": null,
                                        "typeParameters": null,
                                        "classHeritage": null,
                                        "members": {
                                            "kind": 277,
                                            "elements": [],
                                            "flags": 256,
                                            "start": 5,
                                            "end": 5
                                        },
                                        "flags": 256,
                                        "start": 5,
                                        "end": 11
                                    },
                                    "flags": 256,
                                    "start": 4,
                                    "end": 11
                                },
                                "flags": 256,
                                "start": 2,
                                "end": 11
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 11
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 11
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 11
            },
            "flags": 128,
            "start": 0,
            "end": 11
        },
        {
            "kind": 176,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37814362,
                "flags": 768,
                "start": 11,
                "end": 20
            },
            "generatorToken": null,
            "name": {
                "kind": 16637,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 20,
                "end": 20
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 20,
                "end": 20
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 20,
                    "end": 20
                },
                "flags": 256,
                "start": 20,
                "end": 20
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 256,
            "start": 11,
            "end": 20
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 768,
                "start": 20,
                "end": 24
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 24,
                    "end": 24
                },
                "flags": 128,
                "start": 24,
                "end": 24
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
                    "start": 30,
                    "end": 30
                },
                "flags": 128,
                "start": 30,
                "end": 30
            },
            "flags": 128,
            "start": 20,
            "end": 30
        },
        {
            "kind": 153,
            "withKeyword": {
                "kind": 37757029,
                "flags": 768,
                "start": 30,
                "end": 35
            },
            "expression": {
                "kind": 81921,
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 35,
                "end": 39
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 768,
                        "start": 39,
                        "end": 40
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "autofix": 0,
                        "flags": 12,
                        "start": 40,
                        "end": 40
                    },
                    "flags": 256,
                    "start": 39,
                    "end": 40
                },
                "flags": 128,
                "start": 39,
                "end": 40
            },
            "flags": 128,
            "start": 30,
            "end": 40
        }
    ],
    "isModule": false,
    "text": "{( =! class function try while with foo!",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 2,
            "end": 4
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 11,
            "end": 20
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 11,
            "end": 20
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 11,
            "end": 20
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 11,
            "end": 20
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 20,
            "end": 24
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 20,
            "end": 24
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 20,
            "end": 24
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 20,
            "end": 24
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 24,
            "end": 30
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 24,
            "end": 30
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 30,
            "end": 35
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 35,
            "end": 39
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 39,
            "end": 40
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 40,
            "end": 40
        }
    ],
    "start": 0,
    "end": 40
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: unclosed parens
> :: case: =! class function try while with foo!
## Input

`````js
{( =! class function try while with foo!
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: unclosed parens
> :: case: =! class function try while with foo!
## Input

`````js
{( =! class function try while with foo!
`````
```

