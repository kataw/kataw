# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/do-while/gen/do_triple
> :: test: do triple
> :: case: =! class function try while with foo!
## Options

`````js
{}
`````
## Input

`````js
do do do =! class function try while with foo! while while while
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
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "statement": {
                "kind": 169,
                "doKeyword": {
                    "kind": 4202580,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 5
                },
                "statement": {
                    "kind": 169,
                    "doKeyword": {
                        "kind": 4202580,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 8
                    },
                    "statement": {
                        "kind": 120,
                        "expression": {
                            "kind": 125,
                            "left": {
                                "kind": 16637,
                                "text": "",
                                "rawText": "",
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 8
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 10
                            },
                            "right": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 65584,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 11
                                },
                                "operand": {
                                    "kind": 189,
                                    "decorators": null,
                                    "classKeyword": {
                                        "kind": 37822544,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 11,
                                        "end": 17
                                    },
                                    "name": null,
                                    "typeParameters": null,
                                    "tail": {
                                        "kind": 277,
                                        "classHeritage": null,
                                        "body": {
                                            "kind": 303,
                                            "elements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 17,
                                            "end": 17
                                        },
                                        "flags": 17,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 17
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 11,
                                    "end": 17
                                },
                                "flags": 32,
                                "transformFlags": 1024,
                                "start": 10,
                                "end": 17
                            },
                            "flags": 0,
                            "transformFlags": 128,
                            "start": 8,
                            "end": 17
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 17
                    },
                    "whileKeyword": null,
                    "expression": {
                        "kind": 177,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 26
                        },
                        "asteriskToken": null,
                        "name": null,
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 26,
                            "end": 26
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 26,
                                "end": 26
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 26,
                            "end": 26
                        },
                        "returnType": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 26
                    },
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 26
                },
                "whileKeyword": null,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 26
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 2,
                "end": 26
            },
            "whileKeyword": null,
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 26,
                "end": 26
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 26
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 80,
                "transformFlags": 0,
                "start": 26,
                "end": 30
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 30,
                    "end": 30
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 30,
                "end": 30
            },
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 30,
                    "end": 30
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 30,
                "end": 30
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 26,
            "end": 30
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "transformFlags": 0,
                "start": 30,
                "end": 36
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 36,
                "end": 36
            },
            "statement": {
                "kind": 153,
                "withKeyword": {
                    "kind": 37757029,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 36,
                    "end": 41
                },
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 41,
                    "end": 45
                },
                "statement": {
                    "kind": 120,
                    "expression": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 65584,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 45,
                            "end": 46
                        },
                        "operand": {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 46,
                            "end": 46
                        },
                        "flags": 32,
                        "transformFlags": 1024,
                        "start": 45,
                        "end": 46
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 45,
                    "end": 46
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 36,
                "end": 46
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 30,
            "end": 46
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "transformFlags": 0,
                "start": 46,
                "end": 52
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 52,
                "end": 52
            },
            "statement": {
                "kind": 154,
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 52,
                    "end": 58
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 58,
                    "end": 58
                },
                "statement": {
                    "kind": 154,
                    "whileKeyword": {
                        "kind": 37757028,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 58,
                        "end": 64
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 64,
                        "end": 64
                    },
                    "statement": {
                        "kind": 120,
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 64,
                            "end": 64
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 64,
                        "end": 64
                    },
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 58,
                    "end": 64
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 52,
                "end": 64
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 46,
            "end": 64
        }
    ],
    "isModule": false,
    "source": "do do do =! class function try while with foo! while while while",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 64
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 8, end: 10
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 8, end: 10
✖ Missing an opening brace - '{ - start: 18, end: 26
✖ Missing an opening parentheses - '( - start: 27, end: 30
✖ Declaration or statement expected - start: 30, end: 36
✖ Missing an opening parentheses - '( - start: 37, end: 41
✖ Missing an opening parentheses - '( - start: 42, end: 45
✖ Declaration or statement expected - start: 45, end: 46
✖ Identifier expected - start: 46, end: 52
✖ Missing an opening parentheses - '( - start: 53, end: 58
✖ Missing an opening parentheses - '( - start: 59, end: 64

```

