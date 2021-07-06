# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/do-while/gen/do_parens
> :: test: do parens
> :: case: =! class function try while with foo!
## Options

`````js
{}
`````
## Input

`````js
do( =! class function try while with foo! while
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
                "kind": 120,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 125,
                        "left": {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 3
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "right": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 65584,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 6
                            },
                            "operand": {
                                "kind": 189,
                                "decorators": null,
                                "classKeyword": {
                                    "kind": 37822544,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 6,
                                    "end": 12
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
                                        "start": 12,
                                        "end": 12
                                    },
                                    "flags": 12,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 12
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 12
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 12
                        },
                        "flags": 0,
                        "transformFlags": 128,
                        "start": 3,
                        "end": 12
                    },
                    "flags": 2,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 12
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 2,
                "end": 12
            },
            "whileKeyword": null,
            "expression": {
                "kind": 177,
                "asyncKeyword": null,
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 21
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
                    "start": 21,
                    "end": 21
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 21,
                        "end": 21
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 21
                },
                "returnType": null,
                "flags": 32,
                "transformFlags": 0,
                "start": 12,
                "end": 21
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 21
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 80,
                "transformFlags": 0,
                "start": 21,
                "end": 25
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 25
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 25,
                "end": 25
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
                    "start": 25,
                    "end": 25
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 25,
                "end": 25
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 21,
            "end": 25
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "transformFlags": 0,
                "start": 25,
                "end": 31
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 31,
                "end": 31
            },
            "statement": {
                "kind": 153,
                "withKeyword": {
                    "kind": 37757029,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 36
                },
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 36,
                    "end": 40
                },
                "statement": {
                    "kind": 120,
                    "expression": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 65584,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 40,
                            "end": 41
                        },
                        "operand": {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 41,
                            "end": 41
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 40,
                        "end": 41
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 40,
                    "end": 41
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 31,
                "end": 41
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 25,
            "end": 41
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "transformFlags": 0,
                "start": 41,
                "end": 47
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 47,
                "end": 47
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 47,
                    "end": 47
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 47,
                "end": 47
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 41,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "do( =! class function try while with foo! while",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 3, end: 5
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 3, end: 5
✖ Missing an opening brace - '{ - start: 13, end: 21
✖ Missing an opening parentheses - '( - start: 22, end: 25
✖ Declaration or statement expected - start: 25, end: 31
✖ Missing an opening parentheses - '( - start: 32, end: 36
✖ Missing an opening parentheses - '( - start: 37, end: 40
✖ Declaration or statement expected - start: 40, end: 41
✖ Identifier expected - start: 41, end: 47

```

