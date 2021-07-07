# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/x007b_stand_alone
> :: test: { stand alone
> :: case: =! class function try while with foo!
## Options

`````js
{}
`````
## Input

`````js
{ =! class function try while with foo!
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
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 1
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 3
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 4
                },
                "operand": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 4,
                        "end": 10
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
                            "start": 10,
                            "end": 10
                        },
                        "flags": 10,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 10
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 10
                },
                "flags": 32,
                "transformFlags": 1024,
                "start": 3,
                "end": 10
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 3,
            "end": 10
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 10,
                "end": 19
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
                "start": 19,
                "end": 19
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 19
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 19,
                "end": 19
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 10,
            "end": 19
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 80,
                "transformFlags": 0,
                "start": 19,
                "end": 23
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 23
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 23,
                "end": 23
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
                    "start": 23,
                    "end": 23
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 23,
                "end": 23
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 19,
            "end": 23
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "transformFlags": 0,
                "start": 23,
                "end": 29
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 29,
                "end": 29
            },
            "statement": {
                "kind": 153,
                "withKeyword": {
                    "kind": 37757029,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 29,
                    "end": 34
                },
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 38
                },
                "statement": {
                    "kind": 120,
                    "expression": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 65584,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 38,
                            "end": 39
                        },
                        "operand": {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 39,
                            "end": 39
                        },
                        "flags": 32,
                        "transformFlags": 1024,
                        "start": 38,
                        "end": 39
                    },
                    "flags": 16,
                    "transformFlags": 4096,
                    "start": 38,
                    "end": 39
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 29,
                "end": 39
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 23,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "{ =! class function try while with foo!",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 2, end: 3
✖ Declaration or statement expected. This follows a block of statements so if you intended to write a destructuring assignment you might need to wrap the whole assignment in parentheses - start: 3, end: 4
✖ Missing an opening brace - '{ - start: 11, end: 19
✖ Binding identifier expected - start: 19, end: 23
✖ Missing an opening parentheses - '( - start: 20, end: 23
✖ Declaration or statement expected - start: 23, end: 29
✖ Missing an opening parentheses - '( - start: 30, end: 34
✖ Missing an opening parentheses - '( - start: 35, end: 38
✖ Declaration or statement expected - start: 38, end: 39

```

