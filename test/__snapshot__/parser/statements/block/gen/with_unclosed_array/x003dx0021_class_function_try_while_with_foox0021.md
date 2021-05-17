# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: with unclosed array
> :: case: =! class function try while with foo!
## Input

`````js
{[ =! class function try while with foo!
`````

## Output

### CST

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
                            "kind": 125,
                            "left": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 2,
                                    "end": 2
                                },
                                "flags": 32,
                                "start": 1,
                                "end": 2
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 2,
                                "end": 4
                            },
                            "right": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 65584,
                                    "flags": 64,
                                    "start": 4,
                                    "end": 5
                                },
                                "operand": {
                                    "kind": 189,
                                    "decorators": null,
                                    "classKeyword": {
                                        "kind": 37822544,
                                        "flags": 0,
                                        "start": 5,
                                        "end": 11
                                    },
                                    "name": null,
                                    "typeParameters": null,
                                    "members": {
                                        "kind": 277,
                                        "classHeritage": null,
                                        "elements": [],
                                        "flags": 32,
                                        "start": 5,
                                        "end": 5
                                    },
                                    "flags": 32,
                                    "start": 5,
                                    "end": 11
                                },
                                "flags": 32,
                                "start": 4,
                                "end": 11
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 11
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 11
                    },
                    {
                        "kind": 176,
                        "declareKeyword": null,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 0,
                            "start": 11,
                            "end": 20
                        },
                        "generatorToken": null,
                        "name": {
                            "kind": 16637,
                            "text": "",
                            "flags": 64,
                            "start": 20,
                            "end": 20
                        },
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 20,
                            "end": 20
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 20,
                                "end": 20
                            },
                            "flags": 32,
                            "start": 20,
                            "end": 20
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 16,
                        "start": 11,
                        "end": 20
                    },
                    {
                        "kind": 159,
                        "tryKeyword": {
                            "kind": 37757027,
                            "flags": 0,
                            "start": 20,
                            "end": 24
                        },
                        "block": {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [],
                                "flags": 16,
                                "start": 24,
                                "end": 24
                            },
                            "flags": 16,
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
                                "flags": 16,
                                "start": 30,
                                "end": 30
                            },
                            "flags": 16,
                            "start": 30,
                            "end": 30
                        },
                        "flags": 16,
                        "start": 20,
                        "end": 30
                    },
                    {
                        "kind": 153,
                        "withKeyword": {
                            "kind": 37757029,
                            "flags": 0,
                            "start": 30,
                            "end": 35
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 35,
                            "end": 39
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 65584,
                                    "flags": 64,
                                    "start": 39,
                                    "end": 40
                                },
                                "operand": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 40,
                                    "end": 40
                                },
                                "flags": 32,
                                "start": 39,
                                "end": 40
                            },
                            "flags": 16,
                            "start": 39,
                            "end": 40
                        },
                        "flags": 16,
                        "start": 30,
                        "end": 40
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 40
            },
            "flags": 16,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "{[ =! class function try while with foo!",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Did you forgot a ']' to match the `[` token? - start: 2, end: 4
✖ Expected a `;` - start: 11, end: 20
✖ Binding identifier expected - start: 20, end: 24
✖ Unexpected token. - start: 20, end: 24
✖ Expected a ')' to match the '(' token here - start: 39, end: 40

```

