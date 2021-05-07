# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: { triple
> :: case: =! class function try while with foo!
## Input

`````js
{ { { =! class function try while with foo!
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [
                                {
                                    "kind": 249,
                                    "block": {
                                        "kind": 124,
                                        "statements": [],
                                        "flags": 16,
                                        "start": 5,
                                        "end": 5
                                    },
                                    "flags": 16,
                                    "start": 3,
                                    "end": 7
                                },
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 126,
                                        "operandToken": {
                                            "kind": 65584,
                                            "flags": 64,
                                            "start": 7,
                                            "end": 8
                                        },
                                        "operand": {
                                            "kind": 189,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37822544,
                                                "flags": 0,
                                                "start": 8,
                                                "end": 14
                                            },
                                            "name": null,
                                            "typeParameters": null,
                                            "classHeritage": null,
                                            "members": {
                                                "kind": 277,
                                                "elements": [],
                                                "flags": 32,
                                                "start": 8,
                                                "end": 8
                                            },
                                            "flags": 32,
                                            "start": 8,
                                            "end": 14
                                        },
                                        "flags": 32,
                                        "start": 7,
                                        "end": 14
                                    },
                                    "flags": 16,
                                    "start": 7,
                                    "end": 14
                                },
                                {
                                    "kind": 176,
                                    "declareKeyword": null,
                                    "asyncKeyword": null,
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 0,
                                        "start": 14,
                                        "end": 23
                                    },
                                    "generatorToken": null,
                                    "name": {
                                        "kind": 16637,
                                        "text": "",
                                        "flags": 68,
                                        "start": 23,
                                        "end": 23
                                    },
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 32,
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
                                            "start": 23,
                                            "end": 23
                                        },
                                        "flags": 32,
                                        "start": 23,
                                        "end": 23
                                    },
                                    "typeParameters": null,
                                    "returnType": null,
                                    "flags": 16,
                                    "start": 14,
                                    "end": 23
                                },
                                {
                                    "kind": 159,
                                    "tryKeyword": {
                                        "kind": 37757027,
                                        "flags": 0,
                                        "start": 23,
                                        "end": 27
                                    },
                                    "block": {
                                        "kind": 249,
                                        "block": {
                                            "kind": 124,
                                            "statements": [],
                                            "flags": 16,
                                            "start": 27,
                                            "end": 27
                                        },
                                        "flags": 16,
                                        "start": 27,
                                        "end": 27
                                    },
                                    "catchClause": null,
                                    "finallyKeyword": null,
                                    "finallyBlock": {
                                        "kind": 249,
                                        "block": {
                                            "kind": 124,
                                            "statements": [],
                                            "flags": 16,
                                            "start": 33,
                                            "end": 33
                                        },
                                        "flags": 16,
                                        "start": 33,
                                        "end": 33
                                    },
                                    "flags": 16,
                                    "start": 23,
                                    "end": 33
                                },
                                {
                                    "kind": 153,
                                    "withKeyword": {
                                        "kind": 37757029,
                                        "flags": 0,
                                        "start": 33,
                                        "end": 38
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 38,
                                        "end": 42
                                    },
                                    "statement": {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 126,
                                            "operandToken": {
                                                "kind": 65584,
                                                "flags": 64,
                                                "start": 42,
                                                "end": 43
                                            },
                                            "operand": {
                                                "kind": 16637,
                                                "text": "",
                                                "flags": 68,
                                                "start": 43,
                                                "end": 43
                                            },
                                            "flags": 32,
                                            "start": 42,
                                            "end": 43
                                        },
                                        "flags": 16,
                                        "start": 42,
                                        "end": 43
                                    },
                                    "flags": 16,
                                    "start": 33,
                                    "end": 43
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 43
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 43
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 43
            },
            "flags": 16,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "{ { { =! class function try while with foo!",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 5, end: 7
✖ Declaration or statement expected. This follows a block of statements so if you intended to write a destructuring assignment you might need to wrap the whole assignment in parentheses - start: 7, end: 8
✖ Expected a `;` - start: 14, end: 23
✖ Binding identifier expected - start: 23, end: 27
✖ Unexpected token. - start: 23, end: 27
✖ Expected a ')' to match the '(' token here - start: 42, end: 43

```

