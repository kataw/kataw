# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/with_unclosed_array
> :: test: with unclosed array
> :: case: =! class function try while with foo!
## Options

`````js
{}
`````
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
            "kind": 124,
            "block": {
                "kind": 249,
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
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 2
                                },
                                "flags": 32,
                                "transformFlags": 8,
                                "start": 1,
                                "end": 2
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 4
                            },
                            "right": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 65584,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 4,
                                    "end": 5
                                },
                                "operand": {
                                    "kind": 189,
                                    "decorators": null,
                                    "classKeyword": {
                                        "kind": 37822544,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 11
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
                                            "start": 11,
                                            "end": 11
                                        },
                                        "flags": 11,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 11
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 5,
                                    "end": 11
                                },
                                "flags": 32,
                                "transformFlags": 1024,
                                "start": 4,
                                "end": 11
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 1,
                            "end": 11
                        },
                        "flags": 16,
                        "transformFlags": 4096,
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
                            "transformFlags": 0,
                            "start": 11,
                            "end": 20
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
                                "transformFlags": 0,
                                "start": 20,
                                "end": 20
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 20
                        },
                        "returnType": null,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 20
                    },
                    {
                        "kind": 159,
                        "tryKeyword": {
                            "kind": 37757027,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 24
                        },
                        "block": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 24
                            },
                            "flags": 16,
                            "transformFlags": 0,
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
                                "transformFlags": 0,
                                "start": 24,
                                "end": 24
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 24,
                            "end": 24
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 24
                    },
                    {
                        "kind": 154,
                        "whileKeyword": {
                            "kind": 37757028,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 24,
                            "end": 30
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 30
                        },
                        "statement": {
                            "kind": 153,
                            "withKeyword": {
                                "kind": 37757029,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 35
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 39
                            },
                            "statement": {
                                "kind": 120,
                                "expression": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 65584,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 39,
                                        "end": 40
                                    },
                                    "operand": {
                                        "kind": 16637,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 40,
                                        "end": 40
                                    },
                                    "flags": 32,
                                    "transformFlags": 1024,
                                    "start": 39,
                                    "end": 40
                                },
                                "flags": 16,
                                "transformFlags": 4096,
                                "start": 39,
                                "end": 40
                            },
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 40
                        },
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 24,
                        "end": 40
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 40
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "{[ =! class function try while with foo!",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Did you forgot a ']' to match the `[` token? - start: 3, end: 4
✖ Missing an opening brace - '{ - start: 12, end: 20
✖ Binding identifier expected - start: 20, end: 24
✖ Missing an opening parentheses - '( - start: 21, end: 24
✖ Declaration or statement expected - start: 24, end: 30
✖ Missing an opening parentheses - '( - start: 31, end: 35
✖ Missing an opening parentheses - '( - start: 36, end: 39
✖ Declaration or statement expected - start: 39, end: 40

```

