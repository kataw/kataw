# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: y
> :: test: do with invalid array
> :: case: =! class function try while with foo!
## Input

`````js
do while [catch] =! class function try while with foo!
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
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 15,
                "end": 15
            },
            "whileKeyword": null,
            "statement": {
                "kind": 154,
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 0,
                    "start": 2,
                    "end": 8
                },
                "expression": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 10,
                        "end": 10
                    },
                    "flags": 32,
                    "start": 8,
                    "end": 10
                },
                "statement": {
                    "kind": 159,
                    "tryKeyword": null,
                    "block": {
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [],
                            "flags": 16,
                            "start": 10,
                            "end": 10
                        },
                        "flags": 16,
                        "start": 10,
                        "end": 10
                    },
                    "catchClause": {
                        "kind": 173,
                        "catchKeyword": {
                            "kind": 4202575,
                            "flags": 0,
                            "start": 10,
                            "end": 15
                        },
                        "catchParameter": null,
                        "initializer": null,
                        "block": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 15,
                                "end": 15
                            },
                            "flags": 16,
                            "start": 15,
                            "end": 15
                        },
                        "flags": 16,
                        "start": 10,
                        "end": 15
                    },
                    "finallyKeyword": null,
                    "finallyBlock": null,
                    "flags": 16,
                    "start": 10,
                    "end": 15
                },
                "flags": 16,
                "start": 2,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 64,
                    "start": 18,
                    "end": 19
                },
                "operand": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 0,
                        "start": 19,
                        "end": 25
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
                            "start": 25,
                            "end": 25
                        },
                        "flags": 25,
                        "start": 32,
                        "end": 25
                    },
                    "flags": 32,
                    "start": 19,
                    "end": 25
                },
                "flags": 32,
                "start": 18,
                "end": 25
            },
            "flags": 16,
            "start": 18,
            "end": 25
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 25,
                "end": 34
            },
            "generatorToken": null,
            "name": null,
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 34,
                "end": 34
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 34,
                    "end": 34
                },
                "flags": 32,
                "start": 34,
                "end": 34
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 25,
            "end": 34
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 0,
                "start": 34,
                "end": 38
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 38,
                    "end": 38
                },
                "flags": 16,
                "start": 38,
                "end": 38
            },
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 38,
                    "end": 38
                },
                "flags": 16,
                "start": 38,
                "end": 38
            },
            "flags": 16,
            "start": 34,
            "end": 38
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
                "start": 38,
                "end": 44
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 44,
                "end": 44
            },
            "statement": {
                "kind": 153,
                "withKeyword": {
                    "kind": 37757029,
                    "flags": 0,
                    "start": 44,
                    "end": 49
                },
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 49,
                    "end": 53
                },
                "statement": {
                    "kind": 120,
                    "expression": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 65584,
                            "flags": 64,
                            "start": 53,
                            "end": 54
                        },
                        "operand": {
                            "kind": 16637,
                            "text": "",
                            "flags": 64,
                            "start": 54,
                            "end": 54
                        },
                        "flags": 32,
                        "start": 53,
                        "end": 54
                    },
                    "flags": 16,
                    "start": 53,
                    "end": 54
                },
                "flags": 16,
                "start": 44,
                "end": 54
            },
            "flags": 16,
            "start": 38,
            "end": 54
        }
    ],
    "isModule": false,
    "source": "do while [catch] =! class function try while with foo!",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening parentheses - '( - start: 8, end: 10
✖ Did you forgot a ']' to match the `[` token? - start: 10, end: 15
✖ 'try' expected - start: 10, end: 15
✖ Missing an opening parentheses - '( - start: 15, end: 16
✖ Declaration or statement expected - start: 16, end: 18
✖ Missing an opening brace - '{ - start: 25, end: 34
✖ Binding identifier expected - start: 34, end: 38
✖ Missing an opening parentheses - '( - start: 34, end: 38
✖ Expression expected - start: 34, end: 38
✖ Missing an opening parentheses - '( - start: 44, end: 49
✖ Missing an opening parentheses - '( - start: 49, end: 53
✖ Declaration or statement expected - start: 53, end: 54

```

