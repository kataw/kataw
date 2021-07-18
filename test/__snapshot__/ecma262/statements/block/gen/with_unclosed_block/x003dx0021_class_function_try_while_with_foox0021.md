# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/with_unclosed_block
> :: test: with unclosed block
> :: case: =! class function try while with foo!
## Options

`````js
{}
`````
## Input

`````js
{ {} finally(x) { =! class function try while with foo!
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
                            "statements": [],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 3
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 4
                    },
                    {
                        "kind": 159,
                        "tryKeyword": null,
                        "block": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 4,
                                "end": 4
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 4
                        },
                        "catchClause": null,
                        "finallyKeyword": {
                            "kind": 37757016,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 12
                        },
                        "finallyBlock": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 12
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 12
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 4,
                        "end": 12
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 14
                            },
                            "flags": 12,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 15
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 12,
                        "end": 15
                    },
                    {
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 17
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 19
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 65584,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 20
                            },
                            "operand": {
                                "kind": 189,
                                "decorators": null,
                                "classKeyword": {
                                    "kind": 37822544,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 26
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
                                        "start": 26,
                                        "end": 26
                                    },
                                    "flags": 26,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 26
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 26
                            },
                            "flags": 32,
                            "transformFlags": 16384,
                            "start": 19,
                            "end": 26
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 19,
                        "end": 26
                    },
                    {
                        "kind": 176,
                        "declareKeyword": null,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 26,
                            "end": 35
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
                            "start": 35,
                            "end": 35
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 35
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 35,
                            "end": 35
                        },
                        "returnType": null,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 26,
                        "end": 35
                    },
                    {
                        "kind": 159,
                        "tryKeyword": {
                            "kind": 37757027,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 35,
                            "end": 39
                        },
                        "block": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 39,
                                "end": 39
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 39,
                            "end": 39
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
                                "start": 39,
                                "end": 39
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 39,
                            "end": 39
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 35,
                        "end": 39
                    },
                    {
                        "kind": 154,
                        "whileKeyword": {
                            "kind": 37757028,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 39,
                            "end": 45
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 45,
                            "end": 45
                        },
                        "statement": {
                            "kind": 153,
                            "withKeyword": {
                                "kind": 37757029,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 45,
                                "end": 50
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 50,
                                "end": 54
                            },
                            "statement": {
                                "kind": 120,
                                "expression": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 65584,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 54,
                                        "end": 55
                                    },
                                    "operand": {
                                        "kind": 16637,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 55,
                                        "end": 55
                                    },
                                    "flags": 32,
                                    "transformFlags": 16384,
                                    "start": 54,
                                    "end": 55
                                },
                                "flags": 16,
                                "transformFlags": 4096,
                                "start": 54,
                                "end": 55
                            },
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 45,
                            "end": 55
                        },
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 39,
                        "end": 55
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 55
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 55
        }
    ],
    "isModule": false,
    "source": "{ {} finally(x) { =! class function try while with foo!",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 55
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'try' expected - start: 4, end: 12
✖ '{' is not allowed here. Did you mean ';'? - start: 15, end: 17
✖ The parser expected to find a '}' to match the '{' token here - start: 18, end: 19
✖ Declaration or statement expected. This follows a block of statements so if you intended to write a destructuring assignment you might need to wrap the whole assignment in parentheses - start: 19, end: 20
✖ Missing an opening brace - '{ - start: 27, end: 35
✖ Binding identifier expected - start: 35, end: 39
✖ Missing an opening parentheses - '( - start: 36, end: 39
✖ 'catch' expected - start: 39, end: 45
✖ Missing an opening parentheses - '( - start: 46, end: 50
✖ Missing an opening parentheses - '( - start: 51, end: 54
✖ Declaration or statement expected - start: 54, end: 55

```

