# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/x007b_triple
> :: test: { triple
> :: case: =! class function try while with foo!
## Options

`````js
{}
`````
## Input

`````js
{ { { =! class function try while with foo!
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
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [
                                {
                                    "kind": 124,
                                    "block": {
                                        "kind": 249,
                                        "statements": [],
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 5
                                    },
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 3,
                                    "end": 7
                                },
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 126,
                                        "operandToken": {
                                            "kind": 65584,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 7,
                                            "end": 8
                                        },
                                        "operand": {
                                            "kind": 189,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37822544,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 8,
                                                "end": 14
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
                                                    "start": 14,
                                                    "end": 14
                                                },
                                                "flags": 14,
                                                "transformFlags": 0,
                                                "start": 32,
                                                "end": 14
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 8,
                                            "end": 14
                                        },
                                        "flags": 32,
                                        "transformFlags": 16384,
                                        "start": 7,
                                        "end": 14
                                    },
                                    "flags": 16,
                                    "transformFlags": 4096,
                                    "start": 7,
                                    "end": 14
                                },
                                {
                                    "kind": 176,
                                    "declareKeyword": null,
                                    "asyncKeyword": null,
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 14,
                                        "end": 23
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
                                        "start": 23,
                                        "end": 23
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 23
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 23,
                                        "end": 23
                                    },
                                    "returnType": null,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 23
                                },
                                {
                                    "kind": 159,
                                    "tryKeyword": {
                                        "kind": 37757027,
                                        "flags": 80,
                                        "transformFlags": 0,
                                        "start": 23,
                                        "end": 27
                                    },
                                    "block": {
                                        "kind": 124,
                                        "block": {
                                            "kind": 249,
                                            "statements": [],
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 27,
                                            "end": 27
                                        },
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 27,
                                        "end": 27
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
                                            "start": 27,
                                            "end": 27
                                        },
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 27,
                                        "end": 27
                                    },
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 23,
                                    "end": 27
                                },
                                {
                                    "kind": 154,
                                    "whileKeyword": {
                                        "kind": 37757028,
                                        "flags": 80,
                                        "transformFlags": 0,
                                        "start": 27,
                                        "end": 33
                                    },
                                    "expression": {
                                        "kind": 16637,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 33,
                                        "end": 33
                                    },
                                    "statement": {
                                        "kind": 153,
                                        "withKeyword": {
                                            "kind": 37757029,
                                            "flags": 80,
                                            "transformFlags": 0,
                                            "start": 33,
                                            "end": 38
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 38,
                                            "end": 42
                                        },
                                        "statement": {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 126,
                                                "operandToken": {
                                                    "kind": 65584,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 42,
                                                    "end": 43
                                                },
                                                "operand": {
                                                    "kind": 16637,
                                                    "text": "",
                                                    "rawText": "",
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 43,
                                                    "end": 43
                                                },
                                                "flags": 32,
                                                "transformFlags": 16384,
                                                "start": 42,
                                                "end": 43
                                            },
                                            "flags": 16,
                                            "transformFlags": 4096,
                                            "start": 42,
                                            "end": 43
                                        },
                                        "flags": 80,
                                        "transformFlags": 0,
                                        "start": 33,
                                        "end": 43
                                    },
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 27,
                                    "end": 43
                                }
                            ],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 43
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 43
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 43
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "{ { { =! class function try while with foo!",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 6, end: 7
✖ Declaration or statement expected. This follows a block of statements so if you intended to write a destructuring assignment you might need to wrap the whole assignment in parentheses - start: 7, end: 8
✖ Missing an opening brace - '{ - start: 15, end: 23
✖ Binding identifier expected - start: 23, end: 27
✖ Missing an opening parentheses - '( - start: 24, end: 27
✖ 'catch' expected - start: 27, end: 33
✖ Missing an opening parentheses - '( - start: 34, end: 38
✖ Missing an opening parentheses - '( - start: 39, end: 42
✖ Declaration or statement expected - start: 42, end: 43

```

