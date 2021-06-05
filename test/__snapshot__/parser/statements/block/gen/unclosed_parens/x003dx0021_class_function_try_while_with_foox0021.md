# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-05
- From: kataw8/test\__snapshot__/parser/statements/block/autogen.md
- Path: kataw8/test\__snapshot__\parser\statements\block\gen\unclosed_parens
> :: test: unclosed parens
> :: case: =! class function try while with foo!
## Input

`````js
{( =! class function try while with foo!
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
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
                                    "flags": 64,
                                    "start": 2,
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
                                            "flags": 64,
                                            "start": 5,
                                            "end": 11
                                        },
                                        "name": null,
                                        "typeParameters": null,
                                        "tail": {
                                            "kind": 277,
                                            "classHeritage": null,
                                            "body": {
                                                "kind": 262,
                                                "elements": [],
                                                "flags": 32,
                                                "start": 11,
                                                "end": 11
                                            },
                                            "flags": 11,
                                            "start": 32,
                                            "end": 11
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
                                "start": 2,
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
                            "flags": 64,
                            "start": 11,
                            "end": 20
                        },
                        "generatorToken": null,
                        "name": null,
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
                            "flags": 80,
                            "start": 20,
                            "end": 24
                        },
                        "block": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
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
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 24,
                                "end": 24
                            },
                            "flags": 16,
                            "start": 24,
                            "end": 24
                        },
                        "flags": 16,
                        "start": 20,
                        "end": 24
                    },
                    {
                        "kind": 154,
                        "whileKeyword": {
                            "kind": 37757028,
                            "flags": 80,
                            "start": 24,
                            "end": 30
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "flags": 64,
                            "start": 30,
                            "end": 30
                        },
                        "statement": {
                            "kind": 153,
                            "withKeyword": {
                                "kind": 37757029,
                                "flags": 80,
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
                        },
                        "flags": 16,
                        "start": 24,
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
    "source": "{( =! class function try while with foo!",
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
✖ Identifier expected - start: 2, end: 4
✖ Missing an opening brace - '{ - start: 11, end: 20
✖ Binding identifier expected - start: 20, end: 24
✖ Missing an opening parentheses - '( - start: 20, end: 24
✖ Declaration or statement expected - start: 24, end: 30
✖ Missing an opening parentheses - '( - start: 30, end: 35
✖ Missing an opening parentheses - '( - start: 35, end: 39
✖ Declaration or statement expected - start: 39, end: 40

```

