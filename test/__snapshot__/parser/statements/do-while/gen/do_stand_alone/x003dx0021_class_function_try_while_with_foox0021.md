# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/statements/do-while/autogen.md
- Path: kataw8/test\__snapshot__\parser\statements\do-while\gen\do_stand_alone
> :: test: do stand alone
> :: case: =! class function try while with foo!
## Input

`````js
do =! class function try while with foo!
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 80,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 177,
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
                "flags": 32,
                "start": 11,
                "end": 20
            },
            "whileKeyword": null,
            "statement": {
                "kind": 120,
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
                "flags": 16,
                "start": 2,
                "end": 11
            },
            "flags": 16,
            "start": 0,
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
    "isModule": false,
    "source": "do =! class function try while with foo!",
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
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 2, end: 4
✖ Missing an opening brace - '{ - start: 11, end: 20
✖ Missing an opening parentheses - '( - start: 20, end: 24
✖ Declaration or statement expected - start: 24, end: 30
✖ Missing an opening parentheses - '( - start: 30, end: 35
✖ Missing an opening parentheses - '( - start: 35, end: 39
✖ Declaration or statement expected - start: 39, end: 40

```

