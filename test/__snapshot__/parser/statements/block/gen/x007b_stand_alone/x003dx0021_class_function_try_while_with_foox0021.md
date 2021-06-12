# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/statements/block/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/block/gen/x007b_stand_alone
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
                "start": 1,
                "end": 1
            },
            "flags": 16,
            "start": 0,
            "end": 3
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 64,
                    "start": 3,
                    "end": 4
                },
                "operand": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "start": 4,
                        "end": 10
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
                            "start": 10,
                            "end": 10
                        },
                        "flags": 10,
                        "start": 32,
                        "end": 10
                    },
                    "flags": 32,
                    "start": 4,
                    "end": 10
                },
                "flags": 32,
                "start": 3,
                "end": 10
            },
            "flags": 16,
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
                "start": 10,
                "end": 19
            },
            "generatorToken": null,
            "name": null,
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
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
                    "start": 19,
                    "end": 19
                },
                "flags": 32,
                "start": 19,
                "end": 19
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 10,
            "end": 19
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 80,
                "start": 19,
                "end": 23
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 23,
                    "end": 23
                },
                "flags": 16,
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
                    "start": 23,
                    "end": 23
                },
                "flags": 16,
                "start": 23,
                "end": 23
            },
            "flags": 16,
            "start": 19,
            "end": 23
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "start": 23,
                "end": 29
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 29,
                "end": 29
            },
            "statement": {
                "kind": 153,
                "withKeyword": {
                    "kind": 37757029,
                    "flags": 80,
                    "start": 29,
                    "end": 34
                },
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 34,
                    "end": 38
                },
                "statement": {
                    "kind": 120,
                    "expression": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 65584,
                            "flags": 64,
                            "start": 38,
                            "end": 39
                        },
                        "operand": {
                            "kind": 16637,
                            "text": "",
                            "flags": 64,
                            "start": 39,
                            "end": 39
                        },
                        "flags": 32,
                        "start": 38,
                        "end": 39
                    },
                    "flags": 16,
                    "start": 38,
                    "end": 39
                },
                "flags": 80,
                "start": 29,
                "end": 39
            },
            "flags": 80,
            "start": 23,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "{ =! class function try while with foo!",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 1, end: 3
✖ Declaration or statement expected. This follows a block of statements so if you intended to write a destructuring assignment you might need to wrap the whole assignment in parentheses - start: 3, end: 4
✖ Missing an opening brace - '{ - start: 10, end: 19
✖ Binding identifier expected - start: 19, end: 23
✖ Missing an opening parentheses - '( - start: 19, end: 23
✖ Declaration or statement expected - start: 23, end: 29
✖ Missing an opening parentheses - '( - start: 29, end: 34
✖ Missing an opening parentheses - '( - start: 34, end: 38
✖ Declaration or statement expected - start: 38, end: 39

```

